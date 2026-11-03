import Link from "next/link";
import PartnerFactTable, { rowsFrom, pointsByTopic } from "../../components/PartnerFactTable";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/before-checklist/" },
  title: "依頼前のチェックリスト | クリーンナビ",
  description: "業者に依頼する前に確認したいキャンセル料・立会い・駐車場代について、提携業者の公式サイトの記載を一覧にしています（業者ごとの確認日つき）。",
});

export default function BeforechecklistGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">依頼前のチェックリスト</h1>
          <p className="text-lg text-gray-700 leading-relaxed">申込み後に食い違いが起きやすいのは、キャンセル料がかかり始める時期、作業中の立会いの要否、駐車場代の負担の3点です。いずれも業者ごとに規定が異なるため、予約の前に公式サイトの記載をご確認ください。</p>
        </div>
      </section>
      <PartnerFactTable
        heading="キャンセル料の規定（公式サイトの記載）"
        intro="提携業者の公式サイト（よくある質問・特定商取引法に基づく表記等）で確認した、キャンセル料に関する記載です。"
        columns={["キャンセル料の公式規定"]}
        rows={rowsFrom((p) => p.cancel)}
      />
      <PartnerFactTable
        heading="立会いの要否（公式サイトの記載）"
        intro="作業の開始時・終了時の立会いや、作業中の外出について公式サイトに記載がある業者です。"
        columns={["立会いについての公式記載", "確認した公式ページ"]}
        rows={pointsByTopic(/立会/)}
      />
      <PartnerFactTable
        heading="駐車場代の負担（公式サイトの記載）"
        intro="作業車の駐車場がない場合の費用負担について、公式サイトに記載がある業者です。"
        columns={["駐車場代についての公式記載", "確認した公式ページ"]}
        rows={pointsByTopic(/駐車場/)}
      />
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
        </div>
      </section>
    </div>
  );
}
