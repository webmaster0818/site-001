// 2026-11-03 追加（trust-audit C7: そのページだけの文字が少ない比較・ガイド・シーン頁）。
// 提携業者の公式確認データ（app/data/partners.ts。各社の確認日 confirmedAt つき）から、
// ページの主題に当たる項目だけを業者横断で並べる。新しい調査値・推測は入れない（データに無い業者は行を出さない）。
import { PARTNERS, type Partner } from "../data/partners";

export type FactRow = { p: Partner; cells: string[] };

// reviewPoints のうち topic が正規表現に合うものの公式記載（複数あれば「／」で連結）。
// 「公式サイトで確認できませんでした」の行は、その項目の公式記載ではないので除く
export function pointsByTopic(re: RegExp): FactRow[] {
  return PARTNERS.flatMap((p) => {
    const hits = (p.reviewPoints ?? []).filter((r) => re.test(r.topic) && !r.official.includes("確認できません"));
    return hits.length ? [{ p, cells: [hits.map((r) => r.official).join("／"), hits.map((r) => r.page).join("／")] }] : [];
  });
}

export function rowsFrom(pick: (p: Partner) => string | null | undefined): FactRow[] {
  return PARTNERS.flatMap((p) => {
    const v = pick(p);
    return v ? [{ p, cells: [v] }] : [];
  });
}

export default function PartnerFactTable({
  heading,
  intro,
  columns,
  rows,
}: {
  heading: string;
  intro: string;
  columns: string[];
  rows: FactRow[];
}) {
  if (rows.length === 0) return null;
  return (
    <section className="py-10 md:py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{heading}</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{intro}</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 border border-gray-200 font-bold text-gray-700 whitespace-nowrap">業者</th>
                {columns.map((c) => (
                  <th key={c} className="p-3 border border-gray-200 font-bold text-gray-700">{c}</th>
                ))}
                <th className="p-3 border border-gray-200 font-bold text-gray-700 whitespace-nowrap">確認日</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ p, cells }) => (
                <tr key={p.slug}>
                  <td className="p-3 border border-gray-200 font-bold text-gray-900 align-top">
                    <a href={`/review/${p.slug}/`} className="text-sky-600 hover:underline">{p.name}</a>
                  </td>
                  {cells.map((c, i) => (
                    <td key={i} className="p-3 border border-gray-200 text-gray-700 align-top">{c}</td>
                  ))}
                  <td className="p-3 border border-gray-200 text-gray-700 whitespace-nowrap align-top">{p.confirmedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          各社の公式サイトを当サイトが開いて確認した記載です（要約を含みます。「」内は公式サイトの文言）。掲載順は優劣を示すものではありません。記載が見つからなかった業者は表に含めていません。最新の条件は各社の公式サイトでご確認ください。
        </p>
      </div>
    </section>
  );
}
