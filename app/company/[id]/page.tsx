import CompanyPageClient from "./CompanyPageClient";

export async function generateStaticParams() {
  // 実データ(COMPANY_DATA)が存在する業者IDのみ生成する。
  // データの無いID(3〜10)は「業者が見つかりません」の空ページになり、
  // Scaled Content（情報利得ゼロの重複ページ）となるため生成しない。
  return [{ id: "1" }, { id: "2" }];
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CompanyPageClient id={id} />;
}
