import Link from "next/link";

export const metadata = {
  title: "新築・リフォーム後クリーニング | クリーンナビ",
  description: "新築・リフォーム後の仕上げ清掃。料金相場、おすすめ業者を比較。",
};

export default function NewhouseScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">新築・リフォーム後クリーニング</h1>
          <p className="text-xl mb-12">新築・リフォーム後の仕上げ清掃</p>
          <Link href="/services/aircon" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
