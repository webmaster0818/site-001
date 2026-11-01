// 業者・店舗のキャプチャの「〇〇時点」表記（2026-11-01）。
// 毎月1日に scripts/capture-partners/run.sh で撮り直すと partner-captures.json の captured_at が更新される。
// 表記を各ページに手で書いていたため、11/1 の撮り直し後も「2026年10月16日時点」のまま残った → ここから出す。
import caps from './partner-captures.json';

const latest = (caps as { captured_at?: string }[])
  .map((c) => c.captured_at || '')
  .sort()
  .pop() || '';
const [y, m, d] = latest.split('-').map((x) => parseInt(x, 10));

export const CAPTURE_DATE_JA = latest ? `${y}年${m}月${d}日` : '';
