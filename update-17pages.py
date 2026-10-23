#!/usr/bin/env python3
import re
import glob

# 15社データ（千代田区と同じ）
NEW_COMPANIES_15 = '''  const companies = [
    { 
      name: "おそうじ革命", 
      kitchen: "17,930円〜", 
      bathroom: "17,930円〜", 
      toilet: "8,250円〜",
      description: "技術力と価格のバランスが良く、約420店舗を全国展開。50日間の研修を受けたスタッフが対応。",
      hours: "店舗により異なる（年末年始を除き土日祝も営業）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇クリーニング",
      website: "https://www.osoujikakumei.jp/"
    },
    { 
      name: "おそうじ本舗", 
      kitchen: "18,700円〜", 
      bathroom: "18,700円〜", 
      toilet: "9,900円〜",
      description: "全国47都道府県に対応する全国チェーン。混雑期でも予約が取りやすく、早朝・夜間の要望にも対応（公式）。",
      hours: "店舗により異なる（定休日も店舗ごと）",
      services: "エアコン、浴室、キッチン、トイレ、洗濯機、外壁クリーニング",
      website: "https://www.osoujihonpo.com/"
    },
    { 
      name: "カジタク", 
      kitchen: "19,580円〜", 
      bathroom: "19,580円〜", 
      toilet: "19,580円",
      description: "イオングループ運営で安心。仕上がり満足度97%を誇る高品質サービス。",
      hours: "10:00-19:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、換気扇、窓・サッシクリーニング",
      website: "https://www.kajitaku.com/"
    },
    { 
      name: "ベアーズ", 
      kitchen: "18,920円〜", 
      bathroom: "19,910円〜", 
      toilet: "10,340円〜",
      description: "家事代行大手による質の高いサービス。スタッフ教育に力を入れ、丁寧な作業が特徴。",
      hours: "受付9:00〜18:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.happy-bears.com/"
    },
    { 
      name: "ダスキン", 
      kitchen: "20,680円〜", 
      bathroom: "22,000円〜", 
      toilet: "10,340円〜",
      description: "清掃業界の老舗大手。47都道府県に拠点があり、専門資器材と洗剤で徹底清掃。",
      hours: "電話受付 8:00〜20:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、レンジフード、フロアクリーニング",
      website: "https://www.duskin.jp/servicemaster/"
    },
    { 
      name: "東京ガスのハウスクリーニング", 
      kitchen: "19,800円〜", 
      bathroom: "17,600円〜", 
      toilet: "13,200円〜",
      description: "東京ガスが提供。対応エリアは東京・神奈川・埼玉・千葉と群馬・茨城の一部（公式の対応エリア一覧）。支払いはクレジットカードのみ。",
      hours: "訪問開始8:30〜18:00の時間帯から選択（土日祝も可・12/29〜1/4除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://kaji.tokyo-gas.co.jp/"
    },
    { 
      name: "サニクリーン", 
      kitchen: "見積もり制", 
      bathroom: "見積もり制", 
      toilet: "見積もり制",
      description: "全国対応の大手清掃会社。無料見積もりサービスで事前に汚れ状況を確認。",
      hours: "電話受付 10:00〜16:00（土・日・祝日を除く）",
      services: "エアコン、キッチン、浴室、トイレ、換気扇・レンジフード、フロア、まるごとハウスクリーニング",
      website: "https://www.sanikleen.co.jp/housecleaning/"
    },
    { 
      name: "お掃除マスター", 
      kitchen: "8,000円〜", 
      bathroom: "12,600円〜", 
      toilet: "8,000円〜",
      description: "全国の加盟店からスタッフを手配する紹介型サービス（運営：株式会社アシスト）。出張料なし（公式）。",
      hours: "24時間365日受付",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://osoji-master.info/"
    },
    { 
      name: "アズマのホームクリーニング", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "13,200円〜",
      description: "掃除用品メーカーのアズマ工業（1896年創業）が運営。年間実績は全国20,000件（公式）。",
      hours: "電話受付 平日9:00〜17:00",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.azuma-cleaning.com/"
    },
    { 
      name: "くらしのセゾン", 
      kitchen: "19,690円〜", 
      bathroom: "20,900円〜", 
      toilet: "10,010円〜",
      description: "クレディセゾングループ。セゾン/UCカード会員はハウスクリーニング全メニュー5%OFF（オプション除く）、一部メニューで永久不滅ポイント利用可（公式）。",
      hours: "9:00〜17:00（土日祝除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.kurashi-saison.co.jp/cleaning/"
    },
    { 
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

# 15色
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

# 対象ファイル
target_files = [
    'app/areas/aichi/page.tsx',
    'app/areas/chiba/page.tsx',
    'app/areas/fukuoka/page.tsx',
    'app/areas/hiroshima/page.tsx',
    'app/areas/hyogo/page.tsx',
    'app/areas/kanagawa/page.tsx',
    'app/areas/kawasaki/page.tsx',
    'app/areas/kyoto/page.tsx',
    'app/areas/kyoto-city/page.tsx',
    'app/areas/niigata/page.tsx',
    'app/areas/osaka/page.tsx',
    'app/areas/saitama/page.tsx',
    'app/areas/sapporo/page.tsx',
    'app/areas/sendai/page.tsx',
    'app/areas/shizuoka/page.tsx',
    'app/areas/tokyo/page.tsx',
    'app/areas/yokohama/page.tsx',
]

def update_file(filepath):
    """ファイルを更新"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # companyColorsを15色に更新（4色から）
        content = re.sub(
            r'const companyColors = \[\s*"from-blue-500 to-blue-600",\s*"from-green-500 to-green-600",\s*"from-purple-500 to-purple-600",\s*"from-orange-500 to-orange-600",?\s*\];',
            NEW_COLORS_15,
            content,
            flags=re.MULTILINE
        )
        
        # companies配列を15社に置換
        content = re.sub(
            r'const companies = \[[\s\S]*?\];',
            NEW_COMPANIES_15,
            content,
            count=1
        )
        
        # アイコン参照にmodulo演算を追加（安全対策）
        content = re.sub(
            r'const Icon = companyIcons\[i\];',
            'const Icon = companyIcons[i % companyIcons.length];',
            content
        )
        content = re.sub(
            r'const gradient = companyColors\[i\];',
            'const gradient = companyColors[i % companyColors.length];',
            content
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
    
    for filepath in target_files:
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
