#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""エリアページ量産ジェネレータ（chiba-chuo テンプレ流用）。
構造トークン（区/市/県/slug/リンク/サブエリア）を置換し、地理コメントは市ごとに正確化。"""
import re, unicodedata, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AREAS = ROOT / "app" / "areas"
TPL = (AREAS / "chiba-chuo" / "page.tsx").read_text(encoding="utf-8")

# テンプレ固有の差し替え対象（chiba-chuo）
TPL_GEO_BLOCK = """            <h3 className="text-2xl font-bold mb-4 mt-8">東京湾沿い・臨海部、塩害・潮風対策重要</h3>
            <p className="text-lg mb-4">
              千葉市は東京湾に面する臨海部があり、中央区は千葉駅、県庁、中心街のエリアです。
海沿いのエリアでは、潮風による塩害が問題となり、窓ガラスやエアコンの室外機に塩分が付着しやすい環境です。
特に台風シーズン（7-10月）は塩分を含んだ強風が吹くため、エアコンの腐食や窓ガラスの曇りが発生しやすくなります。
海沿いエリアでは、年2-3回の窓清掃とエアコンクリーニング（年1回）に加え、室外機の洗浄も重要です。
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">関東平野の臨海部、夏の高温多湿対策重要</h3>
            <p className="text-lg mb-4">
              千葉市は関東平野の臨海部に位置し、夏は高温多湿になります。
特に7-8月は気温が30度を超える真夏日が多く、湿度も高いため、エアコンの使用頻度が高くなります。
夏季のエアコン使用により、内部に汚れが蓄積しやすい環境です。
夏前（5-6月）のエアコンクリーニングで、効率的な冷房と快適な室内環境を保てます。
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">JR・私鉄など交通非常に良好、業者の選択肢が非常に豊富</h3>
            <p className="text-lg mb-4">
              中央区はJR総武線、京成線、千葉都市モノレールなどが通っており、交通の便が非常に良好です。
千葉駅、海浜幕張駅など主要駅があり、東京都心へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が営業しており、大手チェーンから地域密着型まで選択肢が非常に豊富です。
即日対応可能な業者も多数あり、複数社を比較することで、最適な業者を見つけやすい環境といえます。
            </p>"""

TPL_DESC = "中央区は千葉市の中心部に位置し、千葉駅がある千葉の中心街です。県庁所在地として商業施設が集積しています。"
TPL_DESC2 = "中央区は千葉市の中心部に位置し、千葉駅がある千葉の中心街です。"  # 選び方内の短い版

def geo_block(city, w):
    (t1,b1),(t2,b2),(t3,b3)=w["geo"]
    def blk(t,b):
        return f"""            <h3 className="text-2xl font-bold mb-4 mt-8">{t}</h3>
            <p className="text-lg mb-4">
              {b}
            </p>"""
    return "\n            \n".join([blk(t1,b1),blk(t2,b2),blk(t3,b3)])

def func_name(slug):
    return "Area_" + re.sub(r"[^A-Za-z0-9]","_",slug)

def gen(city, w):
    s = TPL
    pref, prefslug, cityname = city["pref"], city["pref_slug"], city["city"]
    parent_slug, parent_name = city["parent_slug"], city["parent_name"]
    ward = w["ward"]; slug = w["slug"]
    full = f"{cityname}{ward}"
    # 1) geo block を正規表現で置換（「…ポイント</h2>」〜「料金相場」直前まで）
    s = re.sub(
        r"(でハウスクリーニングを依頼する際のポイント</h2>\s*\n)(.*?)(\n\s*</div>\s*\n\s*</div>\s*\n\s*</section>\s*\n\s*\n\s*\{/\* 料金相場 \*/\})",
        lambda m: m.group(1) + "            \n" + geo_block(city, w) + m.group(3),
        s, flags=re.DOTALL,
    )
    # desc 置換（長文＝intro/まとめ、選び方の二重「中央区は中央区は…」も解消）
    s = s.replace("中央区は" + TPL_DESC2, w["desc"])
    s = s.replace(TPL_DESC, w["desc"])
    s = s.replace(TPL_DESC2, w["desc"])
    # 2) サブエリア配列
    subs = "[" + ", ".join(f"'{x}'" for x in w["subs"]) + "]"
    s = re.sub(r"const areas = \[[^\]]*\];", f"const areas = {subs};", s)
    # 3) 近隣エリアリンク block 置換
    nearby = "\n".join(
        f'            <Link href="/areas/{ns}" className="btn btn-outline">{nl}</Link>'
        for ns, nl in w["nearby"]
    )
    s = re.sub(
        r'(<h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>\s*<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">)(.*?)(\s*</div>)',
        lambda m: m.group(1) + "\n" + nearby + "\n          " + m.group(3),
        s, flags=re.DOTALL,
    )
    # 4) パンくず親リンク
    s = s.replace('<li><Link href="/areas/chiba/">千葉県</Link></li>',
                  f'<li><Link href="/areas/{parent_slug}/">{parent_name}</Link></li>')
    # 5) 文字列置換（順序重要：千葉市中央区→full, 千葉県→pref, 中央区→ward, 千葉市→city）
    s = s.replace("千葉市中央区", full)
    s = s.replace("千葉県", pref)
    s = s.replace("中央区", ward)
    s = s.replace("千葉市", cityname)
    # 6) slug / url / 関数名
    s = s.replace("chiba-chuo", slug)
    s = s.replace("export default function Chiba中央Area()", f"export default function {func_name(slug)}()")
    return s

def write_all(cities, dry=True):
    made=[]; skip=[]
    for city in cities:
        for w in city["wards"]:
            d = AREAS / w["slug"]
            if d.exists():
                skip.append(w["slug"]); continue
            if not dry:
                d.mkdir(parents=True, exist_ok=True)
                (d/"page.tsx").write_text(gen(city,w), encoding="utf-8")
            made.append(w["slug"])
    print(f"{'(DRY) would create' if dry else 'CREATED'}: {len(made)}")
    for m in made: print("  +", m)
    if skip: print("skip(exists):", skip)
    return made

# ============ データ ============
from area_data_groupA import CITIES  # noqa

if __name__ == "__main__":
    write_all(CITIES, dry=("--write" not in sys.argv))
