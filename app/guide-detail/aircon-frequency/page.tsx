import Link from "next/link";
import { SITE_OPEN_GRAPH } from "../../siteOpenGraph";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/aircon-frequency/" },
  openGraph: { ...SITE_OPEN_GRAPH, url: "https://cleaning-choices.com/guide-detail/aircon-frequency/" },
  title: "エアコンクリーニングの頻度 | クリーンナビ",
  description: "エアコンクリーニングの頻度と時期の目安。ハウスクリーニング業者の選び方は、業者選びガイドでご説明しています。",
};

export default function AirconfrequencyGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">エアコンクリーニングの頻度</h1>
          <p className="text-xl mb-12">エアコンクリーニングの頻度と時期の目安</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>業者選びの基本について</h2>
            <p>エアコンクリーニングを依頼する際の業者の選び方は、業者選びガイドでご説明しています。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
