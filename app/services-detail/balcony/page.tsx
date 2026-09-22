import ServiceDetailContent from "@/app/components/ServiceDetailContent";
import { SERVICE_DETAIL } from "@/app/components/serviceDetailData";

const data = SERVICE_DETAIL["balcony"];

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/services-detail/balcony/" },
  title: `${data.name} | クリーンナビ`,
  description: `${data.name}の作業内容・料金相場の目安・依頼前のポイント・よくある質問を解説。${data.lead.slice(0, 60)}`,
};

export default function Page() {
  return <ServiceDetailContent data={data} />;
}
