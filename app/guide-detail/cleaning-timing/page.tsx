import Link from "next/link";
import PartnerFactTable, { rowsFrom } from "../../components/PartnerFactTable";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/cleaning-timing/" },
  title: "ハウスクリーニングのタイミング | クリーンナビ",
  description: "ハウスクリーニングを依頼する時期の目安として、提携業者が公式サイトに記載している繁忙期を一覧にしています（業者ごとの確認日つき）。",
});

export default function CleaningtimingGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">ハウスクリーニングのタイミング</h1>
          <p className="text-lg text-gray-700 leading-relaxed">依頼が集中する時期は、希望日に予約が取りにくくなります。提携業者の公式サイトでは、引越しシーズン（2〜4月）、エアコンクリーニング（6〜7月）、年末の大掃除（11〜12月）が繁忙期として挙げられています。この時期に依頼する場合は、早めに候補日を複数用意して申し込むことをおすすめします。</p>
        </div>
      </section>
      <PartnerFactTable
        heading="提携業者が公式サイトに記載している繁忙期"
        intro="提携業者のうち、公式サイトに繁忙期・混み合う時期の記載がある業者の記載です。"
        columns={["公式サイトに記載された繁忙期"]}
        rows={rowsFrom((p) => p.peakSeason)}
      />
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
        </div>
      </section>
    </div>
  );
}
