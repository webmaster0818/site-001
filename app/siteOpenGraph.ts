// サイト既定の Open Graph。Next.js の metadata は openGraph をページ側で指定するとオブジェクトごと置き換わる
// （浅いマージ）ため、ページ側で title/url だけ変えたいときはこれを展開して使う。
export const SITE_OPEN_GRAPH = {
  title: "クリーンナビ | ハウスクリーニング業者比較サイト",
  description:
    "エアコン・浴室・キッチンのハウスクリーニング業者を、各社の公式情報にもとづいて料金・対応エリアで比較できます。",
  url: "https://cleaning-choices.com/",
  siteName: "クリーンナビ",
  images: [
    {
      url: "https://cleaning-choices.com/og-image.png?v=20261016",
      width: 1200,
      height: 630,
      alt: "クリーンナビ - ハウスクリーニング業者比較",
    },
  ],
  locale: "ja_JP",
  type: "website" as const,
};
