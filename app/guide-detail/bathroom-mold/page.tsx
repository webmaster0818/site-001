import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/bathroom-mold/" },
  title: "浴室のカビ対策 | クリーンナビ",
  description: "浴室のカビを防ぐための考え方。ハウスクリーニング業者の選び方は、業者選びガイドでご説明しています。",
};

export default function BathroommoldGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">浴室のカビ対策</h1>
          <p className="text-xl mb-12">浴室のカビを防ぐための考え方</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>業者選びの基本について</h2>
            <p>浴室のカビ対策をプロに依頼する際の業者の選び方は、業者選びガイドでご説明しています。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
