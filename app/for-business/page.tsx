import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "掲載をご希望の事業者さまへ｜クリーンナビ",
  description: "クリーンナビへの店舗情報掲載をご希望のハウスクリーニング事業者さま向けのご案内です。掲載基準・掲載情報の範囲・訂正依頼の方法をまとめています。",
  alternates: { canonical: "https://cleaning-choices.com/for-business/" },
};

export default function ForBusinessPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
      { "@type": "ListItem", position: 2, name: "掲載をご希望の事業者さまへ", item: "https://cleaning-choices.com/for-business/" },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">掲載をご希望の事業者さまへ</h1>
          <p className="text-sm opacity-90">クリーンナビの店舗データベースへの掲載についてのご案内です</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-10">
        <nav className="breadcrumbs mb-8" aria-label="パンくず">
          <ol>
            <li><a href="/">ホーム</a></li>
            <li>掲載をご希望の事業者さまへ</li>
          </ol>
        </nav>

        <section className="card mb-8">
          <div className="card-body">
            <h2 className="card-title">クリーンナビの掲載方針</h2>
            <p className="text-sm text-ink-soft leading-relaxed">
              クリーンナビは、ハウスクリーニング事業者の店舗情報を「公式サイトなどの一次情報で確認できた内容のみ」掲載するデータベース型の比較サイトです。
              現在は全国のフランチャイズ加盟店を中心に店舗情報を掲載しており、掲載情報にはすべて出典と確認日を付記しています。
            </p>
          </div>
        </section>

        <section className="card mb-8">
          <div className="card-body">
            <h2 className="card-title">掲載基準</h2>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>・公式サイト・公的情報などで実在と事業内容が確認できること</li>
              <li>・店舗名、所在地（都道府県以上）、事業内容が公開情報として確認できること</li>
              <li>・特定商取引法など関連法令に反する表示が確認されないこと</li>
            </ul>
            <p className="text-xs text-muted mt-3">
              掲載可否は当サイトの編集方針に基づき判断します。掲載は無料で、掲載順位を金銭で変更することはありません。
            </p>
          </div>
        </section>

        <section className="card mb-8">
          <div className="card-body">
            <h2 className="card-title">掲載内容の訂正・削除のご依頼</h2>
            <p className="text-sm text-ink-soft leading-relaxed">
              掲載中の店舗情報について、内容の誤り・変更（住所、電話番号、営業時間など）や掲載の削除をご希望の場合は、
              <a href="/contact/" className="underline text-primary">お問い合わせページ</a>より、対象店舗のページURLと訂正内容をお知らせください。
              確認のうえ、順次対応いたします。
            </p>
          </div>
        </section>

        <section className="card mb-8">
          <div className="card-body">
            <h2 className="card-title">新規掲載のご希望</h2>
            <p className="text-sm text-ink-soft leading-relaxed">
              現在データベースに掲載されていない事業者さまで掲載をご希望の場合は、
              <a href="/contact/" className="underline text-primary">お問い合わせページ</a>より、
              事業者名・公式サイトURL・所在地をお知らせください。掲載基準を確認のうえ、ご連絡いたします。
            </p>
            <ul className="space-y-1 text-sm text-ink-soft mt-2">
              <li>・事業者名（屋号・法人名）</li>
              <li>・公式サイトのURL</li>
              <li>・所在地（都道府県・市区町村）</li>
              <li>・主な対応サービス（エアコンクリーニング、水回りなど）</li>
            </ul>
          </div>
        </section>

        <div className="alert alert-info">
          <p className="text-sm">
            当サイトの運営者情報は<a href="/about/" className="underline text-primary">運営者情報</a>を、
            広告掲載の考え方は各ページのPR表記をご覧ください。
          </p>
        </div>
      </div>
    </main>
  );
}
