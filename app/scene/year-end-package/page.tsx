import Link from "next/link";

export const metadata = {
  title: "年末大掃除パッケージ | クリーンナビ",
  description: "年末の大掃除をプロにお任せ。料金相場、おすすめ業者を比較。",
};

export default function YearendpackageScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">年末大掃除パッケージ</h1>
          <p className="text-xl mb-12">年末の大掃除をプロにお任せ</p>
          <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
