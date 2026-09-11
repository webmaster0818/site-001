/* eslint-disable @next/next/no-img-element */
// おそうじ革命のA8.netアフィリエイトリンク(2026-09-11 MediaXAI提供)。
// リンク文言・URL・計測ピクセルはA8提供コードのまま使用すること(改変不可)。
// rel は提供コードの nofollow に sponsored を追加(ステマ規制・Google推奨)。

const LINKS = {
  // テキスト: お掃除の事なら汚れと戦うプロ集団【おそうじ革命】
  text1: {
    href: "https://px.a8.net/svt/ejp?a8mat=4B66KG+90HVUI+3UHU+69P02",
    label: "お掃除の事なら汚れと戦うプロ集団【おそうじ革命】",
    pixel: "https://www16.a8.net/0.gif?a8mat=4B66KG+90HVUI+3UHU+69P02",
  },
  // テキスト: ハウスクリーニングやお掃除のことならおそうじ革命
  text2: {
    href: "https://px.a8.net/svt/ejp?a8mat=4B66KG+90HVUI+3UHU+5YJRM",
    label: "ハウスクリーニングやお掃除のことならおそうじ革命",
    pixel: "https://www19.a8.net/0.gif?a8mat=4B66KG+90HVUI+3UHU+5YJRM",
  },
} as const;

const BANNER = {
  href: "https://px.a8.net/svt/ejp?a8mat=4B66KG+90HVUI+3UHU+61Z81",
  img: "https://www23.a8.net/svt/bgt?aid=260628928545&wid=030&eno=01&mid=s00000017949001017000&mc=1",
  pixel: "https://www17.a8.net/0.gif?a8mat=4B66KG+90HVUI+3UHU+61Z81",
};

export default function KakumeiAffiliateCTA({
  variant = "text1",
  banner = false,
}: {
  variant?: keyof typeof LINKS;
  banner?: boolean;
}) {
  const l = LINKS[variant];
  return (
    <div className="my-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
      <a
        href={l.href}
        rel="sponsored nofollow noopener"
        target="_blank"
        className="inline-block rounded-lg bg-amber-600 px-6 py-3 text-sm md:text-base font-bold text-white hover:bg-amber-700 transition"
      >
        {l.label}
      </a>
      <img width={1} height={1} src={l.pixel} alt="" />
      {banner && (
        <div className="mt-4 flex justify-center">
          <a href={BANNER.href} rel="sponsored nofollow noopener" target="_blank">
            <img width={300} height={250} alt="おそうじ革命" src={BANNER.img} className="mx-auto" />
          </a>
          <img width={1} height={1} src={BANNER.pixel} alt="" />
        </div>
      )}
      <p className="mt-2 text-[11px] text-gray-500">PR・おそうじ革命の公式サイトへ移動します。広告の有無は当サイトの掲載内容・評価に影響しません。</p>
    </div>
  );
}
