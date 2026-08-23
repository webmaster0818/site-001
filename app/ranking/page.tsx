import Link from "next/link";
import OfficialRatingStores from "../components/OfficialRatingStores";
import { Metadata } from "next";
import { Sparkles, Trophy, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ハウスクリーニング業者ランキング一覧 | クリーンナビ",
  description:
    "エアコン・浴室などサービス別ランキング、料金の安さ、口コミ評価、即日対応など切り口別にハウスクリーニング業者を比較できます。",
  alternates: {
    canonical: "https://cleaning-choices.com/ranking/",
  },
};

const RANKINGS = [
  {
    href: "/ranking/aircon-ranking/",
    title: "エアコンクリーニング業者ランキング",
    description: "口コミ評価が高いエアコンクリーニング業者を比較。",
  },
  {
    href: "/ranking/bathroom-ranking/",
    title: "浴室クリーニング業者ランキング",
    description: "浴室クリーニングでおすすめの業者を比較。",
  },
  {
    href: "/ranking/cheap-ranking/",
    title: "料金が安い業者ランキング",
    description: "コスパを重視して選びたい方向けの比較。",
  },
  {
    href: "/ranking/review-ranking/",
    title: "口コミ評価が高い業者ランキング",
    description: "実際の利用者評価で選ぶおすすめ業者。",
  },
  {
    href: "/ranking/quick-service/",
    title: "即日対応可能な業者まとめ",
    description: "今すぐ依頼したい方向けの即日対応業者まとめ。",
  },
];

export default function RankingIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            業者ランキング一覧
          </h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {RANKINGS.map((ranking) => (
            <Link
              key={ranking.href}
              href={ranking.href}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex items-start gap-4"
            >
              <Trophy className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {ranking.title}
                </h3>
                <p className="text-sm text-gray-600">{ranking.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
            </Link>
          ))}
        </div>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">比較の考え方</h3>
          <p className="text-gray-700 leading-relaxed">
            ハウスクリーニング業者は、料金の安さだけでなく、依頼したい箇所への対応可否や口コミ評価、予約の取りやすさを合わせて比較するのがおすすめです。まずエアコン・浴室などサービス別のランキングで候補を絞り、料金や即日対応などの条件で最終的な依頼先を選んでください。
          </p>
        </section>
      </div>

      <OfficialRatingStores limit={10} />

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            クリーンナビ トップへ戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
