#!/usr/bin/env python3
"""
全市区町村ページ・親ページのメタデータを一括更新するスクリプト
"""
import os
import re
from pathlib import Path

# プロジェクトルート
PROJECT_ROOT = Path(__file__).parent.parent
AREAS_DIR = PROJECT_ROOT / "app" / "areas"

# エリア名のマッピング（slug → 日本語名）
AREA_NAMES = {
    # 東京23区
    "tokyo-chiyoda": "千代田区",
    "tokyo-chuo": "中央区",
    "tokyo-minato": "港区",
    "tokyo-shinjuku": "新宿区",
    "tokyo-bunkyo": "文京区",
    "tokyo-taito": "台東区",
    "tokyo-sumida": "墨田区",
    "tokyo-koto": "江東区",
    "tokyo-shinagawa": "品川区",
    "tokyo-meguro": "目黒区",
    "tokyo-ota": "大田区",
    "tokyo-setagaya": "世田谷区",
    "tokyo-shibuya": "渋谷区",
    "tokyo-nakano": "中野区",
    "tokyo-suginami": "杉並区",
    "tokyo-toshima": "豊島区",
    "tokyo-kita": "北区",
    "tokyo-arakawa": "荒川区",
    "tokyo-itabashi": "板橋区",
    "tokyo-nerima": "練馬区",
    "tokyo-adachi": "足立区",
    "tokyo-katsushika": "葛飾区",
    "tokyo-edogawa": "江戸川区",
    
    # 横浜市18区
    "yokohama-tsurumi": "鶴見区",
    "yokohama-kanagawa": "神奈川区",
    "yokohama-nishi": "西区",
    "yokohama-naka": "中区",
    "yokohama-minami": "南区",
    "yokohama-konan": "港南区",
    "yokohama-hodogaya": "保土ケ谷区",
    "yokohama-asahi": "旭区",
    "yokohama-isogo": "磯子区",
    "yokohama-kanazawa": "金沢区",
    "yokohama-kohoku": "港北区",
    "yokohama-midori": "緑区",
    "yokohama-aoba": "青葉区",
    "yokohama-tsuzuki": "都筑区",
    "yokohama-totsuka": "戸塚区",
    "yokohama-sakae": "栄区",
    "yokohama-izumi": "泉区",
    "yokohama-seya": "瀬谷区",
    
    # 川崎市7区
    "kawasaki-kawasaki": "川崎区",
    "kawasaki-saiwai": "幸区",
    "kawasaki-nakahara": "中原区",
    "kawasaki-takatsu": "高津区",
    "kawasaki-tama": "多摩区",
    "kawasaki-miyamae": "宮前区",
    "kawasaki-asao": "麻生区",
    
    # 大阪市24区
    "osaka-kita": "北区",
    "osaka-miyakojima": "都島区",
    "osaka-fukushima": "福島区",
    "osaka-konohana": "此花区",
    "osaka-chuo": "中央区",
    "osaka-nishi": "西区",
    "osaka-minato": "港区",
    "osaka-taisho": "大正区",
    "osaka-tennoji": "天王寺区",
    "osaka-naniwa": "浪速区",
    "osaka-nishiyodogawa": "西淀川区",
    "osaka-yodogawa": "淀川区",
    "osaka-higashiyodogawa": "東淀川区",
    "osaka-higashinari": "東成区",
    "osaka-ikuno": "生野区",
    "osaka-asahi": "旭区",
    "osaka-joto": "城東区",
    "osaka-tsurumi": "鶴見区",
    "osaka-abeno": "阿倍野区",
    "osaka-suminoe": "住之江区",
    "osaka-sumiyoshi": "住吉区",
    "osaka-higashisumiyoshi": "東住吉区",
    "osaka-hirano": "平野区",
    "osaka-nishinari": "西成区",
    
    # 名古屋市16区
    "nagoya-chikusa": "千種区",
    "nagoya-higashi": "東区",
    "nagoya-kita": "北区",
    "nagoya-nishi": "西区",
    "nagoya-nakamura": "中村区",
    "nagoya-nakaku": "中区",
    "nagoya-showa": "昭和区",
    "nagoya-mizuho": "瑞穂区",
    "nagoya-atsuta": "熱田区",
    "nagoya-nakagawa": "中川区",
    "nagoya-minato": "港区",
    "nagoya-minami": "南区",
    "nagoya-moriyama": "守山区",
    "nagoya-midori": "緑区",
    "nagoya-meito": "名東区",
    "nagoya-tempaku": "天白区",
    
    # 福岡市7区
    "fukuoka-higashi": "東区",
    "fukuoka-hakata": "博多区",
    "fukuoka-chuo": "中央区",
    "fukuoka-minami": "南区",
    "fukuoka-nishi": "西区",
    "fukuoka-jonan": "城南区",
    "fukuoka-sawara": "早良区",
    
    # 北九州市7区
    "kitakyushu-moji": "門司区",
    "kitakyushu-wakamatsu": "若松区",
    "kitakyushu-tobata": "戸畑区",
    "kitakyushu-kokurakita": "小倉北区",
    "kitakyushu-kokuraminami": "小倉南区",
    "kitakyushu-yahatahigashi": "八幡東区",
    "kitakyushu-yahatanishi": "八幡西区",
    
    # 神戸市9区
    "kobe-higashinada": "東灘区",
    "kobe-nada": "灘区",
    "kobe-chuo": "中央区",
    "kobe-hyogo": "兵庫区",
    "kobe-kita": "北区",
    "kobe-nagata": "長田区",
    "kobe-suma": "須磨区",
    "kobe-tarumi": "垂水区",
    "kobe-nishi": "西区",
    
    # 札幌市10区
    "sapporo-chuo": "中央区",
    "sapporo-kita": "北区",
    "sapporo-higashi": "東区",
    "sapporo-shiroishi": "白石区",
    "sapporo-toyohira": "豊平区",
    "sapporo-minami": "南区",
    "sapporo-nishi": "西区",
    "sapporo-atsubetsu": "厚別区",
    "sapporo-teine": "手稲区",
    "sapporo-kiyota": "清田区",
    
    # 京都市11区
    "kyoto-kita": "北区",
    "kyoto-kamigyo": "上京区",
    "kyoto-sakyo": "左京区",
    "kyoto-nakagyo": "中京区",
    "kyoto-higashiyama": "東山区",
    "kyoto-shimogyo": "下京区",
    "kyoto-minami": "南区",
    "kyoto-ukyo": "右京区",
    "kyoto-fushimi": "伏見区",
    "kyoto-yamashina": "山科区",
    "kyoto-nishikyo": "西京区",
    
    # さいたま市10区
    "saitama-nishi": "西区",
    "saitama-kita": "北区",
    "saitama-omiya": "大宮区",
    "saitama-minuma": "見沼区",
    "saitama-chuo": "中央区",
    "saitama-sakura": "桜区",
    "saitama-urawa": "浦和区",
    "saitama-minami": "南区",
    "saitama-midori": "緑区",
    "saitama-iwatsuki": "岩槻区",
    
    # 千葉市6区
    "chiba-chuo": "中央区",
    "chiba-hanamigawa": "花見川区",
    "chiba-inage": "稲毛区",
    "chiba-wakaba": "若葉区",
    "chiba-midori": "緑区",
    "chiba-mihama": "美浜区",
    
    # 親ページ
    "tokyo": "東京都",
    "yokohama": "横浜市",
    "kawasaki": "川崎市",
    "osaka": "大阪府",
    "aichi": "愛知県",
    "fukuoka": "福岡県",
    "hyogo": "兵庫県",
    "sapporo": "札幌市",
    "kyoto-city": "京都市",
    "saitama": "埼玉県",
    "chiba": "千葉県",
}

