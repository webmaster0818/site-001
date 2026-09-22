import providers from "../data/providers.json";
import areaMap from "../data/areaMap.json";

type Provider = {
  slug: string;
  brand: string;
  brand_name: string;
  name: string;
  pref: string;
  pref_ja: string;
  address: string;
  tel?: string | null;
  hours?: string | null;
  holiday?: string | null;
  charge_region?: string[];
  rating_official?: number;
  review_count_official?: number;
  verified_at: string;
};

type AreaEntry = {
  slug: string;
  kind: "pref" | "city" | "ward";
  label: string;
  pref: string;
  prefSlug: string | null;
  match: string[];
  areaTerms: string[];
  parent: { slug: string; name: string } | null;
  children: { slug: string; name: string }[];
  count: number;
};

const list = providers as Provider[];
const AREA_MAP = areaMap as Record<string, AreaEntry>;

const BRAND_HUB: Record<string, string> = {
  honpo: "/brand/osoujihonpo/",
  duskin: "/brand/duskin/",
  kakumei: "/brand/osoujikakumei/",
};

function sortStores(a: Provider, b: Provider) {
  const ra = a.review_count_official ?? -1;
  const rb = b.review_count_official ?? -1;
  if (rb !== ra) return rb - ra;
  return a.name.localeCompare(b.name, "ja");
}

/**
 * 地域一覧ページのヒーロー直下に置く「実在店舗データベース」ブロック。
 * areaMap.json(scripts/gen-area-map.py生成)の住所マッチ条件で providers.json から決定的に抽出する。
 * - 所在店舗: 住所が市区名を含む店舗(pref種別は都道府県内全店舗)
 * - 対応エリア店舗: 公式の対応エリア(charge_region)に市区名を含む近隣店舗(所在店舗と重複しないもの)
 * - 0件の市区は所在店舗の代わりに対応エリア店舗と上位ページへの導線を出す
 */
