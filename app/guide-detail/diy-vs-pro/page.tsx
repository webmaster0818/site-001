import Link from "next/link";

export const metadata = {
  title: "自分でできる掃除vs業者 | クリーンナビ",
  description: "DIYとプロの違い、使い分けのコツ。プロが教える掃除のコツとポイント。",
};

export default function DiyvsproGuide() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">自分でできる掃除vs業者</h1>
          <p className="text-xl mb-12">DIYとプロの違い、使い分けのコツ</p>
          <div className="prose max-w-4xl mx-auto">
            <h2>詳しい情報はこちら</h2>
            <p>プロの業者による自分でできる掃除vs業者について、詳しく解説していきます。</p>
          </div>
          <div className="text-center mt-12">
            <Link href="/guide/" className="btn btn-primary">業者選びガイドを見る</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
