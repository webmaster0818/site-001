#!/usr/bin/env python3
"""
全市区町村ページにパンくずリストを一括追加するスクリプト
"""
import os
import re
from pathlib import Path

# プロジェクトルート
PROJECT_ROOT = Path(__file__).parent.parent
AREAS_DIR = PROJECT_ROOT / "app" / "areas"

# エリアのマッピング（slug → 親ページ情報）
PARENT_MAPPING = {
    # 東京23区
    "tokyo-": {
        "parent_name": "東京都",
        "parent_slug": "tokyo",
    },
    # 横浜市18区
    "yokohama-": {
        "parent_name": "横浜市",
        "parent_slug": "yokohama",
    },
    # 川崎市7区
    "kawasaki-": {
        "parent_name": "川崎市",
        "parent_slug": "kawasaki",
    },
    # 大阪市24区
    "osaka-": {
        "parent_name": "大阪府",
        "parent_slug": "osaka",
    },
    # 名古屋市16区
    "nagoya-": {
        "parent_name": "愛知県",
        "parent_slug": "aichi",
    },
    # 福岡市7区
    "fukuoka-": {
        "parent_name": "福岡県",
        "parent_slug": "fukuoka",
    },
    # 北九州市7区
    "kitakyushu-": {
        "parent_name": "福岡県",
        "parent_slug": "fukuoka",
    },
    # 神戸市9区
    "kobe-": {
        "parent_name": "兵庫県",
        "parent_slug": "hyogo",
    },
    # 札幌市10区
    "sapporo-": {
        "parent_name": "札幌市",
        "parent_slug": "sapporo",
    },
    # 京都市11区
    "kyoto-": {
        "parent_name": "京都市",
        "parent_slug": "kyoto-city",
    },
    # さいたま市10区
    "saitama-": {
        "parent_name": "埼玉県",
        "parent_slug": "saitama",
    },
    # 千葉市6区
    "chiba-": {
        "parent_name": "千葉県",
        "parent_slug": "chiba",
    },
}

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
}

def get_parent_info(slug: str):
    """スラッグから親ページ情報を取得"""
    for prefix, info in PARENT_MAPPING.items():
        if slug.startswith(prefix):
            return info
    return None

def generate_breadcrumb_code(slug: str, area_name: str, parent_info: dict) -> str:
    """パンくずリストのコードを生成"""
    parent_name = parent_info["parent_name"]
    parent_slug = parent_info["parent_slug"]
    
    return f'''
      {{/* パンくずリスト */}}
      <div className="bg-base-100 py-4 border-b border-base-300">
        <div className="container mx-auto px-4">
          <div className="breadcrumbs text-sm">
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/areas/{parent_slug}/">{parent_name}</Link></li>
              <li>{area_name}</li>
            </ul>
          </div>
        </div>
      </div>
'''

def add_breadcrumb(page_path: Path, slug: str, area_name: str):
    """ページファイルにパンくずリストを追加"""
    content = page_path.read_text(encoding='utf-8')
    
    # パンくずリストが既に存在するかチェック
    if 'パンくずリスト' in content or 'breadcrumbs' in content:
        return False  # 既に追加済み
    
    # 親ページ情報を取得
    parent_info = get_parent_info(slug)
    if not parent_info:
        print(f"  ⚠️  {slug} - 親ページ情報が見つかりません")
        return False
    
    # パンくずリストコードを生成
    breadcrumb_code = generate_breadcrumb_code(slug, area_name, parent_info)
    
    # ヒーローセクションの後に挿入
    # パターン: </section>\n\n      {/* 導入文 */}
    pattern = r'(</section>\s*\n\s*\n\s*{/\* 導入文 \*/})'
    
    if not re.search(pattern, content):
        print(f"  ⚠️  {slug} - 挿入位置が見つかりません")
        return False
    
    # 挿入
    replacement = f'</section>{breadcrumb_code}\n      {{/* 導入文 */}}'
    updated_content = re.sub(pattern, replacement, content, count=1)
    
    # 書き込み
    page_path.write_text(updated_content, encoding='utf-8')
    return True

def main():
    """メイン処理"""
    print("🚀 パンくずリスト一括追加スクリプト開始\n")
    
    added_count = 0
    skipped_count = 0
    
    # tokyo-chiyodaは既に追加済みなのでスキップ
    skip_list = ["tokyo-chiyoda"]
    
    for slug, area_name in AREA_NAMES.items():
        if slug in skip_list:
            print(f"⏭️  {slug} (already added)")
            skipped_count += 1
            continue
        
        page_path = AREAS_DIR / slug / "page.tsx"
        
        if not page_path.exists():
            print(f"  ⚠️  {slug} - ファイルが見つかりません")
            continue
        
        print(f"  📝 {slug} ({area_name})")
        if add_breadcrumb(page_path, slug, area_name):
            added_count += 1
        else:
            skipped_count += 1
    
    print(f"\n✅ 完了: {added_count}ページ追加, {skipped_count}ページスキップ")

if __name__ == "__main__":
    main()
