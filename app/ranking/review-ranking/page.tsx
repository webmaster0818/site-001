import type { Metadata } from "next";
import providers from "../../data/providers.json";

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

// 公式サイト掲載のレビュー集計が確認できた店舗のうち、件数100件以上を評価順に選出(決定的・独自集計なし)
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

const TOP = rated.slice(0, 10);
const ratedCount = list.filter((p) => typeof p.rating_official === "number").length;

export const metadata: Metadata = {
  title: "口コミ評価が高いハウスクリーニング店舗ランキング【公式レビュー集計・2026年9月】",
  description: `口コミ評価が高いハウスクリーニング店舗トップ10。各ブランド公式サイト掲載のレビュー集計(全${ratedCount}店舗分)から、レビュー100件以上の店舗を評価順に紹介。架空の口コミは一切使用していません。`,
  alternates: { canonical: "https://cleaning-choices.com/ranking/review-ranking/" },
};

export default function ReviewRankingPage() {
  const verifiedAt = TOP[0]?.verified_at ?? "2026-08-15";
  return (
    <div>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            口コミ評価が高いハウスクリーニング店舗ランキング
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            このランキングは、各ブランド公式サイトに掲載されているレビュー集計(評価値・件数)をそのまま用いた店舗ランキングです。当サイトが独自に集計・作成した評点や口コミは一切ありません。信頼性を担保するため、レビュー件数100件以上の店舗のみを対象に、評価値順(同値は件数順)で並べています(全店舗{verifiedAt}確認)。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">公式レビュー高評価トップ10（レビュー100件以上）</h2>
          <div className="space-y-3">
            {TOP.map((p, i) => (
              <a
                key={p.slug}
                href={`/provider/${p.slug}/`}
                className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 hover:border-sky-400 hover:shadow-sm transition"
              >
                <span className={`shrink-0 w-10 h-10 rounded-full font-bold flex items-center justify-center ${i < 3 ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-600"}`}>
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-900 truncate">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.brand_name}・{p.pref_ja}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-sky-600">{p.rating_official!.toFixed(2)}</p>
                  <p className="text-xs text-gray-500">{p.review_count_official}件</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            出典: 各ブランド公式サイトのレビュー集計（{verifiedAt}確認・出典の詳細は各店舗ページに記載）。評価・件数は確認日時点のもので、変動します。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">口コミを比較の道具にする3つの原則</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">1. 件数とセットで見る</p>
              <p className="text-sm text-gray-600 leading-relaxed">評価5.0でも3件と300件では意味が違います。当ランキングが100件以上に限定しているのはこのためです。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">2. 店舗単位で見る</p>
              <p className="text-sm text-gray-600 leading-relaxed">実際に自宅へ来るのは地域の店舗のスタッフです。ブランドの評判より、対応する店舗の評価を確認しましょう。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">3. 出どころを確認する</p>
              <p className="text-sm text-gray-600 leading-relaxed">誰がどこに書いた口コミかを確認できるものだけを参考にしましょう。当サイトは出典を示せない口コミを掲載しません。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">条件を変えて探す</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/areas/" className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition">地域から探す</a>
            <a href="/ranking/aircon-ranking/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">エアコンで選ぶ</a>
            <a href="/ranking/bathroom-ranking/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">浴室で選ぶ</a>
            <a href="/ranking/cheap-ranking/" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition">料金で選ぶ</a>
          </div>
        </div>
      </section>
    </div>
  );
}
