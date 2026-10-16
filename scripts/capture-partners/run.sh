#!/bin/bash
# 業者枠の公式サイトキャプチャを撮り直す（2026-10-16 MediaXAI「月1回撮り直す運用」）。
#   bash scripts/capture-partners/run.sh            # 全13社
#   bash scripts/capture-partners/run.sh kajitaku   # 1社だけ
# 撮影元URLは app/data/partner-captures.json。撮ったら必ず画像を目で確認（ブロック画面・別会社・ポップアップ）してから push する。
# おそうじ本舗はセールのポップアップが出るので cap-click.mjs（閉じるボタンの位置をクリック）で撮る。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"; W=/tmp/capture-partners; mkdir -p "$W/png"
python3 -c "import json;print(json.dumps([[d['slug'],d['name'],d['url']] for d in json.load(open('$ROOT/app/data/partner-captures.json'))],ensure_ascii=False))" > "$W/items.json"
node "$(dirname "$0")/cap.mjs" "$W" "${1:-}"
python3 - "$ROOT" "$W" <<'PY'
import json,sys,datetime
from pathlib import Path
from PIL import Image
root,w=Path(sys.argv[1]),Path(sys.argv[2]); today=datetime.date.today().isoformat()
caps=json.load(open(root/'app/data/partner-captures.json'))
for c in caps:
    png=w/'png'/f"{c['slug']}.png"
    if not png.exists() or png.stat().st_mtime < datetime.datetime.now().timestamp()-3600: continue
    out=root/'public/images/partners'/f"{c['slug']}.webp"
    Image.open(png).convert('RGB').resize((1280,800),Image.LANCZOS).save(out,'WEBP',quality=82)
    kb=out.stat().st_size//1024
    print(('⚠️ 小さすぎる（ブロック画面の疑い） ' if kb<30 else 'ok ')+c['slug'],kb,'KB')
    c['captured_at']=today
json.dump(caps,open(root/'app/data/partner-captures.json','w'),ensure_ascii=False,indent=1)
cp=root/'public/images/partners/sources.json'; json.dump(caps,open(cp,'w'),ensure_ascii=False,indent=1)
PY
