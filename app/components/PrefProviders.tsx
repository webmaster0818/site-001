import providers from "../data/providers.json";

type Provider = {
  slug: string;
  brand: string;
  brand_name: string;
  name: string;
  pref: string;
  pref_ja: string;
  address?: string | null;
  rating_official?: number;
  review_count_official?: number;
};

const list = providers as Provider[];

export default function PrefProviders({ pref, prefJa }: { pref: string; prefJa: string }) {
  const items = list.filter((p) => p.pref === pref);
  if (items.length === 0) return null;
  const byBrand: Record<string, number> = {};
  for (const p of items) byBrand[p.brand_name] = (byBrand[p.brand_name] || 0) + 1;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-ink mb-2">
          {prefJa}のハウスクリーニング店舗データベース（{items.length}店舗）
        </h2>
        <p className="text-sm text-muted mb-6">
          各ブランド公式サイトで確認した実在店舗のみを掲載しています（
          {Object.entries(byBrand).map(([b, n], i) => (
            <span key={b}>{i > 0 && "・"}{b} {n}店</span>
          ))}
          ）。
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <a key={p.slug} href={`/provider/${p.slug}/`} className="card p-4 block">
              <p className="text-sm font-bold text-ink">{p.name}</p>
              <p className="text-xs text-muted mt-1">{p.address ?? p.pref_ja}</p>
              {typeof p.rating_official === "number" && (
                <p className="text-xs text-primary mt-1">
                  公式評価 {p.rating_official.toFixed(2)}
                  {typeof p.review_count_official === "number" && `（${p.review_count_official}件）`}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
