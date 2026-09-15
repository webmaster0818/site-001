import type { Metadata } from "next";
import BrandCompareTable from "../../components/BrandCompareTable";
import OfficialRatingStores from "../../components/OfficialRatingStores";
import PartnerCards from "../../components/PartnerCards";

export const metadata: Metadata = {
  title: "エアコンクリーニング業者おすすめランキング｜大手3社の比較と選び方【2026年9月】",
  description:
    "エアコンクリーニング業者を大手3ブランド(おそうじ本舗・ダスキン・おそうじ革命)の公式確認情報で比較。料金相場(壁掛け8,000円〜)、公式レビュー高評価店、失敗しない選び方までまとめました。",
  alternates: { canonical: "https://cleaning-choices.com/ranking/aircon-ranking/" },
};

const faqs = [
  {
    q: "エアコンクリーニングの料金相場はいくらですか？",
    a: "壁掛けエアコン(通常タイプ)で8,000〜15,000円、お掃除機能付きで15,000〜25,000円が目安です。2台目以降の割引を設けている業者もあります。繁忙期(5〜8月)は料金が上がる場合があります。",
  },
  {
    q: "エアコンクリーニングはどの時期に頼むのが良いですか？",
    a: "冷房前の春(4〜5月)と暖房前の秋(9〜11月)が適しています。夏の繁忙期は予約が取りにくく料金も上がりやすいため、時期をずらせるなら春・秋がおすすめです。",
  },
  {
    q: "業者はどう選べば失敗しませんか？",
    a: "①お掃除機能付きなど自宅の機種に対応しているか ②料金と追加料金の条件 ③損害保険の加入 ④口コミ・評価、の4点を事前に確認してください。当サイトの店舗ページでは公式サイトで確認した情報のみを確認日つきで掲載しています。",
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

export default function AirconRankingPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            エアコンクリーニング業者おすすめランキング
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            エアコンクリーニングを頼める大手3ブランドを、各社公式サイトで確認した情報だけで比較します。当サイトは架空の口コミや独自集計の評点を作成しません。店舗の評価は、各ブランド公式サイトに掲載されているレビュー集計をそのまま確認日つきで紹介します。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">大手3ブランドの比較</h2>
          <BrandCompareTable />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">エアコンクリーニングの料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">タイプ</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">相場</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-gray-200">壁掛けエアコン（通常タイプ）</td><td className="p-3 border border-gray-200 font-bold">8,000〜15,000円</td></tr>
                <tr><td className="p-3 border border-gray-200">お掃除機能付きエアコン</td><td className="p-3 border border-gray-200 font-bold">15,000〜25,000円</td></tr>
                <tr><td className="p-3 border border-gray-200">業務用エアコン（天井埋込型）</td><td className="p-3 border border-gray-200 font-bold">20,000〜40,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※2台目以降は割引あり。繁忙期（5〜8月）は料金が上がる場合があります。詳細は<a href="/price/" className="text-sky-600 hover:underline">料金相場ページ</a>をご覧ください。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">失敗しない選び方（4つの確認ポイント）</h2>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">1. 自宅の機種に対応しているか</p>
              <p className="text-sm text-gray-600 leading-relaxed">お掃除機能付き・天井埋込型は対応可否と料金が変わります。申込み前に機種名を伝えて確認しましょう。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">2. 追加料金の条件</p>
              <p className="text-sm text-gray-600 leading-relaxed">駐車場代・防カビコーティングなどの追加費用の有無を見積もり時に確認。「追加料金なし」を明記する業者もあります。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">3. 損害保険の加入</p>
              <p className="text-sm text-gray-600 leading-relaxed">万一の故障・破損に備え、損害保険に加入している業者を選ぶと安心です。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">4. 店舗の口コミ・評価</p>
              <p className="text-sm text-gray-600 leading-relaxed">同じブランドでも対応するのは地域の店舗です。店舗単位の評価を確認しましょう。下の高評価店舗も参考にしてください。</p>
            </div>
          </div>
        </div>
      </section>

      <OfficialRatingStores limit={6} />

      <PartnerCards tag="aircon" />

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
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">お住まいの地域の店舗から探す</h2>
          <p className="text-sm text-gray-600 mb-6">全国3,500店超の実在確認済み店舗データベースから、近くの対応店舗を確認できます。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/services/aircon/" className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition">エアコンクリーニング詳細</a>
            <a href="/areas/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">地域から探す</a>
            <a href="/ranking/review-ranking/" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition">口コミ評価ランキング</a>
          </div>
        </div>
      </section>
    </div>
  );
}
