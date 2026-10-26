import Link from "next/link";
import AreaProvidersLead from "../../components/AreaProvidersLead";
import {Building2, MapPin, Sparkles, Award, Shield, Zap } from "lucide-react";
import CompanyShot from "../../components/CompanyShot";

export const metadata = {
 title: "東京都のハウスクリーニング業者おすすめ比較 | 料金・口コミ | クリーンナビ",
 description: "東京都のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 openGraph: {
 title: "東京都のハウスクリーニング業者おすすめ比較 | 料金・口コミ | クリーンナビ",
 description: "東京都のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 url: "https://cleaning-choices.com/areas/tokyo/",
 siteName: "クリーンナビ",
 images: [
 {
 url: "https://cleaning-choices.com/og-image.png?v=20261016",
 width: 1200,
 height: 630,
 alt: "東京都のハウスクリーニング業者比較 - クリーンナビ",
 },
 ],
 locale: "ja_JP",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "東京都のハウスクリーニング業者おすすめ比較 | 料金・口コミ | クリーンナビ",
 description: "東京都のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 images: ["https://cleaning-choices.com/og-image.png?v=20261016"],
 },
 alternates: {
 canonical: "https://cleaning-choices.com/areas/tokyo/",
 },
};

export default function TokyoArea() {
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

 // 東京23区（リンク付き）
 const wards = [
 {name: "千代田区", slug: "tokyo-chiyoda"},
 {name: "中央区", slug: "tokyo-chuo"},
 {name: "港区", slug: "tokyo-minato"},
 {name: "新宿区", slug: "tokyo-shinjuku"},
 {name: "文京区", slug: "tokyo-bunkyo"},
 {name: "台東区", slug: "tokyo-taito"},
 {name: "墨田区", slug: "tokyo-sumida"},
 {name: "江東区", slug: "tokyo-koto"},
 {name: "品川区", slug: "tokyo-shinagawa"},
 {name: "目黒区", slug: "tokyo-meguro"},
 {name: "大田区", slug: "tokyo-ota"},
 {name: "世田谷区", slug: "tokyo-setagaya"},
 {name: "渋谷区", slug: "tokyo-shibuya"},
 {name: "中野区", slug: "tokyo-nakano"},
 {name: "杉並区", slug: "tokyo-suginami"},
 {name: "豊島区", slug: "tokyo-toshima"},
 {name: "北区", slug: "tokyo-kita"},
 {name: "荒川区", slug: "tokyo-arakawa"},
 {name: "板橋区", slug: "tokyo-itabashi"},
 {name: "練馬区", slug: "tokyo-nerima"},
 {name: "足立区", slug: "tokyo-adachi"},
 {name: "葛飾区", slug: "tokyo-katsushika"},
 {name: "江戸川区", slug: "tokyo-edogawa"},
 ];

 // 多摩地域など（テキストのみ、ページ未作成）
 const cities = [
 "八王子市", "立川市", "武蔵野市", "三鷹市", "府中市", "調布市", "町田市", "小金井市"
 ];

 return (
 <div className="min-h-screen bg-base-100">
 {/* Breadcrumbs */}
 <div className="container mx-auto px-4 py-4">
 <div className="text-sm breadcrumbs">
 <ul>
 <li><Link href="/">ホーム</Link></li>
 <li><Link href="/areas/tokyo/">東京都</Link></li>
 </ul>
 </div>
 </div>

 {/* HERO SECTION */}
 <section className="hero-section py-16 md:py-20 relative">
 {/* Background Photo */}
 <div className="hero-bg">
 <img
 src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"
 alt="東京都の街並み"
 />
 </div>
 <div className="hero-overlay"></div>
 <div className="container mx-auto px-4 text-center relative z-10">
 <div className="flex items-center justify-center gap-3 mb-4">
 <MapPin className="w-10 h-10 text-yellow-300"/>
 <h1 className="text-3xl md:text-5xl font-black text-white leading-tight"style={{textShadow: '0 2px 16px rgba(0,0,0,0.2)' }}>
 東京都のハウスクリーニング業者おすすめ比較
 </h1>
 </div>
 <p className="text-base md:text-xl text-white leading-relaxed max-w-3xl mx-auto"style={{textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
 23区・多摩地域など東京都の業者を料金・サービス内容で比較しています
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
 <AreaProvidersLead slug="tokyo" />

 <section className="py-12 bg-base-100">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">東京都でハウスクリーニングを依頼する際の基本情報</h2>
 <p className="text-lg mb-4">
 東京都は日本最大の都市であり、ハウスクリーニング業者の数も全国で最も多いエリアです。
 大手チェーンから地域密着型の個人業者まで、選択肢が豊富です。
 </p>
 <p className="text-lg mb-4">
 特に23区内では単身者や共働き世帯が多く、ハウスクリーニングの需要が高い傾向にあります。
 引越しシーズン（3〜4月、9〜10月）は予約が取りづらくなるため、早めの予約をおすすめします。
 </p>
 </div>
 </div>
 </section>

 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">東京都おすすめハウスクリーニング業者 比較一覧</h2>
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
 <h2 className="text-3xl font-bold text-center mb-12">おすすめ業者詳細</h2>
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

 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
 <Building2 className="w-8 h-8 text-primary"/>
 対応エリア（東京都全域）
 </h2>
 <div className="max-w-5xl mx-auto">
 {/* 東京23区（リンク付き） */}
 <h3 className="text-2xl font-bold mb-4">東京23区</h3>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
 {wards.map((ward) =>(
 <Link 
 key={ward.slug} 
 href={`/areas/${ward.slug}/`}
 className="badge badge-lg badge-outline p-4 hover:bg-primary hover:text-primary-content transition-colors cursor-pointer"
 >
 {ward.name}
 </Link>
 ))}
 </div>

 {/* 多摩地域など（テキストのみ） */}
 <h3 className="text-2xl font-bold mb-4">多摩地域・その他</h3>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
 {cities.map((city) =>(
 <div key={city} className="badge badge-lg badge-outline p-4">
 {city}
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">東京都のハウスクリーニング料金相場</h2>
 <h3 className="text-2xl font-bold mb-4">場所別料金相場</h3>
 <ul className="space-y-2">
 <li>• エアコンクリーニング：10,000円〜15,000円</li>
 <li>• キッチンクリーニング：18,000円〜20,000円</li>
 <li>• 浴室クリーニング：19,000円〜22,000円</li>
 <li>• トイレクリーニング：9,000円〜10,000円</li>
 </ul>
 </div>
 </div>
 </section>

 <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-4">東京都のハウスクリーニング業者を探す</h2>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
 <Link href="/services/aircon/"className="btn btn-lg bg-white text-primary">サービスから探す</Link>
 <Link href="/price/"className="btn btn-lg btn-outline text-white border-white">料金相場を見る</Link>
 </div>
 </div>
 </section>


 {/* エリア特有のポイント */}
 <section className="py-16 bg-base-100">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">東京都でハウスクリーニングを依頼する際のポイント</h2>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">ヒートアイランド現象とエアコンの清掃</h3>
 <p className="text-lg mb-4">
 東京都は特にヒートアイランド現象により、夏場の気温が高くなります。
 そのためエアコンの使用頻度が高く、内部にホコリやカビが蓄積しやすい環境です。
 春（5-6月）の使用前に年1回のプロによるクリーニングが推奨されます。
 </p>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">23区と多摩地域の環境の違い</h3>
 <p className="text-lg mb-4">
 23区内は人口密度が高く、マンション・アパートが中心で換気が不十分になりがちです。
 一方、多摩地域は戸建てが多く、庭や外構の清掃ニーズも高い傾向があります。
 住環境に合わせたクリーニングサービスを選ぶことをおすすめします。
 </p>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">業者の選択肢が豊富です</h3>
 <p className="text-lg mb-4">
 東京都は日本で最も多くのハウスクリーニング業者が営業しているエリアです。
 大手チェーンから地域密着型まで選択肢が豊富なため、複数社を比較して依頼先を選びやすい環境です。
 競争が激しいため、価格も比較的良心的な業者が多いのが特徴です。
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
 <p>東京は業者が多いため、最低3-5社から見積もりを取ることをおすすめします。価格差が大きいことも珍しくありません。</p>
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
 <p className="text-lg">東京都内には、即日対応が可能な業者もあります。急ぎの場合は対応スピードも重要な選定ポイントです。</p>
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
 Q. 東京でハウスクリーニングの料金相場はいくらですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。東京は業者が多く競争が激しいため、全国平均並みかやや安めの傾向があります。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 23区と多摩地域で料金に差はありますか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">基本料金はほぼ同じですが、多摩地域の一部では出張費が追加される場合があります。見積もり時にご確認ください。23区内は業者数が多いため、より競争が激しく価格交渉もしやすい傾向があります。</p>
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
 <p className="text-lg">東京都内は業者数が多いため、即日対応が可能な業者もあります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前までのご予約をおすすめします。</p>
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
 Q. どれくらいの頻度で依頼すべきですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。ヒートアイランド現象の影響で夏場のエアコン使用が多い東京では、エアコンの清掃頻度を上げることをおすすめします。</p>
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
 <h2 className="text-3xl font-bold mb-8">まとめ：東京でハウスクリーニング業者を選ぶ際のポイント</h2>
 
 <p className="text-lg mb-6">
 東京都は日本で最も多くのハウスクリーニング業者が営業しており、選択肢が豊富です。
 本ページでは、<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>などの業者を掲載しています。
 </p>
 
 <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
 <h3 className="text-xl font-bold mb-3">業者選びのポイントのまとめ</h3>
 <ul className="list-disc list-inside space-y-2">
 <li>複数業者から見積もりを取る（3-5社）</li>
 <li>口コミ・実績を確認する</li>
 <li>料金体系が明確か確認する</li>
 <li>損害保険の加入を確認する</li>
 <li>閑散期（1-2月、6月）に依頼する</li>
 </ul>
 </div>
 
 <p className="text-lg mb-6">
 東京の気候特性（ヒートアイランド現象）を考えると、特にエアコンクリーニングは年1回の定期的なメンテナンスが重要です。
 業者が多いからこそ、複数社を比較して依頼先を選ぶことをおすすめします。
 </p>
 
 <p className="text-lg font-bold">
 まずは候補の業者3社程度に見積もりを依頼し、料金とサービス内容を比較することをおすすめします。
 </p>
 </div>
 </div>
 </section>

 {/* 近隣エリア */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
 <Link href="/areas/kanagawa/"className="btn btn-outline">神奈川県</Link>
 <Link href="/areas/saitama/"className="btn btn-outline">埼玉県</Link>
 <Link href="/areas/chiba/"className="btn btn-outline">千葉県</Link>
 <Link href="/areas/yokohama/"className="btn btn-outline">横浜市</Link>
 </div>
 </div>
 </section>
 </div>
 );
}
