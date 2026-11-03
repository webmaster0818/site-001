import Link from "next/link";
import PartnerFactTable, { rowsFrom } from "../../components/PartnerFactTable";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/bathroom-mold/" },
  title: "浴室のカビ対策 | クリーンナビ",
  description: "浴室のカビをプロに依頼した場合に落とせる範囲・落とせない場合について、提携業者が公式サイトに記載している内容を一覧にしています（業者ごとの確認日つき）。",
});

export default function BathroommoldGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">浴室のカビ対策</h1>
          <p className="text-lg text-gray-700 leading-relaxed">浴室のカビは、プロに依頼しても落としきれない場合があります。提携業者の公式サイトでは、目地・ゴムパッキン・コーキングの奥に根を張ったカビは完全には除去できない場合があると案内されています。依頼前に、落とせない場合の扱い（再作業の有無など）を確認しておくことをおすすめします。</p>
        </div>
      </section>
      <PartnerFactTable
        heading="カビについて業者が公式に案内している点"
        intro="提携業者のうち、公式サイトでカビの除去範囲や再発に触れている業者の記載です。"
        columns={["カビについての公式記載"]}
        rows={rowsFrom((p) => [...(p.reviewPoints ?? []).map((r) => r.official), ...(p.officialFaqs ?? []).map((f) => f.a)].filter((t) => t.includes("カビ")).join("／"))}
      />
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
        </div>
      </section>
    </div>
  );
}
