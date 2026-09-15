/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PARTNERS, SERVICE_LABELS } from "../../data/partners";

export function generateStaticParams() {
  return PARTNERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PARTNERS.find((x) => x.slug === slug);
  if (!p) return {};
  const ym = p.confirmedAt.replace(/(\d+年\d+月).*/, "$1");
  return {
    title: `${p.name}の口コミ・評判は？料金・対応エリア・保証を公式情報で検証【${ym}確認】`,
    description: `${p.name}（${p.company}）の口コミ・評判を調べる前に確認したい料金体系・対応エリア・保証・支払方法・キャンセル条件を公式サイトで一次確認して整理。確認できなかった項目も正直に記載します。架空の口コミは掲載しません。`,
    alternates: { canonical: `https://cleaning-choices.com/review/${p.slug}/` },
  };
}

export default async function ReviewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PARTNERS.find((x) => x.slug === slug);
  if (!p) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
      { "@type": "ListItem", position: 2, name: "業者の口コミ・評判検証", item: "https://cleaning-choices.com/review/" },
      { "@type": "ListItem", position: 3, name: p.name, item: `https://cleaning-choices.com/review/${p.slug}/` },
    ],
  };

  const faqs = [
    {
      q: `${p.name}の口コミ・評判はどこで確認できますか？`,
      a: `当サイトは架空の口コミを作成しないため、利用者の声そのものは掲載していません。口コミを読む際は、同じサービス（例：${SERVICE_LABELS[p.tags[0]]}）・同じ地域の投稿を探し、良い評価と悪い評価の両方を確認してください。料金・エリア・保証といった公式に確認できる事実は、このページに確認日つきで整理しています。`,
    },
    {
      q: `${p.name}の料金は追加料金がかかりますか？`,
      a: p.prices.length
        ? `公式サイトの料金表記は上の表のとおりです（確認日 ${p.confirmedAt}）。追加料金の条件（駐車場代・汚れの程度・お掃除機能付きの加算など）は公式サイトの注記をご確認のうえ、見積もり時に必ず確認してください。`
        : `公式サイト上で料金表の明記を確認できませんでした。見積もり時に基本料金と追加料金の条件を必ず確認してください。`,
    },
    {
      q: `${p.name}はどの地域に対応していますか？`,
      a: `公式サイトの記載では「${p.area}」です${p.areaNote ? `（${p.areaNote}）` : ""}。エリア内でも一部地域は対象外となる場合があるため、申込み前に住所を伝えて確認してください。`,
    },
  ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const rows: { label: string; value: string | null; fallback: string }[] = [
    { label: "運営会社", value: p.company, fallback: "" },
    { label: "対応エリア", value: p.area + (p.areaNote ? `（${p.areaNote}）` : ""), fallback: "" },
    { label: "主なサービス", value: p.services.join(" / "), fallback: "" },
    { label: "保証・保険", value: p.guarantee, fallback: "公式サイト上で明確な記載を確認できませんでした" },
    { label: "支払方法", value: p.payment, fallback: "公式サイト上で明確な記載を確認できませんでした" },
    { label: "キャンセル", value: p.cancel, fallback: "公式サイト上で明確な記載を確認できませんでした" },
    { label: "スタッフ体制", value: p.staff, fallback: "公式サイト上で明確な記載を確認できませんでした" },
    { label: "申込みの流れ", value: p.flow, fallback: "公式サイト上で明確な記載を確認できませんでした" },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="breadcrumbs text-xs text-gray-500 mb-4">
            <ul>
              <li><a href="/">ホーム</a></li>
              <li><a href="/review/">業者の口コミ・評判検証</a></li>
              <li>{p.name}</li>
            </ul>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{p.name}の口コミ・評判は？料金・対応エリア・保証を公式情報で検証</h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            このページの情報は、{p.name}の公式サイトを当サイトが直接確認して整理したものです（確認日: {p.confirmedAt}）。伝聞や口コミサイトからの引用はしていません。口コミ・評判を読む前に、料金・エリア・保証といった「公式に確認できる事実」を先に押さえてください。確認できなかった項目は正直に記載します。
          </p>
          {p.areaNote && (
            <p className="mt-4 inline-block rounded-lg bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-bold text-amber-800">対応エリアにご注意：{p.areaNote}</p>
          )}
        </div>
      </section>

      {/* 料金 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">公式サイトの料金（確認日 {p.confirmedAt}）</h2>
          <p className="text-sm text-gray-600 mb-6">料金は公式サイトの表記をそのまま転記しています。税込・税抜の表記も原文どおりです。</p>
          {p.prices.length ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="p-3 border border-gray-200 font-bold text-gray-700">メニュー</th>
                    <th className="p-3 border border-gray-200 font-bold text-gray-700">公式料金</th>
                    <th className="p-3 border border-gray-200 font-bold text-gray-700">条件・注記</th>
                  </tr>
                </thead>
                <tbody>
                  {p.prices.map((pr) => (
                    <tr key={pr.menu}>
                      <td className="p-3 border border-gray-200 text-gray-900">{pr.menu}</td>
                      <td className="p-3 border border-gray-200 font-bold text-gray-900 whitespace-nowrap">{pr.price}</td>
                      <td className="p-3 border border-gray-200 text-gray-600">{pr.note ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-gray-600">公式サイト上で料金表の明記を確認できませんでした。見積もり時にご確認ください。</p>
          )}
          <p className="text-xs text-gray-500 mt-3">相場との比較は<a href="/price/" className="text-sky-600 hover:underline">料金相場ページ</a>をご覧ください。料金は変更される場合があります。</p>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">公式サイトで確認できた基本情報</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm border-collapse bg-white">
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <th className="p-3 border border-gray-200 bg-gray-50 text-left font-bold text-gray-700 w-40">{r.label}</th>
                    <td className="p-3 border border-gray-200 text-gray-800">{r.value ?? r.fallback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">出典: {p.name}公式サイト（当サイト確認日 {p.confirmedAt}）。内容は変更される場合があります。申込み前に必ず公式サイトで最新情報をご確認ください。</p>
        </div>
      </section>

      {/* 特徴・確認できなかったこと */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">公式サイトで確認できた特徴</h2>
            <ul className="space-y-3">
              {p.facts.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="text-sky-600 shrink-0">■</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          {p.unconfirmed.length > 0 && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">確認できなかったこと</h2>
              <p className="text-sm text-gray-600 mb-3">確認日時点で公式サイト上に記載を見つけられなかった項目です。気になる場合は申込み前に直接お問い合わせください。</p>
              <ul className="space-y-2">
                {p.unconfirmed.map((u) => (
                  <li key={u} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-gray-400 shrink-0">—</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 口コミの読み方・向き */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{p.name}の口コミ・評判を読むときの3つの視点</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">1. 同じサービスの口コミか</p>
              <p className="text-sm text-gray-600 leading-relaxed">{p.name}の公式メニューは「{p.services.slice(0, 3).join("・")}」などです。自分が頼むサービスと同じ口コミを探してください。エアコンの機種や汚れの程度で評価は変わります。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">2. 同じ地域・時期の口コミか</p>
              <p className="text-sm text-gray-600 leading-relaxed">対応エリアは「{p.area}」です。担当スタッフや繁忙期（5〜8月）の予約状況で体験は変わるため、地域と時期が近い投稿を優先して読みます。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">3. 悪い口コミの「理由」を見る</p>
              <p className="text-sm text-gray-600 leading-relaxed">追加料金・日程・仕上がりのどれが原因かで、自分に当てはまるかが変わります。追加料金の条件は上の料金表と公式注記で先に確認できます。</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
              <p className="text-xs font-bold text-sky-700 mb-2">確認できた事実から言える「向いているケース」</p>
              <p className="text-sm text-gray-800 leading-relaxed">{p.fitFor}</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs font-bold text-amber-700 mb-2">申込み前に確認しておきたい点</p>
              <p className="text-sm text-gray-800 leading-relaxed">{p.checkBefore}</p>
            </div>
          </div>
          {p.affiliateUrl && (
            <div className="mt-8 rounded-xl border border-amber-200 bg-white p-5 text-center">
              <a
                href={p.affiliateUrl}
                rel="sponsored nofollow noopener"
                target="_blank"
                className="inline-block rounded-lg bg-amber-600 px-6 py-3 text-sm md:text-base font-bold text-white hover:bg-amber-700 transition"
              >
                {p.affiliateLabel ?? `${p.name}の公式サイトで最新料金を確認する`}
              </a>
              {p.affiliatePixel && <img width={1} height={1} src={p.affiliatePixel} alt="" style={{ border: "none" }} />}
              {p.banner && (
                <div className="mt-4 flex justify-center">
                  <a href={p.banner.href} rel="sponsored nofollow noopener" target="_blank">
                    <img src={p.banner.img} width={p.banner.width} height={p.banner.height} alt={p.name} style={{ border: "none" }} />
                  </a>
                </div>
              )}
              <p className="mt-2 text-[11px] text-gray-500">PR・{p.name}の公式サイトへ移動します。広告の有無は当サイトの掲載内容・評価に影響しません。</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
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
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/review/" className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition">他の業者の検証を見る</a>
            <a href="/ranking/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">大手3ブランドの比較</a>
            <a href="/areas/" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition">地域の店舗から探す</a>
          </div>
        </div>
      </section>
    </div>
  );
}
