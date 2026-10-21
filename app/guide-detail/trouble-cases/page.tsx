import Link from "next/link";
import { withPageSocial } from "../../siteOpenGraph";

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/guide-detail/trouble-cases/" },
  title: "トラブル事例と対処法 | クリーンナビ",
  description: "よくあるトラブルと対処方法。ハウスクリーニング業者の選び方は、業者選びガイドでご説明しています。",
});

export default function TroublecasesGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">トラブル事例と対処法</h1>
          <p className="text-xl mb-12">よくあるトラブルと対処方法</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>業者選びの基本について</h2>
            <p>トラブルを避けるための業者の選び方は、業者選びガイドでご説明しています。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
