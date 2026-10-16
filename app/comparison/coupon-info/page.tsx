import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/comparison/coupon-info/" },
  title: "クーポン・割引情報まとめ | クリーンナビ",
  description: "クーポン・キャンペーン情報について。業者選びの基本は、業者選びガイドでご説明しています。",
};

export default function CouponinfoComparison() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">クーポン・割引情報まとめ</h1>
          <p className="text-xl text-center mb-12">クーポン・キャンペーン情報について</p>
          <div className="text-center">
            <Link href="/guide/" className="btn btn-primary btn-lg">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