export default function AreaProvidersLead({ slug }: { slug: string }) {
  const area = AREA_MAP[slug];
  if (!area) return null;

  const located = (
    area.kind === "pref"
      ? list.filter((p) => p.pref_ja === area.pref)
      : list.filter((p) => p.pref_ja === area.pref && area.match.some((m) => p.address.includes(m)))
  ).sort(sortStores);
  const locatedSlugs = new Set(located.map((p) => p.slug));
  const covering =
    area.kind === "pref"
      ? []
      : list
          .filter(
            (p) =>
              !locatedSlugs.has(p.slug) &&
              Array.isArray(p.charge_region) &&
              p.charge_region.some((c) => area.areaTerms.includes(c)),
          )
          .sort((a, b) => {
            // 同一都道府県の店舗を先に、次に名前順
            const sa = a.pref_ja === area.pref ? 0 : 1;
            const sb = b.pref_ja === area.pref ? 0 : 1;
            return sa !== sb ? sa - sb : a.name.localeCompare(b.name, "ja");
          });
  const COVERING_LIMIT = 12;
  const coveringShown = covering.slice(0, COVERING_LIMIT);

  const byBrand: Record<string, number> = {};
  for (const p of located) byBrand[p.brand_name] = (byBrand[p.brand_name] || 0) + 1;
  const verifiedDates = Array.from(new Set(located.concat(covering).map((p) => p.verified_at))).sort();
  const verifiedLabel =
    verifiedDates.length === 0
      ? ""
      : verifiedDates.length === 1
        ? verifiedDates[0]
        : `${verifiedDates[0]}〜${verifiedDates[verifiedDates.length - 1]}`;
  const withHours = located.filter((p) => p.hours).length;
  const withTel = located.filter((p) => p.tel).length;

  const heading = `${area.label}のハウスクリーニング店舗一覧（${located.length}店舗）`;

  return (
    <section id="stores" className="py-10 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">{heading}</h2>
        <p className="text-sm text-muted mb-1">
          {located.length > 0 ? (
            <>
              各ブランド公式サイトの店舗情報を転記した実在店舗のみを掲載しています（
              {Object.entries(byBrand).map(([b, n], i) => (
                <span key={b}>
                  {i > 0 && "・"}
                  {b} {n}店
                </span>
              ))}
              {verifiedLabel && `・${verifiedLabel}確認`}）。
            </>
          ) : (
            <>
              {area.label}内に所在する店舗は各ブランド公式サイトで確認できていません（{verifiedLabel || "2026-08-15"}時点）。
            </>
          )}
        </p>
        {located.length > 0 && (
          <p className="text-xs text-muted mb-6">
            電話番号は{withTel}店・営業時間は{withHours}店で公式に記載あり。対応エリアは公式サイトに記載のある店舗のみ表示しています。詳細・出典URLは各店舗ページに記載。
          </p>
        )}

        {located.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {located.map((p) => (
              <a key={p.slug} href={`/provider/${p.slug}/`} className="card p-4 block border border-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge text-[11px]">{p.brand_name}</span>
                  {typeof p.rating_official === "number" && (
                    <span className="text-xs text-primary">
                      公式評価 {p.rating_official.toFixed(2)}
                      {typeof p.review_count_official === "number" && `（${p.review_count_official}件）`}
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold text-ink">{p.name}</p>
                <p className="text-xs text-muted mt-1">{p.address}</p>
                {p.tel && <p className="text-xs text-muted mt-1">TEL {p.tel}</p>}
                {p.hours && (
                  <p className="text-xs text-muted mt-1">
                    営業時間 {p.hours}
                    {p.holiday && `／定休日 ${p.holiday}`}
                  </p>
                )}
                {Array.isArray(p.charge_region) && p.charge_region.length > 0 && (
                  <p className="text-xs text-muted mt-1">
                    対応エリア {p.charge_region.slice(0, 6).join("・")}
                    {p.charge_region.length > 6 && ` ほか${p.charge_region.length - 6}地域`}
                  </p>
                )}
              </a>
            ))}
          </div>
        )}

        {covering.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-ink mb-2">
              {area.label}を対応エリアに含む近隣店舗（{covering.length}店舗）
            </h3>
            <p className="text-xs text-muted mb-3">
              店舗所在地は{area.label}外ですが、公式サイトの対応エリアに{area.label}が明記されている店舗です。
            </p>
            <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {coveringShown.map((p) => (
                <li key={p.slug}>
                  <a href={`/provider/${p.slug}/`} className="block text-sm text-primary hover:underline">
                    {p.name}
                    <span className="block text-xs text-muted">{p.address}</span>
                  </a>
                </li>
              ))}
            </ul>
            {covering.length > COVERING_LIMIT && (
              <p className="text-xs text-muted mt-3">
                ほか{covering.length - COVERING_LIMIT}店舗。各店舗の対応エリアは店舗ページの「対応エリア」欄で確認できます。
              </p>
            )}
          </div>
        )}

        {(area.children.length > 0 || area.parent || area.prefSlug) && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            {area.children.length > 0 && (
              <>
                <h3 className="text-base font-bold text-ink mb-2">
                  {area.kind === "pref" ? "市区から探す" : "区から探す"}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.children.map((c) => (
                    <a
                      key={c.slug}
                      href={`/areas/${c.slug}/`}
                      className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-ink hover:border-primary hover:text-primary"
                    >
                      {c.name}
                    </a>
                  ))}
                </div>
              </>
            )}
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {area.parent && (
                <a href={`/areas/${area.parent.slug}/`} className="text-primary hover:underline">
                  {area.parent.name}全体の店舗一覧を見る
                </a>
              )}
              {area.kind !== "pref" && area.prefSlug && (
                <a href={`/areas/${area.prefSlug}/`} className="text-primary hover:underline">
                  {area.pref}の店舗一覧を見る
                </a>
              )}
              {Object.keys(byBrand).length > 0 &&
                Array.from(new Set(located.map((p) => p.brand))).map((b) =>
                  BRAND_HUB[b] ? (
                    <a key={b} href={BRAND_HUB[b]} className="text-primary hover:underline">
                      {located.find((p) => p.brand === b)!.brand_name}の全店舗一覧
                    </a>
                  ) : null,
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
