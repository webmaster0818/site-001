import ServiceDetailContent from "@/app/components/ServiceDetailContent";
import { SERVICE_DETAIL } from "@/app/components/serviceDetailData";
import { SITE_OPEN_GRAPH } from "../../siteOpenGraph";

const data = SERVICE_DETAIL["carpet"];

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/services-detail/carpet/" },
  openGraph: { ...SITE_OPEN_GRAPH, url: "https://cleaning-choices.com/services-detail/carpet/" },
  title: `${data.name} | クリーンナビ`,
  description: `${data.name}の作業内容・料金相場の目安・依頼前のポイント・よくある質問をご説明します。${data.lead.slice(0, 60)}`,
};

export default function Page() {
  return <ServiceDetailContent data={data} />;
}
