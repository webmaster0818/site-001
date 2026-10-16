import Link from "next/link";

export const metadata = {
  alternates: { canonical: "https://cleaning-choices.com/scene/office/" },
  title: "事務所・オフィスクリーニング | クリーンナビ",
  description: "事務所・オフィスの清掃についてのページです。対応する業者は、サービス別の業者一覧からお探しください。",
};

export default function OfficeScene() {
  return (
    <div className="min-h-screen bg-base-100">
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">事務所・オフィスクリーニング</h1>
          <p className="text-xl mb-12">事務所・オフィスの清掃について</p>
          <Link href="/services/aircon/" className="btn btn-primary btn-lg">業者を探す</Link>
        </div>
      </section>
    </div>
  );
}
