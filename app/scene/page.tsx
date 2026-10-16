import Link from "next/link";
import Reveal from "../components/Reveal";
import { Metadata } from "next";

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
    icon: "icon-moving",
    title: "引越し前エアコンクリーニング",
    description: "引越し前のエアコン清掃で新居を快適に。",
  },
  {
    href: "/scene/new-house/",
    icon: "icon-newhouse",
    title: "新築・リフォーム後クリーニング",
    description: "新築・リフォーム後の仕上げ清掃。",
  },
  {
    href: "/scene/year-end-package/",
    icon: "icon-yearend",
    title: "年末大掃除パッケージ",
    description: "年末の大掃除をプロにお任せ。",
  },
  {
    href: "/scene/airbnb/",
    icon: "icon-minpaku",
    title: "民泊・Airbnb向けクリーニング",
    description: "民泊運営に最適な定期清掃プラン。",
  },
  {
    href: "/scene/office/",
    icon: "icon-office",
    title: "事務所・オフィスクリーニング",
    description: "オフィス全体の清掃サービス。",
  },
];

export default function SceneIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            シーン別クリーニングガイド
          </h1>
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

        <ul className="cn-trouble-grid">
          {SCENES.map((scene, i) => (
            <li key={scene.href} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <Link className="cn-trouble-card" href={scene.href}>
                <span className="cn-trouble-body">
                  <img src={`/images/top/${scene.icon}.webp`} alt="" width={384} height={384} loading="lazy" />
                  <span className="cn-trouble-note">{scene.description}</span>
                </span>
                <span className="cn-trouble-label">{scene.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Reveal />
      </div>

    </div>
  );
}
