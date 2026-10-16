import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/diy-vs-pro/" },
  title: "自分で行う掃除と業者への依頼の比較 | クリーンナビ",
  description: "自分で行う掃除とプロへの依頼の違い・使い分け。ハウスクリーニング業者の選び方は、業者選びガイドでご説明しています。",
};

export default function DiyvsproGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">自分で行う掃除と業者への依頼の比較</h1>
          <p className="text-xl mb-12">自分で行う掃除とプロへの依頼の違い・使い分け</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>業者選びの基本について</h2>
            <p>プロに依頼する際の業者の選び方は、業者選びガイドでご説明しています。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
