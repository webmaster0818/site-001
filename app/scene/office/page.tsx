import Link from "next/link";

export const metadata = {
  title: "事務所・オフィスクリーニング | クリーンナビ",
  description: "オフィス全体の清掃サービス。料金相場、おすすめ業者を比較。",
};

export default function OfficeScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">事務所・オフィスクリーニング</h1>
          <p className="text-xl mb-12">オフィス全体の清掃サービス</p>
          <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
