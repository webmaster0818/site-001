/* eslint-disable @next/next/no-img-element */
import captures from "../data/partner-captures.json";

// エリアページの業者枠に、各社公式サイトのキャプチャと出典を出す（2026-10-16 MediaXAI「areas/配下は何で公式サイトキャプチャないの？」）。
// エリアページの companies 配列の name（表示名）→ キャプチャの slug。キャプチャの無い業者は何も出さない（色付きアイコンにも戻さない）。
const BY_NAME: Record<string, string> = {
  "おそうじ革命": "osoujikakumei", "おそうじ本舗": "osoujihonpo", "カジタク": "kajitaku", "ベアーズ": "bears",
  "ダスキン": "duskin", "東京ガスのハウスクリーニング": "tokyogas", "サニクリーン": "sanikleen", "お掃除マスター": "osoji-master",
  "アズマのホームクリーニング": "azuma", "くらしのセゾン": "kurashi-saison", "エディオンハウスクリーン": "edion",
};
const CAP: Record<string, { name: string; captured_at: string }> = Object.fromEntries(
  (captures as { slug: string; name: string; captured_at: string }[]).map((c) => [c.slug, c]),
);
const jpDate = (d: string) => { const [y, m, dd] = d.split("-").map(Number); return `${y}年${m}月${dd}日`; };

export default function CompanyShot({ name, compact = false }: { name: string; compact?: boolean }) {
  const slug = BY_NAME[name];
  const cap = slug && CAP[slug];
  if (!cap) return null;
  // 比較表の行用：小さなサムネイルだけ（出典は表の下にまとめて書く）
  if (compact) {
    return <img className="cn-area-thumb" src={`/images/partners/${slug}.webp`} alt={`${name} 公式サイト`} width={1280} height={800} loading="lazy" />;
  }
  return (
    <figure className="cn-area-shot">
      <img src={`/images/partners/${slug}.webp`} alt={`${name} 公式サイトのトップページ`} width={1280} height={800} loading="lazy" />
      <figcaption>出典：{name} 公式サイト（{jpDate(cap.captured_at)}時点）</figcaption>
    </figure>
  );
}
