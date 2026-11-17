import type { Metadata } from "next";
import * as fs from "fs";
import * as path from "path";
import providers from "../../data/providers.json";
import AreaProvidersLead from "../../components/AreaProvidersLead";
import { AirconPriceAnswer } from "../../components/OosoujiPriceAnswer";
import { PREF_PAGES } from "../../components/areaIndexData";
import { withPageSocial } from "../../siteOpenGraph";

// 既存の静的ディレクトリ(app/areas/tokyo等)が優先されるため、
// この動的ルートは「静的ディレクトリの無い県ページ」だけを生成する。
// 対象は PREF_PAGES(areaIndexData.ts) から app/areas/ に実在するディレクトリを除いて決める
// (D2の24県 + 県庁所在地の市ページが県名slugを使っている12県の "{slug}-ken")。
const AREAS_DIR = path.join(process.cwd(), "app", "areas");
const DYNAMIC_PREFS = PREF_PAGES.filter((p) => !fs.existsSync(path.join(AREAS_DIR, p.slug)));
const PREF_NAME: Record<string, string> = Object.fromEntries(DYNAMIC_PREFS.map((p) => [p.slug, p.name]));

type Provider = { pref_ja: string };

// 2026-11-17 16:00 遅れ挽回: 「高松市 エアコンクリーニング」（香川県）・「ハウスクリーニング 宇都宮市」（栃木県）向けに、冒頭でエアコンクリーニングの3社公式料金と
// 県庁所在市の掲載店（各公式店舗ページが 2026-11-17 に 200・本舗/ダスキンは公式の市の一覧と一致）への導線を出す。他の県ページは表示不変
const CAPITAL_STORES: Record<string, { label: string; more?: { name: string; href: string }; stores: { name: string; href: string }[] }> = {
  kagawa: { label: "高松市", more: { name: "高松市のハウスクリーニング", href: "/areas/takamatsu/" }, stores: [
  { name: "おそうじ本舗 サンフラワー通り店", href: "/provider/honpo-14465/" },
  { name: "おそうじ本舗 高松木太中央店", href: "/provider/honpo-14870/" },
  { name: "おそうじ本舗 高松仏生山店", href: "/provider/honpo-17089/" },
  { name: "おそうじ本舗 高松国分寺店", href: "/provider/honpo-17186/" },
  { name: "おそうじ本舗 高松瓦町駅前店", href: "/provider/honpo-18577/" },
  { name: "おそうじ本舗 高松円座店", href: "/provider/honpo-19909/" },
  { name: "おそうじ本舗 高松香西店", href: "/provider/honpo-19955/" },
  { name: "おそうじ本舗 高松牟礼店", href: "/provider/honpo-20143/" },
  { name: "おそうじ本舗 高松東山崎店", href: "/provider/honpo-21010/" },
  { name: "ニューダスキン屋島サービスマスター", href: "/provider/duskin-1800291/" },
  { name: "ダスキン牟礼サービスマスター", href: "/provider/duskin-1800530/" },
  { name: "ダスキン竹内サービスマスター", href: "/provider/duskin-1800546/" },
  { name: "ダスキン 鶴市支店", href: "/provider/duskin-8000420/" },
  { name: "ダスキン 太田支店", href: "/provider/duskin-8001802/" },
  { name: "おそうじ革命 香川高松端岡店", href: "/provider/kakumei-kagawa_takamatsu_hashioka/" },
  { name: "おそうじ革命 香川高松国分寺店", href: "/provider/kakumei-kagawa_takamatsukitacho/" },
  ] },
  tochigi: { label: "宇都宮市", stores: [
  { name: "おそうじ本舗 宇都宮今泉店", href: "/provider/honpo-15413/" },
  { name: "おそうじ本舗 東武宇都宮駅前店", href: "/provider/honpo-17047/" },
  { name: "おそうじ本舗 宇都宮御幸ヶ原店", href: "/provider/honpo-17335/" },
  { name: "おそうじ本舗 宇都宮テクノ店", href: "/provider/honpo-17500/" },
  { name: "おそうじ本舗 宇都宮インターパーク店", href: "/provider/honpo-17923/" },
  { name: "おそうじ本舗 宇都宮鶴田店", href: "/provider/honpo-18880/" },
  { name: "おそうじ本舗 宇都宮野沢店", href: "/provider/honpo-19879/" },
  { name: "おそうじ本舗 宇都宮雀宮店", href: "/provider/honpo-20649/" },
  { name: "おそうじ本舗 宇都宮川田町店", href: "/provider/honpo-20852/" },
  { name: "おそうじ本舗 宇都宮平松町店", href: "/provider/honpo-20939/" },
  { name: "おそうじ本舗 宇都宮泉が丘店", href: "/provider/honpo-21093/" },
  { name: "おそうじ本舗 宇都宮宝木店", href: "/provider/honpo-21230/" },
  { name: "ダスキンICSホットスタッフサービスマスター", href: "/provider/duskin-1310450/" },
  { name: "ダスキンみどり平松店サービスマスター", href: "/provider/duskin-1311165/" },
  { name: "ダスキン栃の葉泉町サービスマスター", href: "/provider/duskin-1311171/" },
  { name: "ダスキンフォワード宇都宮東店サービスマスター", href: "/provider/duskin-1311254/" },
  { name: "ダスキン伝馬町サービスマスター", href: "/provider/duskin-1311393/" },
  { name: "ダスキン 駒生支店", href: "/provider/duskin-8000636/" },
  { name: "ダスキン やなぜ支店", href: "/provider/duskin-8001157/" },
  { name: "ダスキン 若松原支店", href: "/provider/duskin-8001252/" },
  { name: "ダスキン つるた支店", href: "/provider/duskin-8003488/" },
  { name: "おそうじ革命 栃木宇都宮花房店", href: "/provider/kakumei-tochigi_utsunomiya_hanabusa/" },
  { name: "おそうじ革命 栃木県宇都宮ゆいの杜店", href: "/provider/kakumei-tochigiken_utsunomiya_yuinomori/" },
  { name: "おそうじ革命 宇都宮店", href: "/provider/kakumei-utsunomiya/" },
  { name: "おそうじ革命 宇都宮平成通り店", href: "/provider/kakumei-utsunomiya_heiseidori/" },
  ] },
};
const list = providers as Provider[];

