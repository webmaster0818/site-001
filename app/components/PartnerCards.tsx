/* eslint-disable @next/next/no-img-element */
// felmat計測リンク: URL・文言は提供コードのまま(改変不可)・インプレッションピクセル必須・relはnofollowにsponsoredを追加
import { PARTNERS, SERVICE_LABELS, partnersByTag, type ServiceTag } from "../data/partners";

// 提携パートナー紹介枠。公式確認情報のみ表示し、CTAは計測リンク受領後(affiliateUrl非null)のみ描画。
// 掲載順はデータ順であり、優劣の評価ではない。
export default function PartnerCards({
  tag,
  title,
  intro,
  limit,
}: {
  tag?: ServiceTag;
  title?: string;
  intro?: string;
  limit?: number;
}) {
  const list = (tag ? partnersByTag(tag) : PARTNERS).slice(0, limit ?? 99);
  if (list.length === 0) return null;
  const heading = title ?? (tag ? `${SERVICE_LABELS[tag]}に対応する提携業者` : "提携業者の紹介");
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{heading}</h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-6">
          {intro ??
            "当サイトと提携している業者のうち、このサービスを公式サイトで明記している業者です。掲載内容は各社公式サイトで確認した情報のみ（確認日つき）で、掲載順は優劣の評価ではありません。広告（PR）の有無は掲載内容・評価に影響しません。"}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((p) => (
            <div key={p.slug} className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900 text-base">{p.name}</h3>
                {p.areaNote && (
                  <span className="rounded bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700">{p.areaNote}</span>
                )}
              </div>
              <p className="text-xs text-gray-500 mb-2">{p.company}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">{p.tagline}</p>
              {p.prices[0] && (
                <p className="text-sm text-gray-800 mb-3">
                  <span className="text-xs text-gray-500">公式料金例：</span>
                  <span className="font-bold">{p.prices[0].menu} {p.prices[0].price}</span>
                </p>
              )}
              <p className="text-xs text-gray-500 mb-4">対応エリア：{p.area}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                <a href={`/review/${p.slug}/`} className="rounded-lg border border-sky-600 px-4 py-2 text-xs font-bold text-sky-600 hover:bg-sky-50 transition">
                  口コミ・評判と料金の検証を見る
                </a>
                {p.affiliateUrl && (
                  <>
                    <a
                      href={p.affiliateUrl}
                      rel="sponsored nofollow noopener"
                      target="_blank"
                      className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700 transition"
                    >
                      {p.affiliateLabel ?? `${p.name}の公式サイトへ`}
                    </a>
                    {p.affiliatePixel && <img width={1} height={1} src={p.affiliatePixel} alt="" style={{ border: "none" }} />}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          「PR」のボタンは提携先の公式サイトへ移動します（広告の有無は掲載内容・評価に影響しません）。各社の料金・エリア・保証は変更される場合があります。申込み前に必ず公式サイトで最新情報をご確認ください。
        </p>
      </div>
    </section>
  );
}
