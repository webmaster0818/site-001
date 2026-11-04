// ブランド公式の標準料金（各ブランド公式のサービスページを当日開いて確認した税込の通常価格。キャンペーン価格は載せない）。
// 2026-10-19 provider/[slug] に新設 → 2026-10-26 ブランドハブ・エリアページでも使うため共通化し、全行を公式で再確認（ダスキンのキッチンを追加）。
// 店舗ごとの料金は公式店舗ページに記載がないため、ブランド共通の標準料金として出典・確認日とともに出す。
// エリアページの比較表（本舗・ダスキン）の確認日。2026-11-04 に両ブランドの公式を再確認（本舗は値上げを反映、ダスキンは全行一致）
export const BRAND_PRICE_CHECKED = "2026-11-04";

export type BrandPriceRow = [label: string, price: string, sourceUrl: string];

export const BRAND_PRICES: Record<string, { checkedAt: string; rows: BrandPriceRow[]; notes: string[] }> = {
  honpo: {
    checkedAt: "2026-11-04",
    rows: [
      ["エアコン（壁掛け・お掃除機能なし）", "14,300円／台（2台以上の注文は12,100円／台）", "https://www.osoujihonpo.com/house-cleaning/aircon/wall/"],
      ["エアコン（壁掛け・お掃除機能付き）", "24,200円／台（2台以上の注文は22,000円／台）", "https://www.osoujihonpo.com/house-cleaning/aircon/wall/"],
      ["レンジフード・換気扇", "19,800円／式", "https://www.osoujihonpo.com/house-cleaning/kitchen/fan/"],
      ["キッチン", "19,800円／式", "https://www.osoujihonpo.com/house-cleaning/kitchen/kitchen/"],
      ["風呂・浴室", "19,800円／式", "https://www.osoujihonpo.com/house-cleaning/water/bathroom/"],
      ["トイレ", "9,900円／式", "https://www.osoujihonpo.com/house-cleaning/water/toilet/"],
    ],
    notes: [
      "公式サイトの通常価格（税込）です。期間限定のキャンペーン価格は掲載していません。",
      "公式サイトには「サービス内容と価格は予告無く変更する場合がございます」と記載されています。強い汚れ・追加範囲・オプションは別料金です。",
    ],
  },
  duskin: {
    checkedAt: "2026-10-26", // 店舗ページの再生成を避けるため表示日は据え置き（2026-11-04 の再確認でも全行一致）
    rows: [
      ["エアコン（家庭用壁掛け・幅120cm未満）", "15,400円／1台", "https://www.duskin.jp/servicemaster/spot/sm000010/"],
      ["エアコン（フィルター自動お掃除機能付き）", "26,400円／1台", "https://www.duskin.jp/servicemaster/spot/sm000010/"],
      ["レンジフード（幅95cm未満）", "22,000円", "https://www.duskin.jp/servicemaster/water/sm000070/"],
      ["キッチン（間口3m未満）", "20,680円", "https://www.duskin.jp/servicemaster/water/sm000080/"],
      ["浴室（床面積3m²・高さ2.4m未満）", "22,000円", "https://www.duskin.jp/servicemaster/water/sm000090/"],
      ["トイレ（床面積2m²未満）", "10,340円", "https://www.duskin.jp/servicemaster/water/sm000100/"],
      ["縦型全自動洗濯機 除菌クリーニング", "15,400円", "https://www.duskin.jp/servicemaster/water/sm000170/"],
    ],
    notes: [
      "ダスキン公式の標準料金（税込）です。店舗ページにも同じ標準料金が掲載されています。",
      "公式サイトには「土日・祝日・その他の休業日及び夜間の作業は、お受けできない場合や標準料金に加えて追加の費用が発生する場合があります」「サービスは1回あたり11,000円（税込）以上で承ります。この料金は加盟店によって異なる場合があります」と記載されています。",
    ],
  },
};

// おそうじ革命のブランドハブ専用（2026-11-04 公式 /price/ 確認）。BRAND_PRICES に入れると provider 452頁の title・料金表まで変わるので分けている
const KAKUMEI_PRICE_URL = "https://www.osoujikakumei.jp/price/";
export const KAKUMEI_HUB_PRICES: { checkedAt: string; rows: BrandPriceRow[]; notes: string[] } = {
  checkedAt: "2026-11-04",
  rows: [
    ["エアコン（壁掛け・お掃除機能なし）", "9,980円／台", KAKUMEI_PRICE_URL],
    ["エアコン（壁掛け・お掃除機能付き）", "18,700円／台", KAKUMEI_PRICE_URL],
    ["レンジフード", "17,930円", KAKUMEI_PRICE_URL],
    ["キッチン", "17,930円", KAKUMEI_PRICE_URL],
    ["浴室", "17,930円", KAKUMEI_PRICE_URL],
    ["トイレ", "8,250円", KAKUMEI_PRICE_URL],
    ["洗面所", "8,250円", KAKUMEI_PRICE_URL],
    ["水回りセット", "2点 32,890円／3点 45,980円／4点 57,970円", KAKUMEI_PRICE_URL],
  ],
  notes: [
    "公式の料金ページには「全国一律価格：どの地域でも同じ料金」「事前に料金を提示し、あとから追加費用が発生することはありません」と記載されています。",
    "オプション（コーティング等）は別料金です。対応メニューは店舗により異なることがあります。",
  ],
};

// エリアページ冒頭の「要点」で使う、箇所別の比較（大手2ブランドの公式標準料金）。
export const AREA_PRICE_COMPARE: { label: string; service: string; honpo: BrandPriceRow; duskin: BrandPriceRow }[] = [
  { label: "エアコン（壁掛け・お掃除機能なし）", service: "/services/aircon/", honpo: BRAND_PRICES.honpo.rows[0], duskin: BRAND_PRICES.duskin.rows[0] },
  { label: "キッチン", service: "/services/kitchen/", honpo: BRAND_PRICES.honpo.rows[3], duskin: BRAND_PRICES.duskin.rows[3] },
  { label: "浴室", service: "/services/bathroom/", honpo: BRAND_PRICES.honpo.rows[4], duskin: BRAND_PRICES.duskin.rows[4] },
  { label: "トイレ", service: "", honpo: BRAND_PRICES.honpo.rows[5], duskin: BRAND_PRICES.duskin.rows[5] },
];
