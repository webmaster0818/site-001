import Link from "next/link";
import PartnerCards from "../../components/PartnerCards";
import PartnerFactTable, { rowsFrom } from "../../components/PartnerFactTable";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/scene/moving-aircon/" },
  title: "引越し前エアコンクリーニング | クリーンナビ",
  description: "引越し前後の清掃に対応する提携業者のエアコンクリーニング料金を、各社公式サイトの表記のまま一覧にしています（業者ごとの確認日つき）。",
});

export default function MovingairconScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <PartnerCards tag="moving" title="引越し前後のクリーニングに対応する提携業者" />

      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-6">引越し前エアコンクリーニング</h1>
          <p className="text-lg text-gray-700 leading-relaxed">引越し前後の空室清掃とエアコンクリーニングを同じ業者にまとめると、日程調整が1回で済みます。空室清掃のオプションとしてエアコン洗浄を用意している業者もあり、単品で頼む場合と料金が異なることがあります。</p>
        </div>
      </section>
      <PartnerFactTable
        heading="引越し前後の清掃に対応する提携業者のエアコンクリーニング料金（公式表記）"
        intro="引越し前後・空室清掃に対応する提携業者について、公式サイトのエアコンクリーニング料金を表記のまま並べました。キャンペーン価格・初回価格は公式の表記どおりに載せており、申込み時点で変わっている場合があります。"
        columns={["エアコンクリーニングの公式料金"]}
        rows={rowsFrom((p) =>
          p.tags.includes("moving")
            ? p.prices.filter((r) => r.menu.includes("エアコン")).map((r) => `${r.menu}：${r.price}${r.note ? `（${r.note}）` : ""}`).join("／")
            : null,
        )}
      />
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
    </div>
  );
}
