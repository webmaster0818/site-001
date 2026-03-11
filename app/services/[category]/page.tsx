import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return [
    { category: 'aircon' },
    { category: 'bathroom' },
    { category: 'kitchen' },
  ];
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <ServicePageClient category={category} />;
}
