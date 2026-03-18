import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "クリーンナビ | ハウスクリーニング業者比較サイト",
  description:
    "30〜50代の主婦・共働き世帯に選ばれるハウスクリーニング比較サイト。エアコン、浴室、キッチンのクリーニング業者を料金・口コミで簡単比較。信頼できるプロの業者を見つけましょう。",
  keywords: [
    "ハウスクリーニング",
    "エアコンクリーニング",
    "浴室クリーニング",
    "キッチンクリーニング",
    "業者比較",
    "口コミ",
    "料金比較",
  ],
  openGraph: {
    title: "クリーンナビ | ハウスクリーニング業者比較サイト",
    description:
      "プロのハウスクリーニング業者を料金・口コミで簡単比較。30〜50代の主婦・共働き世帯に選ばれています。",
    url: "https://clean-navi.jp",
    siteName: "クリーンナビ",
    images: [
      {
        url: "https://clean-navi.jp/og-image.png",
        width: 1200,
        height: 630,
        alt: "クリーンナビ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "クリーンナビ | ハウスクリーニング業者比較サイト",
    description:
      "プロのハウスクリーニング業者を料金・口コミで簡単比較。",
    images: ["https://clean-navi.jp/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
