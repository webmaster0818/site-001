import Link from "next/link";
import { Sparkles, Award, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "世田谷区のハウスクリーニング業者おすすめ比較 | クリーンナビ",
  description: "世田谷区でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
  openGraph: {
    title: "世田谷区のハウスクリーニング業者おすすめ比較 | クリーンナビ",
    description: "世田谷区でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
    url: "https://clean-navi.jp/areas/tokyo-setagaya/",
    siteName: "クリーンナビ",
    images: [
      {
        url: "https://clean-navi.jp/og-image.png",
        width: 1200,
        height: 630,
        alt: "世田谷区のハウスクリーニング業者比較 - クリーンナビ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "世田谷区のハウスクリーニング業者おすすめ比較 | クリーンナビ",
    description: "世田谷区でおすすめのハウスクリーニング業者を徹底比較。全域対応。料金相場、口コミ評価を掲載。",
    images: ["https://clean-navi.jp/og-image.png"],
  },
  alternates: {
    canonical: "https://clean-navi.jp/areas/tokyo-setagaya/",
  },
};

export default function TokyosetagayaArea() {
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


      const companies = [
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
  ];
  const areas = ['三軒茶屋', '下北沢', '二子玉川', '成城', '等々力', '駒沢'];
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">世田谷区のハウスクリーニング業者比較</h1>
          <p className="text-xl">世田谷区全域対応！信頼できる業者をご紹介</p>
        </div>
      </section>

      {/* パンくずリスト */}
      <div className="bg-base-100 py-4 border-b border-base-300">
        <div className="container mx-auto px-4">
          <div className="breadcrumbs text-sm">
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/areas/tokyo/">東京都</Link></li>
              <li>世田谷区</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">世田谷区でハウスクリーニングを依頼するなら？</h2>
            <p className="text-lg">世田谷区は東京23区で最も人口が多い区で、住宅地が広がっています。ファミリー世帯が多く、ハウスクリーニングの需要が高いエリアです。</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者比較</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>キッチン</th>
                  <th>浴室</th>
                  <th>トイレ</th>
                  
                </tr>
              </thead>
              <tbody>
                {companies.map((c, i) => (
                  <tr key={i}>
                    <td className="font-bold">{c.name}</td>
                    <td>{c.kitchen}</td>
                    <td>{c.bathroom}</td>
                    <td>{c.toilet}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">対応エリア</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {areas.map(a => <div key={a} className="badge badge-lg badge-outline p-4">{a}</div>)}
          </div>
        </div>
      </section>

      {/* 各業者詳細 */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者詳細</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {companies.map((company, index) => {
              const Icon = companyIcons[index % companyIcons.length];
              const gradient = companyColors[index % companyColors.length];
              return (
                <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="card-title text-2xl">{company.name}</h3>
                        
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2">料金</h4>
                        <ul className="space-y-1">
                          <li>• キッチン: {company.kitchen}</li>
                          <li>• 浴室: {company.bathroom}</li>
                          <li>• トイレ: {company.toilet}</li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">料金相場</h2>
            <ul className="space-y-2">
              <li>• エアコンクリーニング：10,000円〜15,000円</li>
              <li>• キッチンクリーニング：18,000円〜20,000円</li>
              <li>• 浴室クリーニング：19,000円〜22,000円</li>
              <li>• トイレクリーニング：9,000円〜10,000円</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">世田谷区で最適な業者を見つけよう</h2>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/services/aircon" className="btn btn-lg bg-white text-primary">サービスから探す</Link>
            <Link href="/price" className="btn btn-lg btn-outline text-white border-white">料金相場を見る</Link>
          </div>
        </div>
      </section>

      {/* エリア特有のポイント */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">世田谷区でハウスクリーニングを依頼する際のポイント</h2>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">東京23区最大の人口・ファミリー世帯が多い</h3>
            <p className="text-lg mb-4">
              世田谷区は東京23区で最も人口が多く（約93万人）、ファミリー世帯が中心の住宅地が広がっています。
              子育て世帯が多いため、清潔で快適な住環境を保つためのハウスクリーニング需要が高いエリアです。
              浴室、キッチン、エアコンなど、家族が毎日使う場所の定期的な清掃が重要です。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">高級住宅地と一般住宅地の混在</h3>
            <p className="text-lg mb-4">
              世田谷区には成城、等々力、田園調布などの高級住宅地から、三軒茶屋、下北沢、駒沢などの一般住宅地まで多様なエリアが存在します。
              戸建て住宅も多く、庭や外構の清掃、大型エアコンの清掃など、戸建て特有のクリーニングニーズもあります。
              一方、マンションも多く、高層階の窓清掃や共用部の清掃も需要が高い地域です。
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">東京都心に隣接し業者の選択肢が豊富</h3>
            <p className="text-lg mb-4">
              世田谷区は渋谷区、目黒区など都心に隣接しており、多くのハウスクリーニング業者が営業しています。
              大手チェーンから地域密着型まで選択肢が豊富で、競争も激しいため価格も比較的良心的です。
              複数社を比較することで、最適な業者を見つけやすい環境といえます。
            </p>
          </div>
        </div>
      </section>

      {/* 賢く安く依頼するコツ */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">賢く安く依頼するコツ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-xl">💰 複数業者から見積もり</h3>
                  <p>世田谷区は業者が非常に多いため、最低3社から見積もりを取ることをおすすめします。特に都心に近いエリアは業者数が豊富で比較しやすい環境です。</p>
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
                  <p>エアコン+浴室など複数箇所をまとめて依頼すると、セット割引が適用される業者が多いです。戸建ての場合は庭・外構も含めたセット依頼がお得です。</p>
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

      {/* 業者の選び方 */}
      <section className="py-16 bg-base-100">
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
                <h3 className="text-xl font-bold mb-2">✓ 戸建て・マンション両方の経験</h3>
                <p className="text-lg">世田谷区は戸建てとマンションが混在しているため、両方の清掃経験が豊富な業者を選びましょう。戸建ての庭・外構、マンションの高層階など、それぞれに適した対応ができる業者が安心です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
            
            <div className="space-y-4">
              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 世田谷区でハウスクリーニングの料金相場はいくらですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。世田谷区は業者が多く競争が激しいため、東京23区の中でも比較的良心的な価格帯です。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 戸建てとマンションで料金に差はありますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">基本的なクリーニング料金（エアコン、浴室、キッチンなど）はほぼ同じです。ただし、戸建ての場合は庭・外構、2階以上の窓清掃などで追加料金が発生する場合があります。マンションの高層階（10階以上）では窓清掃に追加料金がかかることもあります。見積もり時に確認しましょう。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 成城・等々力など高級住宅地でも同じ料金ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">基本料金は世田谷区内でほぼ統一されています。ただし、高級住宅地の大型戸建てや特殊な設備（輸入エアコン、大理石床など）がある場合は、別途料金がかかることがあります。見積もり時に設備の詳細を伝えることをおすすめします。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 作業時間はどれくらいかかりますか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。戸建ての場合、複数台のエアコンや広いキッチンなど、全体で半日〜1日かかることもあります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 即日対応は可能ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">世田谷区は業者数が非常に多いため、即日対応可能な業者も多数あります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前の予約がおすすめです。特に週末は予約が集中するため、平日の方が予約しやすい傾向があります。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. 立ち会いは必要ですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">作業開始時と終了時の立ち会いが基本です。作業中は外出可能な業者もありますが、貴重品の管理などのため在宅が推奨されます。特に戸建ての場合、防犯面から在宅をおすすめします。</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-100">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-bold">
                  Q. どれくらいの頻度で依頼すべきですか？
                </div>
                <div className="collapse-content">
                  <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。ファミリー世帯が多い世田谷区では、子供がいる家庭は浴室・キッチンの頻度を上げる（年2回）ことで、より清潔な環境を保てます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="prose max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">まとめ：世田谷区で最適なハウスクリーニング業者を見つけよう</h2>
            
            <p className="text-lg mb-6">
              世田谷区は東京23区最大の人口を誇り、ファミリー世帯が中心の住宅地です。
              本記事で紹介した<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>は、いずれも世田谷区全域で実績豊富な信頼できる業者です。
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">業者選びのポイント まとめ</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>複数業者から見積もりを取る（3社以上）</li>
                <li>口コミ・実績を確認する</li>
                <li>料金体系が明確か確認する</li>
                <li>損害保険加入を確認する</li>
                <li>閑散期（1-2月、6月）を狙う</li>
                <li>戸建て・マンション両方の経験がある業者を選ぶ</li>
              </ul>
            </div>
            
            <p className="text-lg mb-6">
              世田谷区は成城や等々力などの高級住宅地から、三軒茶屋や下北沢などの一般住宅地まで多様なエリアがあります。
              戸建ての場合は庭・外構の清掃、マンションの場合は高層階の窓清掃など、住宅タイプに応じた対応ができる業者を選びましょう。
              業者の選択肢が豊富なため、しっかり比較して最適な業者を見つけることができます。
            </p>
            
            <p className="text-lg font-bold">
              まずは気になる業者3社に見積もり依頼をして、料金とサービス内容を比較することから始めてみてください。
            </p>
          </div>
        </div>
      </section>

      {/* 近隣エリア */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/areas/tokyo" className="btn btn-outline">東京都</Link>
            <Link href="/areas/tokyo-shibuya" className="btn btn-outline">渋谷区</Link>
            <Link href="/areas/tokyo-ota" className="btn btn-outline">大田区</Link>
            <Link href="/areas/kanagawa" className="btn btn-outline">神奈川県</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10 bg-base-200"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
