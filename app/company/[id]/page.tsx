import { Metadata } from "next";
import CompanyPageClient from "./CompanyPageClient";

// メタデータ用の業者名・カテゴリ一覧（実データはCompanyPageClientのCOMPANY_DATA）
const COMPANY_META: { [id: string]: { name: string; category: string } } = {
  "1": { name: "おそうじ本舗", category: "エアコンクリーニング" },
  "2": { name: "ダスキン サービスマスター", category: "浴室クリーニング" },
  "3": { name: "おそうじ革命", category: "エアコンクリーニング" },
  "4": { name: "東京ガス ハウスクリーニング", category: "キッチンクリーニング" },
  "5": { name: "カジタク（イオングループ）", category: "浴室クリーニング" },
  "6": { name: "ベアーズ", category: "キッチンクリーニング" },
};

export async function generateStaticParams() {
  // 実データ(COMPANY_DATA)が存在する業者IDのみ生成する。
  // データの無いIDは「業者が見つかりません」の空ページになり、
  // Scaled Content（情報利得ゼロの重複ページ）となるため生成しない。
  return Object.keys(COMPANY_META).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const meta = COMPANY_META[id];
  if (!meta) {
    return { title: "業者詳細 | クリーンナビ" };
  }
  return {
    title: `${meta.name}の${meta.category}｜料金・サービス内容 | クリーンナビ`,
    description: `${meta.name}の${meta.category}サービスを紹介。料金、対応エリア、サービス内容を掲載しています。`,
    alternates: {
      canonical: `https://cleaning-choices.com/company/${id}/`,
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CompanyPageClient id={id} />;
}