def get_area_description(slug: str, area_name: str) -> str:
    """エリアに応じた説明文を生成"""
    return f"{area_name}でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。"

def generate_metadata_code(slug: str, area_name: str) -> str:
    """メタデータコードを生成"""
    title = f"{area_name}のハウスクリーニング業者おすすめ比較 | クリーンナビ"
    description = get_area_description(slug, area_name)
    url = f"https://clean-navi.jp/areas/{slug}/"
    og_alt = f"{area_name}のハウスクリーニング業者比較 - クリーンナビ"
    
    return f'''export const metadata = {{
  title: "{title}",
  description: "{description}",
  openGraph: {{
    title: "{title}",
    description: "{description}",
    url: "{url}",
    siteName: "クリーンナビ",
    images: [
      {{
        url: "https://clean-navi.jp/og-image.png",
        width: 1200,
        height: 630,
        alt: "{og_alt}",
      }},
    ],
    locale: "ja_JP",
    type: "website",
  }},
  twitter: {{
    card: "summary_large_image",
    title: "{title}",
    description: "{description}",
    images: ["https://clean-navi.jp/og-image.png"],
  }},
  alternates: {{
    canonical: "{url}",
  }},
}};'''

def update_page_metadata(page_path: Path, slug: str, area_name: str):
    """ページファイルのメタデータを更新"""
    content = page_path.read_text(encoding='utf-8')
    
    # 既存のmetadata exportを検索
    metadata_pattern = r'export const metadata = \{[^}]*(?:\{[^}]*\}[^}]*)*\};'
    
    if not re.search(metadata_pattern, content):
        print(f"  ⚠️  metadata not found in {page_path.name}")
        return False
    
    # 新しいメタデータコードを生成
    new_metadata = generate_metadata_code(slug, area_name)
    
    # 置換
    updated_content = re.sub(metadata_pattern, new_metadata, content, count=1)
    
    # 書き込み
    page_path.write_text(updated_content, encoding='utf-8')
    return True

def main():
    """メイン処理"""
    print("🚀 メタデータ一括更新スクリプト開始\n")
    
    updated_count = 0
    skipped_count = 0
    
    # tokyo-chiyodaは既に更新済みなのでスキップリストに追加
    skip_list = ["tokyo-chiyoda", "tokyo"]
    
    for slug, area_name in AREA_NAMES.items():
        if slug in skip_list:
            print(f"⏭️  {slug} (already updated)")
            skipped_count += 1
            continue
        
        page_path = AREAS_DIR / slug / "page.tsx"
        
        if not page_path.exists():
            print(f"  ⚠️  {slug} - ファイルが見つかりません")
            continue
        
        print(f"  📝 {slug} ({area_name})")
        if update_page_metadata(page_path, slug, area_name):
            updated_count += 1
        else:
            skipped_count += 1
    
    print(f"\n✅ 完了: {updated_count}ページ更新, {skipped_count}ページスキップ")

if __name__ == "__main__":
    main()
