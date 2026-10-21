import Link from "next/link";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/scene/airbnb/" },
  title: "民泊・Airbnb向けクリーニング | クリーンナビ",
  description: "民泊・Airbnb施設の清掃についてのページです。対応する業者は、サービス別の業者一覧からお探しください。",
});

export default function AirbnbScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">民泊・Airbnb向けクリーニング</h1>
          <p className="text-xl mb-12">民泊施設の清掃について</p>
          <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
    </div>
  );
}
