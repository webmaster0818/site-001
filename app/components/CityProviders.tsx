import providers from "../data/providers.json";

type Provider = {
  slug: string;
  brand_name: string;
  name: string;
  pref: string;
  address?: string | null;
  rating_official?: number;
  review_count_official?: number;
};

const list = providers as Provider[];

/**
 * 市区レベルの実在店舗一覧。providers.json の住所文字列マッチで決定的に抽出する。
 * match: 住所に含まれる市区名(例: "横浜市港北区" / "広島市")
 */
export default function CityProviders({ match, cityJa }: { match: string[]; cityJa: string }) {
  const items = list.filter((p) => p.address && match.some((m) => p.address!.includes(m)));
  if (items.length === 0) return null;
  const byBrand: Record<string, number> = {};
  for (const p of items) byBrand[p.brand_name] = (byBrand[p.brand_name] || 0) + 1;

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {cityJa}の実在店舗データベース（{items.length}店舗）
        </h2>
        <p className="text-sm text-gray-500 mb-5">
          各ブランド公式サイトで確認した{cityJa}の実在店舗です（
          {Object.entries(byBrand).map(([b, n], i) => (
            <span key={b}>{i > 0 && "・"}{b} {n}店</span>
          ))}
          ・出典と確認日は各店舗ページに記載）。
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <a key={p.slug} href={`/provider/${p.slug}/`} className="card p-4 block border border-gray-200">
              <p className="text-sm font-bold text-gray-900">{p.name}</p>
              <p className="text-xs text-gray-500 mt-1">{p.address}</p>
              {typeof p.rating_official === "number" && (
                <p className="text-xs text-sky-600 mt-1">
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
