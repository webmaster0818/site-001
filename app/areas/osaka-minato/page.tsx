import Link from "next/link";
import AreaProvidersLead from "../../components/AreaProvidersLead";
import {Sparkles, Award, Shield, Zap } from "lucide-react";
import CompanyShot from "../../components/CompanyShot";

export const metadata = {
 title: "大阪市港区のハウスクリーニング業者おすすめ比較｜エアコン・浴室・キッチン | クリーンナビ",
 description: "港区のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 openGraph: {
 title: "大阪市港区のハウスクリーニング業者おすすめ比較｜エアコン・浴室・キッチン | クリーンナビ",
 description: "港区のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 url: "https://cleaning-choices.com/areas/osaka-minato/",
 siteName: "クリーンナビ",
 images: [
 {
 url: "https://cleaning-choices.com/og-image.png?v=20261016",
 width: 1200,
 height: 630,
 alt: "港区のハウスクリーニング業者比較 - クリーンナビ",
 },
 ],
 locale: "ja_JP",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "大阪市港区のハウスクリーニング業者おすすめ比較｜エアコン・浴室・キッチン | クリーンナビ",
 description: "港区のハウスクリーニング業者を比較しています。店舗情報・料金相場・業者選びのポイントを掲載しています。",
 images: ["https://cleaning-choices.com/og-image.png?v=20261016"],
 },
 alternates: {
 canonical: "https://cleaning-choices.com/areas/osaka-minato/",
 },
};

