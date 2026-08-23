import providers from "../data/providers.json";

type Provider = {
  slug: string;
  brand_name: string;
  name: string;
  pref_ja: string;
  rating_official?: number;
  review_count_official?: number;
  verified_at?: string;
};

const list = providers as Provider[];

// 公式サイト掲載のレビュー集計が確認できた店舗のうち、件数100件以上を評価順に選出(決定的)
const rated = list
  .filter(
    (p) =>
      typeof p.rating_official === "number" &&
      (p.review_count_official ?? 0) >= 100
  )
  .sort(
    (a, b) =>
      b.rating_official! - a.rating_official! ||
      (b.review_count_official ?? 0) - (a.review_count_official ?? 0)
  );

export default function OfficialRatingStores({ limit = 6 }: { limit?: number }) {
  const items = rated.slice(0, limit);
  if (items.length === 0) return null;
  const verifiedAt = items[0].verified_at ?? "2026-08-15";

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          公式サイト評価の高い店舗
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6 max-w-2xl mx-auto">
          各ブランド公式サイトに掲載されているレビュー集計のうち、レビュー100件以上の店舗を評価順に紹介しています（{verifiedAt}確認・出典は各店舗ページに記載）。当サイトが独自に集計した評価ではありません。
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {items.map((p, i) => (
            <a
              key={p.slug}
              href={`/provider/${p.slug}/`}
              className="card p-4 block border border-gray-200"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-400">#{i + 1}</span>
                <span className="text-xs text-gray-500">{p.pref_ja}</span>
              </div>
              <p className="text-sm font-bold text-gray-900">{p.name}</p>
              <p className="text-xs text-gray-500 mt-1">{p.brand_name}</p>
              <p className="text-sm font-semibold text-sky-600 mt-2">
                公式評価 {p.rating_official!.toFixed(2)}
                <span className="text-xs text-gray-500 font-normal">
                  （{p.review_count_official}件）
                </span>
              </p>
            </a>
          ))}
        </div>
        <p className="text-center mt-6">
          <a href="/areas/" className="text-sm text-sky-600 underline">
            お住まいの地域の店舗データベースを見る
          </a>
        </p>
      </div>
    </section>
  );
}
