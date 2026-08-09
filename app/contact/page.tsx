import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | クリーンナビ",
  description:
    "クリーンナビへのお問い合わせ窓口のご案内です。掲載内容の修正依頼・広告掲載のご相談は運営会社（株式会社MediaX）までお願いします。",
  openGraph: {
    title: "お問い合わせ | クリーンナビ",
    description:
      "クリーンナビへのお問い合わせ窓口のご案内です。掲載内容の修正依頼・広告掲載のご相談は運営会社（株式会社MediaX）までお願いします。",
    url: "https://cleaning-choices.com/contact/",
    siteName: "クリーンナビ",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://cleaning-choices.com/contact/",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/contact/">お問い合わせ</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-xl max-w-3xl mx-auto">
            当サイトに関するお問い合わせ窓口のご案内
          </p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-base-content/80 leading-relaxed">
              <p>
                クリーンナビをご覧いただきありがとうございます。当サイトに関するお問い合わせは、本ページの内容をご確認のうえご連絡ください。
              </p>
            </div>

            {/* 掲載事業者向け */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                掲載事業者の方へ（情報訂正の申し立て・広告掲載のご相談）
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  掲載内容の修正依頼・広告掲載のご相談は、当サイトの運営会社（株式会社MediaX）までお願いいたします。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>掲載情報の訂正の申し立て：</strong>
                    貴社のサービス内容・料金などの掲載内容に誤りや古い情報がある場合は、対象ページのURL・該当箇所・正しい情報（公式サイトなどの根拠）をご準備のうえ、運営会社までお申し出ください。公開情報を確認のうえ、順次訂正いたします。
                  </li>
                  <li>
                    <strong>広告掲載・提携のご相談：</strong>
                    サービスの掲載や提携に関するご相談を受け付けています。
                  </li>
                </ul>
                <p>
                  ※ 具体的な連絡手段（お問い合わせフォーム・メールアドレス等）は現在準備中です。準備が整い次第、本ページにてご案内いたします。
                </p>
              </div>
            </div>

            {/* 利用者向け */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                サービス利用をご検討中の方へ
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトはハウスクリーニング業者の比較情報を提供するメディアであり、清掃サービスの提供・受注・仲介は行っていません。そのため、以下のようなお問い合わせにはお答えできません。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>各サービスの予約・見積もり・キャンセルに関するお問い合わせ</li>
                  <li>作業内容・日程・料金に関する個別のご相談</li>
                  <li>作業後のトラブル・保証に関するお問い合わせ</li>
                </ul>
                <p>
                  各サービスに関するお問い合わせは、必ず各事業者の公式サイトの窓口へ直接ご連絡ください。業者選びに関する一般的な情報は、
                  <Link href="/guide/" className="link link-primary">業者選びガイド</Link>
                  や
                  <Link href="/faq/" className="link link-primary">よくある質問</Link>
                  をご参照ください。
                </p>
              </div>
            </div>

            {/* 運営会社 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                運営会社
              </h2>
              <div className="overflow-x-auto">
                <table className="table w-full text-sm">
                  <tbody>
                    <tr>
                      <th className="bg-base-200 w-1/3">会社名</th>
                      <td>株式会社MediaX</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">所在地</th>
                      <td>東京都渋谷区</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">運営サイトについて</th>
                      <td>
                        <Link href="/about/" className="link link-primary">
                          運営者情報
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
