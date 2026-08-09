import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | クリーンナビ",
  description:
    "クリーンナビのプライバシーポリシーです。個人情報の取り扱い、アクセス解析ツール（Google Analytics 4）の利用、広告プログラムへの参加についてご説明します。",
  openGraph: {
    title: "プライバシーポリシー | クリーンナビ",
    description:
      "クリーンナビのプライバシーポリシーです。個人情報の取り扱い、アクセス解析ツール（Google Analytics 4）の利用、広告プログラムへの参加についてご説明します。",
    url: "https://cleaning-choices.com/privacy/",
    siteName: "クリーンナビ",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://cleaning-choices.com/privacy/",
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/privacy/">プライバシーポリシー</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            当サイトにおける個人情報・アクセスデータの取り扱いについて
          </p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-base-content/80 leading-relaxed">
              <p>
                クリーンナビ（cleaning-choices.com、以下「当サイト」）を運営する株式会社MediaX（以下「当社」）は、当サイトにおける利用者の情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
              </p>
            </div>

            {/* 個人情報の取り扱い */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第1条（個人情報の取り扱い）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトは、閲覧にあたって氏名・住所・電話番号などの個人情報の入力を求めることはありません。お問い合わせなどを通じて当社が個人情報を取得した場合は、お問い合わせへの対応など取得目的の範囲内でのみ利用し、法令に基づく場合を除き、本人の同意なく第三者に提供しません。
                </p>
              </div>
            </div>

            {/* アクセス解析ツール */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第2条（アクセス解析ツールについて）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトは、Googleが提供するアクセス解析ツール「Google Analytics 4」を利用しています。Google Analytics 4は、Cookieを使用して匿名のトラフィックデータ（閲覧ページ、滞在時間、流入元など）を収集します。このデータは匿名で収集されており、個人を特定するものではありません。
                </p>
                <p>
                  この機能はCookieを無効にすることで収集を拒否できるほか、Googleが提供する「Google アナリティクス オプトアウト アドオン」をブラウザにインストールすることで、データの収集を停止できます。詳細は、Googleアナリティクス利用規約およびGoogleプライバシーポリシーをご確認ください。
                </p>
              </div>
            </div>

            {/* 広告について */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第3条（広告の配信・アフィリエイトプログラムについて）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトは、アフィリエイトプログラムに参加しており、掲載する事業者・サービスへのリンクに広告（PR）を含む場合があります。利用者がリンクを経由してサービスに申し込んだ場合、当社が報酬を受け取ることがあります。
                </p>
                <p>
                  広告の有無が各社の評価・掲載順位に影響しないことについては、
                  <Link href="/about/" className="link link-primary">運営者情報</Link>
                  の「広告（PR）について」をご確認ください。
                </p>
              </div>
            </div>

            {/* 免責 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第4条（免責事項）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトからリンクによって他のサイトに移動した場合、移動先サイトで提供される情報・サービスについて、当社は一切の責任を負いません。リンク先サイトにおける個人情報の取り扱いは、各サイトのプライバシーポリシーをご確認ください。
                </p>
              </div>
            </div>

            {/* 改定 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第5条（プライバシーポリシーの変更）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当社は、法令の改正や運用の変更にあわせて、本ポリシーを予告なく改定することがあります。改定後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </div>
            </div>

            {/* お問い合わせ */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第6条（お問い合わせ先）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  本ポリシーに関するお問い合わせについては、
                  <Link href="/about/" className="link link-primary">運営者情報</Link>
                  および
                  <Link href="/contact/" className="link link-primary">お問い合わせ</Link>
                  のページをご確認ください。
                </p>
              </div>
            </div>

            <div className="text-base-content/80">
              <p>制定日：2026年8月9日</p>
              <p className="mt-2">株式会社MediaX</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
