import Link from "next/link";
import PartnerFactTable, { pointsByTopic } from "../../components/PartnerFactTable";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/trouble-cases/" },
  title: "トラブル事例と対処法 | クリーンナビ",
  description: "仕上がりに納得できない場合と追加料金について、提携業者が公式サイトに記載している対応を一覧にしています（業者ごとの確認日つき）。",
});

export default function TroublecasesGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">トラブル事例と対処法</h1>
          <p className="text-lg text-gray-700 leading-relaxed">依頼後の相談で多いのは、汚れが落ちきらない・仕上がりに納得できない場合の対応と、見積もりにない追加料金です。再作業の有無や連絡期限、追加料金が発生する条件は業者ごとに異なります。申込み前に公式サイトの記載をご確認ください。破損時の補償は保証・補償制度比較のページにまとめています。</p>
        </div>
      </section>
      <PartnerFactTable
        heading="仕上がりに納得できない場合の対応（公式サイトの記載）"
        intro="再作業・返金・連絡期限、落とせない汚れについて、公式サイトに記載がある業者です。"
        columns={["仕上がりについての公式記載", "確認した公式ページ"]}
        rows={pointsByTopic(/仕上がり/)}
      />
      <PartnerFactTable
        heading="追加料金についての公式記載"
        intro="当日の追加料金が発生する条件について、公式サイトに記載がある業者です。"
        columns={["追加料金についての公式記載", "確認した公式ページ"]}
        rows={pointsByTopic(/追加料金|見積もりと請求/)}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/comparison/warranty-comparison/" className="text-sky-600 hover:underline text-sm">保証・補償制度比較（破損時の補償）</Link>
      </div>
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
        </div>
      </section>
    </div>
  );
}
