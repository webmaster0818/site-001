// ブランド公式の標準料金（各ブランド公式のサービスページを当日開いて確認した税込の通常価格。キャンペーン価格は載せない）。
// 2026-10-19 provider/[slug] に新設 → 2026-10-26 ブランドハブ・エリアページでも使うため共通化し、全行を公式で再確認（ダスキンのキッチンを追加）。
// 店舗ごとの料金は公式店舗ページに記載がないため、ブランド共通の標準料金として出典・確認日とともに出す。
export const BRAND_PRICE_CHECKED = "2026-10-26";

export type BrandPriceRow = [label: string, price: string, sourceUrl: string];

export const BRAND_PRICES: Record<string, { rows: BrandPriceRow[]; notes: string[] }> = {
  honpo: {
    rows: [
      ["エアコン（壁掛け・お掃除機能なし）", "13,200円／台", "https://www.osoujihonpo.com/house-cleaning/aircon/wall/"],
      ["エアコン（壁掛け・お掃除機能付き）", "23,100円／台", "https://www.osoujihonpo.com/house-cleaning/aircon/wall/"],
      ["レンジフード・換気扇", "18,700円／式", "https://www.osoujihonpo.com/house-cleaning/kitchen/fan/"],
      ["キッチン", "18,700円／式", "https://www.osoujihonpo.com/house-cleaning/kitchen/kitchen/"],
      ["風呂・浴室", "18,700円／式", "https://www.osoujihonpo.com/house-cleaning/water/bathroom/"],
      ["トイレ", "9,900円／式", "https://www.osoujihonpo.com/house-cleaning/water/toilet/"],
    ],
    notes: [
      "公式サイトの通常価格（税込）です。期間限定のキャンペーン価格は掲載していません。",
      "公式サイトには「サービス内容と価格は予告無く変更する場合がございます」と記載されています。強い汚れ・追加範囲・オプションは別料金です。",
    ],
  },
  duskin: {
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

// エリアページ冒頭の「要点」で使う、箇所別の比較（大手2ブランドの公式標準料金）。
export const AREA_PRICE_COMPARE: { label: string; service: string; honpo: BrandPriceRow; duskin: BrandPriceRow }[] = [
  { label: "エアコン（壁掛け・お掃除機能なし）", service: "/services/aircon/", honpo: BRAND_PRICES.honpo.rows[0], duskin: BRAND_PRICES.duskin.rows[0] },
  { label: "キッチン", service: "/services/kitchen/", honpo: BRAND_PRICES.honpo.rows[3], duskin: BRAND_PRICES.duskin.rows[3] },
  { label: "浴室", service: "/services/bathroom/", honpo: BRAND_PRICES.honpo.rows[4], duskin: BRAND_PRICES.duskin.rows[4] },
  { label: "トイレ", service: "", honpo: BRAND_PRICES.honpo.rows[5], duskin: BRAND_PRICES.duskin.rows[5] },
];
