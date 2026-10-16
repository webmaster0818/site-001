/* eslint-disable @next/next/no-img-element */
// felmat計測リンク: URL・文言は提供コードのまま(改変不可)・インプレッションピクセル必須・relはnofollowにsponsoredを追加
import { PARTNERS, SERVICE_LABELS, partnersByTag, type ServiceTag } from "../data/partners";
import captures from "../data/partner-captures.json";

// 各社公式サイトのトップを撮影した画像（public/images/partners/<slug>.webp・2026-10-16 MediaXAI「業者名が載るところは公式サイトをキャプチャの上設定」）。
// 撮影元URL・日付は app/data/partner-captures.json。撮り直したら captured_at を更新する（キャンペーン表示が古くなるため）。
const CAPTURES: Record<string, { url: string; captured_at: string }> = Object.fromEntries(
  (captures as { slug: string; url: string; captured_at: string }[]).map((c) => [c.slug, c]),
);
const jpDate = (d: string) => { const [y, m, dd] = d.split("-").map(Number); return `${y}年${m}月${dd}日`; };

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
    <section className="cn-section" aria-label={heading}>
      <div className="cn-container">
        <div className="cn-head" data-reveal>
          <p className="cn-eyebrow">PARTNERS</p>
          <h2 className="cn-h2">{heading}</h2>
          <p className="cn-lead cn-lead-wide">
            {intro ??
              "当サイトと提携している業者のうち、このサービスを公式サイトで明記している業者です。掲載内容は各社公式サイトで確認した情報のみ（確認日つき）で、掲載順は優劣の評価ではありません。広告（PR）の有無は掲載内容・評価に影響しません。"}
          </p>
        </div>
        <ul className="cn-partner-grid">
          {list.map((p, i) => {
            const cap = CAPTURES[p.slug];
            return (
              <li key={p.slug} className="cn-partner" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                {cap && (
                  <figure className="cn-partner-shot">
                    <img src={`/images/partners/${p.slug}.webp`} alt={`${p.name} 公式サイトのトップページ`} width={1280} height={800} loading="lazy" />
                    <figcaption>出典：{p.name} 公式サイト（{jpDate(cap.captured_at)}時点）</figcaption>
                  </figure>
                )}
                <div className="cn-partner-body">
                  <h3>{p.name}</h3>
                  <p className="cn-partner-co">{p.company}</p>
                  {p.areaNote && <p className="cn-partner-note">{p.areaNote}</p>}
                  <p className="cn-partner-tag">{p.tagline}</p>
                  {p.prices[0] && (
                    <p className="cn-partner-price">
                      <span>公式料金例</span>
                      {p.prices[0].menu} {p.prices[0].price}
                    </p>
                  )}
                  <p className="cn-partner-area">対応エリア：{p.area}</p>
                  <div className="cn-partner-actions">
                    <a href={`/review/${p.slug}/`} className="cn-btn cn-btn-outline">口コミ・評判と料金の検証を見る</a>
                    {p.affiliateUrl && (
                      <>
                        <a href={p.affiliateUrl} rel="sponsored nofollow noopener" target="_blank" className="cn-btn cn-btn-primary cn-btn-pr">
                          <span className="cn-pr">PR</span>
                          {p.affiliateLabel ?? `${p.name}の公式サイトへ`}
                        </a>
                        {p.affiliatePixel && <img width={1} height={1} src={p.affiliatePixel} alt="" style={{ border: "none" }} />}
                      </>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="cn-fineprint">
          「PR」のボタンは提携先の公式サイトへ移動します（広告の有無は掲載内容・評価に影響しません）。画像は各社公式サイトのトップページを当サイトが撮影したもので、キャンペーン等は撮影時点の内容です。各社の料金・エリア・保証は変更される場合があります。申込み前に必ず公式サイトで最新情報をご確認ください。
        </p>
      </div>
    </section>
  );
}
