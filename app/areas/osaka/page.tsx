import Link from "next/link";
import AreaProvidersLead from "../../components/AreaProvidersLead";
import {Building2, CheckCircle, Star, MapPin, Phone, Mail, Sparkles, Award, Shield, Zap, Crown } from "lucide-react";
import CompanyShot from "../../components/CompanyShot";

export const metadata = {
 title: "大阪府のハウスクリーニング業者おすすめ比較 | クリーンナビ",
 description: "大阪府のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 openGraph: {
 title: "大阪府のハウスクリーニング業者おすすめ比較 | クリーンナビ",
 description: "大阪府のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 url: "https://cleaning-choices.com/areas/osaka/",
 siteName: "クリーンナビ",
 images: [
 {
 url: "https://cleaning-choices.com/og-image.png?v=20261016",
 width: 1200,
 height: 630,
 alt: "大阪府のハウスクリーニング業者比較 - クリーンナビ",
 },
 ],
 locale: "ja_JP",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "大阪府のハウスクリーニング業者おすすめ比較 | クリーンナビ",
 description: "大阪府のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 images: ["https://cleaning-choices.com/og-image.png?v=20261016"],
 },
 alternates: {
 canonical: "https://cleaning-choices.com/areas/osaka/",
 },
};

export default function OsakaArea() {
 const companyIcons = [Sparkles, Award, Shield, Zap, Crown];
 const companyColors = [
 "from-blue-500 to-blue-600",
 "from-green-500 to-green-600",
 "from-purple-500 to-purple-600",
 "from-orange-500 to-orange-600",
 "from-red-500 to-red-600",
 ];

 const companies = [
 {
 name: "おそうじ革命", 
 kitchen: "17,930円〜", 
 bathroom: "17,930円〜", 
 toilet: "8,250円〜",
 description: "技術力と価格のバランスを特徴とし、全国の各エリアに対応しています（一部地域を除く）。50日間の研修を受けたスタッフが対応します。",
 hours: "店舗により異なる（年末年始を除き土日祝も営業）",
 services: "エアコン、浴室、キッチン、トイレ、換気扇クリーニング",
 website: "https://www.osoujikakumei.jp/"
 },
 {
 name: "おそうじ本舗", 
 kitchen: "18,700円〜", 
 bathroom: "18,700円〜", 
 toilet: "9,900円〜",
 description: "全国47都道府県に対応する全国チェーンです。混雑期でも予約が取りやすく、早朝・夜間の要望にも対応しています（公式）。",
 hours: "店舗により異なる（定休日も店舗ごと）",
 services: "エアコン、浴室、キッチン、トイレ、洗濯機、外壁クリーニング",
 website: "https://www.osoujihonpo.com/"
 },
 {
 name: "カジタク", 
 kitchen: "19,580円〜", 
 bathroom: "19,580円〜", 
 toilet: "19,580円",
 description: "イオングループが運営しています。お客さま満足度95%（2025年 カジタク調べ）。",
 hours: "10:00-17:00（年末年始除く）",
 services: "エアコン、浴室、キッチン、換気扇、窓・サッシクリーニング",
 website: "https://www.kajitaku.com/"
 },
 {
 name: "ベアーズ", 
 kitchen: "18,920円〜", 
 bathroom: "19,910円〜", 
 toilet: "10,340円〜",
 description: "家事代行大手によるサービスです。スタッフ教育に力を入れ、丁寧な作業を特徴としています。",
 hours: "受付9:00〜18:00（年中無休）",
 services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
 website: "https://www.happy-bears.com/"
 },
 {
 name: "ダスキン", 
 kitchen: "20,680円〜", 
 bathroom: "22,000円〜", 
 toilet: "10,340円〜",
 description: "清掃業界の老舗大手です。47都道府県に拠点があり、専門の資器材と洗剤で清掃します。",
 hours: "電話受付 8:00〜20:00（年中無休）",
 services: "エアコン、浴室、キッチン、トイレ、レンジフード、フロアクリーニング",
 website: "https://www.duskin.jp/servicemaster/"
 },
 {
 name: "東京ガスのハウスクリーニング", 
 kitchen: "19,800円〜", 
 bathroom: "17,600円〜", 
 toilet: "13,200円〜",
 description: "東京ガスが提供しています。対応エリアは東京・神奈川・埼玉・千葉と群馬・茨城の一部（公式の対応エリア一覧）。支払いはクレジットカードのみ。",
 hours: "訪問開始8:30〜18:00の時間帯から選択（土日祝も可・12/29〜1/4除く）",
 services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
 website: "https://kaji.tokyo-gas.co.jp/"
 },
 {
 name: "サニクリーン", 
 kitchen: "見積もり制", 
 bathroom: "見積もり制", 
 toilet: "見積もり制",
 description: "全国対応の大手清掃会社です。無料見積もりで、事前に汚れの状況を確認します。",
 hours: "電話受付 10:00〜16:00（土・日・祝日を除く）",
 services: "エアコン、キッチン、浴室、トイレ、換気扇・レンジフード、フロア、まるごとハウスクリーニング",
 website: "https://www.sanikleen.co.jp/housecleaning/"
 },
 {
 name: "お掃除マスター", 
 kitchen: "8,000円〜", 
 bathroom: "12,600円〜", 
 toilet: "8,000円〜",
 description: "全国の加盟店からスタッフを手配する紹介型サービスです（運営：株式会社アシスト）。出張料はかかりません（公式）。",
 hours: "24時間365日受付",
 services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
 website: "https://osoji-master.info/"
 },
 {
 name: "アズマのホームクリーニング", 
 kitchen: "19,800円〜", 
 bathroom: "19,800円〜", 
 toilet: "13,200円〜",
 description: "掃除用品メーカーのアズマ工業（1896年創業）が運営しています。年間実績は全国20,000件です（公式）。",
 hours: "電話受付 平日9:00〜17:00",
 services: "エアコン、浴室、キッチン、トイレ、換気扇、窓クリーニング",
 website: "https://www.azuma-cleaning.com/"
 },
 {
 name: "くらしのセゾン", 
 kitchen: "19,690円〜", 
 bathroom: "20,900円〜", 
 toilet: "10,010円〜",
 description: "クレディセゾングループのサービスです。セゾン/UCカード会員はハウスクリーニング全メニュー5%OFF（オプション除く）、一部メニューで永久不滅ポイントを利用できます（公式）。",
 hours: "9:00〜17:00（土日祝除く）",
 services: "エアコン、浴室、キッチン、トイレ、換気扇、洗濯機クリーニング",
 website: "https://www.kurashi-saison.co.jp/cleaning/"
 },
 {
 name: "エディオンハウスクリーン", 
 kitchen: "19,800円〜", 
 bathroom: "19,800円〜", 
 toilet: "9,240円〜",
 description: "家電量販店エディオンの「家電のプロのクリーニングサービス」です。提供は同社の指定エリア内に限られます（公式）。",
 hours: "店舗により異なる（公式の店舗検索で確認）",
 services: "エアコン、浴室、キッチン、トイレ、換気扇、家電周辺クリーニング",
 website: "https://www.edion.co.jp/service/satisfied/cleaning"
 },
 ];

 // 大阪市24区（リンク付き）
 const osakaWards = [
 {name: "北区", slug: "osaka-kita"},
 {name: "都島区", slug: "osaka-miyakojima"},
 {name: "福島区", slug: "osaka-fukushima"},
 {name: "此花区", slug: "osaka-konohana"},
 {name: "中央区", slug: "osaka-chuo"},
 {name: "西区", slug: "osaka-nishi"},
 {name: "港区", slug: "osaka-minato"},
 {name: "大正区", slug: "osaka-taisho"},
 {name: "天王寺区", slug: "osaka-tennoji"},
 {name: "浪速区", slug: "osaka-naniwa"},
 {name: "西淀川区", slug: "osaka-nishiyodogawa"},
 {name: "淀川区", slug: "osaka-yodogawa"},
 {name: "東淀川区", slug: "osaka-higashiyodogawa"},
 {name: "東成区", slug: "osaka-higashinari"},
 {name: "生野区", slug: "osaka-ikuno"},
 {name: "旭区", slug: "osaka-asahi"},
 {name: "城東区", slug: "osaka-joto"},
 {name: "鶴見区", slug: "osaka-tsurumi"},
 {name: "阿倍野区", slug: "osaka-abeno"},
 {name: "住之江区", slug: "osaka-suminoe"},
 {name: "住吉区", slug: "osaka-sumiyoshi"},
 {name: "東住吉区", slug: "osaka-higashisumiyoshi"},
 {name: "平野区", slug: "osaka-hirano"},
 {name: "西成区", slug: "osaka-nishinari"},
 ];

 // その他の市（テキストのみ、ページ未作成）
 const otherCities = [
 "堺市", "岸和田市", "豊中市", "池田市", "吹田市", "泉大津市", "高槻市",
 "貝塚市", "守口市", "枚方市", "茨木市", "八尾市", "泉佐野市", "富田林市", "寝屋川市",
 "河内長野市", "松原市", "大東市", "和泉市", "箕面市", "柏原市", "羽曳野市", "門真市",
 "摂津市", "高石市", "藤井寺市", "東大阪市", "泉南市", "四條畷市", "交野市", "大阪狭山市",
 "阪南市"
 ];

 return (
 <div className="min-h-screen bg-base-100">
 {/* Breadcrumbs */}
 <div className="container mx-auto px-4 py-4">
 <div className="text-sm breadcrumbs">
 <ul>
 <li><Link href="/">ホーム</Link></li>
 <li><Link href="/areas/osaka/">大阪府</Link></li>
 </ul>
 </div>
 </div>

 {/* HERO SECTION */}
 <section className="hero-section py-16 md:py-20 relative">
 {/* Background Photo */}
 <div className="hero-bg">
 <img
 src="https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1920&q=80"
 alt="大阪府の街並み"
 />
 </div>
 <div className="hero-overlay"></div>
 <div className="container mx-auto px-4 text-center relative z-10">
 <div className="flex items-center justify-center gap-3 mb-4">
 <MapPin className="w-10 h-10 text-yellow-300"/>
 <h1 className="text-3xl md:text-5xl font-black text-white leading-tight"style={{textShadow: '0 2px 16px rgba(0,0,0,0.2)' }}>
 大阪府のハウスクリーニング業者おすすめ比較
 </h1>
 </div>
 <p className="text-base md:text-xl text-white leading-relaxed max-w-3xl mx-auto"style={{textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
 大阪市・堺市・東大阪市など大阪府の業者を料金・サービス内容で比較しています
 </p>
 </div>
 {/* Wave SVG */}
 <svg
 className="hero-wave"
 viewBox="0 0 1440 80"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
 fill="#f9fafb"
 ></path>
 </svg>
 </section>
 <AreaProvidersLead slug="osaka" />
 <section className="py-8" id="ranking">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto rounded-lg border border-base-300 bg-base-100 p-5 text-sm">
 <h2 className="text-xl font-bold mb-2">大阪府のハウスクリーニング業者ランキングの見方</h2>
 <p className="mb-3">当サイトは広告費の多寡で順位を付けていません。大阪府で業者を比べるときは、①箇所別の料金（公式の通常価格）②近くの店舗の公式評価・口コミ件数（上の店舗一覧は公式の口コミ件数順）③対応エリア の3点で見るのが確実です。当サイトに掲載している大阪府内の店舗（おそうじ本舗134店・ダスキン104店・おそうじ革命16店）の3ブランドの料金は次のとおりです。</p>
 <table className="table table-sm">
 <thead><tr><th>箇所（税込）</th><th>おそうじ革命</th><th>おそうじ本舗</th><th>ダスキン</th></tr></thead>
 <tbody>
 <tr><td>エアコン（壁掛け・お掃除機能なし）</td><td>9,980円</td><td>13,200円</td><td>15,400円</td></tr>
 <tr><td>キッチン</td><td>17,930円</td><td>18,700円</td><td>20,680円</td></tr>
 <tr><td>浴室</td><td>17,930円</td><td>18,700円</td><td>22,000円</td></tr>
 <tr><td>トイレ</td><td>8,250円</td><td>9,900円</td><td>10,340円</td></tr>
 </tbody>
 </table>
 <p className="text-xs text-muted mt-2">出典: <a href="https://www.osoujikakumei.jp/price/" target="_blank" rel="noopener noreferrer" className="underline">おそうじ革命 料金（全国一律価格・2026-10-27確認）</a>・<a href="/brand/osoujihonpo/" className="underline">おそうじ本舗</a>／<a href="/brand/duskin/" className="underline">ダスキン</a>の公式標準料金（2026-10-26確認）。期間限定のキャンペーン価格・オプションは含みません。ダスキンのエアコンは家庭用壁掛け・幅120cm未満、キッチンは間口3m未満、浴室は床面積3m²・高さ2.4m未満の料金です。</p>
 <p className="mt-3">箇所別・目的別のランキングは <a href="/ranking/" className="underline text-primary">ハウスクリーニング比較ランキング</a>（<a href="/ranking/aircon-ranking/" className="underline text-primary">エアコン</a>・<a href="/ranking/bathroom-ranking/" className="underline text-primary">浴室</a>・<a href="/ranking/cheap-ranking/" className="underline text-primary">安さ重視</a>・<a href="/ranking/review-ranking/" className="underline text-primary">公式レビュー</a>）にまとめています。</p>
 </div>
 </div>
 </section>
 {/* 導入文 */}
 <section className="py-12 bg-base-100">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">大阪府でハウスクリーニングを依頼する際の基本情報</h2>
 <p className="text-lg mb-4">
 大阪府は人口が東京・神奈川に次いで全国3位と多く、世帯数も多いため、ハウスクリーニング業者の選択肢が豊富です。
 大手チェーンから地域密着型の個人業者まで、様々な業者が存在します。
 </p>
 <p className="text-lg mb-4">
 大阪は単身赴任や転勤で人の入れ替わりが激しく、賃貸マンションの数も多い都市です。
 引越しの時期（2〜4月）は空室クリーニングの依頼が集中するため、予約が取りづらくなる傾向があります。
 </p>
 <p className="text-lg">
 このページでは、大阪府でおすすめのハウスクリーニング業者を料金・サービス内容で比較してご紹介します。
 </p>
 </div>
 </div>
 </section>

 {/* 業者比較表 */}
 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">大阪府おすすめハウスクリーニング業者 比較一覧</h2>
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
 {companies.map((company, index) =>(
 <tr key={index}>
 <td className="font-bold">{company.name}</td>
 <td>{company.kitchen}</td>
 <td>{company.bathroom}</td>
 <td>{company.toilet}</td>
 
 
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* 各業者詳細 */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">各業者の詳細</h2>
 <div className="space-y-8 max-w-4xl mx-auto">
 {companies.map((company, index) =>{
 const Icon = companyIcons[index % companyIcons.length];
 const gradient = companyColors[index % companyColors.length];
 return (
 <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
 <div className="card-body">
 <div className="flex items-start gap-4">
 <CompanyShot name={company.name} />
 <div className="flex-1">
 <h3 className="card-title text-2xl">{company.name}</h3>
 {company.name === "おそうじ革命" && <a href="/review/osoujikakumei/" className="link link-primary text-sm">おそうじ革命の口コミ・評判を公式情報で検証</a>}
 <p className="text-sm text-gray-600 mt-1">{company.description}</p>
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

 {/* 大阪特有のポイント */}
 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">大阪府特有のハウスクリーニングのポイント</h2>
 
 <h3 className="text-2xl font-bold mb-4">気候に関するポイント</h3>
 <p className="mb-4">
 大阪府は瀬戸内型気候に属し、年間を通じて比較的温暖ですが、夏は蒸し暑く、梅雨時期は高湿度になります。
 このため、浴室やエアコン内部、窓のサッシ周りなど、湿気がこもりやすい場所はカビが発生しやすく、定期的なプロのクリーニングが重要です。
 </p>

 <h3 className="text-2xl font-bold mb-4 mt-8">大都市の特性</h3>
 <p className="mb-4">
 大阪府の都市部では、狭小住宅やマンションが多く見られます。また、大阪湾からの塩分を含んだ風により、
 金属の腐食や外壁の劣化が促進されやすい環境です。都市部の大気汚染により外壁や窓が汚れやすいため、
 定期的な清掃が必要です。
 </p>
 </div>
 </div>
 </section>

 {/* 対応エリア */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
 <Building2 className="w-8 h-8 text-primary"/>対応エリア（大阪府全域）
 </h2>
 <div className="max-w-5xl mx-auto">
 {/* 大阪市24区（リンク付き） */}
 <h3 className="text-2xl font-bold mb-4">大阪市24区</h3>
 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
 {osakaWards.map((ward) =>(
 <Link 
 key={ward.slug} 
 href={`/areas/${ward.slug}/`}
 className="badge badge-lg badge-outline p-4 hover:bg-primary hover:text-primary-content transition-colors cursor-pointer"
 >
 {ward.name}
 </Link>
 ))}
 </div>

 {/* その他の市（テキストのみ） */}
 <h3 className="text-2xl font-bold mb-4">その他の市</h3>
 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
 {otherCities.map((city) =>(
 <div key={city} className="badge badge-lg badge-outline hover:badge-primary cursor-pointer transition-all p-4">
 {city}
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 料金相場 */}
 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">大阪府のハウスクリーニング料金相場</h2>
 
 <h3 className="text-2xl font-bold mb-4">間取り別料金相場</h3>
 <ul className="space-y-2">
 <li>• 1LDK以下：39,000円〜74,000円</li>
 <li>• 1LDK／2DK：50,000円〜92,000円</li>
 <li>• 2LDK／3DK：63,000円〜123,000円</li>
 <li>• 3LDK／4DK：79,000円〜220,000円</li>
 <li>• 4LDK/5DK：94,000円〜211,000円</li>
 </ul>

 <h3 className="text-2xl font-bold mb-4 mt-8">場所別の料金相場</h3>
 <ul className="space-y-2">
 <li>• エアコンクリーニング：10,000円〜15,000円</li>
 <li>• キッチンクリーニング：18,000円〜20,000円</li>
 <li>• 浴室クリーニング：19,000円〜22,000円</li>
 <li>• トイレクリーニング：9,000円〜10,000円</li>
 <li>• 洗面所クリーニング：9,000円〜10,000円</li>
 </ul>
 </div>
 </div>
 </section>

 {/* 費用を抑えて依頼する方法 */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">大阪でハウスクリーニングの費用を抑えて依頼する5つの方法</h2>
 
 <div className="space-y-6">
 <div className="card bg-base-100 shadow">
 <div className="card-body">
 <h3 className="card-title">1. 複数の業者から見積もりを取る</h3>
 <p>相見積もりで料金とサービス内容を比較し、バランスの良い業者を選ぶことをおすすめします。</p>
 </div>
 </div>

 <div className="card bg-base-100 shadow">
 <div className="card-body">
 <h3 className="card-title">2. 閑散期に予約する</h3>
 <p>1〜2月や6〜7月など引越しシーズンを外した時期は、料金が下がる傾向にあります。</p>
 </div>
 </div>

 <div className="card bg-base-100 shadow">
 <div className="card-body">
 <h3 className="card-title">3. セット割引を利用する</h3>
 <p>「キッチン＋浴室＋トイレ」など、水回りをまとめて依頼すると割安になります。</p>
 </div>
 </div>

 <div className="card bg-base-100 shadow">
 <div className="card-body">
 <h3 className="card-title">4. 必要な場所だけに絞って依頼する</h3>
 <p>清掃が必要な場所に絞って依頼することで、費用を抑えることができます。</p>
 </div>
 </div>

 <div className="card bg-base-100 shadow">
 <div className="card-body">
 <h3 className="card-title">5. 問合せは電話で行う</h3>
 <p>電話で相談すると、要望に応じた柔軟な対応を受けられる場合があります。</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">よくある質問（FAQ）</h2>
 <div className="max-w-4xl mx-auto space-y-4">
 <div className="collapse collapse-plus bg-base-100 shadow">
 <input type="radio"name="faq-accordion"defaultChecked />
 <div className="collapse-title text-xl font-medium">
 Q. どこまで掃除を依頼できますか？
 </div>
 <div className="collapse-content">
 <p>業者によって異なりますが、一般的には換気扇の奥や浴室のカビ取りなど、家庭では手が届きにくい部分まで対応しています。</p>
 </div>
 </div>

 <div className="collapse collapse-plus bg-base-100 shadow">
 <input type="radio"name="faq-accordion"/>
 <div className="collapse-title text-xl font-medium">
 Q. 作業当日は何をすればいいですか？立ち会いは必要ですか？
 </div>
 <div className="collapse-content">
 <p>基本的には立ち会いを求める業者が大半です。ただし掃除の様子をずっと見守る必要はなく、作業中に家事や在宅勤務をしていても差し支えありません。</p>
 </div>
 </div>

 <div className="collapse collapse-plus bg-base-100 shadow">
 <input type="radio"name="faq-accordion"/>
 <div className="collapse-title text-xl font-medium">
 Q. 駐車スペースがない場合はどうなりますか？
 </div>
 <div className="collapse-content">
 <p>近隣のコインパーキングを利用することになります。その際の駐車料金は、実費で請求されるのが一般的です。</p>
 </div>
 </div>

 <div className="collapse collapse-plus bg-base-100 shadow">
 <input type="radio"name="faq-accordion"/>
 <div className="collapse-title text-xl font-medium">
 Q. 支払い方法を教えてください。クレジットカードは使えますか？
 </div>
 <div className="collapse-content">
 <p>クレジットカード対応の業者も増えていますが、大阪では現金のみの業者もあります。依頼前に支払い方法を確認しておくことをおすすめします。</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* エリア特有のポイント */}
 <section className="py-16 bg-base-100">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">大阪府でハウスクリーニングを依頼する際のポイント</h2>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">大阪の気候と清掃の関係</h3>
 <p className="text-lg mb-4">
 大阪は年間を通じて湿度が高く、特に梅雨時期（6月〜7月）と夏場は湿気によるカビの発生が問題になります。
 浴室やキッチン、エアコン内部は特に注意が必要で、定期的なプロのクリーニングが推奨されます。
 </p>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">マンション・集合住宅が多い大阪の住環境</h3>
 <p className="text-lg mb-4">
 大阪市内を中心に高層マンションや集合住宅が多く、換気が不十分になりがちです。
 エアコンのカビや結露によるカビの発生が起こりやすいため、年1-2回のプロによる清掃が効果的です。
 </p>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">商業地域の特性</h3>
 <p className="text-lg mb-4">
 梅田、なんば、天王寺など商業地域では飲食店が多く、油汚れや排気ガスによる汚れが蓄積しやすい環境です。
 窓や換気扇の清掃頻度を上げることで、快適な住環境を維持できます。
 </p>
 </div>
 </div>
 </section>

 {/* 費用を抑えて依頼する方法 */}
 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">費用を抑えて依頼する方法</h2>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
 <div className="card bg-base-100 shadow-lg">
 <div className="card-body">
 <h3 className="card-title text-xl">複数業者から見積もりを取る</h3>
 <p>最低3社から見積もりを取ることで、相場感が掴めて交渉もしやすくなります。大阪では業者が多いため、比較しやすい環境です。</p>
 </div>
 </div>
 
 <div className="card bg-base-100 shadow-lg">
 <div className="card-body">
 <h3 className="card-title text-xl">閑散期に依頼する</h3>
 <p>1月、2月、6月などの閑散期は料金が安くなる傾向があります。繁忙期（3-4月、9-10月）を避けることで、10-20%程度安くなる場合もあります。</p>
 </div>
 </div>
 
 <div className="card bg-base-100 shadow-lg">
 <div className="card-body">
 <h3 className="card-title text-xl">セット割引を利用する</h3>
 <p>エアコン+浴室など複数箇所をまとめて依頼すると、セット割引を適用する業者が多くなっています。年に一度のまとめ清掃が割安です。</p>
 </div>
 </div>
 
 <div className="card bg-base-100 shadow-lg">
 <div className="card-body">
 <h3 className="card-title text-xl">平日・午前中を選ぶ</h3>
 <p>土日や夜間は、割増料金を設定している業者があります。平日の午前中など、通常料金で対応できる時間帯を選ぶことをおすすめします。</p>
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
 <h2 className="text-3xl font-bold mb-8">業者の選び方</h2>
 
 <div className="space-y-6">
 <div className="border-l-4 border-primary pl-6 py-4">
 <h3 className="text-xl font-bold mb-2">料金が明確であること</h3>
 <p className="text-lg">事前の見積もりで、追加料金の有無をご確認ください。「追加料金なし」を明記している業者もあります。</p>
 </div>
 
 <div className="border-l-4 border-primary pl-6 py-4">
 <h3 className="text-xl font-bold mb-2">実績と口コミを確認する</h3>
 <p className="text-lg">Googleレビューや口コミサイトで、利用者の評価をご確認ください。評価3.5以上が目安です。</p>
 </div>
 
 <div className="border-l-4 border-primary pl-6 py-4">
 <h3 className="text-xl font-bold mb-2">損害保険に加入していること</h3>
 <p className="text-lg">万一の破損・傷に備えて、損害保険に加入している業者を選ぶことをおすすめします。大手は必ず加入しています。</p>
 </div>
 
 <div className="border-l-4 border-primary pl-6 py-4">
 <h3 className="text-xl font-bold mb-2">スタッフの研修体制を確認する</h3>
 <p className="text-lg">研修制度が整っている業者は、技術と仕上がりの品質を保ちやすい傾向があります。研修期間50日以上が一つの基準です。</p>
 </div>
 
 <div className="border-l-4 border-primary pl-6 py-4">
 <h3 className="text-xl font-bold mb-2">対応エリアと即日対応</h3>
 <p className="text-lg">大阪市内には即日対応が可能な業者もあります。急ぎの場合は対応スピードも重要な選定ポイントです。</p>
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
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 大阪でハウスクリーニングの料金相場はいくらですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。大阪は全国平均よりやや安めの傾向があります。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 作業時間はどれくらいかかりますか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 即日対応は可能ですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">大阪市内であれば即日対応可能な業者もあります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前までのご予約をおすすめします。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 立ち会いは必要ですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">作業開始時と終了時の立ち会いが基本です。作業中は外出可能な業者もありますが、貴重品の管理などのため在宅が推奨されます。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 賃貸マンションでも依頼できますか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">依頼できます。退去前のクリーニングで原状回復費用を抑えられるケースもあります。ただし、設備の分解清掃は管理会社への確認が必要な場合があります。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. どれくらいの頻度で依頼すべきですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。大阪は湿気が多いため、カビが気になる方は頻度を上げることをおすすめします。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. キャンセル料はかかりますか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">業者により異なりますが、前日17時までのキャンセルを無料とする業者が多く見られます。当日キャンセルは50-100%のキャンセル料が発生する場合があります。</p>
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
 <h2 className="text-3xl font-bold mb-8">まとめ：大阪でハウスクリーニング業者を選ぶ際のポイント</h2>
 
 <p className="text-lg mb-6">
 大阪府には多数のハウスクリーニング業者がありますが、料金・サービス内容・対応エリアは業者によって大きく異なります。
 本ページでは、<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ、ダスキン</strong>などの業者を掲載しています。
 </p>
 
 <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
 <h3 className="text-xl font-bold mb-3">業者選びのポイントのまとめ</h3>
 <ul className="list-disc list-inside space-y-2">
 <li>複数業者から見積もりを取る</li>
 <li>口コミ・実績を確認する</li>
 <li>料金体系が明確か確認する</li>
 <li>損害保険の加入を確認する</li>
 <li>閑散期（1-2月、6月）に依頼する</li>
 </ul>
 </div>
 
 <p className="text-lg mb-6">
 大阪の気候特性（高湿度）を考えると、エアコンや浴室のカビ対策は特に重要です。
 年1-2回のプロによる清掃で、快適で清潔な住環境を維持することが重要です。
 </p>
 
 <p className="text-lg font-bold">
 まずは候補の業者2〜3社に見積もりを依頼し、料金とサービス内容を比較することをおすすめします。
 </p>
 </div>
 </div>
 </section>

 {/* 近隣エリア */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
 <Link href="/areas/hyogo/"className="btn btn-outline">兵庫県</Link>
 <Link href="/areas/kyoto/"className="btn btn-outline">京都府</Link>
 <Link href="/areas/aichi/"className="btn btn-outline">愛知県</Link>
 <Link href="/areas/hiroshima/"className="btn btn-outline">広島市</Link>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-4">大阪府のハウスクリーニング業者を探す</h2>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
 <Link href="/services/aircon/"className="btn btn-lg bg-white text-primary hover:bg-base-200">サービスから探す</Link>
 <Link href="/price/"className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">料金相場を見る</Link>
 </div>
 </div>
 </section>
 </div>
 );
}
