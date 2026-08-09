import Link from "next/link";

export const metadata = {
  title: "大手3社徹底比較 | クリーンナビ",
  description: "ダスキン・おそうじ本舗・ベアーズを徹底比較。最適な業者選びをサポート。",
};

export default function Major3comparisonComparison() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">大手3社徹底比較</h1>
          <p className="text-xl text-center mb-12">ダスキン・おそうじ本舗・ベアーズを徹底比較</p>
          <div className="text-center">
            <Link href="/guide/" className="btn btn-primary btn-lg">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
