import type { Metadata } from "next";
import type React from "react";
import * as fs from "fs";
import * as path from "path";
import providers from "../../data/providers.json";
import AreaProvidersLead from "../../components/AreaProvidersLead";
import OosoujiPriceAnswer, { AirconPriceAnswer } from "../../components/OosoujiPriceAnswer";
import { PREF_PAGES } from "../../components/areaIndexData";
import { withPageSocial } from "../../siteOpenGraph";

// 既存の静的ディレクトリ(app/areas/tokyo等)が優先されるため、
// この動的ルートは「静的ディレクトリの無い県ページ」だけを生成する。
// 対象は PREF_PAGES(areaIndexData.ts) から app/areas/ に実在するディレクトリを除いて決める
// (D2の24県 + 県庁所在地の市ページが県名slugを使っている12県の "{slug}-ken")。
const AREAS_DIR = path.join(process.cwd(), "app", "areas");
const DYNAMIC_PREFS = PREF_PAGES.filter((p) => !fs.existsSync(path.join(AREAS_DIR, p.slug)));
const PREF_NAME: Record<string, string> = Object.fromEntries(DYNAMIC_PREFS.map((p) => [p.slug, p.name]));

type Provider = { pref_ja: string; brand: string };

// 2026-11-17 16:00 遅れ挽回: 「高松市 エアコンクリーニング」（香川県）・「ハウスクリーニング 宇都宮市」（栃木県）向けに、冒頭でエアコンクリーニングの3社公式料金と
// 県庁所在市の掲載店（各公式店舗ページが 2026-11-17 に 200・本舗/ダスキンは公式の市の一覧と一致）への導線を出す。他の県ページは表示不変
const CAPITAL_STORES: Record<string, { label: string; checked?: string; more?: { name: string; href: string }; stores: { name: string; href: string }[] }> = {
  // 2026-11-19 16:00 遅れ挽回: 「エアコンクリーニング 盛岡」5.0位・「一関 エアコンクリーニング」10.0位・「岩手県 クリーニング」6.7位（岩手県）。同じ型で盛岡市の掲載店15店
  // （本舗7＝公式の盛岡市一覧 /shop/tohoku/iwate/3201/ と一致・ダスキン4＝公式 /store/iwate/morioka/ と一致・革命4。各公式店舗ページ 2026-11-19 に 200）
  iwate: { label: "盛岡市", checked: "2026年11月19日", stores: [
  { name: "おそうじ本舗 盛岡本宮店", href: "/provider/honpo-13757/" },
  { name: "おそうじ本舗 盛岡河南店", href: "/provider/honpo-17002/" },
  { name: "おそうじ本舗 盛岡青山店", href: "/provider/honpo-19146/" },
  { name: "おそうじ本舗 盛岡前潟店", href: "/provider/honpo-19349/" },
  { name: "おそうじ本舗 盛岡南インター店", href: "/provider/honpo-20050/" },
  { name: "おそうじ本舗 盛岡駅西店", href: "/provider/honpo-20523/" },
  { name: "おそうじ本舗 盛岡緑が丘店", href: "/provider/honpo-20749/" },
  { name: "ダスキン矢巾サービスマスター", href: "/provider/duskin-1210747/" },
  { name: "ダスキン 本宮支店", href: "/provider/duskin-8001757/" },
  { name: "ダスキン 上堂支店", href: "/provider/duskin-8001929/" },
  { name: "ダスキン 中野支店", href: "/provider/duskin-8004771/" },
  { name: "おそうじ革命 盛岡本宮店", href: "/provider/kakumei-morioka_motomiya/" },
  { name: "おそうじ革命 岩手盛岡東見前店", href: "/provider/kakumei-iwate_morioka_higashimirumae/" },
  { name: "おそうじ革命 岩手盛岡青山店", href: "/provider/kakumei-iwate_moriokaaoyama/" },
  { name: "おそうじ革命 岩手盛岡飯岡店", href: "/provider/kakumei-morioka_iioka/" },
  ] },
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
// 2026-11-18 16:00 遅れ挽回: 「ハウスクリーニング 奈良市」「ハウスクリーニング 奈良」（奈良県）向けに、11/17 と同じ型で冒頭に大手3社の公式料金（エアコン・水まわり・セット料金。
// ハウスクリーニング全般の語なので AirconPriceAnswer ではなく OosoujiPriceAnswer）と県庁所在市の掲載店（本舗4＝公式の奈良市一覧 29201 と一致・ダスキン6＝公式の奈良市一覧と一致・
// 各公式店舗ページ 2026-11-18 に 200）。ダスキン ハウスワイドは奈良＝Aエリア（公式 sm000180）。他の県ページは表示不変
// 2026-11-21 16:00 遅れ挽回: 任意 withCount（県内の掲載店のブランド別店数を出す）・cityWards（政令市の区別ページへの導線）・note（答えの後ろの1段落）を追加。既存3県は渡していないので表示不変
// 2026-11-22 16:00 遅れ挽回: 任意 storesNote（掲載店の行の後ろの注記＝公式404で店名の行から外した店の理由）を追加。既存の県は渡していないので表示不変
const CAPITAL_HOUSE_STORES: Record<string, { label: string; duskinArea: "S" | "A" | "B"; checked?: string; withCount?: boolean; cityWards?: { label: string; links: { name: string; href: string; count: number }[]; note?: React.ReactNode }; note?: React.ReactNode; storesNote?: string; stores: { name: string; href: string }[] }> = {
  // 2026-11-22 16:00 遅れ挽回: 佐賀県・長崎県・広島県（11/21 宮城県・滋賀県・群馬県と同じ型）。ダスキン ハウスワイドは3県とも Bエリア（公式 sm000180・2026-11-22）。
  // 本舗5ページ＋換気扇・キッチンセット、ダスキン sm000010/70/80/90/100、革命 /price/ を 2026-11-22 に再確認（brandPrices と全一致）。
  // saga: 「おそうじ本舗 店舗一覧」3@4.7・「クリーニング 佐賀」3@56.7。佐賀市7店（本舗5＝公式 41201 一覧と一致・ダスキン2＝公式 /store/saga/saga/ と一致）。各公式店舗ページ 2026-11-22 に 200。
  //   おそうじ革命 佐賀中央店（kakumei-saga_chuo）は公式店舗ページ 404・公式の佐賀県一覧（オブリ神埼店のみ）に無し → 店名の行には載せない（掲載から外すかは判断待ち）
  saga: { label: "佐賀市", duskinArea: "B", checked: "2026年11月22日", withCount: true,
    storesNote: "（おそうじ革命 佐賀中央店は公式の店舗ページが表示されず、公式の佐賀県の店舗一覧にも無いため、ここには載せていません・2026年11月22日確認）",
    note: <>「おそうじ本舗」の店舗を探している方へ: 佐賀県内の掲載は下の一覧、全国の店舗・本部の電話・よくある質問は<a href="/brand/osoujihonpo/" className="underline text-primary">おそうじ本舗の店舗一覧</a>にまとめています。</>,
    stores: [
  { name: "おそうじ本舗 佐賀北店", href: "/provider/honpo-16056/" },
  { name: "おそうじ本舗 佐賀西店", href: "/provider/honpo-20408/" },
  { name: "おそうじ本舗 佐賀兵庫店", href: "/provider/honpo-20821/" },
  { name: "おそうじ本舗 佐賀大前店", href: "/provider/honpo-20847/" },
  { name: "おそうじ本舗 佐賀南店", href: "/provider/honpo-21125/" },
  { name: "ダスキンオークスサービスマスター", href: "/provider/duskin-1920211/" },
  { name: "ダスキン 巨勢支店", href: "/provider/duskin-8000492/" },
  ] },
  // nagasaki: 「長崎 トイレコーティング」3@7.0・「お掃除本舗」3@6.7。長崎市8店（本舗6＝公式 42201 一覧の長崎市拠点6店と一致・ダスキン2＝公式 /store/nagasaki/nagasaki/ と一致）。各公式店舗ページ 2026-11-22 に 200。
  //   トイレのコーティング: 本舗 /house-cleaning/coating/toilet/・/house-cleaning/water/toilet/、ダスキン sm000100、革命 /price/ の 2026-11-22 生HTML の値
  nagasaki: { label: "長崎市", duskinArea: "B", checked: "2026年11月22日", withCount: true,
    note: <>トイレのコーティング（公式・税込・2026年11月22日確認）: おそうじ本舗「トイレリニューアルコーティング」16,500円／式（便器・タンク・約2.5時間。新築以外はトイレクリーニング 9,900円が別途）、トイレクリーニングのオプション「お手入れ簡単コーティング」5,500円（<a href="https://www.osoujihonpo.com/house-cleaning/coating/toilet/" target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）。ダスキン トイレクリーニング（10,340円）のオプション「汚れ防止コート（便器内部1台）」3,850円（<a href="https://www.duskin.jp/servicemaster/water/sm000100/" target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）。おそうじ革命 トイレ（8,250円）のオプション「便器内水垢防止コーティング」5,500円・「便器内水垢防止＋菌分解除去コーティング」15,950円（コーティング単品の注文は不可と公式に記載・<a href="https://www.osoujikakumei.jp/price/" target="_blank" rel="noopener noreferrer" className="underline text-primary">公式</a>）。「おそうじ本舗」の店舗を探している方へ: 長崎県内の掲載は下の一覧、全国の店舗・本部の電話・よくある質問は<a href="/brand/osoujihonpo/" className="underline text-primary">おそうじ本舗の店舗一覧</a>にまとめています。</>,
    stores: [
  { name: "おそうじ本舗 長崎平和町店", href: "/provider/honpo-11766/" },
  { name: "おそうじ本舗 長崎西店", href: "/provider/honpo-17765/" },
  { name: "おそうじ本舗 長崎桜町店", href: "/provider/honpo-19307/" },
  { name: "おそうじ本舗 長崎戸町店", href: "/provider/honpo-20034/" },
  { name: "おそうじ本舗 長崎出島店", href: "/provider/honpo-20499/" },
  { name: "おそうじ本舗 長崎滑石店", href: "/provider/honpo-21160/" },
  { name: "ダスキンオークス上野サービスマスター", href: "/provider/duskin-1930614/" },
  { name: "ダスキン 畝刈支店", href: "/provider/duskin-8000503/" },
  ] },
  // "hiroshima-ken": 「おそうじ本舗」8@10.0。本舗ハブへの導線は 11/05 から要点にあるので重複させない。県庁所在市の広島市は区別ページへの導線（areaMap の店数）、
  //   店名は福山市9店（本舗6＝公式 34207 一覧と一致・ダスキン2＝公式 /store/hiroshima/fukuyama/ と一致・革命1＝公式の広島県一覧にあり）。各公式店舗ページ 2026-11-22 に 200
  "hiroshima-ken": { label: "福山市", duskinArea: "B", checked: "2026年11月22日", withCount: true,
    cityWards: { label: "広島市", links: [
      { name: "中区", href: "/areas/hiroshima-naka/", count: 4 },
      { name: "東区", href: "/areas/hiroshima-higashi/", count: 1 },
      { name: "南区", href: "/areas/hiroshima-minami/", count: 3 },
      { name: "西区", href: "/areas/hiroshima-nishi/", count: 6 },
      { name: "安佐南区", href: "/areas/hiroshima-asaminami/", count: 6 },
      { name: "安佐北区", href: "/areas/hiroshima-asakita/", count: 3 },
      { name: "安芸区", href: "/areas/hiroshima-aki/", count: 2 },
      { name: "佐伯区", href: "/areas/hiroshima-saeki/", count: 3 },
    ], note: <>広島市全体の比較（区の記載のない店を含む33店）は<a href="/areas/hiroshima/" className="underline text-primary">広島市のハウスクリーニング</a>をご覧ください。</> },
    stores: [
  { name: "おそうじ本舗 福山駅家店", href: "/provider/honpo-13105/" },
  { name: "おそうじ本舗 福山駅前店", href: "/provider/honpo-15807/" },
  { name: "おそうじ本舗 福山松永店", href: "/provider/honpo-16851/" },
  { name: "おそうじ本舗 福山手城店", href: "/provider/honpo-18947/" },
  { name: "おそうじ本舗 福山神辺店", href: "/provider/honpo-20876/" },
  { name: "おそうじ本舗 福山沖野上店", href: "/provider/honpo-21071/" },
  { name: "ダスキンヘイセイサービスマスター", href: "/provider/duskin-1710775/" },
  { name: "ダスキン 南蔵王支店", href: "/provider/duskin-8001557/" },
  { name: "おそうじ革命 広島福山駅家店", href: "/provider/kakumei-hiroshima_fukuyamaekiya/" },
  ] },
  // 2026-11-21 16:00 遅れ挽回: 「宮城県 クリーニング」10@8.7・「エアコンクリーニング 宮城」6@10.2・「石巻 ハウスクリーニング」2@5.0（宮城県）。ダスキン ハウスワイドは宮城＝Bエリア（公式 sm000180・2026-11-21）。
  // 石巻市4店（本舗1＝公式 4202 一覧と一致・ダスキン3＝公式 /store/miyagi/ishinomaki/ の3店と店名一致＝公式一覧側は別の店舗番号）＋仙台市5区の区別ページ（areaMap の店数）。各公式店舗ページ 2026-11-21 に 200
  miyagi: { label: "石巻市", duskinArea: "B", checked: "2026年11月21日", withCount: true,
    cityWards: { label: "仙台市", links: [
      { name: "青葉区", href: "/areas/sendai-aoba/", count: 14 },
      { name: "宮城野区", href: "/areas/sendai-miyagino/", count: 6 },
      { name: "若林区", href: "/areas/sendai-wakabayashi/", count: 6 },
      { name: "太白区", href: "/areas/sendai-taihaku/", count: 10 },
      { name: "泉区", href: "/areas/sendai-izumi/", count: 8 },
    ], note: <>仙台市全体の比較は<a href="/areas/sendai/" className="underline text-primary">仙台市のハウスクリーニング</a>をご覧ください。</> },
    stores: [
  { name: "おそうじ本舗 石巻東店", href: "/provider/honpo-15706/" },
  { name: "ダスキンサカサービスマスター", href: "/provider/duskin-1231197/" },
  { name: "ダスキンクリーンサービスマスター", href: "/provider/duskin-1231208/" },
  { name: "ダスキン 日和支店", href: "/provider/duskin-8002539/" },
  ] },
  // 「草津市 ハウスクリーニング」7@9.9・「滋賀県 クリーニング」6@9.2（滋賀県）。ダスキン ハウスワイドは滋賀＝Aエリア（公式 sm000180・2026-11-21）。
  // 草津市5店（本舗3＝公式 25206 一覧と一致・ダスキン1＝公式 /store/shiga/kusatsu/ と一致・革命1）。各公式店舗ページ 2026-11-21 に 200
  shiga: { label: "草津市", duskinArea: "A", checked: "2026年11月21日", withCount: true, stores: [
  { name: "おそうじ本舗 南草津店", href: "/provider/honpo-11571/" },
  { name: "おそうじ本舗 東草津店", href: "/provider/honpo-15951/" },
  { name: "おそうじ本舗 草津野村店", href: "/provider/honpo-21086/" },
  { name: "ダスキン竹生サービスマスター", href: "/provider/duskin-1600158/" },
  { name: "おそうじ革命 草津青地店", href: "/provider/kakumei-kusatsu_aoji/" },
  ] },
  // 「布団 クリーニング 群馬」6@4.2 c1・「群馬県 クリーニング」3@14.3（群馬県）。ダスキン ハウスワイドは群馬＝Aエリア（公式 sm000180・2026-11-21）。
  // 前橋市13店（本舗7＝公式 10201 一覧と一致・ダスキン3＝公式 /store/gunma/maebashi/ の3店と店名一致・革命3）。各公式店舗ページ 2026-11-21 に 200。
  // 布団: 3ブランドの公式に布団クリーニングの料金なし（本舗はマットレス除菌、革命はベッドマットレスのメニューのみ）＝料金は書かず、無いことだけを書く
  gunma: { label: "前橋市", duskinArea: "A", checked: "2026年11月21日", withCount: true,
    note: <>布団（ふとん）のクリーニングについて: このページの3ブランドの公式サイトには、布団クリーニングのメニュー・料金の掲載がありません（2026年11月21日確認）。ベッドのマットレスは、おそうじ本舗の「マットレス除菌クリーニング」・おそうじ革命の「ベッドマットレスクリーニング」がメニューにあります（料金は各公式・見積もり）。布団の丸洗いは、布団クリーニング（宅配・店頭）の専門店に依頼してください。</>,
    stores: [
  { name: "おそうじ本舗 前橋大島駅前店", href: "/provider/honpo-16679/" },
  { name: "おそうじ本舗 前橋六供店", href: "/provider/honpo-17037/" },
  { name: "おそうじ本舗 新前橋店", href: "/provider/honpo-19222/" },
  { name: "おそうじ本舗 前橋赤坂店", href: "/provider/honpo-19701/" },
  { name: "おそうじ本舗 前橋総社店", href: "/provider/honpo-20667/" },
  { name: "おそうじ本舗 前橋三俣店", href: "/provider/honpo-21321/" },
  { name: "おそうじ本舗 前橋荒牧店", href: "/provider/honpo-21408/" },
  { name: "ダスキンセキグチ", href: "/provider/duskin-1320364/" },
  { name: "ダスキン利根サービスマスター", href: "/provider/duskin-1321174/" },
  { name: "ダスキン 上大島支店", href: "/provider/duskin-8000642/" },
  { name: "おそうじ革命 群馬前橋店", href: "/provider/kakumei-gunma_maebashi/" },
  { name: "おそうじ革命 群馬前橋亀泉店", href: "/provider/kakumei-gunma_maebashi_kameizumi/" },
  { name: "おそうじ革命 群馬前橋新前橋店", href: "/provider/kakumei-gumma_maebashi_shinmaebashi/" },
  ] },
  // 2026-11-19 16:00 遅れ挽回: 「鳥取県 クリーニング」9.3位（鳥取県）・「ハウスクリーニング 業者 一覧」22.1位（長野県）。同じ型で、ダスキン ハウスワイドは両県とも Bエリア（公式 sm000180・2026-11-19）。
  // 鳥取市3店（本舗1＝公式 31201 一覧と一致・ダスキン2＝公式 /store/tottori/tottori/ と一致）、長野市16店（本舗7＝公式 20201 一覧と一致・ダスキン7＝公式 /store/nagano/nagano/ と一致・革命2）。各公式店舗ページ 2026-11-19 に 200
  tottori: { label: "鳥取市", duskinArea: "B", checked: "2026年11月19日", stores: [
  { name: "おそうじ本舗 鳥取西店", href: "/provider/honpo-18492/" },
  { name: "ダスキン鳥取サービスマスター", href: "/provider/duskin-1720140/" },
  { name: "ダスキンいなばサービスマスター", href: "/provider/duskin-1720328/" },
  ] },
  "nagano-ken": { label: "長野市", duskinArea: "B", checked: "2026年11月19日", stores: [
  { name: "おそうじ本舗 川中島店", href: "/provider/honpo-13644/" },
  { name: "おそうじ本舗 長野稲田店", href: "/provider/honpo-16286/" },
  { name: "おそうじ本舗 南長野店", href: "/provider/honpo-17565/" },
  { name: "おそうじ本舗 長野柳原店", href: "/provider/honpo-18677/" },
  { name: "おそうじ本舗 長野高田店", href: "/provider/honpo-19793/" },
  { name: "おそうじ本舗 川中島今井店", href: "/provider/honpo-21316/" },
  { name: "おそうじ本舗 長野豊野店", href: "/provider/honpo-21364/" },
  { name: "ダスキンサービスマスター第一クリーン店", href: "/provider/duskin-1510321/" },
  { name: "ダスキンビホームサービスマスター", href: "/provider/duskin-1510454/" },
  { name: "ダスキンサービスマスタースィンセリティ", href: "/provider/duskin-1510765/" },
  { name: "ダスキンイチバン サービスマスター", href: "/provider/duskin-1511092/" },
  { name: "ダスキン川中島サービスマスター", href: "/provider/duskin-1511519/" },
  { name: "ダスキン長池サービスマスター", href: "/provider/duskin-1511553/" },
  { name: "ダスキン 大豆島支店", href: "/provider/duskin-8000197/" },
  { name: "おそうじ革命 長野朝陽店", href: "/provider/kakumei-nagano_asahi/" },
  { name: "おそうじ革命 長野丹波島店", href: "/provider/kakumei-nagano_tanbajima/" },
  ] },
  nara: { label: "奈良市", duskinArea: "A", stores: [
  { name: "おそうじ本舗 奈良西大寺店", href: "/provider/honpo-18642/" },
  { name: "おそうじ本舗 奈良西店", href: "/provider/honpo-11161/" },
  { name: "おそうじ本舗 奈良北町店", href: "/provider/honpo-15388/" },
  { name: "おそうじ本舗 奈良富雄店", href: "/provider/honpo-20009/" },
  { name: "ダスキン南都サービスマスター", href: "/provider/duskin-1620154/" },
  { name: "ダスキンあやめ池サービスマスター", href: "/provider/duskin-1620215/" },
  { name: "ダスキン奈良サービスマスター", href: "/provider/duskin-1620471/" },
  { name: "ダスキン富雄元町サービスマスター", href: "/provider/duskin-1620859/" },
  { name: "ダスキン 菅原支店", href: "/provider/duskin-8003238/" },
  { name: "ダスキン 北之庄支店", href: "/provider/duskin-8003850/" },
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
  // 2026-11-21 16:00 遅れ挽回: 冒頭に大手3社の料金を置いた3県だけ title・description を答えに合わせる（11/20 札幌市と同じ型。他の県は不変）
  // 2026-11-22 16:00 遅れ挽回: 佐賀県・長崎県・広島県を同じ型に追加（description の確認日は各県の checked＝既存3県は 11/21 のまま）
  const priced = ["miyagi", "shiga", "gunma", "saga", "nagasaki", "hiroshima-ken"].includes(pref);
  return withPageSocial({
    title: priced ? `${prefJa}のハウスクリーニング業者おすすめ比較｜大手3社の料金・${count}店舗` : `${prefJa}のハウスクリーニング業者一覧（${count}店舗）｜店舗データベース`,
    description: priced
      ? `${prefJa}のハウスクリーニング${count}店舗を比較。エアコンクリーニングの公式標準料金はおそうじ本舗 14,300円・ダスキン 15,400円・おそうじ革命 9,980円（税込・${CAPITAL_HOUSE_STORES[pref]?.checked ?? "2026年11月21日"}確認）。浴室・キッチンの料金と店舗の電話・営業時間も掲載。`
      : `${prefJa}のハウスクリーニング業者${count}店舗を掲載しています。おそうじ本舗・ダスキン・おそうじ革命など、各ブランド公式サイトで所在を確認した店舗のみを、確認日を明記して掲載しています。`,
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
          checked={CAPITAL_STORES[pref].checked ?? "2026年11月17日"}
          stores={CAPITAL_STORES[pref].stores}
          storesLabel={CAPITAL_STORES[pref].label}
          storesMore={CAPITAL_STORES[pref].more}
        />
      )}
      {CAPITAL_HOUSE_STORES[pref] && (
        <OosoujiPriceAnswer
          areaLabel={prefJa}
          checked={CAPITAL_HOUSE_STORES[pref].checked ?? "2026年11月18日"}
          duskinArea={CAPITAL_HOUSE_STORES[pref].duskinArea}
          duskinAreaLabel={prefJa}
          stores={CAPITAL_HOUSE_STORES[pref].stores}
          storesLabel={CAPITAL_HOUSE_STORES[pref].label}
          storesMore={{ name: `このページ下の一覧（${prefJa}内${list.filter((p) => p.pref_ja === prefJa).length}店）`, href: "#stores" }}
          cityWards={CAPITAL_HOUSE_STORES[pref].cityWards}
          storesNote={CAPITAL_HOUSE_STORES[pref].storesNote}
          storeCount={CAPITAL_HOUSE_STORES[pref].withCount ? {
            honpo: list.filter((p) => p.pref_ja === prefJa && p.brand === "honpo").length,
            duskin: list.filter((p) => p.pref_ja === prefJa && p.brand === "duskin").length,
            kakumei: list.filter((p) => p.pref_ja === prefJa && p.brand === "kakumei").length,
          } : undefined}
        />
      )}
      {CAPITAL_HOUSE_STORES[pref]?.note && (
        <section className="container mx-auto px-4 max-w-5xl pt-4">
          <p className="text-sm text-gray-700">{CAPITAL_HOUSE_STORES[pref].note}</p>
        </section>
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