export async function generateStaticParams() {
  return DYNAMIC_PREFS.map((p) => ({ pref: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ pref: string }> }): Promise<Metadata> {
  const { pref } = await params;
  const prefJa = PREF_NAME[pref];
  if (!prefJa) return {};
  const count = list.filter((p) => p.pref_ja === prefJa).length;
  return withPageSocial({
    title: `${prefJa}のハウスクリーニング業者一覧（${count}店舗）｜店舗データベース`,
    description: `${prefJa}のハウスクリーニング業者${count}店舗を掲載しています。おそうじ本舗・ダスキン・おそうじ革命など、各ブランド公式サイトで所在を確認した店舗のみを、確認日を明記して掲載しています。`,
    alternates: { canonical: `https://cleaning-choices.com/areas/${pref}/` },
  });
}

export default async function PrefPage({ params }: { params: Promise<{ pref: string }> }) {
  const { pref } = await params;
  const prefJa = PREF_NAME[pref];
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
          <p className="text-sm opacity-90">各ブランド公式サイトで所在を確認した店舗のみを掲載しています</p>
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
      {CAPITAL_STORES[pref] && (
        <AirconPriceAnswer
          areaLabel={`${prefJa}（${CAPITAL_STORES[pref].label}）`}
          checked="2026年11月17日"
          stores={CAPITAL_STORES[pref].stores}
          storesLabel={CAPITAL_STORES[pref].label}
          storesMore={CAPITAL_STORES[pref].more}
        />
      )}
      <AreaProvidersLead slug={pref} breadcrumbLd={false} />
      <section className="container mx-auto px-4 pb-14">
        <div className="alert alert-info">
          <p className="text-sm">
            ご依頼の前には、2〜3社から相見積もりを取ることをおすすめします。選び方の基準は
            <a href="/ranking/" className="underline text-primary">比較ランキング</a>・
            <a href="/guide/" className="underline text-primary">初めての方へ</a>をご覧ください。
            掲載情報の訂正は、<a href="/contact/" className="underline text-primary">お問い合わせ</a>にて受け付けています。
          </p>
        </div>
      </section>
    </main>
  );
}
