import type { Metadata } from "next";
import PartnerCards from "../../components/PartnerCards";

export const metadata: Metadata = {
  title: "ハウスクリーニングの即日・急ぎ対応業者の探し方｜当日予約のコツと注意点",
  description:
    "急ぎでハウスクリーニングを頼みたいときの実践ガイド。即日対応の業者を最短で見つける3ステップ、電話で確認すべきこと、繁忙期の注意点をまとめました。全国3,500店超の店舗データベース対応。",
  alternates: { canonical: "https://cleaning-choices.com/ranking/quick-service/" },
};

const faqs = [
  {
    q: "ハウスクリーニングは当日・即日でも頼めますか？",
    a: "店舗の空き状況次第です。即日対応の可否は同じブランドでも店舗ごとに異なるため、近隣の店舗に直接電話で確認するのが最短です。当サイトの店舗ページから各店舗の情報を確認できます。",
  },
  {
    q: "即日で頼みたいとき、電話で何を伝えれば良いですか？",
    a: "①希望日時 ②清掃してほしい箇所(エアコンの機種名など具体的に) ③自宅の場所、の3点を先に伝えると、対応可否と概算をすぐ確認できます。駐車スペースの有無も聞かれることが多いです。",
  },
  {
    q: "即日対応してもらいにくい時期はありますか？",
    a: "エアコンクリーニングの繁忙期(5〜8月)と大掃除シーズン(12月)は予約が集中し、即日対応は難しくなります。この時期に急ぎで頼む場合は、複数の店舗に並行して問い合わせるのが現実的です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function QuickServicePage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            即日・急ぎ対応のハウスクリーニング業者の探し方
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            来客前・退去前など「今週中になんとかしたい」ときのための実践ガイドです。即日・急ぎの対応可否は、同じブランドでも実際に対応する地域の店舗ごとに異なります。だからこそ、近くの店舗を素早く見つけて直接確認するのが最短ルートです。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">最短で見つける3ステップ</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-5 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center">1</span>
              <div>
                <p className="font-bold text-gray-900 mb-1">近隣の店舗を一覧で出す</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <a href="/areas/" className="text-sky-600 hover:underline">地域ページ</a>か<a href="/brand/osoujihonpo/" className="text-sky-600 hover:underline">ブランド別店舗一覧</a>で、お住まいの市区の店舗を確認します。当サイトは全店舗を公式サイトで実在確認しています。
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-5 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center">2</span>
              <div>
                <p className="font-bold text-gray-900 mb-1">2〜3店舗に並行して問い合わせる</p>
                <p className="text-sm text-gray-600 leading-relaxed">1店舗ずつ待つと時間切れになりがちです。候補を2〜3店舗に絞り、希望日時・箇所・場所を伝えて空きを同時に確認します。</p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-5 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center">3</span>
              <div>
                <p className="font-bold text-gray-900 mb-1">総額と作業範囲をその場で確定する</p>
                <p className="text-sm text-gray-600 leading-relaxed">急ぎのときほど、追加料金の条件と作業範囲を口頭で確定してから依頼しましょう。後からの認識違いを防げます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">急ぎの依頼で注意すること</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">繁忙期は前提が変わる</p>
              <p className="text-sm text-gray-600 leading-relaxed">エアコンは5〜8月、大掃除は12月が繁忙期。即日はほぼ埋まっているため、時期をずらせるなら数日待つ方が選択肢は増えます。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">「即日=割高」ではない</p>
              <p className="text-sm text-gray-600 leading-relaxed">空きがあれば通常料金で対応されるのが基本です。ただし総額は必ず事前確認を。相場は<a href="/price/" className="text-sky-600 hover:underline">料金相場ページ</a>で確認できます。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">店舗単位で判断する</p>
              <p className="text-sm text-gray-600 leading-relaxed">ブランドの公式サイトに「即日対応」と書かれていても、実際の可否は店舗の当日の体制次第です。直接確認が確実です。</p>
            </div>
          </div>
        </div>
      </section>

      <PartnerCards title="提携業者の対応エリアと料金（公式確認）" intro="即日対応の可否は日程・地域で変わるため、各社公式サイトの記載を確認日つきで整理した業者ページをご確認ください。掲載順は優劣の評価ではありません。" />

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
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">今すぐ近くの店舗を探す</h2>
          <p className="text-sm text-gray-600 mb-6">全国3,500店超の実在確認済み店舗データベースから、お住まいの地域の店舗を確認できます。</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/areas/" className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition">地域から探す</a>
            <a href="/brand/osoujihonpo/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">おそうじ本舗の店舗一覧</a>
            <a href="/brand/osoujikakumei/" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition">おそうじ革命の店舗一覧</a>
          </div>
        </div>
      </section>
    </div>
  );
}
