import ServicePageClient from "./ServicePageClient";
import { Metadata } from "next";

const categoryInfo: { [key: string]: { title: string; description: string } } = {
  aircon: {
    title: "エアコンクリーニング",
    description: "エアコンクリーニング業者を徹底比較。料金相場、口コミ評価、サービス内容を掲載。",
  },
  bathroom: {
    title: "浴室クリーニング",
    description: "浴室クリーニング業者を徹底比較。料金相場、口コミ評価、サービス内容を掲載。",
  },
  kitchen: {
    title: "キッチンクリーニング",
    description: "キッチンクリーニング業者を徹底比較。料金相場、口コミ評価、サービス内容を掲載。",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const info = categoryInfo[category] || categoryInfo.aircon;
  
  return {
    title: `${info.title}業者おすすめ比較 | クリーンナビ`,
    description: info.description,
    openGraph: {
      title: `${info.title}業者おすすめ比較 | クリーンナビ`,
      description: info.description,
      url: `https://clean-navi.jp/services/${category}/`,
      siteName: "クリーンナビ",
      images: [
        {
          url: "https://clean-navi.jp/og-image.png",
          width: 1200,
          height: 630,
          alt: `${info.title}業者比較 - クリーンナビ`,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${info.title}業者おすすめ比較 | クリーンナビ`,
      description: info.description,
      images: ["https://clean-navi.jp/og-image.png"],
    },
    alternates: {
      canonical: `https://clean-navi.jp/services/${category}/`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { category: 'aircon' },
    { category: 'bathroom' },
    { category: 'kitchen' },
  ];
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <ServicePageClient category={category} />;
}
