#!/usr/bin/env python3
import os
import json

# 神戸市9区の情報
KOBE_WARDS = [
    {
        "slug": "kobe-higashinada",
        "name": "東灘区",
        "reading": "ひがしなだ-く",
        "intro": "東灘区は神戸市の東部に位置し、高級住宅地として知られています。灘五郷の酒蔵があり、阪神間モダニズムの文化が息づいています。",
        "areas": ["御影", "住吉", "岡本", "魚崎", "深江", "六甲アイランド"],
        "point1_title": "高級住宅地、高品質サービス需要高",
        "point1_text": """東灘区は御影、岡本など高級住宅地が多く、高品質なハウスクリーニングサービスの需要が高いエリアです。
高級住宅では、丁寧な作業と高い技術力が求められます。
スタッフの接客マナーや研修体制がしっかりした業者を選ぶことが重要です。
見積もり時に「丁寧な作業」を重視する旨を伝えると、適切な提案がもらえます。""",
        "point2_title": "六甲山南麓の坂道多い、アクセス確認重要",
        "point2_text": """東灘区は六甲山の南麓に位置し、坂道が多いエリアです。
高台の住宅では、清掃機材の搬入に時間がかかることがあります。
見積もり時に住所と立地（坂の上、高台など）を伝えると、作業時間や料金の正確な見積もりがもらえます。
業者によっては駐車場の有無も確認されることがあります。""",
        "point3_title": "阪神・JR・阪急など鉄道3路線、交通非常に良好",
        "point3_text": """東灘区は阪神本線、JR神戸線、阪急神戸線の3路線が並行して通っており、交通の便が非常に良好です。
御影駅、住吉駅、岡本駅など主要駅が多数あり、大阪や三宮へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-nada",
        "name": "灘区",
        "reading": "なだ-く",
        "intro": "灘区は神戸市の東部に位置し、文教地区として知られています。神戸大学があり、灘の酒蔵が点在する歴史あるエリアです。",
        "areas": ["六甲", "王子公園", "灘駅前", "摩耶山", "神戸大学", "灘五郷"],
        "point1_title": "文教地区・学生街、引越しシーズン需要高",
        "point1_text": """灘区は神戸大学など教育機関が多い文教地区で、学生向けの賃貸物件が多いエリアです。
引越しシーズン（3-4月、9月）には空室クリーニングの需要が高まります。
学生向け物件では、ワンルーム・1Kなどコンパクトな物件が多いため、リーズナブルな料金設定の業者が多数あります。
学生向けのお得なプランを提供している業者も多く、選択肢が豊富です。""",
        "point2_title": "六甲山南麓、坂道多い地形",
        "point2_text": """灘区は六甲山の南麓に位置し、坂道が多いエリアです。
高台の住宅では、清掃機材の搬入に時間がかかることがあります。
見積もり時に立地（坂の上、高台など）を伝えると、作業時間や料金の正確な見積もりがもらえます。
業者によっては駐車場の有無も確認されることがあります。""",
        "point3_title": "阪神・JR・阪急など鉄道3路線、交通良好",
        "point3_text": """灘区は阪神本線、JR神戸線、阪急神戸線が通っており、交通の便が良好です。
六甲道駅、灘駅、王子公園駅など主要駅があり、三宮や大阪へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-chuo",
        "name": "中央区",
        "reading": "ちゅうおう-く",
        "intro": "中央区は神戸市の中心部に位置し、三宮・元町がある神戸の中心街です。港町として栄え、観光地も多く、商業施設が集積しています。",
        "areas": ["三宮", "元町", "北野", "ハーバーランド", "旧居留地", "ポートアイランド"],
        "point1_title": "三宮・元町など中心街、都市汚れ・排気ガス対策重要",
        "point1_text": """中央区は三宮・元町など神戸市の中心街で、人通り・車通りが非常に多いエリアです。
都心部のため、排気ガスや都市汚れが窓ガラスやエアコンに付着しやすい環境です。
特に幹線道路沿いや駅周辺では、排気ガスや黄砂、PM2.5などの汚れが蓄積しやすくなります。
定期的な窓清掃（年2回）とエアコンクリーニング（年1回）で、快適な室内環境を保つことが重要です。""",
        "point2_title": "高層ビル・オフィスビル多数、高層階清掃技術必要",
        "point2_text": """中央区は三宮周辺に高層ビルやオフィスビルが多数あるエリアです。
神戸市役所、神戸阪急ビルなど高層ビルが林立し、タワーマンションも増えています。
高層階は風が強く、窓ガラスに汚れが付着しやすい環境です。
また、高層階のエアコンは室外機の設置場所が限られるため、専門的な清掃技術が必要です。
業者選びでは、高層階での清掃経験が豊富で、専門的な技術と安全対策がしっかりした業者を選ぶことが重要です。""",
        "point3_title": "JR・阪急・阪神・地下鉄・ポートライナーなど交通非常に良好",
        "point3_text": """中央区はJR神戸線、阪急神戸線、阪神本線、地下鉄西神・山手線、ポートライナーなど複数の鉄道路線が通っており、交通の便が非常に良好です。
三宮駅を中心に、元町駅、新神戸駅など主要駅が多数あり、神戸市内各地からアクセスしやすいエリアです。
多くのハウスクリーニング業者が営業しており、大手チェーンから地域密着型まで選択肢が非常に豊富です。
即日対応可能な業者も多数あり、複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-hyogo",
        "name": "兵庫区",
        "reading": "ひょうご-く",
        "intro": "兵庫区は神戸市の中央部に位置し、古くからの港町として発展してきたエリアです。下町情緒が残り、商工業が盛んです。",
        "areas": ["兵庫駅前", "新開地", "湊川", "和田岬", "大開", "平野"],
        "point1_title": "下町・古い住宅多い、カビ・湿気対策重要",
        "point1_text": """兵庫区は古くからの下町で、木造住宅や築年数の経った建物が多いエリアです。
古い住宅では湿気がこもりやすく、カビが発生しやすい環境です。
神戸市は梅雨が長く（6-7月）、年間降水量も多いため、湿気対策が重要です。
特に浴室やキッチンの水回りは、カビが発生しやすくなります。
プロによる浴室クリーニング（年1回）と換気扇清掃で、カビの発生を抑えることができます。""",
        "point2_title": "港町・工業地帯、排気ガス・粉塵対策",
        "point2_text": """兵庫区は港町・工業地帯で、排気ガスや粉塵が多いエリアです。
窓ガラスやエアコンに汚れが付着しやすい環境です。
特に幹線道路沿いや工場周辺では、排気ガスや粉塵、黄砂などの汚れが蓄積しやすくなります。
年2回の窓清掃とエアコンクリーニング（年1回）で、快適な室内環境を保てます。""",
        "point3_title": "JR・阪神・地下鉄など交通良好",
        "point3_text": """兵庫区はJR神戸線、阪神本線、地下鉄西神・山手線などが通っており、交通の便が良好です。
兵庫駅、新開地駅、湊川駅など主要駅があり、三宮へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-kita",
        "name": "北区",
        "reading": "きた-く",
        "intro": "北区は神戸市の北部に位置し、六甲山の北側に広がる山間部のエリアです。自然豊かでニュータウンも発展しています。",
        "areas": ["鈴蘭台", "北神", "有馬温泉", "淡河", "藤原台", "箕谷"],
        "point1_title": "山間部・自然豊か、花粉・虫対策重要",
        "point1_text": """北区は六甲山の北側に広がる山間部で、自然豊かなエリアです。
春の花粉シーズン（3-4月）には花粉がエアコンのフィルターに詰まりやすくなります。
花粉がエアコンのフィルターに詰まると、効率が低下し電気代が上がります。
また、夏場（6-9月）は虫が多く、網戸や窓枠に虫の死骸が溜まりやすくなります。
エアコンクリーニング（年1回、特に使用前の5-6月）と窓清掃で、快適な室内環境を保てます。""",
        "point2_title": "ニュータウン多数、新しい住宅と古い住宅混在",
        "point2_text": """北区には藤原台、鈴蘭台などニュータウンが多数あり、新しい住宅と古い住宅が混在しています。
新しい建物では最新の設備が導入されていますが、定期的なメンテナンスは重要です。
古い住宅では湿気対策が重要で、カビが発生しやすい環境です。
エアコンクリーニング（年1回）と浴室クリーニングで、快適な室内環境を保てます。""",
        "point3_title": "神戸電鉄など交通やや不便、地域密着型業者豊富",
        "point3_text": """北区は神戸電鉄が主な交通手段で、三宮や大阪へのアクセスはやや不便です。
しかし、地域密着型のハウスクリーニング業者が多数あり、地元の特性を理解した業者が多いエリアです。
見積もり時に地域特性（山間部、坂道など）を伝えると、適切な提案がもらえます。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-nagata",
        "name": "長田区",
        "reading": "ながた-く",
        "intro": "長田区は神戸市の中央部に位置し、下町情緒が残るエリアです。古くからの商店街が多く、住宅地が中心です。",
        "areas": ["新長田", "長田駅前", "大橋", "丸山", "駒ヶ林", "二葉町"],
        "point1_title": "下町・古い住宅多い、カビ・湿気対策重要",
        "point1_text": """長田区は古くからの下町で、木造住宅や築年数の経った建物が多いエリアです。
古い住宅では湿気がこもりやすく、カビが発生しやすい環境です。
神戸市は梅雨が長く（6-7月）、年間降水量も多いため、湿気対策が重要です。
特に浴室やキッチンの水回りは、カビが発生しやすくなります。
プロによる浴室クリーニング（年1回）と換気扇清掃で、カビの発生を抑えることができます。""",
        "point2_title": "商店街・住宅地混在、生活密着型サービス需要",
        "point2_text": """長田区は商店街と住宅地が混在するエリアで、生活密着型のハウスクリーニングサービスの需要が高いです。
地域密着型の業者が多く、親しみやすいサービスが特徴です。
在宅クリーニングの需要が高く、見積もり時に在宅希望を伝えると、柔軟に対応してもらえます。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
        "point3_title": "JR・地下鉄・山陽電鉄など交通良好",
        "point3_text": """長田区はJR神戸線、地下鉄西神・山手線、山陽電鉄本線などが通っており、交通の便が良好です。
新長田駅、長田駅など主要駅があり、三宮や姫路へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-suma",
        "name": "須磨区",
        "reading": "すま-く",
        "intro": "須磨区は神戸市の西部に位置し、須磨海岸で知られる海沿いのエリアです。住宅地が広がり、ファミリー層に人気です。",
        "areas": ["須磨", "板宿", "名谷", "妙法寺", "落合", "北須磨"],
        "point1_title": "須磨海岸など海沿い、塩害・潮風対策重要",
        "point1_text": """須磨区は須磨海岸など海沿いのエリアで、潮風による塩害が問題となります。
窓ガラスやエアコンの室外機に塩分が付着しやすい環境です。
特に台風シーズン（7-10月）は塩分を含んだ強風が吹くため、エアコンの腐食や窓ガラスの曇りが発生しやすくなります。
海沿いエリアでは、年2-3回の窓清掃とエアコンクリーニング（年1回）に加え、室外機の洗浄も重要です。""",
        "point2_title": "住宅地中心、ファミリー向けサービス需要",
        "point2_text": """須磨区は住宅地が中心で、ファミリー層が多いエリアです。
在宅クリーニングの需要が高く、広めの物件（2LDK〜）が多いです。
ファミリー向けのセットプラン（エアコン複数台+浴室+キッチンなど）がお得です。
見積もり時に複数箇所の清掃を依頼すると、セット割引が適用されることが多いです。""",
        "point3_title": "JR・山陽電鉄・地下鉄など交通良好",
        "point3_text": """須磨区はJR神戸線、山陽電鉄本線、地下鉄西神・山手線などが通っており、交通の便が良好です。
須磨駅、板宿駅、名谷駅など主要駅があり、三宮や姫路へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-tarumi",
        "name": "垂水区",
        "reading": "たるみ-く",
        "intro": "垂水区は神戸市の西部に位置し、明石海峡大橋で知られる海沿いのエリアです。ベッドタウンとして発展し、住環境が良好です。",
        "areas": ["垂水駅前", "舞子", "学園都市", "塩屋", "霞ヶ丘", "星陵台"],
        "point1_title": "明石海峡沿い、塩害・潮風対策重要",
        "point1_text": """垂水区は明石海峡沿いのエリアで、潮風による塩害が問題となります。
窓ガラスやエアコンの室外機に塩分が付着しやすい環境です。
特に台風シーズン（7-10月）は塩分を含んだ強風が吹くため、エアコンの腐食や窓ガラスの曇りが発生しやすくなります。
海沿いエリアでは、年2-3回の窓清掃とエアコンクリーニング（年1回）に加え、室外機の洗浄も重要です。""",
        "point2_title": "ベッドタウン・住宅地中心、ファミリー向けサービス需要",
        "point2_text": """垂水区はベッドタウンとして発展し、住宅地が中心のエリアです。
ファミリー層が多く、在宅クリーニングの需要が高いです。
広めの物件が多く、セットプラン（エアコン複数台+浴室+キッチンなど）がお得です。
見積もり時に複数箇所の清掃を依頼すると、セット割引が適用されることが多いです。""",
        "point3_title": "JR・山陽電鉄など交通良好",
        "point3_text": """垂水区はJR神戸線、山陽電鉄本線などが通っており、交通の便が良好です。
垂水駅、舞子駅、学園都市駅など主要駅があり、三宮や姫路へもアクセスしやすいエリアです。
多くのハウスクリーニング業者が対応しており、大手チェーンから地域密着型まで選択肢が豊富です。
複数社を比較することで、最適な業者を見つけやすい環境といえます。""",
    },
    {
        "slug": "kobe-nishi",
        "name": "西区",
        "reading": "にし-く",
        "intro": "西区は神戸市の西部内陸部に位置し、西神ニュータウンなど計画的に開発されたエリアです。農地と住宅地が混在しています。",
        "areas": ["西神中央", "西神南", "伊川谷", "玉津", "平野", "押部谷"],
        "point1_title": "西神ニュータウンなど計画都市、新しい住宅多い",
        "point1_text": """西区は西神ニュータウンなど計画的に開発されたエリアで、新しい住宅が多いです。
最新の設備が導入されていますが、定期的なメンテナンスは重要です。
エアコンクリーニング（年1回、特に使用前の5-6月）で快適な室内環境を保てます。
新築・築浅物件でも、使用開始2-3年でエアコン内部にカビが発生することがあります。""",
        "point2_title": "内陸部・農地混在、花粉・虫対策",
        "point2_text": """西区は内陸部で農地も多く、春の花粉シーズン（3-4月）には花粉がエアコンのフィルターに詰まりやすくなります。
花粉がエアコンのフィルターに詰まると、効率が低下し電気代が上がります。
また、夏場（6-9月）は虫が多く、網戸や窓枠に虫の死骸が溜まりやすくなります。
エアコンクリーニング（年1回）と窓清掃で、快適な室内環境を保てます。""",
        "point3_title": "地下鉄西神・山手線など交通良好",
        "point3_text": """西区は地下鉄西神・山手線が通っており、交通の便が良好です。
西神中央駅、西神南駅など主要駅があり、三宮へもアクセスしやすいエリアです。
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
    
    # 近隣エリアリンク（神戸市の他の区）
    neighbors = []
    for w in KOBE_WARDS:
        if w['slug'] != ward['slug']:
            neighbors.append({'slug': w['slug'], 'name': f"神戸市{w['name']}"})
    
    # エリアリストを文字列に変換
    areas_str = ', '.join([f"'{a}'" for a in ward['areas']])
    
    # 区名からコンポーネント名を生成（例: 東灘区 → Higashinada）
    component_name = ward['slug'].replace('kobe-', '').title().replace('-', '')
    
    template = f'''import Link from "next/link";
import {{ Sparkles, Award, Shield, Zap }} from "lucide-react";

export const metadata = {{
  title: "神戸市{ward['name']}のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "神戸市{ward['name']}でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
}};

export default function Kobe{component_name}Area() {{
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
          <h1 className="text-4xl font-bold mb-4">神戸市{ward['name']}のハウスクリーニング業者比較</h1>
          <p className="text-xl">{ward['name']}全域対応！信頼できる業者をご紹介</p>
        </div>
      </section>

      {{/* 導入文 */}}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">神戸市{ward['name']}でハウスクリーニングを依頼するなら？</h2>
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
                  Q. 神戸市{ward['name']}でハウスクリーニングの料金相場はいくらですか？
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
            <Link href="/areas/hyogo" className="btn btn-outline">兵庫県</Link>
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
    
    for ward in KOBE_WARDS:
        dir_path = os.path.join(base_dir, ward['slug'])
        os.makedirs(dir_path, exist_ok=True)
        
        page_content = generate_ward_page(ward)
        page_path = os.path.join(dir_path, 'page.tsx')
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(page_content)
        
        print(f"✓ Created: {ward['name']} ({ward['slug']})")
    
    print(f"\n完了: 神戸市{len(KOBE_WARDS)}区のページ生成完了")

if __name__ == '__main__':
    main()
