#!/usr/bin/env python3
import os
import re
import glob

# 千代田区からコピーする業者データ（10社）
NEW_COMPANIES = '''  const companies = [
    { 
      name: "おそうじ革命", 
      kitchen: "17,930円〜", 
      bathroom: "17,930円〜", 
      toilet: "8,250円〜",
      description: "技術力と価格のバランスが良く、約420店舗を全国展開。50日間の研修を受けたスタッフが対応。",
      hours: "9:00-20:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇クリーニング",
      website: "https://www.osoujikakumei.jp/"
    },
    { 
      name: "おそうじ本舗", 
      kitchen: "19,800円〜", 
      bathroom: "19,800円〜", 
      toilet: "9,900円〜",
      description: "全国47都道府県に店舗展開する最大手。早朝・夜間対応も可能で予約が取りやすい。",
      hours: "8:00-21:00（年中無休）",
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
      hours: "9:00-20:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.happy-bears.com/"
    },
    { 
      name: "ダスキン", 
      kitchen: "18,700円〜", 
      bathroom: "19,800円〜", 
      toilet: "9,460円〜",
      description: "清掃業界の老舗大手。47都道府県に拠点があり、専門資器材と洗剤で徹底清掃。",
      hours: "9:00-18:00（店舗により異なる）",
      services: "エアコン、浴室、キッチン、トイレ、レンジフード、フロアクリーニング",
      website: "https://www.duskin.jp/servicemaster/"
    },
    { 
      name: "東京ガスのハウスクリーニング", 
      kitchen: "20,900円〜", 
      bathroom: "19,800円〜", 
      toilet: "11,000円〜",
      description: "大手ガス会社による安心サービス。独自の清掃技術をマスターしたスタッフが対応。",
      hours: "8:30-17:00（平日・土日祝）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://kaji.tokyo-gas.co.jp/"
    },
    { 
      name: "サニクリーン", 
      kitchen: "17,600円〜", 
      bathroom: "18,700円〜", 
      toilet: "8,800円〜",
      description: "全国対応の大手清掃会社。無料見積もりサービスで事前に汚れ状況を確認。",
      hours: "9:00-18:00（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.sanikleen.co.jp/housecleaning/"
    },
    { 
      name: "おそうじマスター", 
      kitchen: "16,500円〜", 
      bathroom: "17,600円〜", 
      toilet: "7,700円〜",
      description: "全国1000以上の拠点で24時間対応。近くのスタッフがすぐに正確な見積もりを提示。",
      hours: "24時間対応（年中無休）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://osoji-master.info/"
    },
    { 
      name: "アズマのホームクリーニング", 
      kitchen: "18,150円〜", 
      bathroom: "18,700円〜", 
      toilet: "9,350円〜",
      description: "創業130年の老舗。年間実績20,000件、独自の研修制度で業界水準を超えるサービス。",
      hours: "9:00-18:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
      website: "https://www.azuma-cleaning.com/"
    },
    { 
      name: "くらしのセゾン", 
      kitchen: "19,250円〜", 
      bathroom: "20,350円〜", 
      toilet: "10,450円〜",
      description: "クレディセゾングループ。セゾン/UCカード会員は全メニュー5%OFF、永久不滅ポイント利用可能。",
      hours: "10:00-18:00（年末年始除く）",
      services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
      website: "https://www.kurashi-saison.co.jp/cleaning/"
    },
  ];'''

NEW_COLORS = '''  const companyColors = [
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
  ];'''

# 更新対象のファイル
patterns = [
    'app/areas/tokyo-*/page.tsx',
    'app/areas/kawasaki-*/page.tsx',
    'app/areas/yokohama-*/page.tsx',
    'app/areas/osaka-*/page.tsx',
    'app/areas/nagoya-*/page.tsx',
]

exclude = ['tokyo-chiyoda', 'tokyo-minato']

def update_file(filepath):
    """ファイルを更新"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # companyColorsの置換
        content = re.sub(
            r'const companyColors = \[\s*"from-blue-500 to-blue-600",\s*"from-green-500 to-green-600",\s*"from-purple-500 to-purple-600",\s*"from-orange-500 to-orange-600",\s*\];',
            NEW_COLORS,
            content,
            flags=re.MULTILINE | re.DOTALL
        )
        
        # companies配列の置換（既存の4社配列を10社に置換）
        content = re.sub(
            r'const companies = \[[\s\S]*?\];',
            NEW_COMPANIES,
            content,
            count=1
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
            # 除外ファイルチェック
            if any(ex in filepath for ex in exclude):
                continue
            
            print(f"Updating {filepath}...")
            if update_file(filepath):
                updated += 1
                print(f"  ✓ Updated")
            else:
                failed += 1
                print(f"  ✗ Failed")
    
    print(f"\n完了: {updated}ファイル更新, {failed}ファイル失敗")

if __name__ == '__main__':
    main()
