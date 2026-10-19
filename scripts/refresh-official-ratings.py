#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""おそうじ本舗の店舗ページに出ている「レビュー評価」と件数を取り直す（毎月1日に実行）。

2026-10-16 MediaXAI「（おそうじ本舗公式サイト集計・2026-08-15時点）この「時点」を月単位で最新化できない？」

- 対象は providers.json の brand=honpo 全店（評価の無かった店にも新しく付いていることがある）。
- 店舗ページ見出し横の .c-review__value（例 4.81）と、その近くの「N件」を読む。
- ページは取れたのに評価欄が無い店 → 評価を消す（公式に無いものは載せない）。
- 取得に失敗した店 → 前回の値と前回の rating_checked_at のまま（日付だけ進めない）。
- 住所などの verified_at は触らない。評価の「時点」は rating_checked_at に持つ。

  python3 scripts/refresh-official-ratings.py            # 取得して providers.json を更新
  python3 scripts/refresh-official-ratings.py --dry-run  # 差分だけ表示
  python3 scripts/refresh-official-ratings.py --cache-date 2026-10-16  # その日の取得キャッシュだけで再計算（通信しない）

2026-10-19: 評価が整数（例「5」）の店を読めていなかった（小数点必須の正規表現）→ 177店で評価が落ちていた。
評価点が無く件数だけ出ている店（c-review__count のみ）は件数だけを持つ（rating_official は持たない）。
"""
import json
import re
import sys
import time
import urllib.request
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "app/data/providers.json"
CACHE_DATE = sys.argv[sys.argv.index("--cache-date") + 1] if "--cache-date" in sys.argv else None
CACHE = Path("/tmp") / f"honpo-ratings-{CACHE_DATE or date.today().isoformat()}"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0 Safari/537.36")
VALUE = re.compile(r'class="c-review__value">\s*([0-9](?:\.[0-9]+)?)\s*<')
COUNT = re.compile(r'([0-9][0-9,]*)\s*件')
COUNT_ONLY = re.compile(r'class="c-review__count">\s*([0-9][0-9,]*)\s*件')


def fetch(url: str) -> str | None:
    CACHE.mkdir(exist_ok=True)
    key = CACHE / (re.sub(r"[^0-9A-Za-z]+", "_", url) + ".html")
    if key.exists():
        return key.read_text(encoding="utf-8")
    if CACHE_DATE:  # キャッシュ指定時は通信しない（無い店は失敗扱い＝前回値のまま）
        return None
    for _ in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "ja"})
            with urllib.request.urlopen(req, timeout=30) as r:
                html = r.read().decode("utf-8", "replace")
            time.sleep(1.2)
            if "c-heading-level-1" not in html:  # 店舗ページの形でなければ失敗扱い
                return None
            key.write_text(html, encoding="utf-8")
            return html
        except Exception:
            time.sleep(5)
    return None


def parse_count_only(html: str) -> int | None:
    c = COUNT_ONLY.search(html)
    return int(c.group(1).replace(",", "")) if c else None


def parse(html: str) -> tuple[float, int | None] | None:
    m = VALUE.search(html)
    if not m:
        return None
    block = html[m.end(): m.end() + 2500]
    c = COUNT.search(re.sub(r"<[^>]+>", " ", block))
    return float(m.group(1)), (int(c.group(1).replace(",", "")) if c else None)


def main() -> None:
    dry = "--dry-run" in sys.argv
    today = CACHE_DATE or date.today().isoformat()
    stores = json.loads(DATA.read_text(encoding="utf-8"))
    honpo = [p for p in stores if p.get("brand") == "honpo"]
    stat = {"updated": 0, "same": 0, "added": 0, "removed": 0, "failed": 0}
    for i, p in enumerate(honpo, 1):
        html = fetch(p["source_url"])
        if html is None:
            stat["failed"] += 1
            continue
        got = parse(html)
        had = isinstance(p.get("rating_official"), (int, float))
        if got is None:
            if had:
                stat["removed"] += 1
            p.pop("rating_official", None)
            n = parse_count_only(html)
            if n is not None:
                p["review_count_official"] = n
            else:
                p.pop("review_count_official", None)
            p["rating_checked_at"] = today
            continue
        v, n = got
        if not had:
            stat["added"] += 1
        elif p["rating_official"] == v and p.get("review_count_official") == n:
            stat["same"] += 1
        else:
            stat["updated"] += 1
        p["rating_official"] = v
        if n is not None:
            p["review_count_official"] = n
        else:
            p.pop("review_count_official", None)
        p["rating_checked_at"] = today
        if i % 100 == 0:
            print(f"  {i}/{len(honpo)} {stat}", flush=True)
    rated = sum(1 for p in honpo if isinstance(p.get("rating_official"), (int, float)))
    print(f"おそうじ本舗 {len(honpo)}店: {stat} → 評価あり {rated}店")
    if not dry:
        DATA.write_text(json.dumps(stores, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        print(f"書き出し → {DATA}")


if __name__ == "__main__":
    main()
