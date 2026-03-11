import Link from "next/link";

export const metadata = {
  title: "東京都世田谷区のハウスクリーニング業者比較 | クリーンナビ",
  description: "東京都世田谷区でおすすめのハウスクリーニング業者を比較。即日対応、料金相場、口コミ評価掲載。",
};

export default function TokyoSetagayaArea() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">東京都世田谷区のハウスクリーニング業者</h1>
          <p className="text-xl mb-8">世田谷区全域対応！信頼できる業者をご紹介</p>
          <Link href="/services/aircon" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
