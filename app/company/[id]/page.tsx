import CompanyPageClient from "./CompanyPageClient";

export async function generateStaticParams() {
  // 各ページで使用されている業者IDを列挙
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CompanyPageClient id={id} />;
}
