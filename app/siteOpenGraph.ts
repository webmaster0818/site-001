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

// サイト既定の Twitter カード。openGraph と同じく浅いマージなので、ページ側で上書きするときは展開して使う。
export const SITE_TWITTER = {
  card: "summary_large_image" as const,
  title: "クリーンナビ | ハウスクリーニング業者比較サイト",
  description:
    "ハウスクリーニング業者を、各社の公式情報にもとづいて料金・対応エリアで比較できます。",
  images: ["https://cleaning-choices.com/og-image.png?v=20261016"],
};

// ページ固有の title・description・canonical を、og:title/og:description/og:url と twitter:title/twitter:description に
// そのまま写す（画像・siteName などはサイト既定）。metadata オブジェクトを包んで使う:
//   export const metadata = withPageSocial({ title, description, alternates: { canonical } });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withPageSocial<T extends Record<string, any>>(m: T): T {
  const t = m.title;
  const title: string | undefined =
    typeof t === "string" ? t : t && typeof t === "object" && typeof t.absolute === "string" ? t.absolute : undefined;
  const description: string | undefined = typeof m.description === "string" ? m.description : undefined;
  const c = m.alternates?.canonical;
  const url: string | undefined = typeof c === "string" ? c : c instanceof URL ? c.toString() : undefined;
  return {
    ...m,
    openGraph: {
      ...SITE_OPEN_GRAPH,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(url ? { url } : {}),
    },
    twitter: {
      ...SITE_TWITTER,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
    },
  };
}
