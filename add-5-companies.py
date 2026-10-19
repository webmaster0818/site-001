#!/usr/bin/env python3
import re
import glob

# 追加する5社のデータ
ADDITIONAL_COMPANIES = '''    { 
      name: "エディオンハウスクリーン", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "9,240円〜",
      description: "家電量販店エディオンの「家電のプロのクリーニングサービス」。提供は同社指定エリア内に限る（公式）。",
      hours: "店舗により異なる（公式の店舗検索で確認）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、家電周辺クリーニング",
      website: "https://www.edion.co.jp/service/satisfied/cleaning"
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
