import Link from "next/link";

export const metadata = {
  title: "保証・補償制度比較 | クリーンナビ",
  description: "各業者の保証内容を徹底比較。最適な業者選びをサポート。",
};

export default function WarrantycomparisonComparison() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">保証・補償制度比較</h1>
          <p className="text-xl text-center mb-12">各業者の保証内容を徹底比較</p>
          <div className="text-center">
            <Link href="/guide/" className="btn btn-primary btn-lg">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
