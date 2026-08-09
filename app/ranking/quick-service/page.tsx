import Link from "next/link";

export const metadata = {
  title: "即日対応可能な業者まとめ | クリーンナビ",
  description: "今すぐ依頼できる即日対応業者。実績、料金、口コミで徹底比較。",
};

export default function QuickservicePage() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">即日対応可能な業者まとめ</h1>
          <p className="text-xl text-center mb-12">今すぐ依頼できる即日対応業者</p>
          <div className="text-center">
            <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-10"><p>© 2024 クリーンナビ</p></footer>
    </div>
  );
}
