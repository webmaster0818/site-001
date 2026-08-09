import Link from "next/link";

export const metadata = {
  title: "民泊・Airbnb向けクリーニング | クリーンナビ",
  description: "民泊運営に最適な定期清掃プラン。料金相場、おすすめ業者を比較。",
};

export default function AirbnbScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">民泊・Airbnb向けクリーニング</h1>
          <p className="text-xl mb-12">民泊運営に最適な定期清掃プラン</p>
          <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
