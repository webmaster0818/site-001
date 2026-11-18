// 業者・店舗のキャプチャの「〇〇時点」表記（2026-11-01）。
// 毎月1日に scripts/capture-partners/run.sh で撮り直すと partner-captures.json の captured_at が更新される。
// 表記を各ページに手で書いていたため、11/1 の撮り直し後も「2026年10月16日時点」のまま残った → ここから出す。
import caps from './partner-captures.json';

// この日付をまとめて表示するのは、エリア・会社・services の業者枠（CompanyShot の BY_NAME）と店舗カード（本舗・ダスキン・革命）の画像だけ。
// 提携業者の紹介枠（PartnerCards・services の提携行）は各社の captured_at を個別に出すので、ここでは数えない
// （2026-11-18 クリーンクルー・アールメイドを 11/18 に追加撮影した際、他社の 11/1 撮影分まで「11/18時点」になるのを防ぐ）。
const SHARED_DATE_SLUGS = new Set([
  'osoujikakumei', 'osoujihonpo', 'kajitaku', 'bears', 'duskin', 'tokyogas',
  'sanikleen', 'osoji-master', 'azuma', 'kurashi-saison', 'edion',
]);

const latest = (caps as { slug: string; captured_at?: string }[])
  .filter((c) => SHARED_DATE_SLUGS.has(c.slug))
  .map((c) => c.captured_at || '')
  .sort()
  .pop() || '';
const [y, m, d] = latest.split('-').map((x) => parseInt(x, 10));

export const CAPTURE_DATE_JA = latest ? `${y}年${m}月${d}日` : '';
