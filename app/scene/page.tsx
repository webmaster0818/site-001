import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "シーン別ハウスクリーニング活用ガイド | クリーンナビ",
  description:
    "引越し前、新築・リフォーム後、年末大掃除、民泊運営、オフィスなど、利用シーン別にハウスクリーニングの活用方法とおすすめ業者を紹介します。",
  alternates: {
    canonical: "https://cleaning-choices.com/scene/",
  },
};

const SCENES = [
  {
    href: "/scene/moving-aircon/",
    title: "引越し前エアコンクリーニング",
    description: "引越し前のエアコン清掃で新居を快適に。",
  },
  {
    href: "/scene/new-house/",
    title: "新築・リフォーム後クリーニング",
    description: "新築・リフォーム後の仕上げ清掃。",
  },
  {
    href: "/scene/year-end-package/",
    title: "年末大掃除パッケージ",
    description: "年末の大掃除をプロにお任せ。",
  },
  {
    href: "/scene/airbnb/",
    title: "民泊・Airbnb向けクリーニング",
    description: "民泊運営に最適な定期清掃プラン。",
  },
  {
    href: "/scene/office/",
    title: "事務所・オフィスクリーニング",
    description: "オフィス全体の清掃サービス。",
  },
];

export default function SceneIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            シーン別クリーニングガイド
          </h2>
          <p className="text-lg opacity-90">
            引越し・新築・年末大掃除・民泊・オフィスなど、利用シーンに合わせたハウスクリーニングの活用方法を紹介します。
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">
            ホーム
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">シーン別ガイド</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCENES.map((scene) => (
            <Link
              key={scene.href}
              href={scene.href}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex items-start gap-4"
            >
              <Home className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {scene.title}
                </h3>
                <p className="text-sm text-gray-600">{scene.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            クリーンナビ トップへ戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
