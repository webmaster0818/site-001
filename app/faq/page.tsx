import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata = {
  title: "よくある質問（FAQ）| クリーンナビ",
  description: "ハウスクリーニングに関するよくある質問と回答。料金、作業時間、準備するもの、トラブル対応など、気になる疑問を解決します。",
  viewport: "width=device-width, initial-scale=1",
};

export default function FAQ() {
  const faqs = [
    {
      category: "料金について",
      questions: [
        {
          q: "料金はどのくらいかかりますか？",
          a: "サービス内容により異なります。エアコンクリーニングは1台10,000〜15,000円、浴室クリーニングは15,000〜25,000円、キッチンクリーニングは15,000〜30,000円が相場です。詳しくは料金相場ページをご覧ください。",
        },
        {
          q: "見積もりは無料ですか？",
          a: "多くの業者が無料見積もりに対応していますが、一部有料の場合もあります。事前に確認することをおすすめします。",
        },
        {
          q: "追加料金はかかりますか？",
          a: "汚れの程度が想定より激しい場合や、作業範囲が広い場合に追加料金が発生することがあります。事前見積もり時に追加料金の条件を確認しましょう。",
        },
        {
          q: "支払い方法は何がありますか？",
          a: "現金、クレジットカード、銀行振込などが一般的です。業者によって対応が異なるため、予約時に確認してください。",
        },
      ],
    },
    {
      category: "作業について",
      questions: [
        {
          q: "作業時間はどのくらいかかりますか？",
          a: "エアコンクリーニングは1〜2時間、浴室クリーニングは2〜3時間、キッチンクリーニングは2〜4時間が目安です。汚れの程度により前後します。",
        },
        {
          q: "立ち会いは必要ですか？",
          a: "基本的に立ち会いが必要です。鍵を預けて不在でも作業できる業者もありますが、セキュリティ面を考えると立ち会いがおすすめです。",
        },
        {
          q: "準備しておくものはありますか？",
          a: "基本的に業者が全て持参しますが、作業スペースの確保、貴重品の移動、ペットの別室移動などをお願いされる場合があります。",
        },
        {
          q: "水道や電気は使いますか？",
          a: "はい、クリーニング作業には水道と電気が必要です。事前に使用の了承をいただく場合が多いです。",
        },
      ],
    },
    {
      category: "予約・キャンセルについて",
      questions: [
        {
          q: "予約はどのくらい前にすればいいですか？",
          a: "繁忙期（年末年始、ゴールデンウィーク前など）は1ヶ月前の予約をおすすめします。通常時期は1〜2週間前でも予約可能な場合が多いです。",
        },
        {
          q: "当日予約はできますか？",
          a: "業者の空き状況によりますが、即日対応可能な業者も多数あります。ただし、希望時間帯が限られる場合があります。",
        },
        {
          q: "キャンセル料はかかりますか？",
          a: "多くの業者で、作業日の2〜3日前までのキャンセルは無料です。前日・当日キャンセルは料金の50〜100%がかかる場合があります。",
        },
        {
          q: "日時の変更はできますか？",
          a: "できるだけ早めに連絡すれば、ほとんどの業者が対応してくれます。キャンセルポリシーと同様に、直前の変更は料金が発生する場合があります。",
        },
      ],
    },
    {
      category: "サービス内容について",
      questions: [
        {
          q: "エアコンクリーニングの範囲はどこまでですか？",
          a: "基本的に内部のフィルター、ファン、熱交換器などを分解洗浄します。外装の拭き掃除も含まれます。室外機は別料金の場合が多いです。",
        },
        {
          q: "浴室クリーニングの範囲はどこまでですか？",
          a: "浴槽、壁、床、天井、鏡、蛇口、排水口などが基本範囲です。カビ取りやコーティングは追加オプションになる場合があります。",
        },
        {
          q: "キッチンクリーニングの範囲はどこまでですか？",
          a: "シンク、コンロ、換気扇、作業台、壁などが基本範囲です。レンジフードの分解洗浄は別料金や追加オプションの場合があります。",
        },
        {
          q: "家具の移動はしてもらえますか？",
          a: "軽い家具は対応してくれる業者が多いですが、大型家具や貴重品は事前に移動をお願いされることがあります。",
        },
      ],
    },
    {
      category: "トラブル・保証について",
      questions: [
        {
          q: "作業中に物を壊された場合はどうなりますか？",
          a: "損害保険に加入している業者であれば、保険で補償されます。業者選びの際は必ず損害保険の有無を確認しましょう。",
        },
        {
          q: "仕上がりに不満がある場合は？",
          a: "多くの業者が作業保証を設けており、一定期間内であれば無料で再作業してくれます。保証内容は事前に確認しましょう。",
        },
        {
          q: "作業後にトラブルが発生した場合の連絡先は？",
          a: "業者の連絡先は必ず控えておきましょう。作業完了書や領収書にも記載されています。",
        },
        {
          q: "クレームはどこに言えばいいですか？",
          a: "まずは作業を行った業者に連絡してください。解決しない場合は、消費生活センターや国民生活センターに相談できます。",
        },
      ],
    },
    {
      category: "その他",
      questions: [
        {
          q: "女性スタッフを指定できますか？",
          a: "女性スタッフが在籍している業者であれば、指定できる場合があります。予約時に確認してください。",
        },
        {
          q: "ペットがいても大丈夫ですか？",
          a: "多くの業者が対応していますが、作業中は別室に移動してもらうことが多いです。ペットアレルギーのスタッフもいるため、事前に伝えましょう。",
        },
        {
          q: "賃貸物件でも利用できますか？",
          a: "はい、利用可能です。退去時のクリーニングなどもよく利用されています。ただし、特殊な作業が必要な場合は大家さんの許可が必要なことがあります。",
        },
        {
          q: "定期的に利用するとお得になりますか？",
          a: "多くの業者が定期契約割引や会員割引を設けています。年に数回利用する場合は、定期契約がお得になることが多いです。",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ヘッダー */}
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl font-bold">
              クリーンナビ
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/services/aircon">サービス一覧</Link></li>
              <li><Link href="/price">料金相場</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* パンくずリスト */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/faq">よくある質問</Link></li>
          </ul>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              よくある質問
            </h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto">
            ハウスクリーニングに関する疑問にお答えします
          </p>
        </div>
      </section>

      {/* FAQコンテンツ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="collapse collapse-plus bg-base-200">
                      <input type="radio" name={`faq-accordion-${categoryIndex}`} />
                      <div className="collapse-title text-lg font-semibold">
                        <div className="flex items-start gap-3">
                          <span className="badge badge-primary badge-sm mt-1">Q</span>
                          <span>{faq.q}</span>
                        </div>
                      </div>
                      <div className="collapse-content">
                        <div className="flex items-start gap-3 pt-4">
                          <span className="badge badge-secondary badge-sm mt-1">A</span>
                          <p className="text-base-content/80">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              解決しない疑問がありますか？
            </h2>
            <p className="text-lg text-base-content/70 mb-8">
              上記で解決しない質問は、各業者に直接お問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/aircon" className="btn btn-primary btn-lg">
                業者を探す
              </Link>
              <Link href="/guide" className="btn btn-outline btn-lg">
                業者選びガイドを見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            関連ページ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/price" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <h3 className="card-title text-primary">料金相場</h3>
                <p className="text-sm text-base-content/70">
                  サービス別の料金相場を詳しく解説
                </p>
                <div className="card-actions justify-end">
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </div>
              </div>
            </Link>

            <Link href="/guide" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <h3 className="card-title text-primary">業者選びガイド</h3>
                <p className="text-sm text-base-content/70">
                  失敗しない業者選びのポイント
                </p>
                <div className="card-actions justify-end">
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </div>
              </div>
            </Link>

            <Link href="/services/aircon" className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <h3 className="card-title text-primary">サービス一覧</h3>
                <p className="text-sm text-base-content/70">
                  エアコン・浴室・キッチンなど
                </p>
                <div className="card-actions justify-end">
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </div>
              </div>
            </Link>
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
            <Link href="/price" className="link link-hover">料金相場</Link>
            <Link href="/guide" className="link link-hover">業者選びガイド</Link>
            <Link href="/faq" className="link link-hover">よくある質問</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
