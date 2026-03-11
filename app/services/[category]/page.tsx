import ServicePageClient from "./ServicePageClient";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <ServicePageClient category={category} />;
}
