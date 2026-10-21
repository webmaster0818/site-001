import ServiceDetailContent from "@/app/components/ServiceDetailContent";
import { SERVICE_DETAIL } from "@/app/components/serviceDetailData";
import { withPageSocial } from "../../siteOpenGraph";

const data = SERVICE_DETAIL["washing-machine"];

export const metadata = withPageSocial({
  alternates: { canonical: "https://cleaning-choices.com/services-detail/washing-machine/" },
  title: `${data.name} | クリーンナビ`,
  description: `${data.name}の作業内容・料金相場の目安・依頼前のポイント・よくある質問をご説明します。${data.lead.slice(0, 60)}`,
});

export default function Page() {
  return <ServiceDetailContent data={data} />;
}
