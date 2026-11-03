import Link from "next/link";
import PartnerFactTable, { pointsByTopic } from "../../components/PartnerFactTable";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/comparison/time-comparison/" },
  title: "作業時間・所要時間比較 | クリーンナビ",
  description: "提携ハウスクリーニング業者が公式サイトに記載している作業時間の目安を、業者ごとに一覧にしています（確認日・確認した公式ページつき）。",
});

export default function TimecomparisonComparison() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">作業時間・所要時間比較</h1>
          <p className="text-lg text-gray-700 leading-relaxed">作業時間は、箇所・広さ・機種・汚れの程度で変わります。当日の予定を組む際は、業者が公式に示している目安と、その前提条件（台数・広さ・人数）を合わせてご確認ください。</p>
        </div>
      </section>
      <PartnerFactTable
        heading="提携業者の作業時間の目安（公式サイトの記載）"
        intro="提携業者のうち、公式サイトに作業時間の目安を記載している業者の記載です。"
        columns={["作業時間の目安（公式記載）", "確認した公式ページ"]}
        rows={pointsByTopic(/作業時間/)}
      />
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
        </div>
      </section>
    </div>
  );
}
