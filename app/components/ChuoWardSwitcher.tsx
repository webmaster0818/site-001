// 「中央区 ハウスクリーニング」は東京都中央区・大阪市中央区など同名の区が10あり、検索で別の中央区のページが出ることがある
// （GSC 2026-09-27〜10-24: tokyo-chuo 39.3位・osaka-chuo 34.2位が同じ語で表示を分け合う）。
// 各中央区ページの冒頭で「どの中央区のページか」を明示し、別の中央区へ移れるようにする（2026-10-27）。
const CHUO_WARDS: { slug: string; label: string; hint: string }[] = [
  { slug: "tokyo-chuo", label: "東京都中央区", hint: "銀座・日本橋・月島・晴海" },
  { slug: "osaka-chuo", label: "大阪市中央区", hint: "心斎橋・難波・本町・谷町" },
  { slug: "sapporo-chuo", label: "札幌市中央区", hint: "" },
  { slug: "saitama-chuo", label: "さいたま市中央区", hint: "" },
  { slug: "chiba-chuo", label: "千葉市中央区", hint: "" },
  { slug: "sagamihara-chuo", label: "相模原市中央区", hint: "" },
  { slug: "niigata-chuo", label: "新潟市中央区", hint: "" },
  { slug: "kobe-chuo", label: "神戸市中央区", hint: "" },
  { slug: "fukuoka-chuo", label: "福岡市中央区", hint: "" },
  { slug: "kumamoto-chuo", label: "熊本市中央区", hint: "" },
];

export default function ChuoWardSwitcher({ current }: { current: string }) {
  const me = CHUO_WARDS.find((w) => w.slug === current);
  const others = CHUO_WARDS.filter((w) => w.slug !== current);
  return (
    <nav aria-label="別の中央区" className="container mx-auto px-4 max-w-4xl my-6">
      <div className="rounded-lg border border-base-300 bg-base-100 p-4 text-sm">
        <p className="mb-2">
          このページは<strong>{me?.label}</strong>
          {me?.hint ? `（${me.hint}など）` : ""}のハウスクリーニング業者・店舗のページです。別の中央区はこちら:
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {others.map((w) => (
            <li key={w.slug}>
              <a href={`/areas/${w.slug}/`} className="underline text-primary">
                {w.label}
                {w.hint ? `（${w.hint}）` : ""}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
