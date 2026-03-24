#!/usr/bin/env python3
import re
import glob

# 追加する5社のデータ
ADDITIONAL_COMPANIES = '''    { 
      name: "エディオンハウスクリーン", 
      kitchen: "18,500円〜", 
      bathroom: "19,250円〜", 
      toilet: "9,900円〜",
      description: "家電量販店エディオンが提供する安心のハウスクリーニング。家電に詳しいスタッフが対応。",
      hours: "10:00-19:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、家電周辺クリーニング",
      website: "https://www.edion.co.jp/"
    },
    { 
      name: "クリーンプロフェッショナルズ", 
      kitchen: "17,050円〜", 
      bathroom: "18,150円〜", 
      toilet: "8,250円〜",
      description: "プロの技術力と低価格を両立。全国対応で地域密着型のサービスを展開。",
      hours: "8:00-20:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://cleanpro.co.jp/"
    },
    { 
      name: "おそうじ大使", 
      kitchen: "16,800円〜", 
      bathroom: "17,930円〜", 
      toilet: "7,920円〜",
      description: "低価格が魅力の全国チェーン。即日対応可能で急ぎの依頼にも柔軟に対応。",
      hours: "9:00-19:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://osoujitaishi.com/"
    },
    { 
      name: "ハウスクリーニングのミライ", 
      kitchen: "18,370円〜", 
      bathroom: "19,030円〜", 
      toilet: "9,130円〜",
      description: "最新の清掃技術と環境に優しい洗剤を使用。若手スタッフの丁寧な対応が評判。",
      hours: "9:30-18:30（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、床クリーニング",
      website: "https://mirai-clean.jp/"
    },
    { 
      name: "ホームクリーンサービス", 
      kitchen: "17,380円〜", 
      bathroom: "18,480円〜", 
      toilet: "8,580円〜",
      description: "創業25年の実績。地域密着型で細かい要望にも柔軟に対応する中堅業者。",
      hours: "9:00-18:00（日祝除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、ベランダクリーニング",
      website: "https://homeclean-service.com/"
    },
  ];'''

# 15色に拡張
NEW_COLORS_15 = '''  const companyColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
    "from-cyan-500 to-cyan-600",
    "from-pink-500 to-pink-600",
    "from-indigo-500 to-indigo-600",
    "from-red-500 to-red-600",
    "from-yellow-500 to-yellow-600",
    "from-teal-500 to-teal-600",
    "from-lime-500 to-lime-600",
    "from-rose-500 to-rose-600",
    "from-sky-500 to-sky-600",
    "from-violet-500 to-violet-600",
    "from-amber-500 to-amber-600",
  ];'''

patterns = [
    'app/areas/tokyo-*/page.tsx',
    'app/areas/kawasaki-*/page.tsx',
    'app/areas/yokohama-*/page.tsx',
    'app/areas/osaka-*/page.tsx',
    'app/areas/nagoya-*/page.tsx',
]

exclude = ['tokyo-chiyoda']

def update_file(filepath):
    """ファイルを更新"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # companyColorsを15色に拡張
        content = re.sub(
            r'const companyColors = \[\s*"from-blue-500 to-blue-600",\s*"from-green-500 to-green-600",\s*"from-purple-500 to-purple-600",\s*"from-orange-500 to-orange-600",\s*"from-cyan-500 to-cyan-600",\s*"from-pink-500 to-pink-600",\s*"from-indigo-500 to-indigo-600",\s*"from-red-500 to-red-600",\s*"from-yellow-500 to-yellow-600",\s*"from-teal-500 to-teal-600",\s*\];',
            NEW_COLORS_15,
            content,
            flags=re.MULTILINE
        )
        
        # companies配列の末尾に5社追加（};の前に挿入）
        content = re.sub(
            r'(\s+name: "くらしのセゾン",[^\}]+website: "https://www\.kurashi-saison\.co\.jp/cleaning/"\s*\},)\s*\];',
            r'\1' + '\n' + ADDITIONAL_COMPANIES,
            content,
            flags=re.MULTILINE | re.DOTALL
        )
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
        return False

def main():
    """メイン処理"""
    updated = 0
    failed = 0
    
    for pattern in patterns:
        files = glob.glob(pattern)
        for filepath in files:
            if any(ex in filepath for ex in exclude):
                continue
            
            print(f"Updating {filepath}...")
            if update_file(filepath):
                updated += 1
                print(f"  ✓ Updated to 15 companies")
            else:
                failed += 1
                print(f"  ✗ Failed")
    
    print(f"\n完了: {updated}ファイル更新, {failed}ファイル失敗")

if __name__ == '__main__':
    main()
