import Link from "next/link";
import PartnerCards from "../../components/PartnerCards";
import { SITE_OPEN_GRAPH } from "../../siteOpenGraph";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/scene/new-house/" },
  openGraph: { ...SITE_OPEN_GRAPH, url: "https://cleaning-choices.com/scene/new-house/" },
  title: "新築・リフォーム後クリーニング | クリーンナビ",
  description: "新築・リフォーム後の仕上げ清掃と、入居前の清掃に対応する提携業者を掲載しています。",
};

export default function NewhouseScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <PartnerCards tag="moving" title="入居前・新居のクリーニングに対応する提携業者" />

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">新築・リフォーム後クリーニング</h1>
          <p className="text-xl mb-12">新築・リフォーム後の仕上げ清掃について</p>
          <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
    </div>
  );
}
