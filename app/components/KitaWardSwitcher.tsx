import providers from "../data/providers.json";
import areaMap from "../data/areaMap.json";

// 「おそうじ本舗 北区」などの検索で、北区は東京都北区・大阪市北区など同名の区が10あり、別の北区のページが出ることがある
// （GSC 2026-09-28〜10-25:「おそうじ本舗 北区」8.8位が神戸市北区のページに着地）。
// 各北区ページの冒頭で「どの北区のページか」を明示し、各北区の店舗数（ブランド別）を並べて別の北区へ移れるようにする（2026-10-28）。
// 店舗数は AreaProvidersLead と同じ条件（providers.json の住所に区名を含む店舗）で数える。
const KITA_WARDS: { slug: string; label: string }[] = [
  { slug: "tokyo-kita", label: "東京都北区" },
  { slug: "osaka-kita", label: "大阪市北区" },
  { slug: "nagoya-kita", label: "名古屋市北区" },
  { slug: "kobe-kita", label: "神戸市北区" },
  { slug: "kyoto-kita", label: "京都市北区" },
  { slug: "sapporo-kita", label: "札幌市北区" },
  { slug: "saitama-kita", label: "さいたま市北区" },
  { slug: "okayama-kita", label: "岡山市北区" },
  { slug: "kumamoto-kita", label: "熊本市北区" },
  { slug: "niigata-kita", label: "新潟市北区" },
];

type P = { brand: string; pref_ja: string; address: string };
type A = { pref: string; match: string[] };
const LIST = providers as P[];
const MAP = areaMap as unknown as Record<string, A>;

function counts(slug: string) {
  const a = MAP[slug];
  const c = { honpo: 0, duskin: 0, kakumei: 0, all: 0 };
  if (!a) return c;
  for (const p of LIST) {
    if (p.pref_ja !== a.pref || !a.match.some((m) => p.address.includes(m))) continue;
    c.all += 1;
    if (p.brand === "honpo" || p.brand === "duskin" || p.brand === "kakumei") c[p.brand] += 1;
  }
  return c;
}

function summary(slug: string) {
  const c = counts(slug);
  const parts = [`おそうじ本舗 ${c.honpo}店`, `ダスキン ${c.duskin}店`];
  if (c.kakumei > 0) parts.push(`おそうじ革命 ${c.kakumei}店`);
  return `所在${c.all}店：${parts.join("・")}`;
}

export default function KitaWardSwitcher({ current }: { current: string }) {
  const me = KITA_WARDS.find((w) => w.slug === current);
  const others = KITA_WARDS.filter((w) => w.slug !== current);
  return (
    <nav aria-label="別の北区" className="container mx-auto px-4 max-w-4xl my-6">
      <div className="rounded-lg border border-base-300 bg-base-100 p-4 text-sm">
        <p className="mb-2">
          このページは<strong>{me?.label}</strong>（{summary(current)}）のハウスクリーニング業者・店舗のページです。
          別の北区はこちら（店舗数は公式サイトで所在を確認した店舗）:
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
          {others.map((w) => (
            <li key={w.slug}>
              <a href={`/areas/${w.slug}/`} className="underline text-primary">
                {w.label}
              </a>
              <span className="text-muted">（{summary(w.slug)}）</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
