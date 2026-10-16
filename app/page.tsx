import type {Metadata } from "next";
import OfficialRatingStores from "./components/OfficialRatingStores";
import providersData from "./data/providers.json";
import PartnerCards from "./components/PartnerCards";
import TopHero from "./components/TopHero";
import TroubleGrid from "./components/TroubleGrid";
import AreaAccordion from "./components/AreaAccordion";
import Reveal from "./components/Reveal";

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
 "仕事や育児で掃除の時間がとれず、エアコンや水回りの汚れが気になっている",
 "業者が多すぎて、どこに頼めばよいか・料金が適正か分からない",
 "浴室のカビや換気扇の油汚れが市販の洗剤では落ちなくなってきた",
 "引越しや退去の前に、部屋をまとめてきれいにしたい",
 "小さい子どもやペットがいるので、洗剤や作業の安全性が気になる",
 "年末の大掃除を全部自分でやるのは大変なので、一部をプロに任せたい",
 ].map((worry) => (
 <div key={worry} className="card bg-white p-5 text-sm text-gray-700 leading-relaxed">
 {worry}
 </div>
 ))}
 </div>
 <div className="text-center mt-10">
 <p className="text-lg font-bold text-gray-800 mb-4">
 そのお悩み、<span className="text-sky-500">クリーンナビ</span>の比較で解決できます
 </p>
 <a className="btn-cta" href="#trouble">
 あなたに合った業者を探す
 </a>
 </div>
 </div>
 </section>

 <OfficialRatingStores limit={6} />

 {/* 大手ブランドの店舗から探す */}
 <section className="py-16 md:py-20 bg-white">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
 大手ブランドの店舗から探す
 </h3>
 <p className="text-sm md:text-base text-gray-500 mt-6">
 公式サイトで実在確認した全国の加盟店・拠点を、都道府県別に検索できます
 </p>
 </div>
 <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
 <a href="/brand/osoujihonpo/" className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-sky-400 hover:shadow-md transition group">
 <div className="font-bold text-lg text-gray-900 group-hover:text-sky-600 transition">おそうじ本舗</div>
 <p className="text-sm text-gray-500 mt-2">全国{brandCounts.honpo.toLocaleString()}店舗の一覧・対応エリア</p>
 <span className="inline-block mt-4 text-sm font-bold text-sky-600">店舗一覧を見る →</span>
 </a>
 <a href="/brand/duskin/" className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-sky-400 hover:shadow-md transition group">
 <div className="font-bold text-lg text-gray-900 group-hover:text-sky-600 transition">ダスキン サービスマスター</div>
 <p className="text-sm text-gray-500 mt-2">全国{brandCounts.duskin.toLocaleString()}拠点の一覧・対応エリア</p>
 <span className="inline-block mt-4 text-sm font-bold text-sky-600">店舗一覧を見る →</span>
 </a>
 <a href="/brand/osoujikakumei/" className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-sky-400 hover:shadow-md transition group">
 <div className="font-bold text-lg text-gray-900 group-hover:text-sky-600 transition">おそうじ革命</div>
 <p className="text-sm text-gray-500 mt-2">全国{brandCounts.kakumei.toLocaleString()}店舗の一覧・対応エリア</p>
 <span className="inline-block mt-4 text-sm font-bold text-sky-600">店舗一覧を見る →</span>
 </a>
 </div>
 </div>
 </section>

      <PartnerCards title="提携業者の口コミ・評判を公式情報で検証" intro="当サイトと提携している専門業者について、料金・対応エリア・保証を各社公式サイトで一次確認し、確認日つきで整理しています。架空の口コミ・独自評点は作成しません。掲載順は優劣の評価ではありません。" />

 {/* WHY CHOOSE US */}
 <section className="py-16 md:py-20 bg-gray-50">
 <div className="container mx-auto px-4">
 <div className="text-center mb-12">
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 section-heading">
 クリーンナビが選ばれる理由
 </h3>
 <p className="text-sm md:text-base text-gray-500 mt-6">
 安心・信頼・お得の3つをお約束します
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
 <div className="reason-card bg-white border border-gray-100 relative overflow-hidden">
 <div
 className="absolute top-0 left-0 w-full h-1"
 style={{
 background: 'linear-gradient(90deg, #0ea5e9, #38bdf8, #67e8f9)',
 }}
 ></div>
 <div
 className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
 style={{
 background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
 boxShadow: '0 8px 32px rgba(14,165,233,0.3)',
 }}
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="none"
 stroke="white"
 strokeWidth="1.8"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="w-11 h-11"
 >
 <circle cx="11"cy="11"r="8"></circle>
 <path d="m21 21-4.3-4.3"></path>
 <path d="M11 8v6"></path>
 <path d="M8 11h6"></path>
 </svg>
 <div
 className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
 style={{
 background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
 color: '#0c4a6e',
 boxShadow: '0 2px 8px rgba(251,191,36,0.4)',
 }}
 >
 ✓
 </div>
 </div>
 <h4 className="text-xl font-bold text-gray-900 mb-3">簡単比較</h4>
 <p className="text-base text-gray-600 leading-relaxed">
 料金・口コミ・サービス内容を一目で比較。最適な業者がすぐに見つかります。
 </p>
 </div>
 <div className="reason-card bg-white border border-gray-100 relative overflow-hidden">
 <div
 className="absolute top-0 left-0 w-full h-1"
 style={{
 background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)',
 }}
 ></div>
 <div
 className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
 style={{
 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
 boxShadow: '0 8px 32px rgba(245,158,11,0.3)',
 }}
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="white"
 className="w-11 h-11"
 >
 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
 </svg>
 <div
 className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
 style={{
 background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
 color: '#fff',
 boxShadow: '0 2px 8px rgba(14,165,233,0.4)',
 }}
 >
 ★
 </div>
 </div>
 <h4 className="text-xl font-bold text-gray-900 mb-3">実績豊富</h4>
 <p className="text-base text-gray-600 leading-relaxed">
 厳選された優良業者のみを掲載。安心してご利用いただけます。
 </p>
 </div>
 <div className="reason-card bg-white border border-gray-100 relative overflow-hidden">
 <div
 className="absolute top-0 left-0 w-full h-1"
 style={{
 background: 'linear-gradient(90deg, #22c55e, #16a34a, #4ade80)',
 }}
 ></div>
 <div
 className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
 style={{
 background: 'linear-gradient(135deg, #22c55e, #16a34a)',
 boxShadow: '0 8px 32px rgba(34,197,94,0.3)',
 }}
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="none"
 stroke="white"
 strokeWidth="1.8"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="w-11 h-11"
 >
 <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
 </svg>
 <div
 className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
 style={{
 background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
 color: '#0c4a6e',
 boxShadow: '0 2px 8px rgba(251,191,36,0.4)',
 }}
 >
 ¥
 </div>
 </div>
 <h4 className="text-xl font-bold text-gray-900 mb-3">お得な価格</h4>
 <p className="text-base text-gray-600 leading-relaxed">
 複数業者を比較することで、適正価格でサービスを受けられます。
 </p>
 </div>
 </div>
 </div>
 </section>

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
 background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
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
 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
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
 background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
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
 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 ①<strong>料金の透明性</strong>（追加料金の有無）、②
 <strong>口コミ・評判</strong>、③<strong>損害保険への加入</strong>、④
 <strong>スタッフの研修体制</strong>、⑤
 <strong>アフターフォローの有無</strong>
 を確認しましょう。クリーンナビでは、これらの基準を満たした優良業者のみを掲載しています。
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
 background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
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
 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 一般的には<strong>年に1〜2回</strong>
 が推奨されています。特に夏のエアコン使用シーズン前（4〜5月）にクリーニングすると、カビやホコリを除去して清潔な空気で過ごせます。ペットを飼っている方や喫煙者がいるご家庭では、より頻繁なクリーニングをおすすめします。
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
 background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
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
 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 基本的には<strong>作業スペースの確保</strong>
 （周囲の物を少し移動）と<strong>水道・電気の使用許可</strong>
 があればOKです。貴重品の保管や、ペットがいる場合は別室への移動をお願いする業者もあります。詳しくは各業者の注意事項をご確認ください。
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
 background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
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
 background: 'linear-gradient(135deg, #f59e0b, #d97706)',
 }}
 >
 A
 </span>
 <p className="text-base text-gray-700 leading-relaxed">
 はい、<strong>賃貸マンションでも問題なく依頼できます</strong>
 。退去時の原状回復費用を抑えるために依頼される方も多いです。ただし、大規模な作業（外壁洗浄など）は管理会社への確認が必要な場合があります。
 </p>
 </div>
 </div>
 </details>
 </div>
 </div>
 </section>

 {/* CTA BANNER */}
 <section
 className="py-16 relative overflow-hidden"
 style={{
 background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0c4a6e 100%)',
 }}
 >
 <div className="container mx-auto px-4 text-center relative z-10">
 <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
 まずは無料で業者を比較してみませんか？
 </h3>
 <p className="text-base md:text-lg text-blue-200 mb-8 max-w-xl mx-auto">
 料金・口コミ・サービス内容を一括比較。
 <br />
 最適な業者がすぐに見つかります。
 </p>
 <a className="btn-cta"href="/services/aircon/">
 今すぐ業者を探す
 </a>
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

 {/* FOOTER */}
 <footer
 className="text-white relative overflow-hidden"
 style={{
 background:
 'linear-gradient(135deg, #0c4a6e 0%, #0e7490 30%, #0c4a6e 70%, #164e63 100%)',
 }}
 >
 {/* 装飾 */}
 <div
 className="absolute top-0 left-0 w-full h-1"
 style={{
 background: 'linear-gradient(90deg, #38bdf8, #22d3ee, #0ea5e9, #67e8f9, #38bdf8)',
 }}
 ></div>
 <div
 className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5"
 style={{background: 'radial-gradient(circle, #67e8f9, transparent 70%)' }}
 ></div>
 <div
 className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-5"
 style={{background: 'radial-gradient(circle, #fbbf24, transparent 70%)' }}
 ></div>

 {/* Upper footer: CTA */}
 <div className="border-b border-white/10 py-8 relative z-10">
 <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
 <div className="flex items-center gap-4">
 <img
 src="/images/logo-character.png"
 alt="クリーンナビ キャラクター"
 className="w-16 h-16 object-contain drop-shadow-lg"
 />
 <div>
 <h5 className="text-xl md:text-2xl font-black">クリーンナビ</h5>
 <p className="text-sky-300 text-sm">ハウスクリーニング業者比較サイト</p>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="hidden md:block text-right">
 <p className="text-sm text-sky-200">お気軽にお問い合わせください</p>
 <p className="text-2xl font-black text-white tracking-wider">Webでお問い合わせ</p>
 </div>
 <a
 className="px-6 py-3 rounded-full text-sm font-bold"
 style={{
 background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
 color: '#0c4a6e',
 boxShadow: '0 4px 16px rgba(251,191,36,0.3)',
 }}
 href="/contact/"
 >
 無料お見積り
 </a>
 </div>
 </div>
 </div>

 {/* Main footer */}
 <div className="py-10 md:py-14 relative z-10">
 <div className="container mx-auto px-4">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
 {/* サービス */}
 <div>
 <h6 className="font-bold mb-4 text-base flex items-center gap-2">
 <span
 className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
 style={{background: 'rgba(56,189,248,0.2)' }}
 >
 
 </span>
 サービス
 </h6>
 <ul className="space-y-3 text-sm">
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/services/aircon/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
 エアコンクリーニング
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/services/bathroom/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
 浴室クリーニング
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/services/kitchen/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
 キッチンクリーニング
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/services/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
 サービス一覧
 </a>
 </li>
 </ul>
 </div>

 {/* エリア */}
 <div>
 <h6 className="font-bold mb-4 text-base flex items-center gap-2">
 <span
 className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
 style={{background: 'rgba(56,189,248,0.2)' }}
 >
 
 </span>
 人気エリア
 </h6>
 <ul className="space-y-3 text-sm">
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/areas/tokyo/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
 東京都
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/areas/kanagawa/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
 神奈川県
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/areas/osaka/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
 大阪府
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/areas/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
 全エリア一覧
 </a>
 </li>
 </ul>
 </div>

 {/* ご利用ガイド */}
 <div>
 <h6 className="font-bold mb-4 text-base flex items-center gap-2">
 <span
 className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
 style={{background: 'rgba(56,189,248,0.2)' }}
 >
 
 </span>
 ご利用ガイド
 </h6>
 <ul className="space-y-3 text-sm">
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/about/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
 初めての方へ
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/faq/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
 よくある質問
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/guide/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
 お掃除コラム
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/contact/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
 お問い合わせ
 </a>
 </li>
 </ul>
 </div>

 {/* 会社情報 */}
 <div>
 <h6 className="font-bold mb-4 text-base flex items-center gap-2">
 <span
 className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
 style={{background: 'rgba(56,189,248,0.2)' }}
 >
 
 </span>
 会社情報
 </h6>
 <ul className="space-y-3 text-sm">
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/about/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
 運営会社
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/privacy/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
 プライバシーポリシー
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/terms/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
 利用規約
 </a>
 </li>
 <li>
 <a
 className="text-sky-200 hover:text-white transition flex items-center gap-2"
 href="/sitemap/"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
 サイトマップ
 </a>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>

 {/* Bottom bar */}
 <div className="relative z-10 py-6"style={{background: 'rgba(0,0,0,0.15)' }}>
 <div className="container mx-auto px-4">
 <div className="flex flex-col md:flex-row items-center justify-between gap-3">
 <div className="flex items-center gap-3">
 <img
 src="/images/logo-character.png"
 alt=""
 className="w-8 h-8 object-contain opacity-60"
 />
 <p className="text-sky-300 text-xs">
 © 2026 クリーンナビ All rights reserved.
 </p>
 </div>
 <div className="flex items-center gap-4 text-xs text-sky-400">
 <a href="/privacy/"className="hover:text-white transition">
 プライバシー
 </a>
 <span className="text-sky-700">|</span>
 <a href="/terms/"className="hover:text-white transition">
 利用規約
 </a>
 <span className="text-sky-700">|</span>
 <a href="/sitemap/"className="hover:text-white transition">
 サイトマップ
 </a>
 </div>
 </div>
 </div>
 </div>
 </footer>
 </>
 );
}
