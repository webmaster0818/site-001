import type { Metadata } from "next";
import providers from "../../data/providers.json";
import PrefProviders from "../../components/PrefProviders";

// 既存の静的ディレクトリ(app/areas/tokyo等)が優先されるため、
// この動的ルートは「県ページ未作成の24県」だけを生成する
const MISSING_PREFS: Record<string, string> = {
  hokkaido: "北海道", aomori: "青森県", iwate: "岩手県", miyagi: "宮城県",
  akita: "秋田県", yamagata: "山形県", fukushima: "福島県", ibaraki: "茨城県",
  tochigi: "栃木県", gunma: "群馬県", ishikawa: "石川県", yamanashi: "山梨県",
  mie: "三重県", shiga: "滋賀県", nara: "奈良県", tottori: "鳥取県",
  shimane: "島根県", yamaguchi: "山口県", tokushima: "徳島県", kagawa: "香川県",
  ehime: "愛媛県", saga: "佐賀県", nagasaki: "長崎県", okinawa: "沖縄県",
};

type Provider = { pref: string };
const list = providers as Provider[];

export async function generateStaticParams() {
  return Object.keys(MISSING_PREFS).map((pref) => ({ pref }));
}

export async function generateMetadata({ params }: { params: Promise<{ pref: string }> }): Promise<Metadata> {
  const { pref } = await params;
  const prefJa = MISSING_PREFS[pref];
  if (!prefJa) return {};
  const count = list.filter((p) => p.pref === pref).length;
  return {
    title: `${prefJa}のハウスクリーニング業者一覧（${count}店舗）｜店舗データベース`,
    description: `${prefJa}のハウスクリーニング業者${count}店舗を掲載。おそうじ本舗・ダスキン・おそうじ革命など、各ブランド公式サイトで確認した実在店舗のみを確認日つきで一覧化しています。`,
    alternates: { canonical: `https://cleaning-choices.com/areas/${pref}/` },
  };
}

export default async function PrefPage({ params }: { params: Promise<{ pref: string }> }) {
  const { pref } = await params;
  const prefJa = MISSING_PREFS[pref];
  if (!prefJa) return null;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cleaning-choices.com/" },
      { "@type": "ListItem", position: 2, name: "地域から探す", item: "https://cleaning-choices.com/areas/" },
      { "@type": "ListItem", position: 3, name: `${prefJa}のハウスクリーニング`, item: `https://cleaning-choices.com/areas/${pref}/` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-content py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{prefJa}のハウスクリーニング業者一覧</h1>
          <p className="text-sm opacity-90">各ブランド公式サイトで確認した実在店舗のみを掲載しています</p>
        </div>
      </section>
      <div className="container mx-auto px-4 pt-6">
        <nav className="breadcrumbs" aria-label="パンくず">
          <ol>
            <li><a href="/">ホーム</a></li>
            <li><a href="/areas/">地域から探す</a></li>
            <li>{prefJa}</li>
          </ol>
        </nav>
      </div>
      <PrefProviders pref={pref} prefJa={prefJa} />
      <section className="container mx-auto px-4 pb-14">
        <div className="alert alert-info">
          <p className="text-sm">
            依頼前には2〜3社の相見積もりがおすすめです。選び方の基準は
            <a href="/ranking/" className="underline text-primary">比較ランキング</a>・
            <a href="/guide/" className="underline text-primary">初めての方へ</a>をご覧ください。
            掲載情報の訂正は<a href="/contact/" className="underline text-primary">お問い合わせ</a>から。
          </p>
        </div>
      </section>
    </main>
  );
}
