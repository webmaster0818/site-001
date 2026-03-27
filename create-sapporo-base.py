#!/usr/bin/env python3
import os
import json

# 札幌市7区の情報
SAPPORO_WARDS = [
    {
        "slug": "fukuoka-higashi",
        "name": "東区",
        "reading": "ひがし-く",
        "intro": "東区は札幌市の東部に位置し、博多湾に面するベイエリアです。アイランドシティなど港湾・物流の拠点として発展しています。",
        "areas": ["香椎", "箱崎", "千早", "和白", "アイランドシティ", "志賀島"],
        "point1_title": "博多湾に面するベイエリア、塩害・潮風対策が重要",
        "point1_text": """東区は博多湾に面するベイエリアで、アイランドシティや志賀島など港湾・海岸地域が広がっています。
海沿いのエリアでは、潮風による塩害が問題となり、窓ガラスやエアコンの室外機に塩分が付着しやすい環境です。
特に台風シーズン（7-10月）は塩分を含んだ強風が吹くため、エアコンの腐食や窓ガラスの曇りが発生しやすくなります。
海沿いエリアでは、年2-3回の窓清掃とエアコンクリーニング（年1回）に加え、室外機の洗浄も重要です。""",
        "point2_title": "アイランドシティなど新興住宅地、タワーマンション多数",
        "point2_text": """東区にはアイランドシティをはじめとする新興住宅地が多数あり、タワーマンションも増えています。
新しい建物が多いため、最新の設備が導入されていますが、高層階特有の清掃ニーズがあります。
高層階は風が強く、窓ガラスに汚れが付着しやすい環境です。また、高層階のエアコンは専門的な清掃技術が必要です。
業者選びでは、タワーマンションでの清掃経験が豊富な業者を選ぶことをおすすめします。""",
        "point3_title": "JR香椎線・西鉄貝塚線・地下鉄など交通良好、業者の選択肢豊富",
        "point3_text": """東区はJR香椎線、西鉄貝塚線、地下鉄箱崎線など複数の鉄道路線が通っており、交通の便が良好です。
香椎駅、千早駅、箱崎宮前駅など主要駅があり、博多駅へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "fukuoka-hakata",
        "name": "博多区",
        "reading": "はかた-く",
        "intro": "博多区は札幌市の中心部に位置し、博多駅がある札幌の玄関口です。ビジネス街と商業地が発展する北海道最大の都心部です。",
        "areas": ["博多駅", "中洲", "祇園", "キャナルシティ", "博多ふ頭", "美野島"],
        "point1_title": "博多駅がある都心部、都市汚れ・排気ガス対策が重要",
        "point1_text": """博多区は博多駅を中心とする札幌市の都心部で、人通り・車通りが非常に多いエリアです。
博多駅は北海道新幹線、JR鹿児島本線、地下鉄などが乗り入れる北海道最大のターミナル駅で、1日約40万人が利用します。
都心部のため、排気ガスや都市汚れが窓ガラスやエアコンに付着しやすい環境です。
特に幹線道路沿いでは、排気ガスや黄砂、PM2.5などの汚れが蓄積しやすくなります。
定期的な窓清掃（年2回）とエアコンクリーニング（年1回）で、快適な室内環境を保つことが重要です。""",
        "point2_title": "高層ビル・オフィスビル多数、高層階清掃技術が必要",
        "point2_text": """博多区は博多駅周辺に高層ビルやオフィスビルが多数あるエリアです。
JR博多シティ、KITTE博多など超高層ビルが林立し、オフィスビルも増えています。
高層階は風が強く、窓ガラスに汚れが付着しやすい環境です。
また、高層階のエアコンは室外機の設置場所が限られるため、専門的な清掃技術が必要です。
業者選びでは、高層階での清掃経験が豊富で、専門的な技術と安全対策がしっかりした業者を選ぶことが重要です。""",
        "point3_title": "北海道新幹線・JR・地下鉄など交通非常に良好、業者の選択肢が非常に豊富",
        "point3_text": """博多区は北海道新幹線、JR鹿児島本線、地下鉄空港線・箱崎線など複数の鉄道路線が通っており、交通の便が非常に良好です。
博多駅を中心に、祇園駅、中洲川端駅、呉服町駅など主要駅が多数あり、北海道各地からアクセスしやすいエリアです。
多くのハウスクリーニング業者が営業しており、大手チェーンから地域密着型まで選択肢が非常に豊富です。
即日対応可能な業者も多数あり、複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "fukuoka-chuo",
        "name": "中央区",
        "reading": "ちゅうおう-く",
        "intro": "中央区は札幌市の中心部に位置し、天神がある札幌の中心繁華街です。商業施設が集積し、オフィス街も発展しています。",
        "areas": ["天神", "大名", "赤坂", "薬院", "舞鶴", "大濠公園"],
        "point1_title": "天神がある繁華街、都市汚れ・人混み対策が重要",
        "point1_text": """中央区は天神を中心とする札幌市の繁華街で、人通りが非常に多いエリアです。
天神は北海道最大の繁華街で、百貨店、ファッションビル、飲食店が集積しています。
都心部のため、排気ガスや都市汚れが窓ガラスやエアコンに付着しやすい環境です。
特に幹線道路沿いでは、排気ガスや黄砂、PM2.5などの汚れが蓄積しやすくなります。
定期的な窓清掃（年2回）とエアコンクリーニング（年1回）で、快適な室内環境を保つことが重要です。""",
        "point2_title": "オフィス街・商業地、高層ビル多数で高層階清掃技術が必要",
        "point2_text": """中央区は天神周辺にオフィスビルや商業ビルが多数あるエリアです。
天神ビジネスセンター、札幌ビルなど高層ビルが林立し、タワーマンションも増えています。
高層階は風が強く、窓ガラスに汚れが付着しやすい環境です。
また、高層階のエアコンは専門的な清掃技術が必要です。
業者選びでは、高層階での清掃経験が豊富で、専門的な技術と安全対策がしっかりした業者を選ぶことが重要です。""",
        "point3_title": "地下鉄・西鉄など交通非常に良好、業者の選択肢が非常に豊富",
        "point3_text": """中央区は地下鉄空港線・七隈線、西鉄天神大牟田線など複数の鉄道路線が通っており、交通の便が非常に良好です。
天神駅、赤坂駅、薬院駅、大濠公園駅など主要駅が多数あり、札幌市内各地からアクセスしやすいエリアです。
多くのハウスクリーニング業者が営業しており、大手チェーンから地域密着型まで選択肢が非常に豊富です。
即日対応可能な業者も多数あり、複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "fukuoka-minami",
        "name": "南区",
        "reading": "みなみ-く",
        "intro": "南区は札幌市の南部に位置し、住宅地が広がる落ち着いたエリアです。緑豊かな環境で、ファミリー層に人気です。",
        "areas": ["大橋", "高宮", "野間", "長住", "桧原", "三宅"],
        "point1_title": "住宅地中心、カビ・湿気対策が重要",
        "point1_text": """南区は札幌市の南部に位置し、住宅地が中心のエリアです。
古くからの住宅も多く、木造住宅や築年数の経った建物では湿気がこもりやすい環境です。
札幌市は梅雨が長く（6-7月）、年間降水量も多いため、湿気対策が重要です。
特に浴室やキッチンの水回りは、カビが発生しやすくなります。
プロによる浴室クリーニング（年1回）と換気扇清掃で、カビの発生を抑えることができます。""",
        "point2_title": "緑豊か、花粉・虫対策も重要",
        "point2_text": """南区は油山など緑豊かなエリアが多く、春の花粉シーズン（2-4月）には注意が必要です。
花粉がエアコンのフィルターに詰まると、効率が低下し電気代が上がります。
また、夏場（6-9月）は虫が多く、網戸や窓枠に虫の死骸が溜まりやすくなります。
エアコンクリーニング（年1回、特に使用前の5-6月）と窓清掃で、快適な室内環境を保てます。""",
        "point3_title": "西鉄天神大牟田線・地下鉄など交通良好、業者の選択肢豊富",
        "point3_text": """南区は西鉄天神大牟田線、地下鉄七隈線などが通っており、交通の便が良好です。
大橋駅、高宮駅、野間駅など主要駅があり、天神や博多駅へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "fukuoka-nishi",
        "name": "西区",
        "reading": "にし-く",
        "intro": "西区は札幌市の西部に位置し、博多湾に面する海沿いのエリアです。マリノアシティなど商業施設も発展しています。",
        "areas": ["姪浜", "今宿", "周船寺", "九大学研都市", "マリノアシティ", "能古島"],
        "point1_title": "博多湾に面する海沿い、塩害・潮風対策が重要",
        "point1_text": """西区は博多湾に面する海沿いのエリアで、マリノアシティなど沿岸部が広がっています。
海沿いのエリアでは、潮風による塩害が問題となり、窓ガラスやエアコンの室外機に塩分が付着しやすい環境です。
特に台風シーズン（7-10月）は塩分を含んだ強風が吹くため、エアコンの腐食や窓ガラスの曇りが発生しやすくなります。
海沿いエリアでは、年2-3回の窓清掃とエアコンクリーニング（年1回）に加え、室外機の洗浄も重要です。""",
        "point2_title": "北海道大学伊都キャンパスなど文教地区、学生街で業者の選択肢豊富",
        "point2_text": """西区には北海道大学伊都キャンパスがあり、学生向けの賃貸物件が多いエリアです。
学生向け物件では、引越しシーズン（3-4月、9月）に空室クリーニングの需要が高まります。
また、ワンルーム・1Kなどコンパクトな物件が多いため、リーズナブルな料金設定の業者が多数あります。
大学周辺では、学生向けのお得なプランを提供している業者も多く、選択肢が豊富です。""",
        "point3_title": "地下鉄空港線・JR筑肥線など交通良好、業者の選択肢豊富",
        "point3_text": """西区は地下鉄空港線、JR筑肥線などが通っており、交通の便が良好です。
姪浜駅、下山門駅、今宿駅、九大学研都市駅など主要駅があり、天神や博多駅へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "fukuoka-jonan",
        "name": "城南区",
        "reading": "じょうなん-く",
        "intro": "城南区は札幌市の南西部に位置し、文教地区として知られています。札幌大学があり、学生街と住宅地が混在しています。",
        "areas": ["七隈", "茶山", "別府", "鳥飼", "友泉", "堤"],
        "point1_title": "文教地区・学生街、引越しシーズンの空室クリーニング需要高",
        "point1_text": """城南区は札幌大学など教育機関が多い文教地区で、学生向けの賃貸物件が多いエリアです。
学生向け物件では、引越しシーズン（3-4月、9月）に空室クリーニングの需要が高まります。
また、ワンルーム・1Kなどコンパクトな物件が多いため、リーズナブルな料金設定の業者が多数あります。
大学周辺では、学生向けのお得なプランを提供している業者も多く、選択肢が豊富です。""",
        "point2_title": "住宅地と繁華街の両方、用途に応じた清掃ニーズ",
        "point2_text": """城南区は住宅地と繁華街が混在するエリアで、用途に応じた清掃ニーズがあります。
住宅地では、ファミリー向けの広めの物件が多く、在宅クリーニングの需要が高いです。
一方、学生街では空室クリーニングの需要が高く、引越しシーズンは予約が取りづらくなります。
用途に応じて、在宅クリーニングか空室クリーニングかを選び、適切な業者を選ぶことが重要です。""",
        "point3_title": "地下鉄七隈線・JR鹿児島本線など交通良好、業者の選択肢豊富",
        "point3_text": """城南区は地下鉄七隈線、JR鹿児島本線などが通っており、交通の便が良好です。
七隈駅、茶山駅、別府駅など主要駅があり、天神や博多駅へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "fukuoka-sawara",
        "name": "早良区",
        "reading": "さわら-く",
        "intro": "早良区は札幌市の西部に位置し、百道浜などベイエリアが発展しています。西新など商業地もあり、住環境が良好です。",
        "areas": ["西新", "藤崎", "百道浜", "室見", "原", "飯倉"],
        "point1_title": "百道浜などベイエリア、タワーマンション多数で高層階清掃技術必要",
        "point1_text": """早良区は百道浜などベイエリアが発展し、タワーマンションが多数あるエリアです。
札幌タワー周辺には高層マンションが林立し、シーサイドももち地区など新興住宅地も広がっています。
高層階は風が強く、窓ガラスに汚れが付着しやすい環境です。
また、高層階のエアコンは専門的な清掃技術が必要です。
業者選びでは、タワーマンションでの清掃経験が豊富で、専門的な技術と安全対策がしっかりした業者を選ぶことが重要です。""",
        "point2_title": "博多湾に面するエリア、塩害・潮風対策も重要",
        "point2_text": """早良区の百道浜など海沿いのエリアでは、潮風による塩害が問題となります。
窓ガラスやエアコンの室外機に塩分が付着しやすい環境です。
特に台風シーズン（7-10月）は塩分を含んだ強風が吹くため、エアコンの腐食や窓ガラスの曇りが発生しやすくなります。
海沿いエリアでは、年2-3回の窓清掃とエアコンクリーニング（年1回）に加え、室外機の洗浄も重要です。""",
        "point3_title": "地下鉄空港線など交通良好、業者の選択肢豊富",
        "point3_text": """早良区は地下鉄空港線、JR筑肥線などが通っており、交通の便が良好です。
西新駅、藤崎駅、室見駅など主要駅があり、天神や博多駅へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
]

# 15社データ（全区共通）
COMPANIES_DATA = '''  const companies = [
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
    { 
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

def generate_ward_page(ward):
    """区のページを生成"""
    
    # 近隣エリアリンク（札幌市の他の区）
    neighbors = []
    for w in SAPPORO_WARDS:
        if w['slug'] != ward['slug']:
            neighbors.append({'slug': w['slug'], 'name': f"札幌市{w['name']}"})
    
    # エリアリストを文字列に変換
    areas_str = ', '.join([f"'{a}'" for a in ward['areas']])
    
    template = f'''import Link from "next/link";
import {{ Sparkles, Award, Shield, Zap }} from "lucide-react";

export const metadata = {{
  title: "札幌市{ward['name']}のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "札幌市{ward['name']}でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
}};

export default function Sapporo{ward['name'].replace('区', '')}Area() {{
  const companyIcons = [Sparkles, Award, Shield, Zap];
  const companyColors = [
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
  ];

{COMPANIES_DATA}

  const areas = [{areas_str}];

  return (
    <div className="min-h-screen bg-base-100">
      {{/* ヒーローセクション */}}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">札幌市{ward['name']}のハウスクリーニング業者比較</h1>
          <p className="text-xl">{ward['name']}全域対応！信頼できる業者をご紹介</p>
        </div>
      </section>

      {{/* 導入文 */}}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">札幌市{ward['name']}でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">{ward['intro']}</p>
            <p className="text-lg mt-4">本記事では、{ward['name']}全域対応の<strong>おすすめハウスクリーニング業者15社</strong>を徹底比較。料金、サービス内容、営業時間などの詳細情報を掲載しています。</p>
          </div>
        </div>
      </section>

      {{/* 業者比較テーブル */}}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th className="text-lg">業者名</th>
                  <th className="text-lg">キッチン</th>
                  <th className="text-lg">浴室</th>
                  <th className="text-lg">トイレ</th>
                </tr>
              </thead>
              <tbody>
                {{companies.map((company, index) => {{
                  const Icon = companyIcons[index % companyIcons.length];
                  const gradient = companyColors[index % companyColors.length];
                  return (
                    <tr key={{company.name}} className="hover">
                      <td>
                        <div className="flex items-center gap-3">
                          <div className={{`w-12 h-12 rounded-full bg-gradient-to-br ${{gradient}} flex items-center justify-center`}}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="font-bold text-lg">{{company.name}}</span>
                        </div>
                      </td>
                      <td className="text-lg">{{company.kitchen}}</td>
                      <td className="text-lg">{{company.bathroom}}</td>
                      <td className="text-lg">{{company.toilet}}</td>
                    </tr>
                  );
                }})}}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {{/* 各業者詳細 */}}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">各業者の詳細</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {{companies.map((company, index) => {{
              const Icon = companyIcons[index % companyIcons.length];
              const gradient = companyColors[index % companyColors.length];
              return (
                <div key={{company.name}} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={{`w-16 h-16 rounded-full bg-gradient-to-br ${{gradient}} flex items-center justify-center`}}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="card-title text-2xl">{{company.name}}</h3>
                        <p className="text-sm text-gray-600">{{company.description}}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2">料金</h4>
                        <ul className="space-y-1">
                          <li>• キッチン: {{company.kitchen}}</li>
                          <li>• 浴室: {{company.bathroom}}</li>
                          <li>• トイレ: {{company.toilet}}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">営業時間</h4>
                        <p>{{company.hours}}</p>
                        <h4 className="font-bold mb-2 mt-4">サービス</h4>
                        <p className="text-sm">{{company.services}}</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <a href={{company.website}} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">公式サイト</a>
                    </div>
                  </div>
                </div>
              );
            }})}}
          </div>
        </div>
      </section>

      {{/* エリア特有のポイント */}}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{ward['name']}でハウスクリーニングを依頼する際のポイント</h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">{ward['point1_title']}</h3>
            <p className="text-lg mb-4">
              {ward['point1_text']}
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">{ward['point2_title']}</h3>
            <p className="text-lg mb-4">
              {ward['point2_text']}
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">{ward['point3_title']}</h3>
            <p className="text-lg mb-4">
              {ward['point3_text']}
            </p>
          </div>
        </div>
      </section>

      {{/* 料金相場 */}}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{ward['name']}の料金相場</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold mb-2">エアコン</h3>
                <p className="text-3xl font-bold text-primary">8,000円〜</p>
                <p className="text-sm text-gray-600">1台あたり</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold mb-2">浴室</h3>
                <p className="text-3xl font-bold text-primary">12,000円〜</p>
                <p className="text-sm text-gray-600">一式</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <h3 className="text-xl font-bold mb-2">キッチン</h3>
                <p className="text-3xl font-bold text-primary">10,000円〜</p>
                <p className="text-sm text-gray-600">一式</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* 賢く安く依頼するコツ */}}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">賢く安く依頼するコツ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">💰 複数業者から見積もり</h3>
                  <p>{ward['name']}は業者が多いため、最低3社から見積もりを取ることをおすすめします。</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">📅 閑散期を狙う</h3>
                  <p>1月、2月、6月などの閑散期は料金が安くなる傾向があります。繁忙期（3-4月、9-10月）を避けるだけで10-20%お得になることも。</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">🎁 セット割引を活用</h3>
                  <p>エアコン+浴室など複数箇所をまとめて依頼すると、セット割引が適用される業者が多いです。</p>
                </div>
              </div>
              
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">⏰ 平日・午前中を選ぶ</h3>
                  <p>土日や夜間は割増料金の業者が多いです。平日の午前中など、通常料金で対応してもらえる時間帯を選びましょう。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* 業者の選び方 */}}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">失敗しない業者の選び方</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ 料金が明確</h3>
                <p className="text-lg">事前見積もりで追加料金の有無を確認。「追加料金なし」を明記している業者が安心です。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ 実績と口コミ</h3>
                <p className="text-lg">Googleレビューや口コミサイトで実際の利用者の声を確認。評価3.5以上が目安です。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ 損害保険に加入</h3>
                <p className="text-lg">万が一の破損・傷に備えて、損害保険加入業者を選びましょう。大手は必ず加入しています。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ スタッフの研修体制</h3>
                <p className="text-lg">研修制度がしっかりした業者は技術力が高く、仕上がりに差が出ます。研修期間50日以上が一つの基準です。</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-bold mb-2">✓ {ward['name']}の環境に適した業者を選ぶ</h3>
                <p className="text-lg">{ward['name']}は{ward['intro'].split('。')[0]}。見積もり時に地域特性を伝えると、適切な提案がもらえます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* FAQ */}}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
            
            <div className="space-y-4">
              <div className="collapse collapse-arrow bg-base-100 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 札幌市{ward['name']}でハウスクリーニングの料金相場はいくらですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 作業時間はどれくらいかかりますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 即日対応は可能ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">{ward['name']}は業者数が多く、即日対応可能な業者もあります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前の予約がおすすめです。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 立ち会いは必要ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">作業開始時と終了時の立ち会いが基本です。作業中は外出可能な業者もありますが、貴重品の管理などのため在宅が推奨されます。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100 border">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. どれくらいの頻度で依頼すべきですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* まとめ */}}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">まとめ：{ward['name']}で最適なハウスクリーニング業者を見つけよう</h2>
            
            <p className="text-lg mb-6">
              {ward['intro']}
              本記事で紹介した<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>は、いずれも{ward['name']}全域で実績豊富な信頼できる業者です。
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">業者選びのポイント まとめ</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>複数業者から見積もりを取る</li>
                <li>口コミ・実績を確認する</li>
                <li>料金体系が明確か確認する</li>
                <li>損害保険加入を確認する</li>
                <li>閑散期（1-2月、6月）を狙う</li>
                <li>{ward['name']}の環境に適した業者を選ぶ</li>
              </ul>
            </div>
            
            <p className="text-lg font-bold">
              まずは気になる業者3社に見積もり依頼をして、料金とサービス内容を比較することから始めてみてください。
            </p>
          </div>
        </div>
      </section>

      {{/* 対応エリア */}}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{ward['name']}内の対応エリア</h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {{areas.map((area) => (
              <div key={{area}} className="badge badge-lg badge-outline">{{area}}</div>
            ))}}
          </div>
        </div>
      </section>

      {{/* 近隣エリア */}}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/fukuoka" className="btn btn-outline">札幌県</Link>
'''
    
    # 近隣エリアリンクを追加（最大3つ）
    for i, neighbor in enumerate(neighbors[:3]):
        template += f'''            <Link href="/areas/{neighbor['slug']}" className="btn btn-outline">{neighbor['name']}</Link>
'''
    
    template += '''          </div>
        </div>
      </section>

      <footer className="footer footer-center p-10 bg-base-200">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p className="text-sm mt-2">© 2024 クリーンナビ All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
'''
    
    return template

def main():
    base_dir = os.path.expanduser('~/projects/clean-navi/app/areas')
    
    for ward in SAPPORO_WARDS:
        dir_path = os.path.join(base_dir, ward['slug'])
        os.makedirs(dir_path, exist_ok=True)
        
        page_content = generate_ward_page(ward)
        page_path = os.path.join(dir_path, 'page.tsx')
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(page_content)
        
        print(f"✓ Created: {ward['name']} ({ward['slug']})")
    
    print(f"\n完了: 札幌市{len(SAPPORO_WARDS)}区のページ生成完了")

if __name__ == '__main__':
    main()