export default function OsakaMinatoArea() {
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

 const areas = ['弁天町', '朝潮橋', '大阪港', '市岡', '港晴', '磯路'];

 return (
 <div className="min-h-screen bg-base-100">
 {/* ヒーローセクション */}
 <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
 <div className="container mx-auto px-4 text-center">
 <h1 className="text-4xl font-bold mb-4">大阪市港区のハウスクリーニング業者比較</h1>
 <p className="text-xl">港区のハウスクリーニング業者と店舗情報を掲載しています</p>
 </div>
 </section>
 <AreaProvidersLead slug="osaka-minato" />
 {/* パンくずリスト */}
 <div className="bg-base-100 py-4 border-b border-base-300">
 <div className="container mx-auto px-4">
 <div className="breadcrumbs text-sm">
 <ul>
 <li><Link href="/">HOME</Link></li>
 <li><Link href="/areas/osaka/">大阪府</Link></li>
 <li>港区</li>
 </ul>
 </div>
 </div>
 </div>

 {/* 導入文 */}
 <section className="py-12 bg-base-100">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-4">大阪市港区でハウスクリーニングを依頼する際の基本情報</h2>
 <p className="text-lg">港区は大阪市の西部に位置し、大阪湾に面した臨海部のエリアです。港湾施設や工業地帯が多く、海洋博物館「なにわの海の時空館」（閉館）などがあるエリアです。</p>
 </div>
 </div>
 </section>

 {/* 業者比較テーブル */}
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
 {companies.map((company, index) =>{
 const Icon = companyIcons[index % companyIcons.length];
 const gradient = companyColors[index % companyColors.length];
 return (
 <tr key={company.name} className="hover">
 <td>
 <div className="flex items-center gap-3">
 <CompanyShot name={company.name} compact />
 <span className="font-bold text-lg">{company.name}</span>
 </div>
 </td>
 <td className="text-lg">{company.kitchen}</td>
 <td className="text-lg">{company.bathroom}</td>
 <td className="text-lg">{company.toilet}</td>
 </tr>
 );
 })}
 </tbody>
 </table>
 <p className="text-xs text-gray-500 mt-2 max-w-6xl mx-auto">画像は各社公式サイトのトップページを当サイトが撮影したものです（2026年10月16日時点）。料金は各社公式サイトの表記です。</p>
 </div>
 </div>
 </section>

 {/* 各業者詳細 */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">各業者の詳細</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
 {companies.map((company, index) =>{
 const Icon = companyIcons[index % companyIcons.length];
 const gradient = companyColors[index % companyColors.length];
 return (
 <div key={company.name} className="card bg-base-100 shadow-xl">
 <div className="card-body">
 <div className="flex items-center gap-3 mb-4">
 <CompanyShot name={company.name} />
 <h3 className="card-title text-2xl">{company.name}</h3>
 {company.name === "おそうじ革命" && <a href="/review/osoujikakumei/" className="link link-primary text-sm">おそうじ革命の口コミ・評判を公式情報で検証</a>}
 </div>
 <div className="space-y-2">
 <p><strong>キッチン:</strong>{company.kitchen}</p>
 <p><strong>浴室:</strong>{company.bathroom}</p>
 <p><strong>トイレ:</strong>{company.toilet}</p>
 </div>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* エリア特有のポイント */}
 <section className="py-16 bg-base-100">
 <div className="container mx-auto px-4">
 <div className="prose max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">港区でハウスクリーニングを依頼する際のポイント</h2>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">大阪湾の臨海部では、塩害への対策が重要です</h3>
 <p className="text-lg mb-4">
 港区は大阪市の西部に位置し、大阪湾に面した臨海部のエリアです。
 区名の通り、大阪港があり、港湾施設が集積しています。
 大阪湾からの海風が強く、潮風による塩害が深刻な環境です。
 塩分が窓ガラス、エアコンの室外機、換気扇、外壁などに付着し、放置すると腐食や劣化が進みます。
 特に海沿いのエリアでは、塩害による汚れが蓄積しやすく、定期的な清掃が不可欠です。
 窓ガラスや網戸は年3-4回、エアコンの室外機は年1-2回の清掃で、塩害による劣化を防ぐことができます。
 業者選びでは、臨海部での清掃経験が豊富で、塩害対策の知識がある業者を選ぶことが重要です。
 </p>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">港湾施設・工業地帯が多く、工業汚れへの対策が必要です</h3>
 <p className="text-lg mb-4">
 港区は港湾施設や工業地帯が多く、工業汚れが発生しやすい環境です。
 大阪港周辺には倉庫や工場が集積しており、工業排気や粉塵が多い環境です。
 工業汚れは窓ガラスやエアコンに付着しやすく、放置すると頑固な汚れになります。
 また、住宅地も存在しますが、工業地帯に隣接しているため、工業汚れの影響を受けやすい環境です。
 定期的な窓清掃（年2-3回）とエアコンクリーニング（年1回）で、工業汚れ対策ができます。
 業者選びでは、工業地帯での清掃経験が豊富で、工業汚れ対策の知識がある業者を選ぶことをおすすめします。
 </p>
 
 <h3 className="text-2xl font-bold mb-4 mt-8">地下鉄中央線・JR環状線などが通り、業者の選択肢が豊富です</h3>
 <p className="text-lg mb-4">
 港区は地下鉄中央線、JR大阪環状線など複数の鉄道路線が通っており、交通の便が良好です。
 弁天町駅、朝潮橋駅、大阪港駅など主要駅があり、大阪市内外からアクセスしやすいエリアです。
 多くのハウスクリーニング業者が営業しており、大手チェーンから地域密着型まで選択肢が豊富です。
 即日対応が可能な業者もあり、複数社を比較して依頼先を選びやすい環境です。
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
 <p>港区は臨海部のため、塩害対策の料金もあわせて比較することをおすすめします。最低3社から見積もりを取ることをおすすめします。</p>
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
 <p>エアコン+浴室など複数箇所をまとめて依頼すると、セット割引を適用する業者が多くなっています。臨海部では窓+エアコン室外機のセット依頼が割安です。</p>
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
 <h3 className="text-xl font-bold mb-2">臨海部・工業地帯での清掃経験、塩害・工業汚れ対策の知識</h3>
 <p className="text-lg">港区は大阪湾に面した臨海部で、塩害対策が最重要です。また、港湾施設や工業地帯が多く、工業汚れ対策も必要です。臨海部・工業地帯での清掃経験が豊富で、塩害・工業汚れ対策の知識がある業者を選ぶことをおすすめします。見積もり時に立地（海沿いか、工業地帯近くかなど）を伝えると、状況に合った提案を受けやすくなります。</p>
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
 Q. 大阪市港区でハウスクリーニングの料金相場はいくらですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">エアコンクリーニングは8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。港区は臨海部のため、塩害対策で追加料金がかかる場合もあります。見積もり時にご確認ください。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 臨海部での塩害対策はどうすればいいですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">港区は大阪湾に面した臨海部で、潮風による塩害が深刻な環境です。窓ガラス、エアコンの室外機、換気扇、外壁などに塩分が付着し、放置すると腐食や劣化が進みます。窓ガラスや網戸は年3-4回、エアコンの室外機は年1-2回の清掃で、塩害による劣化を防ぐことができます。プロによる定期的な清掃と防錆処理をおすすめします。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 工業地帯での工業汚れ対策はどうすればいいですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">港区は港湾施設や工業地帯が多く、工業排気や粉塵が多い環境です。工業汚れは窓ガラスやエアコンに付着しやすく、放置すると頑固な汚れになります。定期的な窓清掃（年2-3回）とエアコンクリーニング（年1回）で、工業汚れ対策ができます。工業地帯での清掃経験が豊富な業者を選ぶことをおすすめします。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 作業時間はどれくらいかかりますか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">エアコン1台で1.5〜2時間、浴室で2〜3時間、キッチンで2.5〜3.5時間が目安です。汚れの程度により前後します。臨海部では汚れが頑固なため、通常より時間がかかる場合もあります。</p>
 </div>
 </div>

 <div className="collapse collapse-arrow bg-base-100">
 <input type="checkbox"/>
 <div className="collapse-title text-xl font-bold">
 Q. 即日対応は可能ですか？
 </div>
 <div className="collapse-content">
 <p className="text-lg">港区は業者数が多く、交通の便も良いため、即日対応が可能な業者もあります。ただし、繁忙期（3-4月、9-10月）は予約が取りづらいため、1週間前までのご予約をおすすめします。特に週末は予約が集中するため、平日の方が予約しやすい傾向があります。</p>
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
 <p className="text-lg">エアコンは年1回（使用前の5-6月）、浴室・キッチンは半年〜1年に1回が目安です。港区は臨海部で塩害が深刻なため、窓や網戸は年3-4回、エアコンの室外機は年1-2回の清掃をおすすめします。</p>
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
 <h2 className="text-3xl font-bold mb-8">まとめ：港区でハウスクリーニング業者を選ぶ際のポイント</h2>
 
 <p className="text-lg mb-6">
 港区は大阪市の西部に位置し、大阪湾に面した臨海部のエリアです。
 本ページでは、<strong>おそうじ革命、おそうじ本舗、カジタク、ベアーズ</strong>などの業者を掲載しています。
 </p>
 
 <div className="bg-primary/10 border-l-4 border-primary p-6 mb-6">
 <h3 className="text-xl font-bold mb-3">業者選びのポイントのまとめ</h3>
 <ul className="list-disc list-inside space-y-2">
 <li>複数業者から見積もりを取る（塩害対策の料金も比較）</li>
 <li>口コミ・実績を確認する</li>
 <li>料金体系が明確か確認する</li>
 <li>損害保険の加入を確認する</li>
 <li>閑散期（1-2月、6月）に依頼する</li>
 <li>臨海部・工業地帯での清掃経験、塩害・工業汚れ対策の知識を確認する</li>
 </ul>
 </div>
 
 <p className="text-lg mb-6">
 港区は大阪湾臨海部で、塩害対策が最重要です。
 港湾施設・工業地帯が多く、工業汚れ対策も必要です。
 窓や網戸は年3-4回、エアコン室外機は年1-2回の清掃で、塩害による劣化を防げます。
 地下鉄中央線・JR環状線など交通の便が良好で、業者の選択肢が豊富です。
 </p>
 
 <p className="text-lg font-bold">
 まずは候補の業者3社程度に見積もりを依頼し、料金とサービス内容を比較することをおすすめします。
 </p>
 </div>
 </div>
 </section>

 {/* 料金相場 */}
 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">港区の料金相場</h2>
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

 {/* 対応エリア */}
 <section className="py-16 bg-base-100">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">港区内の対応エリア</h2>
 <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
 {areas.map((area) =>(
 <div key={area} className="badge badge-lg badge-outline">{area}</div>
 ))}
 </div>
 </div>
 </section>

 {/* サービス別に探す */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-2xl font-bold text-center mb-8">サービス別に探す</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
 <Link href="/services/aircon/"className="btn btn-outline">エアコンクリーニング</Link>
 <Link href="/services/bathroom/"className="btn btn-outline">浴室クリーニング</Link>
 <Link href="/services/kitchen/"className="btn btn-outline">キッチンクリーニング</Link>
 </div>
 </div>
 </section>

 {/* 近隣エリア */}
 <section className="py-16 bg-base-200">
 <div className="container mx-auto px-4">
 <h2 className="text-2xl font-bold text-center mb-8">近隣エリアから探す</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
 <Link href="/areas/osaka/"className="btn btn-outline">大阪府</Link>
 <Link href="/areas/osaka-nishi/"className="btn btn-outline">大阪市西区</Link>
 <Link href="/areas/osaka-taisho/"className="btn btn-outline">大阪市大正区</Link>
 <Link href="/areas/osaka-konohana/"className="btn btn-outline">大阪市此花区</Link>
 </div>
 </div>
 </section>

 </div>
 );
}
