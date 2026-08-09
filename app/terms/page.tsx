import Link from "next/link";

export const metadata = {
  title: "利用規約 | クリーンナビ",
  description:
    "クリーンナビの利用規約です。掲載情報の取り扱い、著作権、免責事項、準拠法など、当サイトをご利用いただく際の条件を定めています。",
  openGraph: {
    title: "利用規約 | クリーンナビ",
    description:
      "クリーンナビの利用規約です。掲載情報の取り扱い、著作権、免責事項、準拠法など、当サイトをご利用いただく際の条件を定めています。",
    url: "https://cleaning-choices.com/terms/",
    siteName: "クリーンナビ",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://cleaning-choices.com/terms/",
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/terms/">利用規約</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">利用規約</h1>
          <p className="text-xl max-w-3xl mx-auto">
            当サイトをご利用いただく際の条件について
          </p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-base-content/80 leading-relaxed">
              <p>
                本規約は、株式会社MediaX（以下「当社」）が運営するクリーンナビ（cleaning-choices.com、以下「当サイト」）の利用条件を定めるものです。当サイトを閲覧・利用された場合、本規約に同意いただいたものとみなします。
              </p>
            </div>

            {/* 掲載情報について */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第1条（掲載情報について）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトは、掲載する情報の正確性・最新性の確保に努めていますが、その内容の完全性・正確性・有用性を保証するものではありません。
                </p>
                <p>
                  掲載内容（各社のサービス内容・料金・キャンペーン等を含みます）は予告なく変更されることがあります。最新の情報は、必ず各事業者の公式サイトでご確認ください。
                </p>
              </div>
            </div>

            {/* リンク先サービス */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第2条（リンク先サービスの利用について）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトからリンクする各サービスの申し込み・契約は、利用者と各事業者との間で直接成立するものであり、当社はその契約の当事者にはなりません。
                </p>
                <p>
                  サービスの内容・品質・料金・解約条件などに関する事項は、各事業者にお問い合わせのうえ、利用者ご自身の判断と責任でご利用ください。
                </p>
              </div>
            </div>

            {/* 著作権 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第3条（著作権）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトに掲載されている文章・画像などのコンテンツの著作権は、当社または正当な権利を有する第三者に帰属します。法令で認められる引用の範囲を超えて、無断で複製・転載・改変することを禁止します。
                </p>
              </div>
            </div>

            {/* 禁止事項 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第4条（禁止事項）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>当サイトの利用にあたり、以下の行為を禁止します。</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>当サイトの運営を妨害する行為</li>
                  <li>当社または第三者の権利・利益を侵害する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </div>
            </div>

            {/* 免責事項 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第5条（免責事項）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当社は、当サイトの利用または利用不能、掲載情報の利用によって利用者に生じたいかなる損害についても、一切の責任を負いません。
                </p>
                <p>
                  また、当サイトの掲載内容・URLは、予告なく変更・削除されることがあります。これによって生じた損害についても、当社は責任を負いません。
                </p>
              </div>
            </div>

            {/* 規約の変更 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第6条（規約の変更）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当社は、必要と判断した場合、利用者への事前の通知なく本規約を変更することがあります。変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
                </p>
              </div>
            </div>

            {/* 準拠法 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                第7条（準拠法）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  本規約の解釈および適用は、日本法に準拠するものとします。
                </p>
              </div>
            </div>

            {/* 関連ページ */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                関連ページ
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li><Link href="/about/" className="link link-primary">運営者情報</Link></li>
                <li><Link href="/privacy/" className="link link-primary">プライバシーポリシー</Link></li>
                <li><Link href="/contact/" className="link link-primary">お問い合わせ</Link></li>
              </ul>
            </div>

            <div className="text-base-content/80">
              <p>制定日：2026年8月9日</p>
              <p className="mt-2">株式会社MediaX</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold text-lg">クリーンナビ</p>
          <p>ハウスクリーニング業者の比較・検索サイト</p>
          <p className="text-sm mt-2">© 2024 クリーンナビ All rights reserved.</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link href="/price/" className="link link-hover">料金相場</Link>
            <Link href="/guide/" className="link link-hover">業者選びガイド</Link>
            <Link href="/faq/" className="link link-hover">よくある質問</Link>
          </div>
          <div className="grid grid-flow-col gap-4 mt-2">
            <Link href="/about/" className="link link-hover">運営者情報</Link>
            <Link href="/privacy/" className="link link-hover">プライバシーポリシー</Link>
            <Link href="/terms/" className="link link-hover">利用規約</Link>
            <Link href="/contact/" className="link link-hover">お問い合わせ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
