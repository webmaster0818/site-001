import Link from "next/link";

type PriceRow = { label: string; price: string };
type FAQ = { q: string; a: string };

export type ServiceDetailData = {
  name: string;
  lead: string;
  includes: string[];
  priceGuide: PriceRow[];
  priceNote?: string;
  points: string[];
  faq: FAQ[];
};

export default function ServiceDetailContent({ data }: { data: ServiceDetailData }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <article className="container mx-auto px-4 py-10 max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-3">{data.name}</h1>
      <p className="text-base leading-relaxed text-base-content/80 mb-8">{data.lead}</p>

      <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-3">
        作業内容（{data.name}に含まれる範囲）
      </h2>
      <ul className="list-disc pl-6 space-y-1 mb-8 leading-relaxed">
        {data.includes.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-3">料金相場の目安</h2>
      <div className="overflow-x-auto mb-2">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>内容</th>
              <th className="text-right">料金目安（税込）</th>
            </tr>
          </thead>
          <tbody>
            {data.priceGuide.map((r, i) => (
              <tr key={i}>
                <td>{r.label}</td>
                <td className="text-right font-medium">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-base-content/60 mb-8">
        ※ 上記は一般的な市場相場の目安です。実際の料金は業者・地域・汚れ具合・オプションにより変動し、金額を保証するものではありません。
        {data.priceNote ? ` ${data.priceNote}` : ""}正確な料金は無料見積りでご確認ください。
      </p>

      <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-3">依頼前に押さえるポイント</h2>
      <ul className="list-disc pl-6 space-y-1 mb-8 leading-relaxed">
        {data.points.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>

      <div className="bg-base-200 rounded-2xl p-6 my-8 text-center">
        <p className="font-bold mb-3">{data.name}の料金は業者で差が出ます。まずは無料見積りで比較を。</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/services/aircon" className="btn btn-primary">業者を探す</Link>
          <Link href="/price" className="btn btn-outline">料金相場を見る</Link>
        </div>
      </div>

      <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-3">よくある質問</h2>
      <div className="space-y-4 mb-4">
        {data.faq.map((f, i) => (
          <div key={i} className="bg-base-100 border border-base-300 rounded-xl p-4">
            <p className="font-bold mb-1">Q. {f.q}</p>
            <p className="text-sm leading-relaxed text-base-content/80">A. {f.a}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
