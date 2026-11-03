import Link from "next/link";
import PartnerFactTable, { rowsFrom } from "../../components/PartnerFactTable";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/comparison/warranty-comparison/" },
  title: "保証・補償制度比較 | クリーンナビ",
  description: "提携ハウスクリーニング業者の保証・補償（損害賠償保険・仕上がり不満時の再作業・保証期間）を、各社公式サイトの記載で一覧にしています（業者ごとの確認日つき）。",
});

export default function WarrantycomparisonComparison() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">保証・補償制度比較</h1>
          <p className="text-lg text-gray-700 leading-relaxed">損害賠償保険への加入、仕上がりに納得できない場合の再作業、作業後の保証期間は、業者ごとに扱いが異なります。再作業や保証期間の明文がない業者もあるため、申込み前に公式サイトの記載をご確認ください。</p>
        </div>
      </section>
      <PartnerFactTable
        heading="提携業者の保証・補償（公式サイトの記載）"
        intro="提携業者の公式サイト（料金ページ・よくある質問・利用規約等）で確認した、保証・補償に関する記載です。"
        columns={["保証・補償の公式記載"]}
        rows={rowsFrom((p) => p.guarantee)}
      />
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
        </div>
      </section>
    </div>
  );
}
