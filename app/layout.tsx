import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "クリーンナビ | ハウスクリーニング業者比較サイト",
  description:
    "【2026年最新】ハウスクリーニング業者を料金・口コミ・サービス内容で徹底比較。エアコン・浴室・キッチンなど人気サービスの優良業者を簡単に見つけられます。30〜50代の主婦・共働き世帯に選ばれる比較サイト。",
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
    title: "クリーンナビ | ハウスクリーニング業者比較サイト【2026年最新】",
    description:
      "エアコン・浴室・キッチンのハウスクリーニング業者を料金・口コミで簡単比較。信頼できるプロの業者が見つかります。",
    url: "https://clean-navi.jp/",
    siteName: "クリーンナビ",
    images: [
      {
        url: "https://clean-navi.jp/og-image.png",
        width: 1200,
        height: 630,
        alt: "クリーンナビ - ハウスクリーニング業者比較",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://clean-navi.jp/",
  },
};

// 構造化データ（JSON-LD）
const structuredData = {
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "クリーンナビ",
    "alternateName": "CleanNavi",
    "url": "https://clean-navi.jp/",
    "description": "ハウスクリーニング業者を料金・口コミ・サービス内容で簡単比較できるサイト",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://clean-navi.jp/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "クリーンナビ",
    "url": "https://clean-navi.jp/",
    "logo": "https://clean-navi.jp/images/logo-character.png",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-120-XXX-XXX",
      "contactType": "customer service",
      "availableLanguage": "Japanese",
      "areaServed": "JP"
    }
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://clean-navi.jp/"
      }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ハウスクリーニングの料金相場はいくらですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "エアコンクリーニングは1台あたり8,000円〜15,000円、浴室クリーニングは12,000円〜20,000円、キッチンクリーニングは10,000円〜18,000円が相場です。業者や地域によって異なりますので、複数社の見積もりを比較することをおすすめします。"
        }
      },
      {
        "@type": "Question",
        "name": "ハウスクリーニング業者の選び方のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "①料金の透明性（追加料金の有無）、②口コミ・評判、③損害保険への加入、④スタッフの研修体制、⑤アフターフォローの有無を確認しましょう。クリーンナビでは、これらの基準を満たした優良業者のみを掲載しています。"
        }
      },
      {
        "@type": "Question",
        "name": "エアコンクリーニングはどのくらいの頻度で行うべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一般的には年に1〜2回が推奨されています。特に夏のエアコン使用シーズン前（4〜5月）にクリーニングすると、カビやホコリを除去して清潔な空気で過ごせます。ペットを飼っている方や喫煙者がいるご家庭では、より頻繁なクリーニングをおすすめします。"
        }
      }
    ]
  },
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "人気のハウスクリーニングサービス",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "エアコンクリーニング",
        "url": "https://clean-navi.jp/services/aircon/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "浴室クリーニング",
        "url": "https://clean-navi.jp/services/bathroom/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "キッチンクリーニング",
        "url": "https://clean-navi.jp/services/kitchen/"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* 構造化データ: WebSite */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.website) }}
        />
        
        {/* 構造化データ: Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
        />
        
        {/* 構造化データ: BreadcrumbList */}
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
        />
        
        {/* 構造化データ: FAQPage */}
        <Script
          id="structured-data-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faq) }}
        />
        
        {/* 構造化データ: ItemList */}
        <Script
          id="structured-data-itemlist"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.itemList) }}
        />
      </head>
      <body className={`${notoSansJP.variable} antialiased font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
