import type {Metadata } from "next";
import OfficialRatingStores from "./components/OfficialRatingStores";
import providersData from "./data/providers.json";
import PartnerCards from "./components/PartnerCards";
import TopHero from "./components/TopHero";
import TroubleGrid from "./components/TroubleGrid";
import AreaAccordion from "./components/AreaAccordion";
import Reveal from "./components/Reveal";
import Reasons from "./components/Reasons";

const brandCounts = (() => {
 const list = providersData as { brand: string }[];
 const count = (k: string) => list.filter((p) => p.brand === k).length;
 return { honpo: count("honpo"), duskin: count("duskin"), kakumei: count("kakumei") };
})();

export const metadata: Metadata = {
 alternates: {canonical: "https://cleaning-choices.com/"},
};

export default function Home() {
 return (
 <>
 <TopHero />
 <Reveal />

 <TroubleGrid />

 <AreaAccordion />

 {/* PARALLAX: USER VOICES */}
 <section className="py-14 md:py-20 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
 こんなお悩みはありませんか？
 </h3>
 <p className="text-sm md:text-base text-gray-500 mt-4">
 ハウスクリーニングを検討するきっかけとして多いお悩みです
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
 {[
 "仕事や育児で掃除の時間が取れず、エアコンや水回りの汚れが気になっている",
 "業者が多く、どこに依頼すればよいか、料金が適正かを判断しにくい",
 "浴室のカビや換気扇の油汚れが市販の洗剤では落ちなくなってきた",
 "引越しや退去の前に、部屋をまとめてきれいにしたい",
 "小さい子どもやペットがいるので、洗剤や作業の安全性が気になる",
 "年末の大掃除のうち、一部をプロに依頼したい",
 ].map((worry) => (
 <div key={worry} className="card bg-white p-5 text-sm text-gray-700 leading-relaxed">
 {worry}
 </div>
 ))}
 </div>
 <div className="text-center mt-10">
 <p className="text-lg font-bold text-gray-800 mb-4">
 <span style={{ color: "#16323a" }}>クリーンナビ</span>では、業者選びに必要な情報を掲載しています
 </p>
 <a className="btn-cta" href="#trouble">
 条件に合う業者を探す
 </a>
 </div>
 </div>
 </section>

 <OfficialRatingStores limit={6} />

 {/* 大手ブランドの店舗から探す（公式サイトのキャプチャ＋出典・2026-10-16） */}
 <section className="cn-section cn-section-mist" aria-labelledby="brands-title">
 <div className="cn-container">
 <div className="cn-head" data-reveal>
 <p className="cn-eyebrow">BRANDS</p>
 <h2 id="brands-title" className="cn-h2">大手ブランドの店舗から探す</h2>
 <p className="cn-lead">公式サイトで所在を確認した全国の加盟店・拠点を、都道府県別に掲載しています</p>
 </div>
 <ul className="cn-partner-grid">
 {[
 { href: "/brand/osoujihonpo/", img: "osoujihonpo", name: "おそうじ本舗", note: `全国${brandCounts.honpo.toLocaleString()}店舗の一覧・対応エリア` },
 { href: "/brand/duskin/", img: "duskin", name: "ダスキン サービスマスター", note: `全国${brandCounts.duskin.toLocaleString()}拠点の一覧・対応エリア` },
 { href: "/brand/osoujikakumei/", img: "osoujikakumei", name: "おそうじ革命", note: `全国${brandCounts.kakumei.toLocaleString()}店舗の一覧・対応エリア` },
 ].map((b, i) => (
 <li key={b.href} className="cn-partner" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
 <figure className="cn-partner-shot">
 <img src={`/images/partners/${b.img}.webp`} alt={`${b.name} 公式サイトのトップページ`} width={1280} height={800} loading="lazy" />
 <figcaption>出典：{b.name} 公式サイト（2026年10月16日時点）</figcaption>
 </figure>
 <div className="cn-partner-body">
 <h3>{b.name}</h3>
 <p className="cn-partner-tag">{b.note}</p>
 <div className="cn-partner-actions">
 <a className="cn-btn cn-btn-primary" href={b.href}>店舗一覧を見る</a>
 </div>
 </div>
 </li>
 ))}
 </ul>
 </div>
 </section>

      <PartnerCards title="提携業者の口コミ・評判を公式情報で検証" intro="当サイトと提携している専門業者について、料金・対応エリア・保証を各社の公式サイトで確認し、確認日を明記して掲載しています。当サイトでは、架空の口コミや独自の評点は作成しません。掲載順は優劣を示すものではありません。" />

 <Reasons />

 {/* FAQ SECTION */}
 <section className="py-16 md:py-20 bg-white"id="faq">
 <div className="container mx-auto px-4 max-w-4xl">
 <div className="text-center mb-12">
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
 よくある質問
 </h3>
 <p className="text-sm md:text-base text-gray-500 mt-6">
 ハウスクリーニングに関するよくあるご質問にお答えします
 </p>
 </div>

 <div className="space-y-4">
 {/* Q1 */}
 <details
 className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
 open
 >
 <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
 <div className="flex items-center gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
 style={{
 background: '#16323a',
 }}
 >
 Q
 </span>
 <h4 className="text-base md:text-lg font-bold text-gray-900">
 ハウスクリーニングの料金相場はいくらですか？
 </h4>
 </div>
 <svg
 className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth="2"
 d="M19 9l-7 7-7-7"
 ></path>
 </svg>
 </summary>
 <div className="px-5 md:px-6 pb-5 md:pb-6">
 <div className="flex gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
 style={{
 background: '#0e7490',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 エアコンクリーニングは1台あたり
 <strong>8,000円〜15,000円</strong>
 、浴室クリーニングは
 <strong>12,000円〜20,000円</strong>
 、キッチンクリーニングは
 <strong>10,000円〜18,000円</strong>
 が相場です。業者や地域によって異なりますので、複数社の見積もりを比較することをおすすめします。
 </p>
 </div>
 </div>
 </details>

 {/* Q2 */}
 <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
 <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
 <div className="flex items-center gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
 style={{
 background: '#16323a',
 }}
 >
 Q
 </span>
 <h4 className="text-base md:text-lg font-bold text-gray-900">
 ハウスクリーニング業者の選び方のポイントは？
 </h4>
 </div>
 <svg
 className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth="2"
 d="M19 9l-7 7-7-7"
 ></path>
 </svg>
 </summary>
 <div className="px-5 md:px-6 pb-5 md:pb-6">
 <div className="flex gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
 style={{
 background: '#0e7490',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 ①<strong>料金の透明性</strong>（追加料金の有無）、②
 <strong>口コミ・評判</strong>、③<strong>損害保険への加入</strong>、④
 <strong>スタッフの研修体制</strong>、⑤
 <strong>アフターフォローの有無</strong>
 を確認することをおすすめします。当サイトでは、これらの項目を各社の公式情報で確認できるよう掲載しています。
 </p>
 </div>
 </div>
 </details>

 {/* Q3 */}
 <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
 <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
 <div className="flex items-center gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
 style={{
 background: '#16323a',
 }}
 >
 Q
 </span>
 <h4 className="text-base md:text-lg font-bold text-gray-900">
 エアコンクリーニングはどのくらいの頻度で行うべきですか？
 </h4>
 </div>
 <svg
 className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth="2"
 d="M19 9l-7 7-7-7"
 ></path>
 </svg>
 </summary>
 <div className="px-5 md:px-6 pb-5 md:pb-6">
 <div className="flex gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
 style={{
 background: '#0e7490',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 一般的には<strong>年に1〜2回</strong>
 が目安とされています。夏の使用シーズン前（4〜5月）にクリーニングを行うと、カビやホコリを取り除いた状態で使い始めることができます。ペットを飼っている方や喫煙者がいるご家庭では、より頻繁なクリーニングをおすすめします。
 </p>
 </div>
 </div>
 </details>

 {/* Q4 */}
 <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
 <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
 <div className="flex items-center gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
 style={{
 background: '#16323a',
 }}
 >
 Q
 </span>
 <h4 className="text-base md:text-lg font-bold text-gray-900">
 クリーニング当日の準備は何が必要ですか？
 </h4>
 </div>
 <svg
 className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth="2"
 d="M19 9l-7 7-7-7"
 ></path>
 </svg>
 </summary>
 <div className="px-5 md:px-6 pb-5 md:pb-6">
 <div className="flex gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
 style={{
 background: '#0e7490',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 基本的には<strong>作業スペースの確保</strong>
 （周囲の物を少し移動）と<strong>水道・電気の使用許可</strong>
 をお願いされるのが一般的です。貴重品の保管や、ペットがいる場合は別室への移動をお願いする業者もあります。詳しくは各業者の注意事項をご確認ください。
 </p>
 </div>
 </div>
 </details>

 {/* Q5 */}
 <details className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
 <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-gray-100 transition">
 <div className="flex items-center gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
 style={{
 background: '#16323a',
 }}
 >
 Q
 </span>
 <h4 className="text-base md:text-lg font-bold text-gray-900">
 賃貸マンションでもハウスクリーニングを依頼できますか？
 </h4>
 </div>
 <svg
 className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth="2"
 d="M19 9l-7 7-7-7"
 ></path>
 </svg>
 </summary>
 <div className="px-5 md:px-6 pb-5 md:pb-6">
 <div className="flex gap-3">
 <span
 className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
 style={{
 background: '#0e7490',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 はい、<strong>賃貸マンションでも依頼できます</strong>
 。退去時の原状回復費用を抑える目的で依頼される方も多くいらっしゃいます。ただし、大規模な作業（外壁洗浄など）は管理会社への確認が必要な場合があります。
 </p>
 </div>
 </div>
 </details>
 </div>
 </div>
 </section>

 {/* 最後の誘導 */}
 <section className="cn-cta">
 <div className="cn-container" data-reveal>
 <h2>掃除したい場所か、お住まいの地域から探す</h2>
 <p>料金・対応エリア・保証を、各社の公式情報にもとづいて比較できます。</p>
 <div className="cn-hero-actions">
 <a className="cn-btn cn-btn-primary cn-btn-lg" href="#trouble">お悩みから探す</a>
 <a className="cn-btn cn-btn-primary cn-btn-lg" href="#area">エリアから探す</a>
 </div>
 </div>
 </section>

 {/* SEO: RELATED KEYWORDS SECTION */}
 <section className="py-10 bg-gray-50 border-t border-gray-200">
 <div className="container mx-auto px-4 max-w-5xl">
 <h3 className="text-lg font-bold text-gray-700 mb-4">関連キーワードから探す</h3>
 <div className="flex flex-wrap gap-2">
 <a
 href="/services/aircon/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 エアコンクリーニング 料金
 </a>
 <a
 href="/services/bathroom/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 浴室クリーニング おすすめ
 </a>
 <a
 href="/services/kitchen/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 キッチン 油汚れ 業者
 </a>
 <a
 href="/areas/tokyo/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 ハウスクリーニング 東京
 </a>
 <a
 href="/areas/osaka/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 ハウスクリーニング 大阪
 </a>
 <a
 href="/services/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 ハウスクリーニング 比較
 </a>
 <a
 href="/faq/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 ハウスクリーニング 相場
 </a>
 <a
 href="/services/aircon/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 エアコン カビ 除去
 </a>
 <a
 href="/about/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 クリーニング業者 口コミ
 </a>
 <a
 href="/services/bathroom/"
 className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-white border border-gray-200 text-gray-600 hover:border-sky-400 hover:text-sky-600 transition"
 >
 お風呂掃除 プロ
 </a>
 </div>
 </div>
 </section>


 </>
 );
}
