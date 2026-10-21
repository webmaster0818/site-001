import Link from "next/link";
import Reveal from "../components/Reveal";
import OfficialRatingStores from "../components/OfficialRatingStores";
import { Metadata } from "next";
import { withPageSocial } from "../siteOpenGraph";

export const metadata: Metadata = withPageSocial({
  title: "ハウスクリーニング業者ランキング一覧 | クリーンナビ",
  description:
    "エアコン・浴室などサービス別ランキング、料金の安さ、口コミ評価、即日対応など切り口別にハウスクリーニング業者を比較できます。",
  alternates: {
    canonical: "https://cleaning-choices.com/ranking/",
  },
});

const RANKINGS = [
  {
    href: "/ranking/aircon-ranking/",
    icon: "icon-aircon",
    title: "エアコンクリーニング業者ランキング",
    description: "エアコンクリーニング業者の料金と対応内容を比較しています。",
  },
  {
    href: "/ranking/bathroom-ranking/",
    icon: "icon-bathroom",
    title: "浴室クリーニング業者ランキング",
    description: "浴室クリーニング業者の料金と対応内容を比較しています。",
  },
  {
    href: "/ranking/cheap-ranking/",
    icon: "icon-price",
    title: "料金が安い業者ランキング",
    description: "料金を重視して業者を選びたい方に向けた比較です。",
  },
  {
    href: "/ranking/review-ranking/",
    icon: "icon-official",
    title: "口コミ評価が高い業者ランキング",
    description: "各ブランド公式サイトのレビュー評価をもとにした店舗の比較です。",
  },
  {
    href: "/ranking/quick-service/",
    icon: "icon-quick",
    title: "即日対応可能な業者まとめ",
    description: "急ぎで依頼したい方に向けた、即日対応の業者の探し方です。",
  },
];

export default function RankingIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            業者ランキング一覧
          </h1>
          <p className="text-lg opacity-90">
            サービス別・料金・口コミ・対応スピードの切り口から、目的に合った業者を比較できます。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">ランキング</span>
        </nav>

        <ul className="cn-trouble-grid">
          {RANKINGS.map((ranking, i) => (
            <li key={ranking.href} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <Link className="cn-trouble-card" href={ranking.href}>
                <span className="cn-trouble-body">
                  <img src={`/images/top/${ranking.icon}.webp`} alt="" width={384} height={384} loading="lazy" />
                  <span className="cn-trouble-note">{ranking.description}</span>
                </span>
                <span className="cn-trouble-label">{ranking.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Reveal />

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">テーマ別の比較記事</h3>
          <ul className="grid gap-2 md:grid-cols-2">
            {[
              { href: "/comparison/major-3-comparison/", label: "大手3社の比較" },
              { href: "/comparison/area-price-comparison/", label: "エリア別料金相場比較" },
              { href: "/comparison/time-comparison/", label: "作業時間・所要時間比較" },
              { href: "/comparison/warranty-comparison/", label: "保証・補償制度比較" },
              { href: "/comparison/coupon-info/", label: "クーポン・割引情報まとめ" },
            ].map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-blue-600 hover:underline">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">比較の考え方</h3>
          <p className="text-gray-700 leading-relaxed">
            ハウスクリーニング業者は、料金の安さだけでなく、依頼したい箇所への対応可否や口コミ評価、予約の取りやすさを合わせて比較することをおすすめします。まずエアコン・浴室などサービス別のランキングで候補を絞り、料金や対応時期などの条件をもとに依頼先をお選びください。
          </p>
        </section>
      </div>

      <OfficialRatingStores limit={10} />

    </div>
  );
}
