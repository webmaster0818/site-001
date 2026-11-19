import Link from "next/link";
import type { DiyGuide, GuideBlock } from "../data/diyGuides";
import { DIY_GUIDES } from "../data/diyGuides";

// 「自分で掃除する」段階の読み手向けガイド（2026-11-19 新設・kwexp）。
// メーカー・公的機関の公式情報だけを出典にし、自分でできる範囲／業者に頼む目安／業者の公式料金を必ず並べる。
const ORIGIN = "https://cleaning-choices.com";

function Block({ b }: { b: GuideBlock }) {
  if (typeof b === "string") return <p className="leading-relaxed mb-4">{b}</p>;
  if ("ul" in b)
    return (
      <ul className="list-disc pl-6 space-y-1 mb-4 leading-relaxed">
        {b.ul.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    );
  if ("ol" in b)
    return (
      <ol className="list-decimal pl-6 space-y-1 mb-4 leading-relaxed">
        {b.ol.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ol>
    );
  return (
    <div className="overflow-x-auto mb-2">
      <table className="w-full min-w-[560px] text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            {b.table.head.map((h, i) => (
              <th key={i} className="p-3 border border-gray-200 font-bold text-gray-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {b.table.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className={`p-3 border border-gray-200 align-top ${j === 0 ? "font-bold text-gray-900" : "text-gray-700"}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {b.table.note && <p className="text-xs text-gray-500 mt-2 mb-4">{b.table.note}</p>}
    </div>
  );
}

export default function DiyGuideArticle({ g }: { g: DiyGuide }) {
  const url = `${ORIGIN}/guide-detail/${g.slug}/`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "業者選びガイド", item: `${ORIGIN}/guide/` },
        { "@type": "ListItem", position: 3, name: g.h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: g.h1,
      url,
      datePublished: g.publishedAt,
      dateModified: g.checkedAt,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: g.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  const related = g.related
    .map((s) => DIY_GUIDES.find((x) => x.slug === s))
    .filter((x): x is DiyGuide => Boolean(x));

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="breadcrumbs text-xs text-gray-500 mb-4">
            <ul>
              <li><a href="/">ホーム</a></li>
              <li><a href="/guide/">業者選びガイド</a></li>
              <li>{g.h1}</li>
            </ul>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">{g.h1}</h1>
          <p className="text-xs text-gray-500 mb-6">公開日 {g.publishedAt}／公式情報の確認日 {g.checkedAt}</p>
          <div className="rounded-xl border border-primary/30 bg-white p-5">
            {g.answer.map((p, i) => (
              <p key={i} className={`leading-relaxed ${i < g.answer.length - 1 ? "mb-3" : ""}`}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-10">
        {g.sections.map((s, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">{s.h2}</h2>
            {s.blocks.map((b, j) => (
              <Block key={j} b={b} />
            ))}
          </section>
        ))}

        <section className="mb-10">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">業者に依頼する目安</h2>
          <ul className="list-disc pl-6 space-y-1 mb-4 leading-relaxed">
            {g.whenPro.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">{g.priceHeading}</h2>
          <p className="leading-relaxed mb-4">{g.priceLead}</p>
          <div className="overflow-x-auto mb-2">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">業者</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">メニュー</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">公式料金（税込）</th>
                </tr>
              </thead>
              <tbody>
                {g.prices.map((r, i) => (
                  <tr key={i}>
                    <td className="p-3 border border-gray-200 font-bold text-gray-900">{r.brand}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{r.menu}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">
                      {r.price}
                      <a href={r.src} target="_blank" rel="noopener" className="ml-2 text-xs text-primary underline">公式</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-6">
            ※ {g.checkedAt} に各社公式サイトで確認した通常価格です（キャンペーン価格は掲載していません）。料金は予告なく変わることがあり、汚れの状態・機種・設置状況によって追加料金や対応不可となる場合があります。ご依頼前に、見積もりで最新の料金をご確認ください。
          </p>
          <div className="bg-base-200 rounded-2xl p-6 text-center">
            <p className="font-bold mb-3">{g.ctaText}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {g.cta.map((c, i) => (
                <Link key={c.href} href={c.href} className={i === 0 ? "btn btn-primary" : "btn btn-outline"}>{c.label}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">よくある質問</h2>
          <dl className="space-y-5">
            {g.faq.map((f, i) => (
              <div key={i}>
                <dt className="font-bold mb-1">Q. {f.q}</dt>
                <dd className="leading-relaxed text-gray-700">A. {f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">出典（確認日 {g.checkedAt}）</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm leading-relaxed">
            {g.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener" className="text-primary underline break-all">{s.name}</a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            当サイトはメーカー・公的機関・各業者の公式サイトに掲載された内容をもとに整理しています。お使いの機種の取扱説明書に記載がある場合は、取扱説明書の内容を優先してください。
          </p>
        </section>

        {related.length > 0 && (
          <section className="mb-4">
            <h2 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">関連するガイド</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/guide-detail/${r.slug}/`} className="card bg-base-100 border border-gray-200 p-4 block text-primary font-bold hover:underline">{r.h1}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
