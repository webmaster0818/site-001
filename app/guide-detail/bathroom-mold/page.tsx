import Link from "next/link";

export const metadata = {
  title: "浴室のカビ対策 | クリーンナビ",
  description: "浴室のカビを防ぐための完全ガイド。プロが教える掃除のコツとポイント。",
};

export default function BathroommoldGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="navbar bg-primary text-primary-content sticky top-0 z-50">
        <Link href="/" className="btn btn-ghost text-xl">クリーンナビ</Link>
      </header>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">浴室のカビ対策</h1>
          <p className="text-xl mb-12">浴室のカビを防ぐための完全ガイド</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>詳しい情報はこちら</h2>
            <p>プロの業者による浴室のカビ対策について、詳しく解説していきます。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
