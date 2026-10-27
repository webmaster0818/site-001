// 店舗ページ（provider/[slug]）の個別追記。テンプレ全体（3,525頁）は変えず、GSC で表示の多い店舗だけに
// 公式店舗ページで確認した要点を足す（2026-10-27 16:00 遅れ挽回ルーチン）。
// - titleOverride/descriptionOverride: その店舗だけ title・description を差し替える（provider の title 前回変更は 10/19）
// - leadRows: h1 直下の「要点」（すべて公式店舗ページ・公式料金ページの記載。確認日つき）
// - hubNote: ブランド名だけの検索（「おそうじ革命」等）で店舗ページが出ているもの → ブランドの店舗一覧（主ページ）への導線と役割の説明

export type ProviderExtra = {
  titleOverride?: string;
  descriptionOverride?: string;
  leadTitle?: string;
  leadRows?: [label: string, value: string][];
  priceRows?: [label: string, price: string][];
  priceSource?: { label: string; url: string }[];
  hubNote?: string;
  checkedAt: string;
};

const KAKUMEI_PRICE_ROWS: [string, string][] = [
  ["エアコン（壁掛け・お掃除機能なし）", "9,980円"],
  ["エアコン（壁掛け・お掃除機能付き）", "18,700円"],
  ["キッチン", "17,930円"],
  ["レンジフード", "17,930円"],
  ["浴室", "17,930円"],
  ["トイレ", "8,250円"],
  ["洗面所", "8,250円"],
];

const KAKUMEI_HUB_NOTE =
  "「おそうじ革命」のブランド全体（全国一律の料金・都道府県別の全店舗）は、おそうじ革命の店舗一覧ページにまとめています。このページは1店舗の所在地・公式の対応エリアを確認するためのページです。";

export const PROVIDER_EXTRAS: Record<string, ProviderExtra> = {
  "kakumei-tokorozawa_seibuenmae": {
    titleOverride:
      "おそうじ革命 所沢西武園前店（所沢市）エアコンクリーニング・ハウスクリーニングの料金・予約方法",
    descriptionOverride:
      "おそうじ革命 所沢西武園前店（所沢市荒幡）の料金・予約方法・対応エリアを公式店舗ページで確認してまとめています。エアコンクリーニング 9,980円〜（お掃除機能付き 18,700円）、キッチン・浴室 17,930円（税込・全国一律）。予約は電話 0120-641-468 または公式フォーム。",
    leadTitle: "所沢西武園前店の要点（公式店舗ページ 2026-10-27 確認）",
    leadRows: [
      ["所在地", "埼玉県所沢市荒幡689-5"],
      ["対応エリア", "所沢市・さいたま市10区・川越市など埼玉県32市区町、東京都23区の6区（中野・杉並・豊島・北・板橋・練馬）と八王子市・立川市など多摩27市町、川崎市北部5区（公式記載の70市区町村。エリア外も相談可と記載）"],
      ["予約方法", "電話 0120-641-468 または公式サイトの見積もりフォーム → 料金の案内（必要なら無料の訪問見積り）→ 見積もりに納得したら予約確定。公式に「事前に料金を提示し、あとから追加費用は発生しない」と記載"],
      ["支払い方法", "現金・銀行振込・クレジットカード（VISA・Master・JCB・AMEX等）・電子マネー/QR（PayPay・楽天ペイ・交通系等）"],
      ["作業時間帯", "早朝作業・夜間作業に対応（公式の対応サービス欄）"],
      ["公式の総合評価", "4.7（掲載7件・利用者アンケートの5段階評価。公式は直近90日以内の声を最大100件掲載）"],
    ],
    priceRows: KAKUMEI_PRICE_ROWS,
    priceSource: [
      { label: "所沢西武園前店 公式店舗ページ", url: "https://www.osoujikakumei.jp/tokorozawa_seibuenmae/" },
      { label: "おそうじ革命 料金（全国一律価格）", url: "https://www.osoujikakumei.jp/price/" },
    ],
    hubNote: KAKUMEI_HUB_NOTE,
    checkedAt: "2026-10-27",
  },
  "kakumei-aichi_owari_asahi": {
    leadTitle: "愛知尾張旭店の要点（公式店舗ページ 2026-10-27 確認）",
    leadRows: [
      ["所在地", "愛知県尾張旭市城山町城山1-1"],
      ["対応エリア", "名古屋市16区すべてと尾張旭市・瀬戸市・春日井市・豊田市など、公式記載の39市区町村"],
      ["公式の総合評価", "5.0（掲載6件・利用者アンケートの5段階評価）"],
    ],
    priceRows: KAKUMEI_PRICE_ROWS,
    priceSource: [
      { label: "愛知尾張旭店 公式店舗ページ", url: "https://www.osoujikakumei.jp/aichi_owari_asahi/" },
      { label: "おそうじ革命 料金（全国一律価格）", url: "https://www.osoujikakumei.jp/price/" },
    ],
    hubNote: KAKUMEI_HUB_NOTE,
    checkedAt: "2026-10-27",
  },
  "kakumei-chiba_kisarazu": {
    leadTitle: "千葉木更津店の要点（公式店舗ページ 2026-10-27 確認）",
    leadRows: [
      ["所在地", "千葉県木更津市江川940-5"],
      ["対応エリア", "木更津市・君津市・富津市・袖ケ浦市・市原市・千葉市中央区など房総中南部の、公式記載の34市区町村"],
      ["公式の総合評価", "公式店舗ページに総合評価の表示なし（2026-10-27）"],
    ],
    priceRows: KAKUMEI_PRICE_ROWS,
    priceSource: [
      { label: "千葉木更津店 公式店舗ページ", url: "https://www.osoujikakumei.jp/chiba_kisarazu/" },
      { label: "おそうじ革命 料金（全国一律価格）", url: "https://www.osoujikakumei.jp/price/" },
    ],
    hubNote: KAKUMEI_HUB_NOTE,
    checkedAt: "2026-10-27",
  },
  "kakumei-chitose_eniwa": {
    leadTitle: "千歳恵庭店の要点（公式店舗ページ 2026-10-27 確認）",
    leadRows: [
      ["所在地", "北海道千歳市信濃4-21-8 シャトン202"],
      ["対応エリア", "札幌市10区すべてと千歳市・恵庭市・北広島市・苫小牧市・江別市など、公式記載の19市区町"],
      ["公式の総合評価", "公式店舗ページに総合評価の表示なし（2026-10-27）"],
    ],
    priceRows: KAKUMEI_PRICE_ROWS,
    priceSource: [
      { label: "千歳恵庭店 公式店舗ページ", url: "https://www.osoujikakumei.jp/chitose_eniwa/" },
      { label: "おそうじ革命 料金（全国一律価格）", url: "https://www.osoujikakumei.jp/price/" },
    ],
    hubNote: KAKUMEI_HUB_NOTE,
    checkedAt: "2026-10-27",
  },
};
