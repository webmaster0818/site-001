import type { Metadata } from "next";
import BrandCompareTable from "../../components/BrandCompareTable";

export const metadata: Metadata = {
  title: "浴室クリーニング業者おすすめランキング｜大手3社の比較と選び方【2026年9月】",
  description:
    "浴室クリーニング業者を大手3ブランド(おそうじ本舗・ダスキン・おそうじ革命)の公式確認情報で比較。料金相場(浴室のみ15,000円〜)、カビ・防カビの追加項目の注意点、失敗しない選び方をまとめました。",
  alternates: { canonical: "https://cleaning-choices.com/ranking/bathroom-ranking/" },
};

const faqs = [
  {
    q: "浴室クリーニングの料金相場はいくらですか？",
    a: "浴室のみで15,000〜20,000円、浴室+洗面所で20,000〜28,000円、浴室+洗面所+トイレのセットで28,000〜38,000円が目安です。水回りをまとめて頼むセットプランで1箇所あたりの単価が下がる場合があります。",
  },
  {
    q: "カビ取りや防カビコーティングは料金に含まれますか？",
    a: "基本料金に含まれず、追加料金が発生する場合があります。天井の黒カビ・エプロン内部(浴槽カバー内)の洗浄・防カビコーティングの扱いは業者ごとに異なるため、見積もり時に範囲を確認してください。",
  },
  {
    q: "浴室クリーニングはどれくらいの頻度で頼むと良いですか？",
    a: "カビが発生しやすい環境かどうかで変わりますが、年1〜2回の依頼で汚れをリセットし、日常は換気・水切りで維持する使い方が一般的です。定期サービスを提供している業者もあります。",
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

export default function BathroomRankingPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            浴室クリーニング業者おすすめランキング
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            浴室クリーニングを頼める大手3ブランドを、各社公式サイトで確認した情報だけで比較します。ダスキン サービスマスターは浴室クリーニングをはじめとする各種ハウスクリーニングを提供する老舗ブランドです。当サイトは架空の口コミや独自集計の評点を作成しません。
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
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">浴室クリーニングの料金相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">範囲</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">相場</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-gray-200">浴室のみ</td><td className="p-3 border border-gray-200 font-bold">15,000〜20,000円</td></tr>
                <tr><td className="p-3 border border-gray-200">浴室+洗面所</td><td className="p-3 border border-gray-200 font-bold">20,000〜28,000円</td></tr>
                <tr><td className="p-3 border border-gray-200">浴室+トイレ</td><td className="p-3 border border-gray-200 font-bold">22,000〜30,000円</td></tr>
                <tr><td className="p-3 border border-gray-200">浴室+洗面所+トイレ</td><td className="p-3 border border-gray-200 font-bold">28,000〜38,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ※カビ除去、防カビコーティングは追加料金が発生する場合があります。詳細は<a href="/price/" className="text-sky-600 hover:underline">料金相場ページ</a>をご覧ください。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">失敗しない選び方（4つの確認ポイント）</h2>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">1. 作業範囲の確認</p>
              <p className="text-sm text-gray-600 leading-relaxed">エプロン内部・天井・鏡のウロコ取りが基本料金に含まれるかは業者ごとに異なります。見積もり時に範囲を明確にしましょう。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">2. 追加料金の条件</p>
              <p className="text-sm text-gray-600 leading-relaxed">カビ除去・防カビコーティングは追加になる場合があります。「追加料金なし」を明記する業者もあるため、総額で比較を。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">3. セットプランの活用</p>
              <p className="text-sm text-gray-600 leading-relaxed">洗面所・トイレとまとめると1箇所あたりの単価が下がる場合があります。水回り全体の汚れ具合で判断しましょう。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">4. 店舗の口コミ・評価</p>
              <p className="text-sm text-gray-600 leading-relaxed">実際に対応するのは地域の店舗です。<a href="/ranking/review-ranking/" className="text-sky-600 hover:underline">公式レビュー評価の高い店舗ランキング</a>も参考にしてください。</p>
            </div>
          </div>
        </div>
      </section>

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
            <a href="/services/bathroom/" className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition">浴室クリーニング詳細</a>
            <a href="/areas/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">地域から探す</a>
            <a href="/ranking/review-ranking/" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition">口コミ評価ランキング</a>
          </div>
        </div>
      </section>
    </div>
  );
}
