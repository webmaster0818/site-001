import { StoreBrandShot } from "../../components/CompanyShot";
import type { Metadata } from "next";
import providers from "../../data/providers.json";
import PartnerCards from "../../components/PartnerCards";

type Provider = {
  slug: string;
  brand: string;
  brand_name: string;
  name: string;
  pref_ja: string;
  rating_official?: number;
  review_count_official?: number;
  verified_at?: string;
  rating_checked_at?: string;
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
  title: "口コミ評価が高いハウスクリーニング店舗ランキング【公式レビュー集計】",
  description: `口コミ評価が高いハウスクリーニング店舗トップ10。各ブランド公式サイト掲載のレビュー集計(全${ratedCount}店舗分)から、レビュー100件以上の店舗を評価順に紹介しています。架空の口コミは使用していません。`,
  alternates: { canonical: "https://cleaning-choices.com/ranking/review-ranking/" },
};

export default function ReviewRankingPage() {
  const verifiedAt = TOP[0]?.rating_checked_at ?? TOP[0]?.verified_at ?? "2026-08-15";
  return (
    <div>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            口コミ評価が高いハウスクリーニング店舗ランキング
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            このランキングは、各ブランド公式サイトに掲載されているレビュー集計(評価値・件数)をそのまま用いた店舗ランキングです。当サイトが独自に集計・作成した評点や口コミは使用していません。評価の信頼性を確保するため、レビュー件数100件以上の店舗のみを対象とし、評価値の順（同値の場合は件数の順）に掲載しています（全店舗{verifiedAt}確認）。
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
                <StoreBrandShot brand={p.brand} name={p.brand_name} compact />
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
            出典: 各ブランド公式サイトのレビュー集計（{verifiedAt}確認・出典の詳細は各店舗ページに記載）。評価・件数は確認日時点のもので、変動する場合があります。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">口コミを参考にする際の3つの観点</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">1. 評価は件数とあわせて確認する</p>
              <p className="text-sm text-gray-600 leading-relaxed">同じ評価5.0でも、3件と300件では評価の重みが異なります。当ランキングの対象を100件以上の店舗に限定しているのは、このためです。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">2. 店舗単位で確認する</p>
              <p className="text-sm text-gray-600 leading-relaxed">作業を担当するのは地域の店舗のスタッフです。ブランド全体の評判に加えて、担当する店舗の評価をご確認ください。</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="font-bold text-gray-900 mb-2">3. 口コミの出典を確認する</p>
              <p className="text-sm text-gray-600 leading-relaxed">投稿者と掲載先を確認できる口コミを参考にすることをおすすめします。当サイトでは、出典を示せない口コミは掲載していません。</p>
            </div>
          </div>
        </div>
      </section>

      <PartnerCards title="口コミ・評判を公式情報で検証した提携業者" intro="口コミとあわせて確認しておきたい料金・対応エリア・保証を、各社の公式サイトで確認した業者のページです。架空の口コミや独自の評点は作成していません。掲載順は優劣を示すものではありません。" />

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
