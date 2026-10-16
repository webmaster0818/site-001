import type { Metadata } from "next";
import { PARTNERS, SERVICE_LABELS, type ServiceTag } from "../data/partners";

export const metadata: Metadata = {
  title: "ハウスクリーニング業者の口コミ・評判を公式情報で検証【業者一覧】",
  description:
    "カジタク・アールクリーニング・ハウスクリーニング110番・ナックダスキン・エアコンクリーニング清風・キレイユ・ミガクる・オン・フォーエル・おそうじLabo・おそうじ革命などの口コミ・評判・料金・対応エリアを、各社公式サイトで確認し、確認日を明記して掲載しています。架空の口コミは掲載していません。",
  alternates: { canonical: "https://cleaning-choices.com/review/" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
    { "@type": "ListItem", position: 2, name: "業者の口コミ・評判検証", item: "https://cleaning-choices.com/review/" },
  ],
};

const TAGS: ServiceTag[] = ["aircon", "bathroom", "kitchen", "moving", "whole"];

export default function ReviewHubPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="breadcrumbs text-xs text-gray-500 mb-4">
            <ul>
              <li><a href="/">ホーム</a></li>
              <li>業者の口コミ・評判検証</li>
            </ul>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">ハウスクリーニング業者の口コミ・評判を公式情報で検証</h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            業者の口コミや評判を調べる際は、まず料金体系・対応エリア・保証・運営会社など、公式サイトで確認できる事実を把握することをおすすめします。このページでは、当サイトと提携している業者について、各社公式サイトで確認した情報を確認日を明記して掲載し、口コミ・評判の読み方もあわせてご説明します。当サイトでは、架空の口コミや独自に集計した評点は作成しません。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">検証済みの業者（{PARTNERS.length}社）</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">業者</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">得意ジャンル（公式メニュー）</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">対応エリア</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">公式料金例</th>
                  <th className="p-3 border border-gray-200 font-bold text-gray-700">確認日</th>
                </tr>
              </thead>
              <tbody>
                {PARTNERS.map((p) => (
                  <tr key={p.slug}>
                    <td className="p-3 border border-gray-200 font-bold text-gray-900">
                      <a href={`/review/${p.slug}/`} className="text-sky-600 hover:underline">{p.name}</a>
                      <span className="block text-xs font-normal text-gray-500">{p.company}</span>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.tags.map((t) => SERVICE_LABELS[t]).join(" / ")}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.area}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.prices[0] ? `${p.prices[0].menu} ${p.prices[0].price}` : "公式料金表を参照"}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 whitespace-nowrap">{p.confirmedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">掲載順は優劣を示すものではありません。料金は各社公式サイトの表記をそのまま掲載しています（確認日時点）。</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">ジャンル別に探す</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TAGS.map((t) => {
              const list = PARTNERS.filter((p) => p.tags.includes(t));
              if (list.length === 0) return null;
              return (
                <div key={t} className="rounded-xl border border-gray-200 bg-white p-5">
                  <p className="font-bold text-gray-900 mb-2">{SERVICE_LABELS[t]}</p>
                  <ul className="space-y-1">
                    {list.map((p) => (
                      <li key={p.slug} className="text-sm">
                        <a href={`/review/${p.slug}/`} className="text-sky-600 hover:underline">{p.name}</a>
                        {p.areaNote && <span className="ml-1 text-[11px] text-amber-700">（{p.areaNote}）</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">口コミ・評判の読み方と当サイトの方針</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">公式サイトで確認できる事実を優先します</p>
              <p className="text-sm text-gray-600 leading-relaxed">料金・追加料金の条件・対応エリア・保証・運営会社は、公式サイトで確認できる事実です。各業者のページに、確認日を明記して掲載しています。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">架空の口コミは作成しません</p>
              <p className="text-sm text-gray-600 leading-relaxed">当サイトでは、利用者の声や評点を創作しません。第三者の口コミを紹介する場合は、出典を示せるものに限ります。広告（PR）の有無は掲載内容に影響しません。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-bold text-gray-900 mb-2">口コミは条件をそろえて参考にすることをおすすめします</p>
              <p className="text-sm text-gray-600 leading-relaxed">同じ業者でも、機種・汚れの程度・地域・担当者で評価は変わります。ご自身と同じサービス・同じ地域の口コミを探し、良い評価と悪い評価の両方を確認することをおすすめします。</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/ranking/" className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition">業者ランキングを見る</a>
            <a href="/areas/" className="rounded-lg border border-sky-600 px-6 py-3 text-sm font-bold text-sky-600 hover:bg-sky-50 transition">地域の店舗から探す</a>
          </div>
        </div>
      </section>
    </div>
  );
}
