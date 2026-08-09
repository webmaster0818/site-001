import Link from "next/link";

export const metadata = {
  title: "運営者情報 | クリーンナビ",
  description:
    "クリーンナビの運営者情報です。運営会社、編集方針、比較・掲載の基準、広告（PR）についての開示、免責事項をご確認いただけます。",
  openGraph: {
    title: "運営者情報 | クリーンナビ",
    description:
      "クリーンナビの運営者情報です。運営会社、編集方針、比較・掲載の基準、広告（PR）についての開示、免責事項をご確認いただけます。",
    url: "https://cleaning-choices.com/about/",
    siteName: "クリーンナビ",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://cleaning-choices.com/about/",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/about/">運営者情報</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">運営者情報</h1>
          <p className="text-xl max-w-3xl mx-auto">
            クリーンナビの運営会社・編集方針についてご案内します
          </p>
        </div>
      </section>

      {/* 本文 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
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
                      <th className="bg-base-200">事業内容</th>
                      <td>Webメディア運営、デジタルマーケティング支援</td>
                    </tr>
                    <tr>
                      <th className="bg-base-200">お問い合わせ</th>
                      <td>
                        <Link href="/contact/" className="link link-primary">
                          お問い合わせページ
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 当サイトについて */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                クリーンナビについて
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  クリーンナビ（cleaning-choices.com）は、ハウスクリーニングの利用を検討している方に向けて、エアコン・浴室・キッチンなどのサービス内容や料金の目安、業者選びのポイントを整理して提供する「ハウスクリーニング業者の比較情報メディア」です。
                </p>
                <p>
                  当サイト自身は清掃業者ではなく、清掃サービスの提供・受注・仲介は行っていません。実際のサービス内容・料金・対応エリアは各事業者によって異なります。ご依頼の際は、必ず各社の公式サイトで最新情報をご確認のうえ、ご自身の判断でご利用ください。
                </p>
              </div>
            </div>

            {/* 編集方針 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                編集方針
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>当サイトでは、以下の方針に基づいてコンテンツを制作しています。</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>公開情報に基づく掲載：</strong>
                    掲載する各社のサービス内容・料金などの情報は、各社公式サイトの公開情報に基づいて記載します。
                  </li>
                  <li>
                    <strong>確認日の記載：</strong>
                    情報を確認した時点を明示できるよう、確認日を記載する運用を行っています。
                  </li>
                  <li>
                    <strong>架空の口コミ・体験談の禁止：</strong>
                    架空の口コミや体験談は掲載しません。
                  </li>
                  <li>
                    <strong>利用者本位の情報設計：</strong>
                    利用者が業者選びの際に本当に必要とする情報を優先し、意思決定に役立つ比較・解説を心がけています。
                  </li>
                </ul>
              </div>
            </div>

            {/* 比較・掲載の基準 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                比較・掲載の基準
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトでは、主に以下の観点からハウスクリーニング業者の情報を整理・比較しています。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>料金の透明性：</strong>料金体系や追加料金の条件が公式サイトで明示されているか。</li>
                  <li><strong>サービス内容：</strong>対応サービスの種類、作業範囲、オプションの有無。</li>
                  <li><strong>対応エリア：</strong>対応地域の広さ、地域ごとの対応状況。</li>
                  <li><strong>保険・保証：</strong>損害保険への加入や作業後の保証の有無。</li>
                  <li><strong>運営の信頼性：</strong>運営会社の実在性、公式サイトでの情報公開の姿勢。</li>
                </ul>
                <p>
                  これらは各社の公式サイトおよび公開情報をもとに整理しており、内容の変更にあわせて随時見直しています。
                </p>
              </div>
            </div>

            {/* 広告（PR）について */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                広告（PR）について
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトには、アフィリエイトプログラムによる広告（PR）を含む場合があります。利用者が当サイトのリンクを経由してサービスに申し込んだ場合、当社が事業者から報酬を受け取ることがあります。
                </p>
                <p>
                  ただし、広告の有無や報酬額が各社の評価・掲載順位に影響することはありません。掲載内容は、上記の比較・掲載の基準に基づいて作成しています。
                </p>
              </div>
            </div>

            {/* 免責事項 */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                免責事項
              </h2>
              <div className="space-y-4 text-base-content/80 leading-relaxed">
                <p>
                  当サイトに掲載されている情報は、各社の公式サイトの公開情報および当社の調査に基づくものであり、その完全性・正確性・最新性を保証するものではありません。
                </p>
                <p>
                  サービスのご利用に際しては、必ず各事業者に直接お問い合わせのうえ、最新の情報をご確認ください。当サイトの情報に基づく判断や行動によって生じた損害について、当社は一切の責任を負いません。詳しくは
                  <Link href="/terms/" className="link link-primary">利用規約</Link>
                  もあわせてご確認ください。
                </p>
              </div>
            </div>

            {/* 関連ページ */}
            <div>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                関連ページ
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base-content/80">
                <li><Link href="/privacy/" className="link link-primary">プライバシーポリシー</Link></li>
                <li><Link href="/terms/" className="link link-primary">利用規約</Link></li>
                <li><Link href="/contact/" className="link link-primary">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
