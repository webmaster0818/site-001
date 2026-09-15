import type { Metadata } from "next";
import BrandCompareTable from "../../components/BrandCompareTable";
import PartnerCards from "../../components/PartnerCards";

export const metadata: Metadata = {
  title: "ハウスクリーニングを安く頼むには｜サービス別の料金相場と節約のコツ【2026年9月】",
  description:
    "ハウスクリーニングを安く頼むための実践ガイド。エアコン・浴室・キッチンのサービス別料金相場、セットプラン・閑散期などで費用を抑えるコツ、安さだけで選ばないための注意点をまとめました。",
  alternates: { canonical: "https://cleaning-choices.com/ranking/cheap-ranking/" },
};

const PRICE_ROWS = [
  { service: "エアコン（壁掛け・通常）", price: "8,000〜15,000円" },
  { service: "エアコン（お掃除機能付き）", price: "15,000〜25,000円" },
  { service: "浴室のみ", price: "15,000〜20,000円" },
  { service: "浴室+洗面所+トイレ", price: "28,000〜38,000円" },
  { service: "キッチン全体", price: "12,000〜18,000円" },
  { service: "換気扇・レンジフード", price: "10,000〜16,000円" },
  { service: "キッチン+換気扇セット", price: "18,000〜28,000円" },
];

const faqs = [
  {
    q: "ハウスクリーニングの費用を安く抑えるコツはありますか？",
    a: "①複数箇所をまとめて頼むセットプランを使う ②エアコンは繁忙期(5〜8月)を避けて春・秋に頼む ③2台目以降の割引を活用する ④相見積もりで総額を比較する、の4つが基本です。",
  },
  {
    q: "安い業者を選ぶときの注意点はありますか？",
    a: "表示価格が安くても、駐車場代やオプションで総額が変わる場合があります。作業範囲・追加料金の条件・損害保険の加入を確認したうえで、総額で比較してください。",
  },
  {
    q: "「追加料金なし」の業者はありますか？",
    a: "おそうじ革命は追加料金なしの明朗会計を公式サイトで明記しています。他の業者でも見積もり時に総額を確定できる場合があるため、申込み前に確認するのが確実です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CheapRankingPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            ハウスクリーニングを安く頼むには
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            「一番安い業者」を探す前に、まず相場を知ることが節約の近道です。相場が分かれば、安すぎる見積もりの理由(作業範囲が狭い等)にも気づけます。このページではサービス別の料金相場と、費用を抑える実践的なコツをまとめました。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">サービス別の料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">サービス</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">相場</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((r) => (
                  <tr key={r.service}>
                    <td className="p-3 border border-gray-200">{r.service}</td>
                    <td className="p-3 border border-gray-200 font-bold">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            全サービスの相場と料金が変わる要因は<a href="/price/" className="text-sky-600 hover:underline">料金相場ページ</a>で解説しています。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">費用を抑える4つのコツ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">1. セットプランでまとめて頼む</p>
              <p className="text-sm text-gray-600 leading-relaxed">浴室+洗面所+トイレ、キッチン+換気扇など、複数箇所をまとめると1箇所あたりの単価が下がる場合があります。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">2. 繁忙期を避ける</p>
              <p className="text-sm text-gray-600 leading-relaxed">エアコンは5〜8月、大掃除需要は12月に集中します。春・秋など時期をずらすと予約も取りやすく、料金面でも有利なことがあります。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">3. 台数・回数の割引を使う</p>
              <p className="text-sm text-gray-600 leading-relaxed">エアコン2台目以降の割引や定期サービスの割引を設けている業者があります。対象かどうか申込み時に確認しましょう。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">4. 相見積もりで総額比較</p>
              <p className="text-sm text-gray-600 leading-relaxed">表示価格ではなく「追加料金を含めた総額」で2〜3社を比べるのが確実です。追加料金なしを明記する業者もあります。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">大手3ブランドの比較</h2>
          <BrandCompareTable />
        </div>
      </section>

      <PartnerCards title="料金を公式サイトで明示している提携業者" intro="当サイトと提携している業者のうち、公式サイトで料金を明示している業者です。料金は公式表記のまま転記し、掲載順は優劣の評価ではありません。" />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border border-gray-200 bg-white p-4">
                <summary className="cursor-pointer font-bold text-gray-900 text-sm md:text-base">{f.q}</summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">近くの店舗の情報を確認する</h2>
          <p className="text-sm text-gray-600 mb-6">全国3,500店超の実在確認済み店舗データベースで、お住まいの地域の対応店舗を確認できます。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/areas/" className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition">地域から探す</a>
            <a href="/price/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">料金相場の詳細</a>
          </div>
        </div>
      </section>
    </div>
  );
}
