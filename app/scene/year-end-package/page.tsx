import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "年末大掃除はプロに依頼【2026年版】ハウスクリーニングの箇所別の考え方・予約時期",
  description:
    "年末の大掃除をハウスクリーニング業者に依頼する際のガイド【2026年版】。依頼が集中しやすい箇所（エアコン・キッチン・浴室）、予約のタイミング、業者の選び方、地域別の店舗情報をご説明します。",
  alternates: { canonical: "https://cleaning-choices.com/scene/year-end-package/" },
};

const faqs = [
  {
    q: "年末の大掃除はいつ予約すべきですか？",
    a: "年末（11〜12月）はハウスクリーニングの繁忙期にあたり、希望日が埋まりやすくなる傾向があります。日程の選択肢を確保するには、需要が本格化する前の10〜11月中にご予約を検討することをおすすめします。",
  },
  {
    q: "大掃除では、どの箇所をプロに依頼するのがよいですか？",
    a: "ご家庭で落としにくい汚れがたまりやすい、エアコン内部・キッチンの換気扇や油汚れ・浴室のカビなどは、専用の機材や洗剤を使うプロに依頼する方が多い箇所です。ご自身で対応できる箇所（床・窓拭きなど）と分担すると、費用を抑えられます。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "箇所や汚れの状態、セットプランの有無で変わります。目安は料金相場ページに掲載していますが、正確な金額は見積もりで総額と追加料金の条件をご確認ください。2〜3社から相見積もりを取ることをおすすめします。",
  },
  {
    q: "どの業者に依頼すればよいですか？",
    a: "全国チェーンは対応エリアが広く、予約の仕組みが整っています。当サイトでは、各ブランド公式サイトで所在を確認した全国3,500店舗超の店舗情報を地域別に掲載しています。お住まいの地域からお探しください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
    { "@type": "ListItem", position: 2, name: "シーン別", item: "https://cleaning-choices.com/scene/" },
    { "@type": "ListItem", position: 3, name: "年末大掃除", item: "https://cleaning-choices.com/scene/year-end-package/" },
  ],
};

export default function YearEndPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">年末大掃除はプロに依頼【2026年版】</h1>
          <p className="text-sm opacity-90">依頼が集中する箇所・予約のタイミング・業者の探し方をご説明します</p>
        </div>
      </section>

      <div className="container mx-auto px-4 pt-6 max-w-4xl">
        <nav className="breadcrumbs" aria-label="パンくず">
          <ol>
            <li><a href="/">ホーム</a></li>
            <li><a href="/scene/">シーン別</a></li>
            <li>年末大掃除</li>
          </ol>
        </nav>
      </div>

      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="alert alert-info mb-8">
          <p className="text-sm">
            <strong>概要:</strong> 年末（11〜12月）は繁忙期で希望日が埋まりやすいため、<strong>10〜11月中のご予約の検討をおすすめ</strong>します。プロに依頼する箇所とご自身で行う箇所を分担すると、費用を抑えながら仕上がりを高めることができます。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">プロに依頼する方が多い箇所</h2>
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <a href="/services/aircon/" className="card p-5 block border border-gray-200">
            <p className="font-bold text-gray-900 mb-1">エアコンクリーニング</p>
            <p className="text-sm text-gray-600">内部のカビ・ホコリの除去には分解洗浄が必要です。冬の暖房シーズン前の依頼も多い箇所です。</p>
          </a>
          <a href="/services/kitchen/" className="card p-5 block border border-gray-200">
            <p className="font-bold text-gray-900 mb-1">キッチン・換気扇</p>
            <p className="text-sm text-gray-600">固着した油汚れは市販洗剤では落ちにくく、大掃除での依頼が集中する箇所です。</p>
          </a>
          <a href="/services/bathroom/" className="card p-5 block border border-gray-200">
            <p className="font-bold text-gray-900 mb-1">浴室クリーニング</p>
            <p className="text-sm text-gray-600">カビ・水垢・鏡のウロコ汚れなど、プロの仕上がりの差が出やすい箇所です。</p>
          </a>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">料金と業者選び</h2>
        <ul className="space-y-2 text-sm text-gray-700 mb-10">
          <li>・料金の目安は<a href="/price/" className="underline text-sky-600">料金相場ページ</a>で確認できます。総額と追加料金の条件は、見積もりでご確認ください</li>
          <li>・1社だけで決めず、2〜3社から相見積もりを取ることをおすすめします（<a href="/ranking/" className="underline text-sky-600">比較ランキング</a>）</li>
          <li>・繁忙期は予約が早く埋まります。候補の業者を早めに2〜3社選んでおくことをおすすめします</li>
        </ul>

        <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5 mb-10">
          <p className="text-sm font-bold text-gray-900 mb-2">定額のセットでまとめて依頼する例：カジタク（イオングループ）</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            大掃除2点セットA（浴室・レンジフード）34,800円、4ヶ所セット（浴室・レンジフード・キッチン・トイレまたは洗面所）61,600円（いずれも税込・2026年10月13日に公式サイトで確認）。見積もりなしの全国一律料金ですが、作業日は申込日から5日後以降で、11月上旬〜12月下旬は予約が取りづらいと公式に記載されています。
            詳しくは<a href="/review/kajitaku/" className="underline text-sky-600">カジタクの検証ページ</a>をご覧ください。
          </p>
          <div className="mt-4 flex justify-center">
            <a href="https://t.felmat.net/fmcl?ak=D7184U.1.P114083X.C1396789" target="_blank" rel="sponsored nofollow noopener">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://t.felmat.net/fmimg/D7184U.P114083X.C1396789" width={640} height={100} alt="カジタク" style={{ border: "none", maxWidth: "100%", height: "auto" }} />
            </a>
          </div>
          <p className="mt-2 text-center text-[11px] text-gray-500">PR・カジタクの公式サイトへ移動します。</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">お住まいの地域の店舗から探す</h2>
        <p className="text-sm text-gray-600 mb-4">
          当サイトでは、各ブランド公式サイトで所在を確認した<strong>全国3,500店舗超の店舗情報</strong>を掲載しています。地域ページから、お近くの店舗と対応エリアをご確認いただけます。
        </p>
        <p className="mb-10">
          <a href="/areas/" className="btn-cta inline-block bg-sky-600 text-white font-bold px-6 py-3 rounded-lg">47都道府県から店舗を探す</a>
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問</h2>
        <div className="space-y-4 mb-10">
          {faqs.map((f) => (
            <div key={f.q} className="card p-5 border border-gray-200">
              <p className="font-bold text-gray-900 mb-2">Q. {f.q}</p>
              <p className="text-sm text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
