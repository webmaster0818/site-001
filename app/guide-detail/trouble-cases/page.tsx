import Link from "next/link";

export const metadata = {
  title: "トラブル事例と対処法 | クリーンナビ",
  description: "よくあるトラブルと解決方法。プロが教える掃除のコツとポイント。",
};

export default function TroublecasesGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">トラブル事例と対処法</h1>
          <p className="text-xl mb-12">よくあるトラブルと解決方法</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>詳しい情報はこちら</h2>
            <p>プロの業者によるトラブル事例と対処法について、詳しく解説していきます。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
