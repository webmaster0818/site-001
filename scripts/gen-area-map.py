#!/usr/bin/env python3
"""areaIndexData.ts(AREA_INDEX/PREF_PAGES) → app/data/areaMap.json を決定的に生成。

AreaProvidersLead が area slug → 店舗抽出条件(住所マッチ)・親子リンクを引くための辞書。
実行: python3 scripts/gen-area-map.py  (app/areas/ のディレクトリと1対1で突合し、差分があれば異常終了)
"""
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "app/components/areaIndexData.ts")
OUT = os.path.join(ROOT, "app/data/areaMap.json")
PROVIDERS = os.path.join(ROOT, "app/data/providers.json")


def load_index():
    lines = open(SRC, encoding="utf-8").read().split("\n")
    s = next(i for i, l in enumerate(lines) if l.startswith("export const AREA_INDEX"))
    e = next(i for i, l in enumerate(lines) if l.startswith("export const AREA_TOTAL"))
    p = next(i for i, l in enumerate(lines) if l.startswith("export const PREF_PAGES"))
    body = "\n".join(lines[s:e]).replace("export const AREA_INDEX: PrefGroup[]", "const AREA_INDEX")
    body2 = "\n".join(lines[p:]).replace("export const PREF_PAGES: { slug: string; name: string }[]", "const PREF_PAGES")
    body2 = body2.split("\nexport ")[0]
    js = body + "\n" + body2 + "\nconsole.log(JSON.stringify({AREA_INDEX,PREF_PAGES}));"
    tmp = os.path.join(ROOT, ".area-index.tmp.js")
    open(tmp, "w", encoding="utf-8").write(js)
    try:
        return json.loads(subprocess.check_output(["node", tmp]))
    finally:
        os.remove(tmp)


def main():
    d = load_index()
    pref_slug = {p["name"]: p["slug"] for p in d["PREF_PAGES"]}
    providers = json.load(open(PROVIDERS, encoding="utf-8"))
    entries = {}

    for pg in d["AREA_INDEX"]:
        pref = pg["pref"]
        all_in_pref = []
        for cg in pg["cities"]:
            for a in cg["areas"]:
                all_in_pref.append({"slug": a["slug"], "name": a["name"], "city": cg["city"], "prefix": cg["prefix"]})
        for cg in pg["cities"]:
            prefix = cg["prefix"]
            group = cg["areas"]
            parent = next((a for a in group if a["name"] == prefix), None)
            for a in group:
                name, slug = a["name"], a["slug"]
                if name == pref:
                    kind, label, match = "pref", pref, []
                elif prefix and name.endswith("区") and not name.startswith(prefix):
                    # 東京23区(prefix=都道府県名)は表示ラベルを区名のみに、住所照合は都道府県名付きで行う
                    kind, label, match = "ward", (name if prefix == pref else prefix + name), [prefix + name]
                else:
                    kind, label, match = "city", name, [name]
                # 対応エリア(charge_region)照合語(公式表記は 東京23区="中野区" / 政令市="大阪市港区" でlabelと一致)
                area_terms = [label]
                children = []
                if kind == "city" and parent and parent["slug"] == slug:
                    children = [{"slug": x["slug"], "name": prefix + x["name"] if x["name"].endswith("区") else x["name"]}
                                for x in group if x["slug"] != slug]
                if kind == "pref":
                    children = [{"slug": x["slug"], "name": (x["prefix"] + x["name"]) if (x["name"].endswith("区") and x["prefix"] and x["prefix"] != pref and not x["name"].startswith(x["prefix"])) else x["name"]}
                                for x in all_in_pref if x["slug"] != slug]
                parent_link = None
                if kind == "ward" and parent and parent["slug"] != slug:
                    parent_link = {"slug": parent["slug"], "name": parent["name"]}
                entries[slug] = {
                    "slug": slug, "kind": kind, "label": label, "pref": pref, "prefSlug": pref_slug.get(pref),
                    "match": match, "areaTerms": area_terms, "parent": parent_link, "children": children,
                }

    # 静的ディレクトリの無い都道府県([pref]動的ルート)も pref エントリを持たせる
    for p in d["PREF_PAGES"]:
        if p["slug"] not in entries:
            entries[p["slug"]] = {"slug": p["slug"], "kind": "pref", "label": p["name"], "pref": p["name"],
                                  "prefSlug": p["slug"], "match": [], "areaTerms": [p["name"]], "parent": None, "children": []}

    # 突合: app/areas/ の実在ディレクトリ
    dirs = {x for x in os.listdir(os.path.join(ROOT, "app/areas")) if os.path.isdir(os.path.join(ROOT, "app/areas", x)) and x != "[pref]"}
    static_only = dirs - set(entries)
    if static_only:
        print("ERROR: areaMap未定義のディレクトリ:", sorted(static_only)); sys.exit(1)

    # 店舗0件の警告(フォールバック表示になる)
    zero = []
    for e in entries.values():
        if e["kind"] == "pref":
            n = sum(1 for pv in providers if pv["pref_ja"] == e["pref"])
        else:
            n = sum(1 for pv in providers if pv["pref_ja"] == e["pref"] and any(m in pv["address"] for m in e["match"]))
        e["count"] = n
        if n == 0:
            zero.append(e["slug"])
    json.dump(entries, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"entries={len(entries)} dirs={len(dirs)} zero={zero}")


if __name__ == "__main__":
    main()
