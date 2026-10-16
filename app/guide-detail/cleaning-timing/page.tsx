import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/cleaning-timing/" },
  title: "ハウスクリーニングのタイミング | クリーンナビ",
  description: "プロに依頼する時期の目安。ハウスクリーニング業者の選び方は、業者選びガイドでご説明しています。",
};

export default function CleaningtimingGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">ハウスクリーニングのタイミング</h1>
          <p className="text-xl mb-12">プロに依頼する時期の目安</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>業者選びの基本について</h2>
            <p>依頼時期の考え方と業者の選び方は、業者選びガイドでご説明しています。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
