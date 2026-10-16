import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/before-checklist/" },
  title: "依頼前のチェックリスト | クリーンナビ",
  description: "業者に依頼する前に確認すべき10のポイント。ハウスクリーニング業者の選び方は、業者選びガイドでご説明しています。",
};

export default function BeforechecklistGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">依頼前のチェックリスト</h1>
          <p className="text-xl mb-12">業者に依頼する前に確認すべき10のポイント</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>業者選びの基本について</h2>
            <p>業者に依頼する前の確認事項は、業者選びガイドでご説明しています。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
