// 「自分で掃除する」段階の検索語に答えるガイド（/guide-detail/<slug>/）。2026-11-19 新設（kwexp・競合 ouchipro.com の棚卸しから）。
// 事実はメーカー・公的機関・業者の公式ページを当日開いて確認したものだけ。各ページに「業者に依頼する目安」と業者の公式料金を必ず置く。

export type GuideBlock =
  | string
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][]; note?: string } };

export type DiyGuide = {
  slug: string;
  kw: string;
  title: string;
  description: string;
  h1: string;
  publishedAt: string;
  checkedAt: string;
  answer: string[];
  sections: { h2: string; blocks: GuideBlock[] }[];
  whenPro: string[];
  priceHeading: string;
  priceLead: string;
  prices: { brand: string; menu: string; price: string; src: string }[];
  ctaText: string;
  cta: { href: string; label: string }[];
  faq: { q: string; a: string }[];
  sources: { name: string; url: string }[];
  related: string[];
};

const D = "2026-11-19";
const D2 = "2026-11-20";

// 業者の公式料金（2026-11-19 確認）
const HONPO_AC = "https://www.osoujihonpo.com/house-cleaning/aircon/wall/";
const DUSKIN_AC = "https://www.duskin.jp/servicemaster/spot/sm000010/";
const KAKUMEI_PRICE = "https://www.osoujikakumei.jp/price/";
const HONPO_WASHER_TOP = "https://www.osoujihonpo.com/house-cleaning/washer/top/";
const HONPO_WASHER_FRONT = "https://www.osoujihonpo.com/house-cleaning/washer/front/";
const DUSKIN_WASHER = "https://www.duskin.jp/servicemaster/water/sm000170/";

const AIRCON_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "壁掛けエアコン（お掃除機能なし）", price: "14,300円／台（2台以上の注文は12,100円／台）", src: HONPO_AC },
  { brand: "おそうじ本舗", menu: "完全分解洗浄（ドレンパン・送風ファンを外して洗浄するオプション）", price: "＋8,800円／台", src: HONPO_AC },
  { brand: "ダスキン", menu: "家庭用壁掛けエアコン（1台）", price: "15,400円", src: DUSKIN_AC },
  { brand: "ダスキン", menu: "フィルター自動お掃除機能付きエアコン（1台）", price: "26,400円", src: DUSKIN_AC },
  { brand: "おそうじ革命", menu: "壁掛け（お掃除機能なし）／お掃除機能付き", price: "9,980円／18,700円", src: KAKUMEI_PRICE },
];

const AIRCON_CTA: DiyGuide["cta"] = [
  { href: "/services/aircon/", label: "エアコンクリーニング業者を探す" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
  { href: "/ranking/aircon-ranking/", label: "大手の料金を比較する" },
];

const WASHER_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "縦型洗濯機クリーニング（分解を伴わない洗浄）", price: "12,100円／台", src: HONPO_WASHER_TOP },
  { brand: "おそうじ本舗", menu: "縦型の完全分解洗浄オプション", price: "＋11,000円／台", src: HONPO_WASHER_TOP },
  { brand: "おそうじ本舗", menu: "ドラム式洗濯機クリーニング（分解を伴わない洗浄）", price: "18,700円／台", src: HONPO_WASHER_FRONT },
  { brand: "おそうじ本舗", menu: "洗濯パン（洗濯機を移動させて排水口まわりも含めて洗浄するオプション）", price: "＋2,200円／式", src: HONPO_WASHER_TOP },
  { brand: "ダスキン", menu: "縦型全自動洗濯機除菌クリーニング", price: "15,400円", src: DUSKIN_WASHER },
  { brand: "ダスキン", menu: "ドラム式洗濯乾燥機除菌クリーニング", price: "22,000円", src: DUSKIN_WASHER },
];

const WASHER_CTA: DiyGuide["cta"] = [
  { href: "/services-detail/washing-machine/", label: "洗濯機クリーニングの内容を見る" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
];

const SRC = {
  hitachiCare: { name: "日立の家電品「エアコンをお手入れしたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-36.html" },
  hitachiFilter: { name: "日立の家電品「エアフィルターのお手入れ方法を知りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-91.html" },
  hitachiSpray: { name: "日立の家電品「市販の洗浄スプレーでエアコンのお手入れはできますか？」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-25.html" },
  hitachiClean: { name: "日立の家電品「エアコンクリーニング（内部洗浄）をしたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-26.html" },
  hitachiFan: { name: "日立の家電品「室内機のファンの汚れを取りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-33.html" },
  hitachiLeak: { name: "日立の家電品「エアコン（室内機）から水が漏れています。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-130.html" },
  hitachiSplash: { name: "日立の家電品「エアコン（室内機）から水が飛んできます。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-22.html" },
  hitachiSmell: { name: "日立の家電品「エアコン（室内機）のにおいが気になります。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/a11.html" },
  daikinCare: { name: "ダイキン CLUB DAIKIN「自分でできるエアコンクリーニングの範囲は？やってはいけないクリーニング方法もご紹介」", url: "https://www.ac.daikin.co.jp/clubdaikin/useful/aircon_care" },
  daikinFilter: { name: "ダイキン CLUB DAIKIN「シーズンの合間、今のうちにエアコンのお掃除を！」", url: "https://www.ac.daikin.co.jp/clubdaikin/useful/aircon_clean" },
  daikinNotice: { name: "ダイキン工業「エアコンのクリーニングをおこなわれたお客様へのご注意とお願い」（2015年7月30日）", url: "https://www.daikin.co.jp/taisetsu/2015/150730" },
  daikinFN: { name: "ダイキン工業「ルームエアコン 2023、2024、2025年モデルFNシリーズご愛用のお客様へのお詫びと無償点検・修理のお願い」（2025年11月28日）", url: "https://www.daikin.co.jp/taisetsu/2025/251128-TEXT" },
  sharpFilter: { name: "シャープ「エアコン お手入れ（エアーフィルター）」", url: "https://jp.sharp/support/advice/air_con/care_a2.html" },
  sharpSpray: { name: "シャープ「市販洗浄スプレーの使用について」", url: "https://jp.sharp/support/advice/air_con/care_a3.html" },
  sharpDeodorant: { name: "シャープ「消臭剤スプレーを使えますか？」", url: "https://jp.sharp/support/advice/air_con/care_a4.html" },
  sharpInner: { name: "シャープ「カビの増殖やにおいの抑制に『内部清浄』運転のおすすめ」", url: "https://jp.sharp/support/advice/air_con/care_b3.html" },
  nite: { name: "NITE（製品評価技術基盤機構）「エアコンの内部洗浄による事故に注意」（2020年6月25日）", url: "https://www.nite.go.jp/data/000111239.pdf" },
  hitachiNotCool: { name: "日立の家電品「よく冷えない／冷たい風が出てきません。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-19.html" },
  hitachiSudden: { name: "日立の家電品「急に冷えや暖まりが悪くなりました/急に音がうるさくなりました。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-166.html" },
  hitachiOutdoor: { name: "日立の家電品「室外機のお手入れ方法を知りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-120.html" },
  hitachiBlack: { name: "日立の家電品「エアコンの内部に黒い汚れがあります。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-41.html" },
  hitachiYear: { name: "日立の家電品「エアコンの製造年と発売年を確認する方法を知りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-63.html" },
  daikinLife: { name: "ダイキン工業 購入相談窓口「エアコンの買替えと修理 どちらがいいの？寿命は何年？」", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/7" },
  cao: { name: "内閣府 経済社会総合研究所「消費動向調査」（令和8年3月実施調査結果・報告書PDF）", url: "https://www.esri.cao.go.jp/jp/stat/shouhi/honbun202603.pdf" },
  toshibaParts: { name: "東芝ライフスタイル「補修用性能部品の保有期間について」", url: "https://www.toshiba-lifestyle.com/jp/support/partslimit/" },
  sharpParts: { name: "シャープ「補修用性能部品の保有期間」", url: "https://jp.sharp/support/safety/repairparts.html" },
};

const SRC_AC_PRICES = [
  { name: "おそうじ本舗 壁掛けエアコンクリーニング", url: HONPO_AC },
  { name: "ダスキン エアコンクリーニング", url: DUSKIN_AC },
  { name: "おそうじ革命 料金", url: KAKUMEI_PRICE },
];

// 室外機の洗浄（エアコンクリーニングのオプション）2026-11-20 確認
const OUTDOOR_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "室外機（壁掛けエアコンクリーニングと併用で注文。天吊り・屋根置きは対応不可）", price: "＋5,500円／台", src: HONPO_AC },
  { brand: "ダスキン", menu: "室外機クリーニング（エアコンクリーニングのオプション。業務用の室外機は対象外）", price: "＋6,600円", src: DUSKIN_AC },
  { brand: "おそうじ革命", menu: "室外機／大型室外機（オプションサービス。天井吊り下げ型は対応できない場合あり）", price: "＋3,300円／＋9,900円", src: KAKUMEI_PRICE },
  { brand: "おそうじ本舗", menu: "壁掛けエアコン（お掃除機能なし）本体", price: "14,300円／台（2台以上の注文は12,100円／台）", src: HONPO_AC },
  { brand: "ダスキン", menu: "家庭用壁掛けエアコン（1台）本体", price: "15,400円", src: DUSKIN_AC },
  { brand: "おそうじ革命", menu: "壁掛け（お掃除機能なし）本体", price: "9,980円", src: KAKUMEI_PRICE },
];

// 2026-11-20 深夜04時の回で追加（キッチン・トイレ・浴室・壁紙・ダイキン）。料金は各社公式ページを 2026-11-20 に確認。
const HONPO_KITCHEN = "https://www.osoujihonpo.com/house-cleaning/kitchen/kitchen/";
const DUSKIN_KITCHEN = "https://www.duskin.jp/servicemaster/water/sm000080/";
const HONPO_TOILET = "https://www.osoujihonpo.com/house-cleaning/water/toilet/";
const DUSKIN_TOILET = "https://www.duskin.jp/servicemaster/water/sm000100/";
const HONPO_BATH = "https://www.osoujihonpo.com/house-cleaning/water/bathroom/";
const DUSKIN_BATH = "https://www.duskin.jp/servicemaster/water/sm000090/";
const HONPO_CLOTH = "https://www.osoujihonpo.com/house-cleaning/room/cloth/";
const HONPO_DYEING = "https://www.osoujihonpo.com/house-cleaning/room/wallpaper-dyeing/";

const KITCHEN_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "キッチンクリーニング（ガス台またはIH・五徳・グリル〔扉・焼網・皿のみ〕・シンク・蛇口などを含む。約2.5時間）", price: "19,800円／式", src: HONPO_KITCHEN },
  { brand: "ダスキン", menu: "キッチン1ヵ所（間口3m未満）", price: "20,680円", src: DUSKIN_KITCHEN },
  { brand: "ダスキン", menu: "魚焼きグリルクリーニング（皿・網のみ。オプション）", price: "＋2,530円", src: DUSKIN_KITCHEN },
  { brand: "おそうじ革命", menu: "キッチン（ガス台・魚焼きグリルの引き出し・受け皿・網を含む）", price: "17,930円", src: KAKUMEI_PRICE },
];

const TOILET_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "トイレクリーニング（便器・便座・床・壁面など。約1.5時間）", price: "9,900円／式", src: HONPO_TOILET },
  { brand: "おそうじ本舗", menu: "便器追加", price: "＋5,500円／基", src: HONPO_TOILET },
  { brand: "ダスキン", menu: "トイレ1室（床面積2m²未満）", price: "10,340円", src: DUSKIN_TOILET },
  { brand: "ダスキン", menu: "トイレロータンク内除菌クリーニング（オプション）", price: "＋4,400円", src: DUSKIN_TOILET },
  { brand: "おそうじ革命", menu: "トイレ", price: "8,250円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "タンク内清掃（オプション）", price: "＋3,850円", src: KAKUMEI_PRICE },
];

const BATH_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "風呂・浴室クリーニング（浴槽・壁面・床・天井など。約2時間）", price: "19,800円／式", src: HONPO_BATH },
  { brand: "おそうじ本舗", menu: "お手入れ簡単コーティング（オプション）", price: "＋9,900円／式", src: HONPO_BATH },
  { brand: "ダスキン", menu: "浴室1室（床面積3m²・高さ2.4m未満）", price: "22,000円", src: DUSKIN_BATH },
  { brand: "ダスキン", menu: "カビ防止コート（床面積3m²未満・高さ2.4m未満。オプション）", price: "＋5,060円", src: DUSKIN_BATH },
  { brand: "おそうじ革命", menu: "浴室", price: "17,930円", src: KAKUMEI_PRICE },
];

const WALLPAPER_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "壁紙クリーニング（20㎡以下一律。20㎡を超える場合は別途見積もり）", price: "11,000円／式", src: HONPO_CLOTH },
  { brand: "おそうじ本舗", menu: "壁紙染色（20㎡以下一律・天井を除く壁面のみ）", price: "22,000円／式（20㎡を超える場合は1,100円〜／㎡）", src: HONPO_DYEING },
  { brand: "おそうじ本舗", menu: "壁紙染色10㎡以下（トイレクリーニングのオプション）", price: "＋13,200円／式", src: HONPO_TOILET },
];

const DAIKIN_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "壁掛けエアコン（お掃除機能なし）", price: "14,300円／台（2台以上の注文は12,100円／台）", src: HONPO_AC },
  { brand: "おそうじ本舗", menu: "壁掛けエアコン（お掃除機能付き）", price: "24,200円／台（2台以上の注文は22,000円／台）", src: HONPO_AC },
  { brand: "おそうじ本舗", menu: "完全分解洗浄オプション（東芝・ダイキン製。対応できる店舗が限られ、事前の問い合わせが必要）", price: "＋12,100円／台（他メーカーは＋8,800円／台）", src: HONPO_AC },
  { brand: "ダスキン", menu: "家庭用壁掛けエアコン（1台）", price: "15,400円", src: DUSKIN_AC },
  { brand: "ダスキン", menu: "フィルター自動お掃除機能（サイドファン等の付加機能）付きエアコン（1台）", price: "26,400円", src: DUSKIN_AC },
  { brand: "おそうじ革命", menu: "壁掛け（お掃除機能なし）／お掃除機能付き", price: "9,980円／18,700円", src: KAKUMEI_PRICE },
];

const SRC2 = {
  rinnaiManual: { name: "リンナイ ビルトインコンロ取扱説明書 RRB71W15GV系「日常点検とお手入れ」（PDF）", url: "https://rinnai.jp/support/w15gv/pdf/rrb71w15_6.pdf" },
  palomaManual: { name: "パロマ ビルトインコンロ取扱説明書 PD-N34WV・PKD-N34WV・PKD-N34W（PDF）", url: "https://www.paloma.co.jp/downloads//%E7%9F%A5%E8%AD%98%E6%83%85%E5%A0%B1/%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8/48-25683-003-00.pdf" },
  daikinA2025: { name: "ダイキン工業「2025年モデル Aシリーズ 放電・洗浄」", url: "https://www.ac.daikin.co.jp/roomaircon/2025/products/a_series/kinou/osoji" },
  daikinD2025: { name: "ダイキン工業「2025年モデル Dシリーズ クリーン」", url: "https://www.ac.daikin.co.jp/roomaircon/2025/products/d_series/kinou/osoji" },
  daikinE: { name: "ダイキン工業「Eシリーズ クリーン」", url: "https://www.ac.daikin.co.jp/roomaircon/products/e_series/kinou/osoji" },
  daikinR: { name: "ダイキン工業「Rシリーズ『うるさらX』清潔」", url: "https://www.ac.daikin.co.jp/roomaircon/products/r_series/kinou/osoji" },
  lixilDetergent: { name: "LIXIL Q&A「トイレの便器・便座のお手入れに、酸性・アルカリ性の洗剤（塩素系など）を使用できますか？」", url: "https://faq.lixil.co.jp/%E3%83%88%E3%82%A4%E3%83%AC%E3%81%AE%E4%BE%BF%E5%99%A8%E3%83%BB%E4%BE%BF%E5%BA%A7%E3%81%AE%E3%81%8A%E6%89%8B%E5%85%A5%E3%82%8C%E3%81%AB%E3%80%81%E9%85%B8%E6%80%A7%E3%83%BB%E3%82%A2%E3%83%AB%E3%82%AB%E3%83%AA%E6%80%A7%E3%81%AE%E6%B4%97%E5%89%A4%EF%BC%88%E5%A1%A9%E7%B4%A0%E7%B3%BB%E3%81%AA%E3%81%A9%EF%BC%89%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B%EF%BC%9F-626cd6cfae8ef70023b684ab" },
  lixilShippu: { name: "LIXIL Q&A「トイレの輪ジミ・黒ずみを落とす『トイレットペーパー湿布法』」", url: "https://faq.lixil.co.jp/%E3%83%88%E3%82%A4%E3%83%AC%E3%81%AE%E8%BC%AA%E3%82%B8%E3%83%9F%E3%83%BB%E9%BB%92%E3%81%9A%E3%81%BF%E3%82%92%E8%90%BD%E3%81%A8%E3%81%99%E3%80%8C%E3%83%88%E3%82%A4%E3%83%AC%E3%83%83%E3%83%88%E3%83%9A%E3%83%BC%E3%83%91%E3%83%BC%E6%B9%BF%E5%B8%83%E6%B3%95%E3%80%8D-626cd6caef1f820021bd4c86" },
  lixilUrinal: { name: "LIXIL Q&A「小便器のガンコな汚れ・尿石を除去する方法」", url: "https://faq.lixil.co.jp/%E5%B0%8F%E4%BE%BF%E5%99%A8%E3%81%AE%E3%82%AC%E3%83%B3%E3%82%B3%E3%81%AA%E6%B1%9A%E3%82%8C%E3%83%BB%E5%B0%BF%E7%9F%B3%E3%82%92%E9%99%A4%E5%8E%BB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95-626cd6cbef1f820021bd4cbf" },
  totoToilet: { name: "TOTO「メンテナンススケジュール＜トイレ：組み合わせ便器、ウォシュレット（シートタイプ）＞」（PDF）", url: "https://jp.toto.com/assets/files/maintenance_toilet_02.pdf" },
  kokusen: { name: "国民生活センター「住宅用塩素系洗浄剤の使い方－まぜるな危険！浴室などで事故が発生しています－」（2026年3月18日）", url: "https://www.kokusen.go.jp/news/data/n-20260318_1.html" },
  tokyoDetergent: { name: "東京都保健医療局 くらしの安全シリーズ「住まいの洗浄剤正しく使って安全な暮らし」", url: "https://www.hokeniryo.metro.tokyo.lg.jp/anzen/iyaku/anzen/senjouzai.html" },
  totoFloor: { name: "TOTO「床のお手入れ」（浴室）", url: "https://jp.toto.com/support/maintenance/bath/wall/wallfloor/" },
  totoDirt: { name: "TOTO「汚れの基礎知識」（浴室）", url: "https://jp.toto.com/support/maintenance/bath/knowledge/mb_knowledge/" },
  lixilFloorDaily: { name: "LIXIL「床の日常のお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_06_daily.htm" },
  lixilFloorRegular: { name: "LIXIL「床の定期的なお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_06_regular.htm" },
  sangetsu: { name: "サンゲツ「壁紙のお手入れ方法」", url: "https://www.sangetsu.co.jp/style/wall_diagnosis.html" },
  lilyVinyl: { name: "リリカラ お手入れ便利帳「ビニル壁紙」", url: "https://www.lilycolor.co.jp/interior/mentenance/vinyl/index.html" },
  lilyPaper: { name: "リリカラ お手入れ便利帳「紙壁紙」", url: "https://www.lilycolor.co.jp/interior/mentenance/paper/index.html" },
};

// 2026-11-20 20:00 の回で追加（浴槽・オキシクリーン・洗濯槽・シンク・暖房）。料金・公式情報は 2026-11-20 に確認。
const BATHTUB_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "風呂・浴室クリーニング（浴槽・壁面・床・天井など。約2時間）", price: "19,800円／式", src: HONPO_BATH },
  { brand: "おそうじ本舗", menu: "エプロン内部洗浄（浴室エプロンを外して内部を洗浄するオプション）", price: "＋3,300円／式", src: HONPO_BATH },
  { brand: "おそうじ本舗", menu: "浴室（風呂釜）の追い焚き配管除菌クリーニング", price: "22,000円／式", src: HONPO_BATH },
  { brand: "ダスキン", menu: "浴室1室（床面積3m²・高さ2.4m未満）", price: "22,000円", src: DUSKIN_BATH },
  { brand: "ダスキン", menu: "浴槽エプロン内部クリーニング（浴室クリーニングとセットの場合）", price: "＋5,060円", src: DUSKIN_BATH },
  { brand: "ダスキン", menu: "浴槽追いだき配管内除菌クリーニング（オプション）", price: "＋6,600円", src: DUSKIN_BATH },
  { brand: "おそうじ革命", menu: "浴室", price: "17,930円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "エプロン内部清掃（オプション。エプロン外蓋の中に点検口があるタイプは点検口内部を除く）", price: "＋3,080円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "浴室追い焚き配管除菌洗浄（単品）", price: "18,700円", src: KAKUMEI_PRICE },
];

const BATH_CTA: DiyGuide["cta"] = [
  { href: "/services/bathroom/", label: "浴室クリーニング業者を探す" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
];

const SRC3 = {
  lixilTubDaily: { name: "LIXIL「浴槽の日常のお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_01_daily.htm" },
  lixilTubRegular: { name: "LIXIL「浴槽の定期的なお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_01_regular.htm" },
  lixilReheatPort: { name: "LIXIL「追いだき循環口のお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_03_daily.htm" },
  lixilUnderTub: { name: "LIXIL「浴槽下防水パンの定期的なお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_11_regular.htm" },
  lixilPipe: { name: "LIXIL Q&A「お風呂の追いだき釜内やジェットバスの内部配管をお手入れする方法」", url: "https://faq.lixil.co.jp/--626cd6cd40014a00231bd9b4" },
  lixilApron: { name: "LIXIL Q&A「ユニットバスの浴槽エプロン（側面カバー・外フタ）の取り外し、取り付け方法、お手入れ方法」", url: "https://faq.lixil.co.jp/--626cd6cfae8ef70023b684cf" },
  totoBath: { name: "TOTO「浴室のまるごとお掃除」", url: "https://jp.toto.com/support/maintenance/bath/" },
  totoHelp: { name: "TOTO「Help!こんなときは、どうしよう？」（浴室）", url: "https://jp.toto.com/support/maintenance/bath/help-time/" },
  hitachiEcoPipe: { name: "日立の家電品（エコキュート）「ふろ追いだき配管の洗浄方法を教えてください」", url: "https://kadenfan.hitachi.co.jp/support/kyutou/q_a/a19.html" },
  oxiBath: { name: "オキシクリーン日本公式サイト（株式会社グラフィコ）「お風呂場・洗面所の汚れ」", url: "https://www.oxicleanjapan.jp/how-to-remove-bathroom-washroom-dirt-with-oxiclean" },
  oxiDuke: { name: "オキシクリーン日本公式サイト「オキシ漬け」", url: "https://www.oxicleanjapan.jp/howtouse-oxiduke" },
  oxiProduct: { name: "オキシクリーン日本公式サイト「オキシクリーン」商品情報（成分・使用上の注意）", url: "https://www.oxicleanjapan.jp/oxiclean-standard" },
  oxiTub: { name: "オキシクリーン日本公式サイト「洗濯槽の汚れ」", url: "https://www.oxicleanjapan.jp/how-to-remove-dirty-washing-tub-with-oxiclean" },
  hitachiTubFreq: { name: "日立の家電品「洗濯槽洗浄と洗濯槽乾燥をする頻度は、どのくらいですか？」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a67.html" },
  hitachiTubTate: { name: "日立の家電品「洗濯槽のお掃除（槽洗浄コース）について知りたいです。（タテ型）」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a205.html" },
  hitachiTubDrum: { name: "日立の家電品「洗濯槽のお掃除（槽洗浄コース）について知りたいです。（ドラム式）」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a45.html" },
  panaTub: { name: "パナソニック公式通販「重曹やクエン酸は使える？ 洗濯槽や糸くずフィルターの掃除方法」", url: "https://panasonic.jp/store/contents/washing-machine-cleaning.html" },
  lixilSinkRegular: { name: "LIXIL「シンクの定期的なお手入れ」（キッチン）", url: "https://www.lixil.co.jp/support/clean/kitchen_02_regular.htm" },
  lixilSinkQa: { name: "LIXIL Q&A「キッチンのシンクをお手入れする方法」（用具・洗剤の使用可否一覧表）", url: "https://faq.lixil.co.jp/--626cd6cc1d59830023aad711" },
  lixilSinkWhite: { name: "LIXIL Q&A「キッチンのシンクに白い汚れやシミが付いた」", url: "https://faq.lixil.co.jp/--626cd6ca906696001d036670" },
  panaSink: { name: "パナソニック 住まいの設備「シンクの汚れが取れない！」（キッチンのお手入れ・PDF）", url: "https://sumai.panasonic.jp/support/self/kitchen/pdf/k23_kitchen.pdf" },
  hitachiHeat: { name: "日立の家電品「暖房運転しても、部屋が暖まりません。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-20.html" },
  mitsubishiWinter: { name: "三菱電機「冬の時期に多いお問い合わせ」（霧ヶ峰・PDF）", url: "https://mitsubishielectric.co.jp/home/kirigamine/special/pdf/faq_in_the_winter_2024.pdf" },
  panaHeat: { name: "パナソニック「寒い冬、エアコンを効果的に使うには？ 暖房のよくある疑問にお答え」", url: "https://panasonic.jp/aircon/contents/tips/heating.html" },
};

const PRICE_LEAD_AIRCON =
  "エアコン内部（熱交換器・送風ファン・ドレンパン）の洗浄は、業者のエアコンクリーニングで対応しています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。";

export const DIY_GUIDES: DiyGuide[] = [
  {
    slug: "aircon-self-cleaning",
    kw: "エアコン掃除 自分で",
    title: "エアコン掃除を自分でできる範囲｜メーカー3社の公式案内と業者に頼む目安 | クリーンナビ",
    description:
      "エアコン掃除を自分で行える範囲（フィルター・前面パネル・風向板・室外機まわり）と、メーカーが控えるよう案内している作業（洗浄スプレー・ファンの掃除）を、日立・ダイキン・シャープの公式情報とNITEの事故データで整理しました。業者の公式料金も掲載しています。",
    h1: "エアコン掃除を自分でできる範囲と、業者に頼む目安",
    publishedAt: D,
    checkedAt: D,
    answer: [
      "日立・ダイキン・シャープの公式サイトでは、利用者が自分で行うお手入れを、エアフィルター・前面パネル・風向板などの外から見える部分と、室外機まわりに限っています。お掃除機能のない機種のフィルター掃除は、3社とも「2週間に1回」を目安としています。",
      "一方、熱交換器や送風ファンなどの内部は「お客様ご自身では行わず」業者や販売店に相談するよう案内されています。市販の洗浄スプレーについては、日立は使用しないよう、ダイキンは使用を控えるよう求めており、シャープも専門知識を持たない方による内部洗浄は勧められないとしています。内部の汚れやにおいが気になる場合は、エアコンクリーニング業者への依頼をご検討ください。",
    ],
    sections: [
      {
        h2: "メーカー3社が案内している「自分でできる範囲」",
        blocks: [
          "当サイトで日立・ダイキン・シャープの公式サポートページを確認し、同じ項目でそろえて整理しました。表現は各社で異なりますが、自分で行う範囲と業者に任せる範囲の線引きは共通しています。",
          {
            table: {
              head: ["項目", "日立", "ダイキン", "シャープ"],
              rows: [
                ["フィルター掃除の目安（お掃除機能なし）", "フィルターサインがない機種は2週間に1回程度", "2週に1回", "2週間に1回（自動掃除運転を使う場合などは6か月に1回）"],
                ["自分でできる箇所", "外装・前面パネル・風向板・エアフィルター・ダストボックス・室外機まわり", "フィルター類と外から見える前面パネル・フラップのみ", "本体パネル（から拭き）・エアーフィルター"],
                ["エアコン内部（熱交換器・ファン）", "お客様ご自身では行わず、業者や販売店に相談", "無理に自分でクリーニングせず、販売店などに相談", "内部の洗浄は販売店または同社の訪問サポートセンターに申し込み"],
                ["市販の洗浄スプレー", "故障の原因となるため使用しない", "使用は控える（ニオイ・カビ・水漏れ・ガス漏れ・故障・火災のおそれ）", "専門知識を持たない方による内部洗浄は勧められない"],
              ],
              note: "各社公式ページ（出典欄）を 2026-11-19 に確認。機種ごとの手順は取扱説明書をご確認ください。",
            },
          },
        ],
      },
      {
        h2: "自分で行うお手入れの手順（フィルター）",
        blocks: [
          "フィルター掃除は、日立・シャープの公式案内で次の流れが示されています。",
          {
            ol: [
              "運転を停止し、電源プラグを抜いてから作業します（シャープ・ダイキン）。",
              "前面パネルを開け、エアフィルターを取り外します。",
              "掃除機やスポンジで、強い力をかけずにほこりを取り除きます。掃除機は吸引力を弱めに設定します（日立）。",
              "汚れがひどい場合は中性洗剤で洗い、よくすすぎます。",
              "室内または日陰で十分に乾かしてから取り付けます。",
            ],
          },
          "ダイキンは、40℃以上のお湯、ベンジン・シンナーなどの揮発性のもの、みがき粉、たわしなどの硬いもの、消臭剤などのスプレーを使わないよう案内しています。また、ダイキンの試算では、フィルター掃除をしないと冷房時の消費電力が25％高くなるとされています。",
        ],
      },
      {
        h2: "自分で行わないほうがよい作業",
        blocks: [
          {
            ul: [
              "市販の洗浄スプレーによる熱交換器の洗浄：日立は、内部に残った洗浄剤で樹脂部品の破損や電気部品の絶縁不良が起き、発煙・発火につながるおそれがあると説明しています。",
              "ほこり取り棒などでの送風ファンの掃除：ダイキンは、けがやファン破損のおそれがあるとして控えるよう案内しています。日立も、ファンのお手入れは分解を伴うため自分では掃除できないとしています。",
              "消臭・除菌・殺虫スプレーやエアダスターの吹き付け：ダイキンは、部品の故障・ガス漏れ・水漏れや、可燃性ガスによる発火のおそれを挙げています。",
            ],
          },
          "NITE（製品評価技術基盤機構）は、2015〜2019年度の5年間に誤った内部洗浄方法による火災事故が20件発生したとして、内部洗浄は正しい知識を持った業者に依頼するよう呼びかけています。",
          "なお、過去に自分で洗浄した後に「焦げ臭いにおいがする」「水漏れや水飛びがする」などの症状がある場合は、日立・ダイキンとも、運転を止めて電源プラグを抜き、販売店や修理窓口に点検を相談するよう案内しています。",
        ],
      },
    ],
    whenPro: [
      "フィルターを掃除しても、カビやほこりのにおいが残る場合（シャープは、お手入れ後もにおいが取れない場合はエアコンクリーニングを検討するよう案内しています）",
      "吹出口の奥や送風ファンに黒い汚れが見える場合（日立は、発生したカビは同社の凍結洗浄では除去できないとしています）",
      "お掃除機能や内部クリーン機能のない機種で、内部の汚れが気になる場合",
      "焦げ臭いにおい・異音・水漏れがある場合は、クリーニングではなく販売店やメーカーの修理窓口へご相談ください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "お住まいの地域で対応している業者と料金を比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "エアコンのフィルター掃除はどのくらいの頻度で行えばよいですか。", a: "お掃除機能のない機種では、日立・ダイキン・シャープとも2週間に1回程度を目安としています。フィルターサインがある機種は、サインの表示をお手入れの目安にしてください（日立）。" },
      { q: "市販のエアコン洗浄スプレーを使ってもよいですか。", a: "日立は「故障の原因となるため、使用しないでください」、ダイキンは「使用はお控えください」と案内しています。内部の洗浄は業者や販売店への依頼をおすすめします。" },
      { q: "お掃除機能付きのエアコンでも掃除は必要ですか。", a: "ダイキンは、自動お掃除機能付きでも「おそうじランプ」が点いたらダストボックスなどのお手入れが必要としています。日立も、数シーズン使うとフィルターの汚れが取れなくなることがあるため、汚れ具合を定期的に確認するよう案内しています。" },
      { q: "洗浄スプレーを使ってしまった場合はどうすればよいですか。", a: "ダイキンは、すぐに電源プラグを抜いて運転せず、部屋を十分に換気したうえで、しばらく冷房運転をするよう案内しています。異臭や効きの悪さがある場合は、メーカーサービスへの点検依頼をすすめています。" },
    ],
    sources: [SRC.hitachiCare, SRC.hitachiFilter, SRC.hitachiSpray, SRC.hitachiFan, SRC.daikinCare, SRC.daikinFilter, SRC.sharpFilter, SRC.sharpSpray, SRC.sharpDeodorant, SRC.nite, { name: "おそうじ本舗 壁掛けエアコンクリーニング", url: HONPO_AC }, { name: "ダスキン エアコンクリーニング", url: DUSKIN_AC }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["aircon-smell", "aircon-water-leak", "aircon-cleaning-spray", "aircon-fan-cleaning", "outdoor-unit-cleaning"],
  },
  {
    slug: "aircon-water-leak",
    kw: "エアコン 水漏れ",
    title: "エアコンの水漏れの原因と対処｜メーカー公式の確認手順と相談先の分け方 | クリーンナビ",
    description:
      "エアコン室内機の水漏れについて、日立・シャープ・ダイキンの公式情報をもとに、自分で確認できる原因（ドレンホース・フィルター）と、修理窓口に相談すべき場合、エアコンクリーニングで改善する場合を整理しました。業者の公式料金も掲載しています。",
    h1: "エアコンの水漏れの原因と対処｜自分で確認できること・相談先",
    publishedAt: D,
    checkedAt: D,
    answer: [
      "室内機から水が漏れたら、まず運転を止めて電源プラグを抜いてください。日立は、水漏れしたまま使い続けると壁や家具を傷めるおそれがあると案内しています。",
      "メーカーの公式案内では、自分で確認できる原因として「ドレンホースの折れ・持ち上がり・詰まり・先端の水没」と「エアフィルターの汚れ」が挙げられています。吹き出し口以外から漏れている場合は内部の部品や排水経路の不具合の可能性があるため、販売店やメーカーの修理窓口に相談します。熱交換器の汚れで吹き出し口から水が出る場合は、エアコンクリーニングで改善することがあるとされています。",
    ],
    sections: [
      {
        h2: "水漏れの原因と、自分で確認できるか",
        blocks: [
          "日立・シャープ・ダイキンの公式情報に記載されている原因を、当サイトで「自分で確認できるか」「相談先」の観点で整理しました。",
          {
            table: {
              head: ["原因（メーカー公式の記載）", "自分で確認・対処できるか", "相談先"],
              rows: [
                ["ドレンホースが折れ曲がる・持ち上がる・先端が水に浸かる（日立）", "できる（ホースの向きや先端の位置を直す）", "改善しなければ販売店・修理窓口"],
                ["ドレンホースにゴミが詰まる（日立）", "ホース先端の見える範囲のゴミは取り除ける", "改善しなければ販売店・修理窓口"],
                ["エアフィルターの汚れで吹出口が結露する（日立・シャープ）", "できる（フィルター掃除）", "—"],
                ["熱交換器（アルミフィン）の汚れで結露水が流れず、吹き出し口から水が出る（日立）", "できない（内部の洗浄が必要）", "エアコンクリーニング業者"],
                ["洗浄スプレーの流し残しがドレンパン・ドレンホースに詰まる、薬剤でドレンパンがひび割れる（ダイキン）", "できない", "販売店・メーカーの点検"],
                ["吹き出し口以外からの水漏れ（本体内部の部品や排水経路の不具合の可能性・日立）", "できない", "販売店・修理窓口"],
              ],
              note: "出典欄の各社公式ページを 2026-11-19 に確認。",
            },
          },
        ],
      },
      {
        h2: "自分で行う確認の手順",
        blocks: [
          {
            ol: [
              "運転を停止し、電源プラグを抜きます（日立）。",
              "屋外のドレンホースを見て、折れ曲がり・途中の持ち上がり・先端が水たまりやバケツの水に浸かっていないかを確認し、原因を取り除きます。",
              "エアフィルターが汚れていれば掃除します（手順は「エアコン掃除を自分でできる範囲」のページでご説明しています）。",
              "風向板から水滴が飛ぶ場合は、日立の案内では風向板を水平にする・除湿運転にするなどで結露を抑えられる場合があります。",
              "改善しない場合は、使用を控えて販売店または修理窓口に点検を相談します。",
            ],
          },
          "ダイキンの2023・2024・2025年モデル「FNシリーズ」の室内機では、付属の抗菌材とアルミ製熱交換器の組み合わせで生じるゲル状物質がドレンホース詰まりなどを起こし、水漏れに至る事象があったとして、同社が無償点検・修理を案内しています（2025年11月28日発表）。該当する場合は、クリーニング業者ではなく同社の専用窓口にご連絡ください。",
        ],
      },
    ],
    whenPro: [
      "ドレンホースとフィルターを確認しても、吹き出し口から水滴が出る場合（日立は、熱交換器の汚れが原因のときはエアコンクリーニングで改善する場合があると案内しています）",
      "ドレンパンまで洗浄したい場合は、ドレンパンを取り外す分解洗浄に対応した業者・メニューを選びます（下表のおそうじ本舗「完全分解洗浄」など）",
      "吹き出し口以外から漏れる場合や、過去に洗浄スプレーを使った後に水漏れが起きた場合は、クリーニングではなく販売店・メーカーの点検を優先してください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "水漏れの原因が汚れの場合は、エアコンクリーニング業者に相談できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "エアコンから水が漏れたら、まず何をすればよいですか。", a: "運転を止め、電源プラグを抜いてください。そのうえでドレンホースの折れ・詰まり・先端の水没と、エアフィルターの汚れを確認します（日立）。" },
      { q: "エアコンクリーニングで水漏れは直りますか。", a: "熱交換器の汚れで結露水が流れず吹き出し口から水が出る場合は、エアコンクリーニングで改善する場合があると日立は案内しています。吹き出し口以外からの水漏れは内部部品や排水経路の不具合の可能性があるため、販売店や修理窓口への相談が先です。" },
      { q: "洗浄スプレーを使った後から水漏れするようになりました。", a: "ダイキンは、流し切れなかった汚れがドレンパンやドレンホースに詰まったり、薬剤でドレンパンがひび割れたりして水漏れするおそれがあると説明しています。運転を止め、販売店またはメーカーに点検をご相談ください。" },
    ],
    sources: [SRC.hitachiLeak, SRC.hitachiSplash, SRC.hitachiClean, SRC.sharpFilter, SRC.daikinCare, SRC.daikinFN, { name: "おそうじ本舗 壁掛けエアコンクリーニング", url: HONPO_AC }, { name: "ダスキン エアコンクリーニング", url: DUSKIN_AC }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["aircon-self-cleaning", "aircon-smell", "aircon-cleaning-spray"],
  },
  {
    slug: "aircon-smell",
    kw: "エアコン 臭い",
    title: "エアコンの臭いの原因と対処｜においの種類別にメーカー公式の対処を整理 | クリーンナビ",
    description:
      "エアコンの臭いを、カビ・ほこり臭、焦げ臭さ、生活臭、排水のにおい、新品のにおいなど種類別に、日立・シャープ・ダイキンの公式情報で対処を整理しました。自分でできるお手入れ、使ってはいけないスプレー、クリーニングを頼む目安と業者の公式料金を掲載しています。",
    h1: "エアコンの臭いの原因と対処｜においの種類別の確認方法",
    publishedAt: D,
    checkedAt: D,
    answer: [
      "エアコンの臭いは、においの種類によって対処が異なります。カビやほこりのにおいは、まずエアフィルターなどのお手入れを行い、それでも残る場合はエアコンクリーニング（内部洗浄）を検討します（日立・シャープ）。",
      "焦げ臭いにおいは内部の不具合の可能性があり、日立は火災のおそれがあるとしてすぐに使用を中止し、販売店や修理窓口に相談するよう案内しています。消臭剤スプレーを本体やフィルターに吹きかけることは、シャープ・ダイキンとも控えるよう案内しています。",
    ],
    sections: [
      {
        h2: "においの種類別の原因と対処",
        blocks: [
          "日立の公式FAQ「エアコン（室内機）のにおいが気になります。」の分類をもとに、シャープ・ダイキンの案内をあわせて整理しました。",
          {
            table: {
              head: ["においの種類", "考えられる原因（公式の記載）", "対処", "相談先"],
              rows: [
                ["カビ・ほこりのにおい", "使い続けるうちに付着したほこりや、発生したカビ", "フィルターなどのお手入れ。改善しなければ内部洗浄", "エアコンクリーニング業者・販売店"],
                ["焦げくさいにおい", "エアコン内部の不具合の可能性", "すぐに使用を中止（火災のおそれ）", "販売店・修理窓口"],
                ["部屋の生活臭（汗・食品・家具・ペット・たばこ）", "室内の空気を吸い込んで吹き出すため", "換気、においの元をエアコン周辺から離す", "—"],
                ["排水のにおい", "ドレンホースの排出先が排水溝・バケツの水が古い・集合排水", "ドレンホースの位置の変更、においの元の除去", "管理会社・専門業者"],
                ["購入直後のにおい", "新品のプラスチックや塗料", "使ううちに軽減。1週間ほどで改善しなければ点検", "販売店・修理窓口"],
              ],
              note: "日立の公式FAQを中心に、シャープ・ダイキンの公式情報を 2026-11-19 に確認。",
            },
          },
        ],
      },
      {
        h2: "カビ・ほこりのにおいに自分でできること",
        blocks: [
          {
            ul: [
              "エアフィルターのほこりを掃除機やスポンジで取り除き、汚れがひどいときは中性洗剤で洗って室内で乾かします（日立）。お掃除機能のない機種の目安は2週間に1回です（日立・ダイキン・シャープ）。",
              "冷房や除湿の後に、内部を乾燥させる運転（日立「内部乾燥」、シャープ「内部清浄」、ダイキン「内部クリーン」など）を使います。シャープは運転停止後に内部清浄を最後まで運転するよう案内しています。",
              "ダイキンは、カビはほこりを栄養源にして育つため、内部にほこりがたまるとカビの発生を助長する可能性があると説明しています。",
            ],
          },
          "ただし、シャープは「すでに発生したカビは内部清浄運転では取れません」、日立は「発生したカビを凍結洗浄で除去することはできません」としています。内部の運転機能は予防のためのもので、発生したカビの除去にはエアコンクリーニングが必要です。",
        ],
      },
      {
        h2: "使わないほうがよいもの",
        blocks: [
          {
            ul: [
              "消臭剤スプレー：シャープは、本体やフィルターに吹きかけると故障・腐食・水漏れの原因になるとしています。ダイキンも除菌・消臭・殺虫スプレーの吹き付けを控えるよう案内しています。",
              "市販の洗浄スプレー：ダイキンは、流しきれなかった洗剤と汚れが熱交換器にこびりつき、かえってニオイやカビの原因になると説明しています。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "フィルターのお手入れや内部乾燥の運転を続けても、カビやほこりのにおいが取れない場合（シャープ・日立とも、内部洗浄の依頼を案内しています）",
      "内部乾燥や凍結洗浄などの機能がない機種で、においが気になる場合",
      "送風ファンや吹出口の奥まで洗浄したい場合は、ドレンパンや送風ファンを取り外す分解洗浄メニューのある業者を選びます",
      "焦げ臭いにおいは、クリーニングではなく販売店・メーカーの修理窓口へご相談ください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "においが取れない場合は、エアコンクリーニング業者の料金と対応エリアを比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "エアコンをつけると酸っぱい・カビ臭いにおいがします。", a: "日立はカビやほこりのにおいとして、まずエアフィルターなどのお手入れを案内しています。改善しない場合や内部の洗浄機能がない機種では、エアコンクリーニング（内部洗浄）を専門業者に依頼することをすすめています。" },
      { q: "消臭スプレーをエアコンに吹きかけてもよいですか。", a: "シャープは「ご使用いただけません」とし、故障や腐食・水漏れの原因になると案内しています。ダイキンも消臭・除菌スプレーの吹き付けを控えるよう案内しています。" },
      { q: "内部クリーン機能を使っていればクリーニングは不要ですか。", a: "シャープは、内部清浄運転でもすでに発生したカビは取れず、使用状況によってはカビやにおいが発生することがあるため、その場合はエアコンクリーニングをすすめています。" },
      { q: "焦げ臭いにおいがする場合はどうすればよいですか。", a: "日立は、内部に不具合が発生している可能性があり火災のおそれがあるとして、すぐに使用を中止し、販売店または修理相談窓口に相談するよう案内しています。" },
    ],
    sources: [SRC.hitachiSmell, SRC.hitachiFan, SRC.hitachiFilter, SRC.sharpDeodorant, SRC.sharpInner, SRC.daikinCare, SRC.daikinFilter, { name: "おそうじ本舗 壁掛けエアコンクリーニング", url: HONPO_AC }, { name: "ダスキン エアコンクリーニング", url: DUSKIN_AC }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["aircon-self-cleaning", "aircon-water-leak", "aircon-fan-cleaning"],
  },
  {
    slug: "washer-drain-cleaning",
    kw: "洗濯機 排水口 掃除",
    title: "洗濯機の排水口の掃除方法｜メーカー公式の手順と、業者に頼む場合の料金 | クリーンナビ",
    description:
      "洗濯機の排水口（排水トラップ）の掃除方法を、日立の公式手順と排水トラップメーカーの取扱説明書をもとにご説明します。お手入れの目安（1か月に1回）、外してよい部品、洗濯機を動かせない場合の相談先、洗濯パン洗浄を含む業者の公式料金を掲載しています。",
    h1: "洗濯機の排水口の掃除方法｜公式の手順と業者に頼む目安",
    publishedAt: D,
    checkedAt: D,
    answer: [
      "日立は、洗濯機の排水口のお手入れを1か月に1回の目安とし、においがする・乾燥に時間がかかる・排水エラーが出るといったときにもお手入れするよう案内しています。手順は、脱水運転で排水してから排水ホースを外し、手で外せる排水口の部品を洗い、排水トラップに水を注いでから元に戻す流れです。",
      "排水口が洗濯機の真下にあり自分で洗濯機を動かせない場合は、無理をせず清掃業者や住宅の管理会社に相談するよう、日立は案内しています。業者の洗濯機クリーニングでは、洗濯機を移動させて洗濯パン・排水口まわりを洗浄するオプションがあります。",
    ],
    sections: [
      {
        h2: "排水口の掃除の手順（日立の公式手順）",
        blocks: [
          "用意するもの：排水を受けるバケツなどの容器、ぞうきん、ゴム手袋、ごみ袋、掃除用ブラシやスポンジ（日立）。",
          {
            ol: [
              "洗濯槽に水が残っている場合は、脱水運転をして排水します。",
              "排水ホースを排水口から外します。ホース内の残水が漏れることがあるため、バケツやぞうきんで受けます。ホースが外れない場合は、無理に外さず設置した業者に問い合わせます。",
              "格子状のふたや、筒状のパイプなど、手で外せる排水口の部品だけを外します。工具で無理に外すと破損するおそれがあります。",
              "外した部品は、浴室用洗剤を溶かした水につけ置きしてから、ブラシやスポンジでこすり洗いします。",
              "排水ホース内と排水口に残っている糸くずなどを取り除きます。",
              "部品を外したときと逆の順番で取り付け、においが上がらないよう排水トラップ部分に水を注ぎます。",
              "排水ホースの先端を排水口にしっかり差し込み、脱水運転で排水されることを確認します。",
            ],
          },
          "別売りの洗濯機用排水トラップを使っている場合は、その取扱説明書の手順に従います（日立）。たとえばSANEIの洗濯機防水パン用排水トラップの取扱説明書では、トラップのゴミ詰まりの点検・掃除と破損の点検を定期的に行うよう求め、「目皿」「封水筒」以外は回さないよう（排水接続部がゆるみ水漏れの原因となるため）注意しています。",
        ],
      },
      {
        h2: "汚れをためないための日常のお手入れ",
        blocks: [
          {
            ul: [
              "糸くずフィルターは洗濯のたびにお手入れします（日立）。",
              "槽洗浄を行うことで、排水口の汚れを防ぐことができると日立は案内しています。",
              "ドラム式で排水トラップカバーを付けている場合、カバーが正しく取り付けられていないと、においや水漏れの原因になります（日立）。",
            ],
          },
          "日立は、排水口にごみがたまると水の流れが悪くなり、におい・乾燥時間が長くなる・排水できないといったトラブルが起きると説明しています。",
        ],
      },
      {
        h2: "自分で行う場合と業者に頼む場合の分け方",
        blocks: [
          {
            table: {
              head: ["状況", "自分で行えるか", "相談先・依頼先"],
              rows: [
                ["洗濯機の横や手前に排水口があり、ふた・パイプを手で外せる", "行える（上の手順）", "—"],
                ["排水口が洗濯機の真下にあり、洗濯機を動かせない", "無理に行わない（日立）", "清掃業者・住宅の管理会社"],
                ["排水ホースが外れない・外し方が分からない", "無理に外さない（日立）", "設置した業者"],
                ["お手入れ後も排水できない・排水エラーが再び出る", "—", "販売店・メーカーの相談窓口（日立）"],
                ["洗濯槽の裏側の汚れ・においも気になる", "自分で行えるのは槽洗浄まで", "洗濯機クリーニング業者（分解洗浄）"],
              ],
              note: "日立の公式FAQ・取扱説明書（2026-11-19 確認）をもとに当サイトで整理。",
            },
          },
        ],
      },
    ],
    whenPro: [
      "排水口が洗濯機の真下にあって、自分で洗濯機を動かせない場合（日立の案内）",
      "洗濯パン全体や排水口まわりをまとめて洗浄したい場合（おそうじ本舗は、洗濯機を移動させて排水口まわりも含めた洗濯パンを洗浄するオプションを掲載しています）",
      "排水口の掃除とあわせて、洗濯槽の裏側のカビ・においも落としたい場合",
      "お手入れ後も排水できない、排水エラーが繰り返し出る場合は、販売店・メーカーの相談窓口へご相談ください",
    ],
    priceHeading: "洗濯機クリーニングの料金（大手2社の公式料金）",
    priceLead:
      "洗濯パン・排水口まわりの洗浄は、業者の洗濯機クリーニングのオプションとして掲載されています。大手2社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: WASHER_PRICES,
    ctaText: "洗濯機クリーニングの作業内容と料金の目安をご確認いただけます。",
    cta: WASHER_CTA,
    faq: [
      { q: "洗濯機の排水口はどのくらいの頻度で掃除すればよいですか。", a: "日立は1か月に1回のお手入れをすすめています。においが気になる、乾燥に時間がかかる、排水エラーが出るといったときにもお手入れするよう案内しています。" },
      { q: "排水口の部品はどこまで外してよいですか。", a: "日立は、手で外せる部品（格子状のふた、筒状のパイプなど）だけを外し、工具などで無理に外さないよう案内しています。排水トラップの製品によっては、回してよい部品が決まっています（SANEIの取扱説明書では「目皿」「封水筒」以外は回さないよう記載）。" },
      { q: "掃除の後に排水口からにおいが上がります。", a: "日立は、部品を戻した後に排水トラップ部分に水を注ぐよう案内しています。ドラム式で排水トラップカバーを付けている場合は、カバーが正しく取り付けられているかもご確認ください。" },
      { q: "洗濯機を動かせない場合はどうすればよいですか。", a: "日立は、排水口が洗濯機の真下にありご自身で動かせない場合は、無理をせず清掃業者や住宅管理会社などに相談するよう案内しています。" },
    ],
    sources: [
      { name: "日立の家電品「排水口のお手入れ方法を知りたいです。（タテ型）」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a224.html" },
      { name: "日立の家電品「排水口のお手入れ方法を知りたいです。（ドラム式）」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a225.html" },
      { name: "日立 洗濯コンシェルジュアプリ ご使用ガイド BD-SX110GE9「排水口・排水トラップ」", url: "https://kadenfan.hitachi.co.jp/support/wash/guide/bd-sx110ge9/maintenance/mnt_drain.html" },
      { name: "SANEI 洗濯機防水パン用排水トラップ取扱い説明書（H5554-50 ほか）", url: "https://www.sanei.ltd/library/products/dl/torisetu/h5554-50_tor.pdf" },
      { name: "おそうじ本舗 縦型洗濯機クリーニング", url: HONPO_WASHER_TOP },
      { name: "おそうじ本舗 ドラム式洗濯機クリーニング", url: HONPO_WASHER_FRONT },
      { name: "ダスキン 洗濯機クリーニング", url: DUSKIN_WASHER },
    ],
    related: ["washer-lifespan", "washer-tub-cleaning"],
  },
  {
    slug: "washer-lifespan",
    kw: "洗濯機 寿命",
    title: "洗濯機の寿命は平均10.1年｜内閣府の調査と部品保有期間で見る、クリーニングか買い替えかの判断 | クリーンナビ",
    description:
      "洗濯機の寿命の目安を、内閣府「消費動向調査」の平均使用年数（2026年3月調査で10.1年・2005年からの推移）と、メーカーの補修用性能部品の保有期間（6年）から整理しました。製造から6年を過ぎた洗濯機はクリーニングを断られる場合がある点、買い替えか分解洗浄かの判断の目安、業者の公式料金を掲載しています。",
    h1: "洗濯機の寿命の目安｜クリーニングか買い替えかの判断",
    publishedAt: D,
    checkedAt: D,
    answer: [
      "内閣府「消費動向調査」（2026年3月調査）によると、二人以上の世帯が買い替えた電気洗濯機の平均使用年数は10.1年で、買い替え理由の76.2％が「故障」です。",
      "一方、東芝・シャープは洗濯機の補修用性能部品の保有期間を製造打ち切りから6年としており、おそうじ本舗は「製造から6年以上経過している洗濯機」はクリーニングを断る場合や保証できない場合があるとしています。においや汚れが気になる場合、製造から6年以内であれば分解洗浄、それを過ぎていれば依頼前に業者へ年式を伝えて対応可否を確認し、買い替えも含めて検討するのが目安です。",
    ],
    sections: [
      {
        h2: "洗濯機の平均使用年数の推移（内閣府 消費動向調査）",
        blocks: [
          "内閣府の消費動向調査は、毎年3月の調査で、その前の1年間に耐久消費財を買い替えた世帯に、買い替える前の製品を何年使っていたかを尋ねています。当サイトで、2005年以降の電気洗濯機の値を時系列表から抜き出しました。",
          {
            table: {
              head: ["調査時期（各年3月）", "平均使用年数", "買い替え理由「故障」"],
              rows: [
                ["2005年", "9.0年", "75.8％"],
                ["2010年", "9.2年", "76.9％"],
                ["2014年", "8.3年", "71.4％"],
                ["2017年", "10.2年", "78.7％"],
                ["2020年", "10.2年", "80.1％"],
                ["2022年", "10.8年", "77.8％"],
                ["2023年", "10.1年", "74.2％"],
                ["2024年", "10.9年", "77.5％"],
                ["2025年", "10.0年", "76.0％"],
                ["2026年", "10.1年", "76.2％"],
              ],
              note: "出典：内閣府経済社会総合研究所「消費動向調査 令和8年3月実施調査結果」時系列表6表（二人以上の世帯）。平均使用年数は買い替えをした世帯のみを分母として算出された値です。表は当サイトで抜粋しました。",
            },
          },
          "当サイトで2005〜2026年の22回分を見ると、2016年までは8.3〜9.2年で推移し、2017年以降は10.0〜10.9年で推移しています。直近5回（2022〜2026年）の平均は約10.4年です。いずれも「買い替えた世帯が使っていた年数」であり、製品の設計上の寿命を示すものではありません。",
        ],
      },
      {
        h2: "部品の保有期間と、クリーニングを受けられる年数",
        blocks: [
          {
            table: {
              head: ["確認した項目", "公式の記載", "出典"],
              rows: [
                ["補修用性能部品の保有期間（東芝）", "全自動洗濯機・タテ型洗濯乾燥機・ドラム式洗濯乾燥機とも6年（製造打ち切り時から）", "東芝ライフスタイル"],
                ["補修用性能部品の保有期間（シャープ）", "全自動洗濯機、ドラム式・タテ型洗濯乾燥機とも6年（製造打ち切り時から・2020年6月現在）", "シャープ"],
                ["おそうじ本舗の洗濯機クリーニング", "製造から6年以上経過している洗濯機は、サービスを断る場合や保証できない可能性がある（メーカーによる補修用部品の製造が終了していることが多いため）", "おそうじ本舗"],
                ["ダスキンの洗濯機クリーニング", "製造後、長期間経過している機種や正常に動作しないものは断る場合がある。2槽式は対象外", "ダスキン"],
              ],
              note: "各社公式ページを 2026-11-19 に確認。",
            },
          },
          "平均使用年数（約10年）と部品の保有期間（6年）の間には4年ほどの差があります。製造から6年を過ぎると、故障したときに修理部品がない場合や、分解を伴うクリーニングを受けられない場合が出てきます。",
        ],
      },
      {
        h2: "クリーニングか買い替えかの判断の目安",
        blocks: [
          {
            table: {
              head: ["洗濯機の状態", "当サイトの整理（公式情報にもとづく目安）"],
              rows: [
                ["製造から6年以内で、においや汚れが気になる", "業者の洗濯機クリーニング（分解洗浄）の対象になりやすい年数です"],
                ["製造から6年を過ぎていて、正常に動いている", "依頼前に型番と製造年を業者に伝え、対応できるかを確認します"],
                ["異音・排水エラー・動かないなど故障の症状がある", "クリーニングではなく、メーカーの修理窓口や販売店にご相談ください。部品の保有期間を過ぎている場合は、買い替えの検討が必要になることがあります"],
              ],
            },
          },
        ],
      },
    ],
    whenPro: [
      "製造から6年以内の洗濯機で、槽洗浄をしてもにおいや汚れが取れない場合",
      "洗濯槽を取り外して裏側まで洗浄したい場合（おそうじ本舗の「完全分解洗浄」オプションなど）",
      "製造から6年を過ぎている場合は、申し込み前に年式を伝えて対応可否を確認してください",
    ],
    priceHeading: "洗濯機クリーニングの料金（大手2社の公式料金）",
    priceLead: "買い替えの費用と比べる際の参考として、大手2社の公式サイトに掲載されている洗濯機クリーニングの通常価格を掲載します。",
    prices: WASHER_PRICES,
    ctaText: "洗濯機クリーニングの作業内容と料金の目安をご確認いただけます。",
    cta: WASHER_CTA,
    faq: [
      { q: "洗濯機は平均で何年使われていますか。", a: "内閣府の消費動向調査（2026年3月調査）では、買い替えた世帯の電気洗濯機の平均使用年数は10.1年です。2017年以降は10.0〜10.9年で推移しています。" },
      { q: "古い洗濯機でもクリーニングを頼めますか。", a: "おそうじ本舗は、製造から6年以上経過している洗濯機はサービスを断る場合や保証できない可能性があるとしています。ダスキンも、製造後長期間経過している機種は断る場合があるとしています。申し込み前に型番と製造年をお伝えください。" },
      { q: "洗濯機の部品はいつまで手に入りますか。", a: "東芝・シャープは、洗濯機の補修用性能部品の保有期間を、製造打ち切りから6年としています。" },
    ],
    sources: [
      { name: "内閣府 経済社会総合研究所「消費動向調査」（令和8年3月実施調査結果・報告書PDF）", url: "https://www.esri.cao.go.jp/jp/stat/shouhi/honbun202603.pdf" },
      { name: "東芝ライフスタイル「補修用性能部品の保有期間について」", url: "https://www.toshiba-lifestyle.com/jp/support/partslimit/" },
      { name: "シャープ「補修用性能部品の保有期間」", url: "https://jp.sharp/support/safety/repairparts.html" },
      { name: "おそうじ本舗 縦型洗濯機クリーニング", url: HONPO_WASHER_TOP },
      { name: "おそうじ本舗 ドラム式洗濯機クリーニング", url: HONPO_WASHER_FRONT },
      { name: "ダスキン 洗濯機クリーニング", url: DUSKIN_WASHER },
    ],
    related: ["washer-drain-cleaning"],
  },
  {
    slug: "aircon-lifespan",
    kw: "エアコン 寿命",
    title: "エアコンの寿命は平均13.4年｜内閣府の調査と部品保有期間10年で見る、クリーニングか買い替えかの判断 | クリーンナビ",
    description:
      "エアコンの寿命の目安を、内閣府「消費動向調査」の平均使用年数（2026年3月調査で13.4年・2005年からの推移）と、メーカーの補修用性能部品の保有期間（10年）から整理しました。製造から9〜10年を過ぎるとクリーニングを断られる・保証外になる場合がある点と、業者の公式料金を掲載しています。",
    h1: "エアコンの寿命の目安｜クリーニングか買い替えかの判断",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "内閣府「消費動向調査」（2026年3月調査）によると、二人以上の世帯が買い替えたルームエアコンの平均使用年数は13.4年で、調査対象の主要耐久消費財11品目の中で最も長い値です。買い替え理由の66.6％は「故障」です。",
      "一方、東芝・シャープはエアコンの補修用性能部品の保有期間を10年としています。エアコンクリーニング業者も年数で受付の条件を設けており、おそうじ本舗は製造から9年以上のエアコンはサービスを断る場合や保証できない場合があるとし、おそうじ革命は製造から10年以上を保証の対象外としています。においや汚れが気になる場合、製造から8年程度まではクリーニング、それを過ぎていれば依頼前に年式を伝えて対応可否を確認し、買い替えも含めて検討するのが目安です。",
    ],
    sections: [
      {
        h2: "エアコンの平均使用年数の推移（内閣府 消費動向調査）",
        blocks: [
          "内閣府の消費動向調査は、毎年3月の調査で、その前の1年間に耐久消費財を買い替えた世帯に、買い替える前の製品を何年使っていたかを尋ねています。当サイトで、2005年以降のルームエアコンの値を時系列表から抜き出しました。",
          {
            table: {
              head: ["調査時期（各年3月）", "平均使用年数", "買い替え理由「故障」"],
              rows: [
                ["2005年", "10.3年", "57.7％"],
                ["2010年", "11.7年", "61.8％"],
                ["2014年", "10.6年", "53.3％"],
                ["2017年", "13.6年", "65.2％"],
                ["2020年", "13.7年", "68.1％"],
                ["2022年", "13.7年", "67.9％"],
                ["2023年", "13.6年", "65.1％"],
                ["2024年", "14.1年", "70.8％"],
                ["2025年", "14.2年", "72.1％"],
                ["2026年", "13.4年", "66.6％"],
              ],
              note: "出典：内閣府経済社会総合研究所「消費動向調査 令和8年3月実施調査結果」時系列表6表（二人以上の世帯）。平均使用年数は買い替えをした世帯のみを分母として算出された値です。表は当サイトで抜粋しました。",
            },
          },
          "当サイトで2005〜2026年の22回分を見ると、2016年までは10.2〜12.3年で推移し、2017年以降は13.2〜14.2年で推移しています。直近5回（2022〜2026年）の平均は13.8年です。同じ調査の電気洗濯機（2026年3月調査で10.1年）より3年ほど長い値です。いずれも「買い替えた世帯が使っていた年数」であり、製品の設計上の寿命を示すものではありません。",
          "なお、ダイキンの購入相談窓口のページでは、同社の2020年の調査をもとに「寿命は10年程度」とし、10年経っていれば買い替えをすすめています。",
        ],
      },
      {
        h2: "部品の保有期間と、クリーニングを受けられる年数",
        blocks: [
          "メーカーの部品保有期間と、大手3社のエアコンクリーニングの受付条件を、当サイトで同じ表にそろえました。",
          {
            table: {
              head: ["確認した項目", "公式の記載", "出典"],
              rows: [
                ["補修用性能部品の保有期間（東芝）", "エアコン 10年", "東芝ライフスタイル"],
                ["補修用性能部品の保有期間（シャープ）", "エアコン 10年（2020年6月現在）", "シャープ"],
                ["おそうじ本舗のエアコンクリーニング", "製造から9年以上経過しているエアコンは、メーカーが部品の製造を終了しているため、サービスを断る場合や保証できない可能性がある", "おそうじ本舗"],
                ["おそうじ革命のエアコンクリーニング", "製造から10年以上経過したエアコンは保証の対象外。製造から20年以上経過したエアコンの作業は受けられない", "おそうじ革命"],
                ["ダスキンのエアコンクリーニング", "製造後、長期間経過している機種や正常に動作しないものは断る場合がある（年数の記載なし）", "ダスキン"],
                ["メーカー保証（ダイキン）", "本体1年、冷媒系統5年", "ダイキン工業"],
              ],
              note: "各社公式ページを 2026-11-20 に確認。",
            },
          },
          "平均使用年数（約13〜14年）と部品の保有期間（10年）の間には3〜4年の差があります。製造から9〜10年を過ぎると、故障したときに修理部品がない場合や、分解を伴うクリーニングを受けられない・保証されない場合が出てきます。",
          "製造年は、室内機の底面または側面にある型式表示ラベルで確認できます（日立）。ラベルに記載がない場合は、販売店やメーカーの相談窓口に型式を伝えて確認します。",
        ],
      },
      {
        h2: "クリーニングか買い替えかの判断の目安",
        blocks: [
          {
            table: {
              head: ["エアコンの状態", "当サイトの整理（公式情報にもとづく目安）"],
              rows: [
                ["製造から8年程度までで、においや汚れが気になる", "大手3社のいずれでもエアコンクリーニングの対象になりやすい年数です"],
                ["製造から9〜10年で、正常に動いている", "依頼前に型番と製造年を業者に伝え、対応できるか・保証の対象になるかを確認します（おそうじ本舗は9年以上、おそうじ革命は10年以上で条件あり）"],
                ["製造から20年以上", "おそうじ革命は作業を受けていません。部品の保有期間も過ぎているため、買い替えの検討をおすすめします"],
                ["冷房や暖房が効きにくい・異音・水漏れ・漏電ブレーカーが落ちる", "ダイキンは故障のサインとして挙げています。クリーニングではなく、販売店やメーカーの修理窓口にご相談ください"],
              ],
            },
          },
          "ダイキンは、故障と判断する前に「室外機の周りを何かでさえぎっていないか」「リモコンが壊れていないか」「霜取り運転中ではないか」「ブレーカーが落ちていないか」を確認するよう案内しています。",
        ],
      },
    ],
    whenPro: [
      "製造から8年程度までのエアコンで、フィルター掃除をしてもにおいや汚れが取れない場合",
      "送風ファンやドレンパンまで洗浄したい場合（おそうじ本舗の「完全分解洗浄」オプションなど）",
      "製造から9年以上たっている場合は、申し込み前に年式を伝えて対応可否と保証の有無を確認してください",
      "冷えない・異音・水漏れなど故障が疑われる症状は、クリーニングではなく販売店・メーカーの修理窓口へご相談ください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: "買い替えの費用と比べる際の参考として、大手3社の公式サイトに掲載されているエアコンクリーニングの通常価格を掲載します。",
    prices: AIRCON_PRICES,
    ctaText: "お住まいの地域で対応している業者と料金を比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "エアコンは平均で何年使われていますか。", a: "内閣府の消費動向調査（2026年3月調査）では、買い替えた世帯のルームエアコンの平均使用年数は13.4年です。2017年以降は13.2〜14.2年で推移しています。" },
      { q: "古いエアコンでもクリーニングを頼めますか。", a: "おそうじ本舗は製造から9年以上のエアコンはサービスを断る場合や保証できない可能性があるとし、おそうじ革命は製造から10年以上を保証の対象外、20年以上は作業不可としています。ダスキンも長期間経過した機種は断る場合があります。申し込み前に型番と製造年をお伝えください。" },
      { q: "エアコンの部品はいつまで手に入りますか。", a: "東芝・シャープは、エアコンの補修用性能部品の保有期間を10年としています。" },
      { q: "エアコンの製造年はどこで確認できますか。", a: "日立は、室内機の底面または側面にある型式表示ラベルの「製造年」で確認するよう案内しています。記載がない機種は、販売店や相談窓口にお問い合わせください。" },
    ],
    sources: [SRC.cao, SRC.toshibaParts, SRC.sharpParts, SRC.daikinLife, SRC.hitachiYear, ...SRC_AC_PRICES],
    related: ["aircon-not-cooling", "aircon-self-cleaning"],
  },
  {
    slug: "aircon-not-cooling",
    kw: "エアコン 冷えない",
    title: "エアコンが冷えない原因と対処｜掃除で直る場合と修理が必要な場合をメーカー公式で整理 | クリーンナビ",
    description:
      "エアコンが冷えないときに自分で確認できること（運転設定・フィルター・室外機まわり）と、修理窓口に相談すべき症状を、日立・ダイキンの公式情報で整理しました。洗浄スプレーが冷えない原因になる場合や、業者のエアコンクリーニング・室外機洗浄の公式料金も掲載しています。",
    h1: "エアコンが冷えない原因と対処｜自分で確認できること・相談先",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "エアコンが冷えないときは、まず運転設定（自動運転・eco機能・設定温度・風向き）、エアフィルターの汚れ、室外機の周りをふさいでいないかを確認します。日立は、フィルターの汚れや室外機周辺の障害物で冷房能力が下がると案内しています。",
      "設置直後から冷風が出ない、冷房16℃にしても冷風が出ず室外機のファンが回らない、ランプが点滅しているといった場合は、日立は本体の点検・修理が必要としています。ダイキンも、冷房が効きづらい症状は冷媒ガスが漏れている可能性があるとしています。この場合はクリーニングではなく、販売店やメーカーの修理窓口にご相談ください。",
    ],
    sections: [
      {
        h2: "冷えない原因と、自分で確認できるか",
        blocks: [
          "日立・ダイキンの公式情報に記載されている原因を、当サイトで「自分で確認できるか」「相談先」の観点で整理しました。",
          {
            table: {
              head: ["原因（メーカー公式の記載）", "自分で確認・対処できるか", "相談先"],
              rows: [
                ["自動運転・eco機能（省エネ優先）で運転している（日立）", "できる（冷房運転に切り替える・eco機能を解除する）", "—"],
                ["設定温度が高い・風向きが下向き（日立）", "できる（設定温度を下げ、風速と風向きを「自動」などに）", "—"],
                ["エアフィルターにほこりが付着している（日立）", "できる（フィルター掃除）", "—"],
                ["室外機の周りに物がある・吸込み口や吹き出し口にごみがたまっている（日立・ダイキン）", "できる（物を移動し、手で取れるごみを取り除く）", "—"],
                ["純正品以外の市販フィルターや、室外機を覆うカバーを使っている（日立）", "できる（取り外して様子を見る）", "—"],
                ["室外機の熱交換器の汚れ（おそうじ本舗は、汚れがたまると冷却・排熱機能が低下し効きが悪くなるおそれがあるとしています）", "できない（日立は分解を伴うお手入れを控えるよう案内）", "エアコンクリーニング業者（室外機洗浄オプション）"],
                ["冷媒ガスの漏れ（ダイキン）", "できない", "販売店・修理窓口"],
                ["設置直後から冷風が出ない、室外機のファンが回らない、ランプが点滅する（日立）", "できない", "販売店・修理窓口"],
              ],
              note: "出典欄の各社公式ページを 2026-11-20 に確認。",
            },
          },
        ],
      },
      {
        h2: "自分で行う確認の手順",
        blocks: [
          {
            ol: [
              "リモコンの表示で運転モードを確認し、自動運転になっていれば一度停止して冷房運転に切り替えます（日立）。",
              "「eco」の表示があれば、eco機能を解除します（日立）。",
              "設定温度を下げ、風速を「自動」、風向きを「自動」または「上向き」にします。冷たい空気は部屋の下にたまるためです（日立）。",
              "運転を停止し電源プラグを抜いてから、エアフィルターを掃除します（手順は「エアコン掃除を自分でできる範囲」のページでご説明しています）。",
              "室外機の前や周りに置いている物を移動し、吸込み口・吹き出し口の周りの落ち葉やごみを手で取り除きます（日立・ダイキン）。",
              "扇風機やサーキュレーターを併用し、部屋の空気を循環させます。家具で空気の流れが妨げられると、エアコン周辺だけが冷えて運転が弱まることがあります（日立）。",
              "すべて試しても改善しない場合は、販売店またはメーカーの修理窓口に相談します。",
            ],
          },
          "日立は、部屋の広さや窓の大きさ・向き、室内の人数や熱器具によっても冷えるまでの時間が変わるとしています。また「自動クリーン運転」搭載機種では、つけっぱなしの場合に24時間ごとのフィルター掃除の間（約11分）、送風運転になると案内しています。",
        ],
      },
      {
        h2: "洗浄スプレーが冷えない原因になる場合",
        blocks: [
          "ダイキンは、市販のエアコン洗浄スプレーが冷媒配管を腐食させてガス漏れを起こすおそれがあり、これが「冷えない」「暖まらない」原因になると説明しています。過去に洗浄スプレーを使い、その後に効きが悪くなった場合は、メーカーサービスへの点検依頼をすすめています。",
          "ダイキンは、付属のエアフィルターに市販の不織布フィルターを重ねると、目詰まりと同じ状態になって風量や冷暖房の効きに影響が出る可能性があるとも案内しています。",
        ],
      },
    ],
    whenPro: [
      "フィルターを掃除し、室外機の周りを片付けても効きの悪さが残り、修理が必要な症状（上表）には当てはまらない場合は、販売店に相談のうえ、内部の熱交換器や室外機の洗浄を検討します",
      "室外機の汚れが気になる場合は、室外機洗浄のオプションがある業者を選びます（料金は下表）",
      "設置直後から冷えない、室外機のファンが回らない、ランプが点滅する、冷媒ガス漏れが疑われる場合は、クリーニングではなく販売店・メーカーの修理窓口へご相談ください",
    ],
    priceHeading: "エアコンクリーニング・室外機洗浄の料金（大手3社の公式料金）",
    priceLead: "室内機の内部洗浄と、室外機の洗浄（エアコンクリーニングのオプション）について、大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: OUTDOOR_PRICES,
    ctaText: "お住まいの地域で対応している業者と料金を比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "エアコンが急に冷えなくなりました。まず何を確認すればよいですか。", a: "運転モード・eco機能・設定温度・風向きの設定、エアフィルターの汚れ、室外機の周りをふさいでいないかを確認します（日立）。日立は、純正品以外の市販フィルターや室外機を覆うカバーも、冷えが悪くなる原因になる場合があるとしています。" },
      { q: "エアコンクリーニングで冷えは良くなりますか。", a: "フィルターや室外機の汚れが原因の場合は、お手入れや洗浄で改善することがあります。冷媒ガスの漏れや本体の不具合が原因の場合はクリーニングでは直らないため、販売店や修理窓口への相談が先です。" },
      { q: "室外機のファンが回っていません。", a: "日立は、冷房16℃・風速自動にしても冷風が出ず、室外機のファンが回らない場合は、本体の点検・修理が必要としています。販売店または修理相談窓口にご相談ください。" },
    ],
    sources: [SRC.hitachiNotCool, SRC.hitachiSudden, SRC.hitachiOutdoor, SRC.hitachiFilter, SRC.daikinLife, SRC.daikinCare, ...SRC_AC_PRICES],
    related: ["outdoor-unit-cleaning", "aircon-lifespan", "aircon-heating-not-warm"],
  },
  {
    slug: "aircon-fan-cleaning",
    kw: "エアコン ファン 掃除",
    title: "エアコンの送風ファンは自分で掃除できる？｜メーカー公式の案内と分解洗浄の料金 | クリーンナビ",
    description:
      "エアコンの送風ファン（吹き出し口の奥の筒状のファン）の掃除について、日立・ダイキンの公式情報をもとに、自分で行わないよう案内されている理由（分解が必要・ほこり取り棒による破損やけが）と、ファンまで洗浄できる業者のメニュー・公式料金を整理しました。",
    h1: "エアコンの送風ファンの掃除｜自分でできない理由と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "日立は「室内機のファンのお手入れは分解を伴うため、お客様ご自身で掃除ができません」とし、凍結洗浄機能を使うか、エアコンクリーニングを依頼するよう案内しています。ダイキンも、ほこり取り棒などでの送風ファンの掃除は、けがやファンの破損のおそれがあるとして控えるよう求めています。",
      "送風ファンの黒い汚れはカビの可能性があり、日立は発生したカビは凍結洗浄でも除去できないとしています。ファンの汚れが気になる場合は、送風ファンを洗浄範囲に含むエアコンクリーニング、またはファンを取り外して洗う分解洗浄のメニューをご検討ください。",
    ],
    sections: [
      {
        h2: "メーカーが送風ファンの掃除を控えるよう案内している理由",
        blocks: [
          {
            table: {
              head: ["メーカー", "公式の案内", "理由として挙げていること"],
              rows: [
                ["日立", "ファンのお手入れは自分では掃除できない。凍結洗浄を使うか、エアコンクリーニングを依頼", "分解を伴うため。市販の洗浄スプレーは故障の原因になるため使用しない"],
                ["ダイキン", "ほこり取り棒などを使ったエアコン内部のお手入れは控える。運転中は絶対にやめる", "けがやファン破損のおそれ。停止ボタンを押した後もファンはしばらく回転している。破損したファンが再び回転すると破片が吹き出すおそれ"],
                ["シャープ", "専門知識を持たない方による内部の洗浄は勧められない", "洗浄剤が電気系統やプラスチック部にかかると故障の原因となり、感電・水漏れの危険があるため"],
              ],
              note: "各社公式ページ（出典欄）を 2026-11-20 に確認。",
            },
          },
          "日立は、業者がクリーニングする際の注意事項として「電気部品、貫流ファン及びファンモータなどは絶対に洗浄剤が付かないこと」を挙げています。送風ファンの周りは、洗浄剤の扱いに専門知識が必要な箇所です。",
        ],
      },
      {
        h2: "自分でできること（カビの発生を抑える）",
        blocks: [
          {
            ul: [
              "冷房や除湿運転のあと、オフシーズン前に内部を乾燥させる運転を使います（日立「内部乾燥」、ダイキン「内部クリーン」など）。日立は、エアコン内部をしっかり乾かすとカビの発生を抑えられるとしています。",
              "凍結洗浄を搭載した日立の一部の製品は、凍結洗浄時に室内機のファン掃除（ファンお掃除ロボ）を行います。搭載の有無は取扱説明書で確認します（日立）。",
              "エアフィルターを2週間に1回を目安に掃除し、内部にほこりを入れないようにします（日立・ダイキン・シャープ）。",
            ],
          },
          "ただし、これらは汚れやカビを抑えるための機能・お手入れです。日立は、すでに発生したカビは凍結洗浄では除去できないとしており、ダイキンも、水内部クリーンは付着したカビやほこりをすべて落とせる機能ではないとしています。",
        ],
      },
      {
        h2: "業者のメニューでの送風ファンの扱い",
        blocks: [
          {
            table: {
              head: ["業者", "メニュー", "送風ファンの扱い（公式の記載）"],
              rows: [
                ["おそうじ本舗", "壁掛けエアコンクリーニング", "サービス範囲に「送風ファン」を含む"],
                ["おそうじ本舗", "完全分解洗浄（オプション）", "通常のクリーニングでは外さないドレンパンと送風ファンを取り外して洗浄。東芝・ダイキン製は対応店舗が限られ、その場合の価格は12,100円。機種や設置状況により対応できない場合あり"],
                ["ダスキン", "エアコンクリーニング", "カバーとフィルターを外して分解し、熱交換器やファンを高圧洗浄"],
                ["おそうじ革命", "エアコンクリーニング", "分解したうえで、高圧洗浄機でアルミフィン・ファンを洗浄"],
              ],
              note: "各社公式ページを 2026-11-20 に確認。ファンを取り外すかどうかは、メニュー・メーカー・機種によって異なります。",
            },
          },
        ],
      },
    ],
    whenPro: [
      "吹き出し口の奥に見える送風ファンに黒い汚れがある場合（日立は、内部に黒い汚れがある場合はカビの可能性があり、業者や販売店に相談するよう案内しています）",
      "凍結洗浄やファン掃除の機能がない機種で、ファンの汚れが気になる場合",
      "ファンを取り外して洗いたい場合は、分解洗浄に対応したメニューを選び、申し込み時にメーカー・型番を伝えて対応可否を確認します",
      "ほこり取り棒などでファンを傷めた可能性がある場合は、運転せずに販売店・メーカーの修理窓口へご相談ください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "送風ファンの汚れが気になる場合は、エアコンクリーニング業者の料金と対応エリアを比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "エアコンの送風ファンは自分で掃除できますか。", a: "日立は、ファンのお手入れは分解を伴うため自分では掃除できないとしています。ダイキンも、ほこり取り棒などでのお手入れは、けがやファン破損のおそれがあるとして控えるよう案内しています。" },
      { q: "運転を止めた直後なら、ファンに触れても大丈夫ですか。", a: "ダイキンは、運転停止ボタンを押した後でもファンはしばらく回転しているため大変危険としています。止まっている場合でも、破損したファンが再び回転すると破片が吹き出すおそれがあるとしています。" },
      { q: "凍結洗浄や内部クリーンがあればファンのカビは取れますか。", a: "日立は、発生したカビは凍結洗浄で除去できないとしています。ダイキンも、水内部クリーンは付着したカビやほこりをすべて落とせる機能ではないとしています。発生したカビは、エアコンクリーニングで落とします。" },
    ],
    sources: [SRC.hitachiFan, SRC.hitachiClean, SRC.hitachiBlack, SRC.hitachiSpray, SRC.daikinCare, SRC.sharpSpray, ...SRC_AC_PRICES],
    related: ["aircon-smell", "aircon-self-cleaning"],
  },
  {
    slug: "aircon-cleaning-spray",
    kw: "エアコン掃除スプレー",
    title: "エアコン洗浄スプレーは使ってよい？｜メーカー3社の公式見解とNITEの事故データ | クリーンナビ",
    description:
      "市販のエアコン洗浄スプレーについて、日立・ダイキン・シャープの公式見解と、NITE（製品評価技術基盤機構）の事故データ（誤った内部洗浄による火災20件）を整理しました。使ってしまった場合の対処、点検が必要な症状、業者のエアコンクリーニングの公式料金を掲載しています。",
    h1: "エアコン洗浄スプレーの使用について｜メーカー公式の見解と使ってしまった場合の対処",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "日立・ダイキン・シャープの公式サイトはいずれも、市販のエアコン洗浄スプレーによる内部の洗浄を控えるよう案内しています。日立は「故障の原因となるため、使用しないでください」、ダイキンは「使用はお控えください」、シャープは専門知識を持たない方による内部洗浄は勧められないとしています。",
      "NITE（製品評価技術基盤機構）は、2015〜2019年度の5年間に誤った内部洗浄方法による火災事故が20件発生したとして、内部洗浄は正しい知識を持った業者に依頼するよう呼びかけています。すでに使ってしまった場合は、すぐに電源プラグを抜き、部屋を換気してください（ダイキン）。",
    ],
    sections: [
      {
        h2: "メーカー3社が挙げている洗浄スプレーのリスク",
        blocks: [
          "当サイトで3社の公式ページを確認し、挙げられているリスクを項目ごとにそろえました。",
          {
            table: {
              head: ["リスク", "日立", "ダイキン", "シャープ"],
              rows: [
                ["発煙・発火・火災", "残った洗浄剤による電気部品の絶縁不良などで発煙・発火のおそれ", "冬場に換気せず暖房運転すると、揮発したガスに静電気などで引火するおそれ", "—"],
                ["故障", "樹脂部品の破損・内部部品の劣化で運転できなくなるおそれ", "温度センサーや電気部品にかかると故障のおそれ", "電気系統・プラスチック部にかかると故障の原因"],
                ["水漏れ", "親水性コーティングがはがれ、排水経路の詰まりや水漏れの原因", "流しきれない汚れがドレンパン・ドレンホースに詰まる、薬剤でドレンパンがひび割れる", "水漏れの危険"],
                ["ニオイ・カビ", "—", "流しきれなかった洗剤と汚れが熱交換器にこびりつき、ニオイやカビの原因", "—"],
                ["ガス漏れ", "—", "冷媒配管を腐食させ、冷えない・暖まらない原因に", "—"],
                ["感電", "—", "—", "感電の危険"],
              ],
              note: "各社公式ページ（出典欄）を 2026-11-20 に確認。「—」は、その社の該当ページに記載がないことを示します。",
            },
          },
          "ダイキンは、除菌・消臭・殺虫スプレーをエアコン内部やフィルターに吹きかけることや、エアダスターの使用も控えるよう案内しています。スプレー類やエアダスターには可燃性ガスが含まれていることが多く、発火の原因になるおそれがあるためです。",
        ],
      },
      {
        h2: "NITE（製品評価技術基盤機構）の事故データ",
        blocks: [
          {
            ul: [
              "2015〜2019年度の5年間に通知されたエアコンの事故は263件で、うち火災が244件（約92％）。誤った内部洗浄方法による火災事故は20件。",
              "事故事例：エアコンを洗浄した際、内部配線の端子部分に洗浄液が付着し、トラッキング現象（付着したほこりや水分で電気の通り道ができ、異常発熱する現象）が発生して出火した。",
              "NITEの注意事項：内部洗浄は正しい知識を持った業者に依頼する。電気部品に洗浄液をかけない。消毒用アルコールなどの揮発性の溶液、次亜塩素酸ナトリウム（漂白剤）などの腐食性のある溶液を使わない。高温高圧スチームで洗浄しない。",
            ],
          },
          "NITEは、消費者が自ら内部洗浄を行うことは推奨しないとしています。",
        ],
      },
      {
        h2: "洗浄スプレーを使ってしまった場合の対処",
        blocks: [
          {
            ol: [
              "すぐに電源プラグを抜き、そのまま運転しないでください（ダイキン）。",
              "部屋全体の空気を入れかえるように、十分に換気します（ダイキン）。",
              "換気後、しばらく冷房運転をします。ダイキンは、可燃性ガスの揮発による火災のリスクや薬剤の影響をある程度軽減できるとしています。",
              "その後に異臭がする、効きが悪いなどの症状がある場合は、メーカーサービスに点検を依頼します（ダイキン）。",
            ],
          },
          "日立は、自分で洗浄した後に「焦げ臭いにおいがする」「設定や操作ができない」「異常な振動や音がする」「水漏れや水飛びする」といった症状が見られる場合は、直ちに使用を中止し、電源プラグを抜いて修理相談窓口に点検（有料）を相談するよう案内しています。",
        ],
      },
    ],
    whenPro: [
      "フィルター掃除をしても、カビやほこりのにおいが残る場合（スプレーではなく、業者の内部洗浄をご検討ください）",
      "吹き出し口の奥や送風ファンに黒い汚れが見える場合",
      "過去にスプレーで洗浄した後に、異臭・水漏れ・効きの悪さがある場合は、クリーニングの前に販売店・メーカーの点検を受けてください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "内部の洗浄は、エアコンクリーニング業者に依頼できます。お住まいの地域の業者と料金を比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "市販のエアコン洗浄スプレーを使ってもよいですか。", a: "日立は「故障の原因となるため、使用しないでください」、ダイキンは「使用はお控えください」と案内しています。シャープも、専門知識を持たない方による内部の洗浄は勧められないとしています。" },
      { q: "消臭スプレーや除菌スプレーならよいですか。", a: "ダイキンは、除菌・消臭・殺虫スプレーも、成分によって部品の故障やガス漏れ、水漏れにつながるおそれがあるとして、吹きかけを控えるよう案内しています。シャープも、消臭剤スプレーは使用できないとしています。" },
      { q: "フィルターの掃除にエアダスターを使ってもよいですか。", a: "ダイキンは、エアダスターには可燃性ガスが含まれていることが多く発火の原因になるおそれがあるとして、家電製品への使用を控えるよう案内しています。フィルターは掃除機やスポンジでほこりを取り、汚れがひどい場合は中性洗剤で洗います。" },
    ],
    sources: [SRC.hitachiSpray, SRC.hitachiClean, SRC.daikinCare, SRC.sharpSpray, SRC.sharpDeodorant, SRC.nite, ...SRC_AC_PRICES],
    related: ["aircon-self-cleaning", "aircon-fan-cleaning"],
  },
  {
    slug: "outdoor-unit-cleaning",
    kw: "室外機 掃除",
    title: "エアコン室外機の掃除方法｜メーカー公式のお手入れ範囲と、業者の室外機洗浄の料金 | クリーンナビ",
    description:
      "エアコン室外機の掃除方法を、日立・ダイキンの公式情報をもとにご説明します。自分でできる範囲（周りの片付け・手で取れるごみ・外側のから拭き）、水をかけない・分解しないなどの注意点、室外機カバーの扱い、業者の室外機洗浄オプションの公式料金を掲載しています。",
    h1: "エアコン室外機の掃除方法｜自分でできる範囲と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "日立・ダイキンの公式サイトでは、室外機について自分で行うお手入れを、吸込み口・吹き出し口の周りの片付け、手で取れるほこりや落ち葉の除去、外側のから拭きに限っています。ダイキンは「表面を拭く程度のお掃除で大丈夫」としています。",
      "日立は、室外機に直接水（お湯）をかけないこと、天板を外すなどの分解を伴うお手入れをしないこと、背面のアルミフィンに直接触れないことを注意しています。内部の汚れを洗浄したい場合は、エアコンクリーニング業者の室外機洗浄オプション（大手3社で3,300〜6,600円・大型室外機を除く）を利用できます。",
    ],
    sections: [
      {
        h2: "自分で行う室外機のお手入れの手順（日立の公式手順）",
        blocks: [
          {
            ol: [
              "吸込み口・吹き出し口の近くにある物や草、落ち葉などを取り除き、空気の通り道をふさがないようにします。",
              "手で取れる範囲で、室外機に付着したほこりや落ち葉などを取り除きます。無理に奥まで手を入れたり、部品を外したりしないでください。",
              "外側をやわらかい布でから拭きします。汚れがひどい場合は、水またはぬるま湯を含ませてよく絞った布でふき取ります。",
              "室外機凍結洗浄の機能がある機種は、取扱説明書に従って設定・使用します。",
            ],
          },
          "日立は、室外機の吸い込み部分がふさがれると風量の低下や消費電力の増加につながることがあるとして、定期的に周りを確認するよう案内しています。",
        ],
      },
      {
        h2: "室外機のお手入れで避けること",
        blocks: [
          {
            table: {
              head: ["避けること", "理由（公式の記載）", "出典"],
              rows: [
                ["室外機に直接水（お湯）をかける", "電子部品などの故障の原因になる可能性", "日立"],
                ["天板を外すなどの分解を伴うお手入れ", "安全のため", "日立"],
                ["背面の熱交換器（アルミフィン）に直接触れる", "むき出しになっていて危険", "日立"],
                ["室外機の前に物を置く", "熱気の排出や外気の取り込みのため、空気がスムーズに流れる必要がある", "ダイキン"],
                ["目の細かいカバーや、室外機全体を覆うカバーを付けたまま運転する", "風が通りにくくなる（ダイキン）。冷えや暖まりが悪くなったり異常音が出たりする原因になる場合がある（日立）", "ダイキン・日立"],
                ["カバーの上にペットボトルの水などを置く", "光を集めて断熱シートやカバーを燃やす収れん火災につながる可能性", "ダイキン"],
              ],
              note: "各社公式ページを 2026-11-20 に確認。",
            },
          },
          "日立は、室外機全体を覆うカバーはエアコン使用時に必ず外し、カバーを取り付ける際は、機種によって自動で運転を始めることがあるため、エアコン専用ブレーカーを切るか電源コードを抜くよう案内しています。",
        ],
      },
      {
        h2: "業者の室外機洗浄を利用する場合",
        blocks: [
          "大手3社とも、室外機の洗浄はエアコンクリーニングのオプションとして掲載しています。当サイトで各社の条件を同じ項目にそろえました。",
          {
            table: {
              head: ["業者", "料金（税込）", "洗浄範囲・条件（公式の記載）"],
              rows: [
                ["おそうじ本舗", "5,500円／台", "室外機本体・外装カバー・アルミフィン・プロペラ。壁掛けタイプのエアコンクリーニングと併用で注文。天吊り・屋根置きタイプは対応不可"],
                ["ダスキン", "6,600円", "エアコンクリーニングのオプション。業務用エアコンの室外機は受けていない"],
                ["おそうじ革命", "3,300円（大型室外機 9,900円）", "オプションサービス。天井に吊り下げられているタイプは対応できない場合あり"],
              ],
              note: "各社公式ページを 2026-11-20 に確認。いずれも単独での依頼ではなく、室内機のクリーニングとあわせて申し込む形です。",
            },
          },
        ],
      },
    ],
    whenPro: [
      "アルミフィンの奥まで砂ぼこりなどで目詰まりしている場合（おそうじ本舗は、目詰まりが消費電力の増加やエアコン故障の原因になる可能性があるとしています）",
      "室内機のエアコンクリーニングを頼む予定がある場合は、室外機洗浄のオプションをあわせて申し込めます",
      "天吊り・屋根置きの室外機は対応できない業者があるため、申し込み前に設置場所を伝えて確認します",
      "室外機のファンが回らない、異常な音がする場合は、クリーニングではなく販売店・メーカーの修理窓口へご相談ください",
    ],
    priceHeading: "室外機洗浄とエアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: "室外機の洗浄はエアコンクリーニングのオプションです。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: OUTDOOR_PRICES,
    ctaText: "室外機洗浄のオプションがある業者と料金を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "室外機は自分でどこまで掃除できますか。", a: "日立・ダイキンとも、周りの片付け、手で取れるほこりや落ち葉の除去、外側の拭き掃除までとしています。ダイキンは「表面を拭く程度のお掃除で大丈夫」としています。" },
      { q: "室外機にホースで水をかけて洗ってもよいですか。", a: "日立は、室外機に直接水（お湯）をかけないよう案内しています。電子部品などの故障の原因になる可能性があるためです。内部の洗浄は業者の室外機洗浄オプションをご利用ください。" },
      { q: "室外機カバーは付けてもよいですか。", a: "ダイキンは、風が通るものであれば使用しても問題ないが、目の細かいものは勧めないとしています。日立は、室外機全体を覆うカバーはエアコン使用時に必ず外すよう案内しています。" },
      { q: "室外機の洗浄だけを業者に頼めますか。", a: "おそうじ本舗は壁掛けエアコンクリーニングとの併用での注文としており、ダスキン・おそうじ革命もオプションとして掲載しています。単独で依頼できるかは、各業者にお問い合わせください。" },
    ],
    sources: [SRC.hitachiOutdoor, SRC.hitachiSudden, SRC.hitachiNotCool, SRC.daikinCare, ...SRC_AC_PRICES],
    related: ["aircon-not-cooling", "aircon-self-cleaning"],
  },
  {
    slug: "gas-stove-cleaning",
    kw: "ガスコンロ 掃除",
    title: "ガスコンロの掃除方法｜五徳・バーナー・天板のメーカー公式の手入れと業者に頼む目安 | クリーンナビ",
    description:
      "ガスコンロの掃除方法を、リンナイとパロマのビルトインコンロ取扱説明書をもとに部品別（五徳・バーナーキャップ・トッププレート・バーナー部）に整理しました。五徳の煮洗い、使えない洗剤・道具、お手入れ前の確認と、キッチンクリーニング業者の公式料金を掲載しています。",
    h1: "ガスコンロの掃除方法｜五徳・バーナー・天板の公式の手入れと業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "リンナイとパロマのビルトインコンロ取扱説明書では、お手入れは機器が冷めてからガス栓を閉め、手袋をして行い、台所用中性洗剤を薄めて使うよう案内しています。汚れや煮こぼれはそのつど拭き取り、最後に水拭きと乾拭きで洗剤や水気を残さないことが共通の手順です。",
      "五徳（ごとく）の焦げ付きが落ちない場合は、両社とも大きな鍋に入れて約30分加熱する「煮洗い」を挙げています。一方、重曹・クレンザー・金属たわし・スプレー式洗剤の直接噴霧などは、機種や部品によって使えません。自分で落とせない焦げ付きや、ガス台を含むキッチン全体の汚れは、業者のキッチンクリーニングで対応しています。",
    ],
    sections: [
      {
        h2: "お手入れの前に確認すること（リンナイ・パロマ共通）",
        blocks: [
          {
            ol: [
              "機器が冷めていることを確認します（パロマは、機器が冷めるまで時間がかかると注記しています）。",
              "ガス栓を閉めます。",
              "リンナイの機種はロックをして電源を切り、パロマの機種は乾電池を取り外します。",
              "手袋をはめます。機器の突起物などでけがをすることがあるためです（パロマ）。",
            ],
          },
          "パロマは、機器を水につけたり水をかけたりしないよう案内しています（不完全燃焼・故障のおそれ）。スプレー式の洗剤は、両社とも機器に直接かけず、布やスポンジに含ませてから使うよう求めています。機器内部に洗剤が入ると、電子部品などに付着して作動不良や腐食の原因になるためです。可燃性スプレー・浸透液・潤滑剤は、引火して火災の原因になるため使いません。",
        ],
      },
      {
        h2: "部品別のお手入れ方法",
        blocks: [
          "リンナイとパロマの取扱説明書の手順を、当サイトで部品ごとにそろえました。",
          {
            table: {
              head: ["部品", "ふだんのお手入れ", "落ちないとき", "注意点"],
              rows: [
                ["五徳（ごとく）", "台所用中性洗剤で洗い、乾いた布で水気をふき取る", "熱めのお湯で浸し置き→中性洗剤で水洗い。それでも落ちなければ、水を入れた大きな鍋に沈めて約30分加熱する煮洗い（冷ましてから水洗い）", "リンナイのステンレス製の五徳は、クリームクレンザーとスポンジの硬い面も使えるが光沢がなくなる場合がある。炎で熱せられた変色は異常ではない（リンナイ）"],
                ["バーナーキャップ", "中性洗剤で水洗いし、水気を十分にふき取ってから取り付ける", "炎口の目づまりは歯ブラシやつまようじで取り除く", "分解しない（リンナイ）。浮き・傾き・裏返しのまま使うと点火しない、不完全燃焼などのおそれ"],
                ["トッププレート（天板）", "中性洗剤を含ませたやわらかい布で拭き、乾いた布で仕上げる", "洗剤と水を含ませたキッチンペーパーで湿らせて汚れを浮かせる。それでも取れなければ、くしゃくしゃにしたラップにガラストップ専用クリーナー（リンナイ）またはクリームクレンザー（パロマ）を付けてこする", "パロマは、クリームクレンザーとメラミンフォームスポンジをトッププレートにのみ使うよう案内"],
                ["バーナー本体・電極・炎検知部", "やわらかい布で表面の汚れをふき取る", "—", "洗剤を流し込まない（機器内の腐食の原因・パロマ）。電極の先端はとがっているため、けがに注意"],
                ["温度センサー", "片手を添え、水を含ませて固くしぼった布で上面と側面をふく", "—", "強い力を加えると傾き・変形して鍋底に密着しなくなる"],
              ],
              note: "リンナイ RRB71W15GV系（2014年作成）とパロマ PD-N34WV ほか（2016年作成）の取扱説明書を 2026-11-20 に確認。機種によって部品の材質や使える道具が異なるため、お手持ちの機種の取扱説明書を優先してください。",
            },
          },
        ],
      },
      {
        h2: "使えない道具・洗剤",
        blocks: [
          "パロマの取扱説明書は、コンロのお手入れに「適さないもの」として次を挙げています。",
          {
            ul: [
              "道具：スポンジの硬い面・ナイロンたわし・硬い歯ブラシ・たわし・金属たわし",
              "洗剤など：重曹・シンナー・ベンジン・酸性洗剤・弱酸性洗剤・アルカリ性洗剤・弱アルカリ性洗剤・クレンザー・みがき粉・歯みがき粉・アルコール・漂白剤",
            ],
          },
          "リンナイも、コンロのお手入れでは硬いブラシやたわし、中性洗剤以外の洗剤を使わないよう案内しています（はがれ・変色・シミ・傷・さびの原因）。ステンレスの五徳とバーナーキャップ上部のクリームクレンザーのように、部品ごとの例外は取扱説明書に記載があります。",
          "五徳などを食器洗い乾燥機で洗う場合は、専用洗剤と食器洗い乾燥機の取扱説明書を確認します。両社とも、食器洗い乾燥機での洗浄や煮洗いで、変色したりツヤがなくなったりする場合があるとしています。",
        ],
      },
      {
        h2: "定期点検と部品の交換",
        blocks: [
          "リンナイ・パロマとも、支障がない場合でも年1回程度の定期点検（有料）をすすめています。煮こぼれや鍋をひっくり返すなどで機器の内部に多量の煮汁が入った場合も、点検をすすめています。",
          "バーナーキャップと五徳は消耗部品です。バーナーキャップが薄くなったり変形して炎がふぞろいになった場合は、販売店やメーカーに交換部品を問い合わせます。",
        ],
      },
    ],
    whenPro: [
      "煮洗いやクリームクレンザーを試しても、五徳・グリルの焦げ付きが落ちない場合",
      "ガス台だけでなく、シンク・蛇口・壁面・グリルなどキッチン全体をまとめて掃除したい場合（おそうじ本舗のキッチンクリーニングは、ガス台またはIH・五徳・グリルの扉・焼網・皿を範囲に含めています）",
      "おそうじ革命は、ガス台の頑固な汚れを専用洗剤につけ置きして分解し、焦げ付きはある程度削って磨くとしています（魚焼きグリルは引き出し・受け皿・網のみで内部は含まない）",
      "点火しない、炎がふぞろい、煮汁が内部に入ったといった場合は、クリーニングではなく販売店・メーカーの点検（有料）をご利用ください",
    ],
    priceHeading: "キッチンクリーニングの料金（大手3社の公式料金）",
    priceLead: "ガス台・五徳の洗浄は、業者のキッチンクリーニングの範囲に含まれています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: KITCHEN_PRICES,
    ctaText: "キッチンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: [
      { href: "/services/kitchen/", label: "キッチンクリーニング業者を探す" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "五徳の焦げ付きはどうすれば落ちますか。", a: "パロマは、熱めのお湯で浸し置きしてから中性洗剤で洗い、それでも落ちなければ大きな鍋に水と五徳を入れ、沸騰した状態で30分程度加熱する煮洗いを案内しています。リンナイも約30分の煮洗いを挙げています。十分に冷ましてから水洗いし、水気をふき取ります。" },
      { q: "ガスコンロの掃除に重曹は使えますか。", a: "パロマの取扱説明書は、重曹をお手入れに「適さないもの」に挙げています。使える洗剤は機種や部品によって異なるため、お手持ちの取扱説明書をご確認ください。両社とも、基本は台所用中性洗剤を薄めて使うよう案内しています。" },
      { q: "ガラストップの天板の焦げ付きはどう落としますか。", a: "洗剤と水を含ませたキッチンペーパーで汚れを湿らせ、浮いてきたらやわらかい布でふき取ります。それでも落ちない場合、リンナイはガラストップ専用クリーナー、パロマはクリームクレンザーを、くしゃくしゃにしたラップに付けてこする方法を案内しています。" },
      { q: "掃除の後に火がつきにくくなりました。", a: "バーナーキャップの浮き・傾き・裏返しがないかを確認します。両社とも、誤った取り付けでは点火しない場合や不完全燃焼のおそれがあるとしています。汚れや水気が残っていても点火しにくくなるため（パロマ）、水気を十分にふき取ってから取り付けます。改善しない場合は販売店やメーカーにご相談ください。" },
    ],
    sources: [SRC2.rinnaiManual, SRC2.palomaManual, { name: "おそうじ本舗 キッチンクリーニング", url: HONPO_KITCHEN }, { name: "ダスキン キッチンクリーニング", url: DUSKIN_KITCHEN }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["sink-water-stains"],
  },
  {
    slug: "daikin-aircon-cleaning",
    kw: "ダイキン エアコン 掃除",
    title: "ダイキンのエアコン掃除｜自分でできる範囲・内部クリーン・ダストボックスの公式の手入れと業者に頼む目安 | クリーンナビ",
    description:
      "ダイキンのエアコン掃除を、ダイキン工業の公式情報（CLUB DAIKIN・製品ページ・お知らせ）で整理しました。自分でできる範囲、水内部クリーン・ストリーマ内部クリーンの使い方、ダストボックスのお手入れ時期、業者に頼むときのダイキン製の注意点と公式料金を掲載しています。",
    h1: "ダイキンのエアコン掃除｜公式の手入れ方法と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "ダイキンは、利用者が自分で行うエアコン掃除を、フィルター類と外から見える前面パネル・フラップ、室外機の表面に限っています。お掃除機能のない機種のフィルター掃除は2週間に1回が目安です。お手入れの前には運転を停止して電源プラグを抜くかブレーカーを切り、40℃以上のお湯・揮発性の溶剤・たわし・消臭剤などのスプレーは使いません。",
      "熱交換器の日常的なお手入れは、機種に搭載された「水内部クリーン」（約1か月に1回が目安）や「ストリーマ内部クリーン」（冷房・除湿の停止後に自動運転）に任せ、内部の汚れが気になる場合は販売店かダイキンコンタクトセンターに相談するよう案内しています。業者に内部洗浄を頼む場合、おそうじ本舗はダイキン製の完全分解洗浄に対応できる店舗が限られるとしています。",
    ],
    sections: [
      {
        h2: "ダイキンが案内している「自分でできる範囲」",
        blocks: [
          {
            table: {
              head: ["部位", "自分でできること", "ダイキンの案内"],
              rows: [
                ["エアフィルター（お掃除機能なし）", "掃除機でほこりを吸い取る。汚れがひどい場合は中性洗剤を少し入れた水でなで洗いし、日陰で乾かす", "2週間に1回が目安。掃除をしないと冷房時の消費電力が25％高くなるとの同社試算"],
                ["ダストボックス（フィルター自動お掃除機能付き）", "取り外して、ダストボックスとダストブラシのほこりを掃除機で吸い取る", "おそうじランプが点滅したらお手入れ。CLUB DAIKIN は目安を約3年〜10年、2025年モデルA・Dシリーズ等の製品ページは「1年に1度お手入れ」と記載"],
                ["前面パネル・フラップ", "水を含ませてよく絞ったやわらかい布で拭く。汚れがひどいときは中性洗剤を溶かした水を使い、最後に水拭き", "外から見える部分が自分でできる範囲"],
                ["熱交換器・送風ファン", "行わない", "ほこり取り棒などでの送風ファンの掃除は、けがやファン破損のおそれがあるため控える"],
                ["室外機", "表面を拭く、手でつまんで取れる葉や枝を取り除く", "前に物を置かない。目の細かいカバーは勧めない"],
              ],
              note: "ダイキン CLUB DAIKIN の2記事と製品ページを 2026-11-20 に確認し、当サイトで部位ごとに整理。",
            },
          },
        ],
      },
      {
        h2: "ダイキンの内部クリーン機能（製品ページの記載）",
        blocks: [
          "ダイキンは、内部を自分でクリーニングしなくても、使うたびにエアコンの機能でお手入れできるとしています。製品ページの記載を機能ごとにまとめました。搭載の有無は機種・年式で異なります。",
          {
            table: {
              head: ["機能", "内容", "目安・条件"],
              rows: [
                ["水内部クリーン（結露水洗浄）", "冷房運転で出た結露水で熱交換器の汚れを洗い、ストリーマ照射や送風・加熱乾燥を行う", "約1か月に1回。室温が大きく下がるため不在時に使う。付着したほこりやカビをすべて落とせる機能ではない。1回の電気代は最大52円（2025年モデルA・Dシリーズ）〜63円（Eシリーズ）"],
                ["水内部クリーン（加湿水洗浄）", "Rシリーズ「うるさらX」は、加湿水も使って熱交換器を洗浄", "加湿水洗浄の電気代は最大109円"],
                ["ストリーマ内部クリーン", "冷房・除湿運転の停止後、自動でストリーマ照射と乾燥運転を行う。対象部位は熱交換器と気流通路", "購入時の設定は「入」"],
                ["フィルター自動お掃除", "積算で約1日運転した後の停止時に、ブラシがフィルターのほこりをかき取ってダストボックスに回収", "油汚れやたばこのヤニが付く環境では取り切れない場合がある。室温10℃以下では運転しない"],
                ["抗ウイルスフィルター", "—", "交換の目安は約3年"],
              ],
              note: "ダイキン工業の製品ページ（2025年モデルAシリーズ・Dシリーズ、Eシリーズ、Rシリーズ）と CLUB DAIKIN を 2026-11-20 に確認。CLUB DAIKIN は、室内温度23℃未満または屋外温度1℃未満のときは水内部クリーン運転ができない（加湿機能付きのR・Dシリーズなどを除く）としています。",
            },
          },
          "お使いの機種の取扱説明書は、CLUB DAIKIN に製品を登録すると「My機器リスト」からダウンロードできると同社は案内しています。",
        ],
      },
      {
        h2: "洗浄スプレーや自分での内部洗浄を控える理由",
        blocks: [
          "ダイキンは、市販のエアコン洗浄スプレーやリンス剤の使用を控えるよう求め、理由を次のように説明しています。",
          {
            ul: [
              "流しきれなかった洗剤と汚れが熱交換器にこびりつき、ニオイやカビの原因になる",
              "汚れがドレンパン・ドレンホースに残って詰まる、薬剤で熱交換器のコーティングやドレンパンが傷み、水飛び・水漏れが起きる",
              "冷媒配管が腐食してガス漏れが起き、冷えない・暖まらない原因になる",
              "温度センサーや電気部品にかかると故障する。冬場に十分換気せず暖房運転すると、揮発したガスに静電気などで引火するおそれがある",
            ],
          },
          "また同社は、過去にエアコンのクリーニングを行った後に、焦げ臭いにおい、風量や温度を調節できない、停止しても止まらない、すぐに停止する、異常な振動や音、室内機からの水漏れがある場合は、運転を停止して電源プラグを抜き、販売店またはダイキンコンタクトセンターに点検（有料）を依頼するよう案内しています（2015年7月30日のお知らせ）。",
          "2023・2024・2025年モデルの「FNシリーズ」で水漏れが起きた場合は、同社が無償点検・修理を案内している事象に当たる可能性があります（2025年11月28日発表）。クリーニング業者ではなく、同社の専用窓口にご連絡ください。",
        ],
      },
      {
        h2: "業者に頼むときのダイキン製の注意点",
        blocks: [
          {
            ul: [
              "おそうじ本舗は、東芝・ダイキン製のエアコンの完全分解洗浄（ドレンパン・送風ファンを外して洗う）に対応している店舗が限られるとしています。希望する場合は問い合わせ欄に台数とメーカー名を書いて申し込み、オプション料金は他メーカーの8,800円に対して12,100円です。",
              "ダスキンは、本体の両側にファンが付いているタイプや特殊構造のタイプは、分解・組立に時間がかかるため「フィルター自動お掃除機能付きエアコンクリーニング」の料金になるとしています。",
              "おそうじ本舗は、製造から9年以上経過したエアコンはサービスを断る、または保証できない場合があるとしています。申し込む前に、エアコンの製造年をご確認ください。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "水内部クリーンやストリーマ内部クリーンを使っても、においや吹き出し口の奥の汚れが残る場合（ダイキンは、付着したほこりやカビをすべて落とせる機能ではないとしています）",
      "フィルター自動お掃除機能付きでも、油汚れやたばこのヤニが付く環境でフィルターの汚れが取り切れない場合",
      "送風ファン・ドレンパンまで洗いたい場合は、ダイキン製の完全分解洗浄に対応しているかを業者に確認します",
      "過去の洗浄後に焦げ臭い・水漏れなどの症状がある場合や、FNシリーズの水漏れは、クリーニングではなく販売店・ダイキンの窓口へご相談ください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: "ダイキン製のエアコンも、業者のエアコンクリーニングで内部を洗浄できます。お掃除機能の有無で料金が分かれます。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: DAIKIN_PRICES,
    ctaText: "ダイキン製のお掃除機能付きエアコンに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "ダイキンのエアコンのフィルターはどのくらいの頻度で掃除しますか。", a: "お掃除機能が付いていない機種は、2週間に1回が目安です。お掃除機能付きの機種は、自動掃除をオンにしていれば基本的にフィルター掃除は不要で、汚れが気になる場合に掃除機か水洗いでお手入れするよう案内されています。" },
      { q: "水内部クリーンはどのくらいの頻度で使えばよいですか。", a: "ダイキンは約1か月に1回をすすめています。室温が大きく下がるため、外出時など部屋に人がいないときに使います。付着したほこりやカビをすべて落とせる機能ではありません。" },
      { q: "ダストボックスのお手入れはいつ必要ですか。", a: "おそうじランプが点滅したらお手入れします。CLUB DAIKIN は目安を約3年〜10年（機種・使用状況による）とし、2025年モデルのA・Dシリーズなどの製品ページは、使用環境で汚れ具合が異なるため1年に1度のお手入れを求めています。" },
      { q: "洗浄スプレーを使ってしまいました。", a: "ダイキンは、すぐに電源プラグを抜いて運転せず、部屋を十分に換気してからしばらく冷房運転をするよう案内しています。その後、異臭や効きの悪さがある場合は、メーカーサービスへのメンテナンス依頼をすすめています。" },
    ],
    sources: [SRC.daikinCare, SRC.daikinFilter, SRC2.daikinA2025, SRC2.daikinD2025, SRC2.daikinE, SRC2.daikinR, SRC.daikinNotice, SRC.daikinFN, ...SRC_AC_PRICES],
    related: ["aircon-self-cleaning", "aircon-cleaning-spray"],
  },
  {
    slug: "toilet-citric-acid",
    kw: "トイレ掃除 クエン酸",
    title: "トイレ掃除にクエン酸は使える？便器メーカーの洗剤の可否と塩素系との併用の危険 | クリーンナビ",
    description:
      "トイレ掃除にクエン酸を使うときの注意点を、LIXILの洗剤の可否表（便器・タンク内部・便座）、TOTOのお手入れ資料、国民生活センターの塩素系洗浄剤の調査で整理しました。輪ジミの落とし方と、尿石を業者に頼む場合の公式料金も掲載しています。",
    h1: "トイレ掃除にクエン酸を使うときの注意点と、業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "LIXILは、便器の黄ばみ・茶色の汚れを尿石（尿成分が固まったもの）とし、小便器の尿石は市販の酸性の尿石除去剤で落とすよう案内しています。クエン酸は酸性のため、LIXILの洗剤の可否表では「酸性」の欄が目安です。この表では、酸性の洗剤は陶器の便器・タンク外部には使える一方、タンク内部と便座・機能部には使えないとされています。",
      "国民生活センターには、塩素系の洗浄剤とクエン酸を含む製品を同時に使って体調を崩した相談が寄せられています。塩素系の洗浄剤は単独で使い、酸性の洗剤を使うときは便座・便フタを開けて換気します。自分で落とせない尿石は、便器の水を抜いて洗浄する業者のトイレクリーニングで対応しています。",
    ],
    sections: [
      {
        h2: "LIXILの洗剤の可否表（便器・タンク・便座）",
        blocks: [
          "LIXILは、トイレには材質や表面処理の異なる部分があり、箇所によって使えない洗剤があるとしています。同社のQ&Aの表は次のとおりです。",
          {
            table: {
              head: ["洗剤の液性", "陶器部：便器・タンク外部", "陶器部：タンク内部", "樹脂部分：便座・機能部"],
              rows: [
                ["酸性", "使える", "使えない", "使えない"],
                ["弱酸性", "使える", "使えない", "使える"],
                ["中性", "使える", "使える", "使える"],
                ["弱アルカリ性", "使える", "使えない", "使える"],
                ["アルカリ性", "使えない", "使えない", "使えない"],
              ],
              note: "LIXIL Q&A を 2026-11-20 に確認。LIXIL 製品の案内のため、他社製品はお手持ちの取扱説明書をご確認ください。軽い汚れには、トイレ用中性洗剤を使うよう同社は案内しています。",
            },
          },
          "TOTOのお手入れ資料（組み合わせ便器・ウォシュレット）は、便器の水あかなどひどい汚れにはトイレ用洗剤を汚れに直接かけてスポンジやブラシでこするよう案内し、業務用の強酸性・強アルカリ性洗剤、研磨剤入りの洗剤、フッ素系洗剤、金属ブラシ、研磨剤入りのナイロンたわし、クレンザー、シンナー、ベンジンは使わないものに挙げています。",
        ],
      },
      {
        h2: "クエン酸・酸性の洗剤を使うときの注意",
        blocks: [
          {
            ul: [
              "便器に酸性の洗剤を使うときは、便座・便フタを開けて、トイレ室内を十分に換気します。酸性の洗剤を続けて使うことは控えます。洗剤から気化したガスで、シャワートイレの内部部品が故障する原因になるためです（LIXIL）。",
              "タンクの中と便座には、酸性の洗剤を使いません（LIXILの可否表）。",
              "研磨剤入りの洗剤や、金属製・研磨剤入りのブラシは、陶器の表面を傷つけるおそれがあります（LIXIL）。",
              "アクアセラミックの便器に撥水作用のある洗剤を使って表面が水をはじくようになった場合は、撥水成分を含まない台所用などの中性洗剤で掃除すると親水性が戻るとLIXILは案内しています。",
            ],
          },
          "塩素系の洗浄剤との組み合わせには、特に注意が必要です。国民生活センターは2026年3月18日に、浴室のカビ取りなどをうたう塩素系洗浄剤を他の洗剤と一緒に使ったときの塩素ガス濃度を調べ、スプレータイプの塩素系洗浄剤と酸性洗浄剤を浴室内で一緒に使うと、数分後に塩素ガス濃度が16ppmを超えたと公表しました。寄せられた相談には、塩素系洗浄剤とクエン酸を同時に使って喉の痛みや頭痛、おう吐が出た例があります。同センターは、塩素系洗浄剤は必ず単独で使い、換気と保護具の着用を呼びかけています。",
          "東京都保健医療局も、酸性タイプの洗浄剤（トイレ用洗浄剤など）と塩素系の製品を混ぜると有毒な塩素ガスが発生するとして、ゴム手袋・マスクの着用と換気を求めています。",
        ],
      },
      {
        h2: "LIXILが案内する輪ジミの落とし方（トイレットペーパー湿布法）",
        blocks: [
          "LIXILは、便器の水面の輪ジミを汚れの種類で分け、黒ずみ・ピンク汚れはカビやホコリなどの汚れと水アカが結びついたもの、黄ばみ・茶色の汚れは尿石、白いウロコ状の汚れは水道水の成分（シリカなど）が蓄積した水アカと説明しています。手順は次のとおりです。",
          {
            ol: [
              "シャワートイレや暖房便座の電源を切るか、コンセントを抜きます。",
              "バケツ1杯の水を勢いよく流し、便器内の水位を下げます。",
              "汚れている部分にトイレットペーパーを敷き、中性洗剤（弱酸性洗剤も可）をたっぷり染み込ませて約30分置きます。便フタ・便座は上げたままにします。",
              "ペーパーと一緒にトイレブラシでこすり落とし、そのまま水を流します。",
              "落ちない場合は、水を含ませたメラミンスポンジでやさしくこすります。",
            ],
          },
          "LIXILのこの手順は中性洗剤を基本にしています。尿石除去剤やクエン酸などの酸性のものを使う場合は、上の可否表と換気の注意を守り、塩素系の洗剤とは別の日に使うなど、同時に使わないようにします。",
        ],
      },
    ],
    whenPro: [
      "湿布法やメラミンスポンジでも黄ばみ・尿石が落ちない場合（おそうじ本舗は、便器内部の水を抜いてから専用洗剤で洗い、洗剤では落ちない輪ジミ・尿石まで落とすとしています）",
      "便器の縁の裏や便座の下、床・壁への尿はねまで、トイレ全体をまとめて掃除したい場合",
      "タンクの中の汚れが気になる場合（酸性の洗剤はタンク内部に使えないため、ダスキンのロータンク内除菌クリーニングやおそうじ革命のタンク内清掃などのオプションがあります）",
      "掃除をしても水漏れ・流れの悪さがある場合は、クリーニングではなくメーカーや販売店の修理窓口へご相談ください",
    ],
    priceHeading: "トイレクリーニングの料金（大手3社の公式料金）",
    priceLead: "尿石・黄ばみの除去は、業者のトイレクリーニングの範囲に含まれています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: TOILET_PRICES,
    ctaText: "トイレクリーニングの作業内容と料金の目安をご確認いただけます。",
    cta: [
      { href: "/services-detail/toilet/", label: "トイレクリーニングの内容を見る" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "クエン酸でトイレの黄ばみは落ちますか。", a: "LIXILは、黄ばみ・茶色の汚れを尿石とし、市販の酸性の尿石除去剤で落とすよう案内しています。クエン酸も酸性ですが、汚れの量や付いてからの期間で落ち方は変わります。落ちない場合は、便器の水を抜いて洗浄する業者のトイレクリーニングをご検討ください。" },
      { q: "トイレのタンクの中にクエン酸を入れてもよいですか。", a: "LIXILの可否表では、陶器部のタンク内部には酸性・弱酸性の洗剤が使えないとされています。タンクの中は中性洗剤でお手入れするか、業者のタンク内清掃オプションをご利用ください。" },
      { q: "クエン酸と塩素系のトイレ用洗剤を一緒に使ってもよいですか。", a: "使わないでください。酸性の洗剤と塩素系の洗浄剤が混ざると有毒な塩素ガスが発生します。国民生活センターには、塩素系洗浄剤とクエン酸を同時に使って体調を崩した相談が寄せられており、同センターは塩素系洗浄剤を必ず単独で使うよう呼びかけています。" },
      { q: "便座にクエン酸スプレーを使ってもよいですか。", a: "LIXILの可否表では、便座・機能部（樹脂部分）に酸性の洗剤は使えないとされています（弱酸性は可）。便座は中性洗剤でお手入れするのが基本です。" },
    ],
    sources: [SRC2.lixilDetergent, SRC2.lixilShippu, SRC2.lixilUrinal, SRC2.totoToilet, SRC2.kokusen, SRC2.tokyoDetergent, { name: "おそうじ本舗 トイレクリーニング", url: HONPO_TOILET }, { name: "ダスキン トイレクリーニング", url: DUSKIN_TOILET }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bath-floor-black-stains"],
  },
  {
    slug: "wallpaper-stain-removal",
    kw: "壁紙 汚れ落とし",
    title: "壁紙の汚れ落とし｜素材別に壁紙メーカーが案内する方法と、業者の壁紙クリーニング料金 | クリーンナビ",
    description:
      "壁紙（クロス）の汚れ落としを、サンゲツとリリカラの公式のお手入れ方法で素材別（ビニル・フィルム汚れ防止・紙・織物・珪藻土）に整理しました。使ってはいけない洗剤、はがれの直し方、業者の壁紙クリーニング・壁紙染色の公式料金を掲載しています。",
    h1: "壁紙（クロス）の汚れ落とし｜素材別の公式の方法と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "サンゲツとリリカラは、一般的なビニル壁紙に付いた飲食物などの汚れを、かたく絞ったスポンジやタオルで吸い取るように拭き、落ちにくい場合は水で薄めた中性洗剤を使うよう案内しています。洗剤が表面に残ると変色の原因になるため、最後に真水かぬるま湯で拭き取ります。強い洗剤やシンナーなどの有機溶剤は使いません。",
      "紙・織物の壁紙は水拭きでシミになるため、乾いた布で吸い取る、ブラシ付きの掃除機を使うなど方法が異なります。自分で落とせないヤニ・手あかは業者の壁紙クリーニング、拭いても戻らないくすみは壁紙染色や貼り替えが選択肢です。",
    ],
    sections: [
      {
        h2: "壁紙の種類別の汚れの落とし方",
        blocks: [
          "壁紙は種類によってお手入れの方法が違います（サンゲツ）。サンゲツとリリカラの公式のお手入れ方法を、当サイトで同じ項目にそろえました。",
          {
            table: {
              head: ["壁紙の種類", "汚れが付いたとき", "使わないもの・注意"],
              rows: [
                ["一般ビニル壁紙", "かたく絞ったスポンジやタオルで、汚れを吸い取るように拭く。落ちにくい場合は、食器用の中性洗剤を表示どおり水で薄めて使い、真水かぬるま湯で洗剤を拭き取ってから乾拭き", "強い洗剤・シンナー・ベンジンなどの有機溶剤（変色・表面破損）。強くこすると凹凸がつぶれたりキズが付いたりする。油性マジックやクレヨンは拭き取れない（リリカラ）"],
                ["フィルム汚れ防止壁紙", "かたく絞ったスポンジやタオルで水拭き。落ちにくい場合は中性洗剤や消毒用アルコール（サンゲツ）。歯ブラシでこするとより効果的（リリカラ）", "表面のフィルムを硬いもの・鋭利なもので傷つけると、その部分の汚れ防止機能が損なわれる。油性マジックやクレヨンも落とせる場合がある（リリカラ）"],
                ["紙壁紙", "水汚れはすぐに乾いた布やティッシュで、軽くたたくように吸い取る。手あかは消しゴムで軽くこする", "水拭き（シミの原因）。強くこすると破れる。一度染み込んだ水汚れは拭き取れない（リリカラ）"],
                ["織物壁紙", "ほこりは丸ブラシを付けた掃除機で取る。汚れは乾いたやわらかい布でやさしく拭く", "濡れたタオルや洗剤（シミの原因・サンゲツ）"],
                ["珪藻土壁紙", "軽い汚れは白い消しゴム。目立つ汚れは、かたく絞った布でたたくようにして落とす", "力を入れて拭く（表面破損・サンゲツ）"],
              ],
              note: "サンゲツ「壁紙のお手入れ方法」とリリカラ「お手入れ便利帳」を 2026-11-20 に確認。洗剤を使う前に、壁面の目立たないところで試してください（リリカラ）。",
            },
          },
        ],
      },
      {
        h2: "拭くときの注意と、ふだんのお手入れ",
        blocks: [
          {
            ul: [
              "壁紙のつなぎ目に逆らわないように拭きます。つなぎ目に水が入ると、はがれの原因になります（リリカラ）。",
              "床を掃除する前に、ハタキで壁のほこりを落とします。凹凸の大きい壁紙はほこりがたまりやすく、たまったほこりが湿気を吸うとカビの原因にもなります（サンゲツ）。",
              "定期的に、掃除機のブラシタイプのノズルでほこりを取ります（サンゲツ）。",
              "こまめな換気で室内の湿気を下げることも、リリカラは日常のお手入れに挙げています。",
            ],
          },
        ],
      },
      {
        h2: "はがれ・キズの直し方",
        blocks: [
          "ビニル壁紙の部分的なはがれは、ごみやほこりを取り除いてから、壁紙の裏に文具用の糊や木工用ボンドをはみ出さないように塗って貼り付けます（サンゲツ）。リリカラは、下地に残った古い糊を紙ヤスリで落としてから貼るよう案内し、はみ出した接着剤は変色の原因になるため、固く絞った布で拭き取るとしています。",
          "壁紙が古くなって硬くなっている場合は、部分的な補修では対応できないため、貼り替えをすすめています（サンゲツ）。家具などで付いた引っかきキズや破れも、元どおりに補修することは難しいとリリカラは説明しています。",
        ],
      },
      {
        h2: "業者に頼む場合の選択肢（おそうじ本舗の公式メニュー）",
        blocks: [
          {
            table: {
              head: ["メニュー", "内容", "条件（公式の記載）"],
              rows: [
                ["壁紙クリーニング", "専用洗剤で壁紙を洗浄し、ヤニ・手アカ・ホコリなどの汚れを落とす", "20㎡以下は一律料金。20㎡を超える場合や高所作業は別途。汚れの状況により完全に除去できない場合あり"],
                ["壁紙染色", "壁紙を貼り替えずに、表面に染料を塗り重ねて仕上げる。日焼け痕や落書きの相談も受けている", "染色できるのはビニールクロス。漆喰・土壁・塗り壁・珪藻土・紙クロス・防水・防汚加工された壁紙などは対象外。事前にスタッフが見積もりと内容確認を行う"],
              ],
              note: "おそうじ本舗の公式ページを 2026-11-20 に確認。同社のキッチンクリーニングの範囲は「キッチン壁面（壁紙を含まず）」です。",
            },
          },
        ],
      },
    ],
    whenPro: [
      "たばこのヤニや手あかが広い範囲に付き、中性洗剤で拭いても落ちない場合",
      "汚れ防止フィルムのない壁紙に油性マジックやクレヨンが付いた場合（リリカラは拭き取れないとしています）。ビニールクロスなら壁紙染色、それ以外は貼り替えの相談になります",
      "日焼けやくすみで部屋全体が暗く見える場合（壁紙染色は貼り替えより廃材が出ないとおそうじ本舗は説明しています）",
      "紙・織物・珪藻土の壁紙は、自分で落とせる範囲が狭く、染色の対象外の素材もあるため、見積もり時に壁紙の種類を伝えます",
    ],
    priceHeading: "壁紙クリーニング・壁紙染色の料金（おそうじ本舗の公式料金）",
    priceLead: "壁紙の洗浄と染色は、おそうじ本舗が公式サイトに料金を掲載しています。通常価格は次のとおりです。",
    prices: WALLPAPER_PRICES,
    ctaText: "お住まいの地域のハウスクリーニング業者と、箇所別の料金の目安をご確認いただけます。",
    cta: [
      { href: "/services/", label: "ハウスクリーニング業者を探す" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "壁紙の汚れにはどの洗剤を使えばよいですか。", a: "ビニル壁紙なら、食器用の中性洗剤を表示どおり水で薄めて使います（リリカラ）。洗剤が残ると変色の原因になるため、真水かぬるま湯で拭き取ってから乾拭きします。強い洗剤やシンナーなどの有機溶剤は使いません（サンゲツ・リリカラ）。" },
      { q: "壁紙に付いた油性ペンの落書きは落とせますか。", a: "リリカラは、一般のビニル壁紙では油性マジックやクレヨンは拭き取れないとしています。表面にフィルムがラミネートされた汚れ防止壁紙では落とせる場合があります。拭き取れない場合、おそうじ本舗は落書きした壁紙の染色の相談を受けています。" },
      { q: "紙の壁紙を水拭きしてもよいですか。", a: "リリカラは、紙壁紙はシミの原因になるため水拭きしないよう案内しています。水汚れは乾いた布やティッシュで軽くたたくように吸い取り、手あかは消しゴムで軽くこすります。" },
      { q: "壁紙の掃除を業者に頼むと料金はいくらですか。", a: "おそうじ本舗の壁紙クリーニングは20㎡以下一律で11,000円、壁紙染色は20㎡以下（天井を除く壁面）一律で22,000円です（2026-11-20 確認・税込）。20㎡を超える場合や高所作業は別途見積もりになります。" },
    ],
    sources: [SRC2.sangetsu, SRC2.lilyVinyl, SRC2.lilyPaper, { name: "おそうじ本舗 壁紙クリーニング", url: HONPO_CLOTH }, { name: "おそうじ本舗 壁紙染色", url: HONPO_DYEING }, { name: "おそうじ本舗 トイレクリーニング（壁紙染色オプション）", url: HONPO_TOILET }],
    related: [],
  },
  {
    slug: "bath-floor-black-stains",
    kw: "お風呂 床 黒ずみ",
    title: "お風呂の床の黒ずみの落とし方｜TOTO・LIXILの公式の手入れと業者に頼む目安 | クリーンナビ",
    description:
      "お風呂の床の黒ずみの落とし方を、TOTOとLIXILの公式のお手入れ方法で整理しました。黒ずみ・皮脂汚れ・金属石けんの違い、ほっカラリ床・サーモフロアの手入れ、カビ取り剤と酸性洗剤を一緒に使わない理由（国民生活センターの調査）、浴室クリーニングの公式料金を掲載しています。",
    h1: "お風呂の床の黒ずみの落とし方｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "TOTOは、壁・床のタイルや目地に付いた黒ずみの正体をカビとし、発生してすぐなら浴室用中性洗剤で、落ちにくい場合はカビ取り剤で落とすよう案内しています。床の皮脂汚れには、たわしや浴室用ブラシに浴室用クリームクレンザーを付けてこすり洗いする方法を挙げています。",
      "LIXILは、サーモフロアの洗い場のコーナー付近に付いた、洗剤で取れない黒ずみを、先割れ加工の浴室用ブラシでかき出すよう案内しています。塩素系のカビ取り剤は酸性の洗剤と一緒に使うと塩素ガスが発生するため、単独で、換気して使います。自分で落とせない黒ずみは、業者の浴室クリーニングで対応しています。",
    ],
    sections: [
      {
        h2: "床の汚れの種類と落とし方（TOTO・LIXIL）",
        blocks: [
          "TOTOの「汚れの基礎知識」とLIXILのお手入れ方法を、当サイトで汚れの種類ごとにまとめました。",
          {
            table: {
              head: ["汚れ", "メーカーの説明", "落とし方"],
              rows: [
                ["黒ずみ（床・目地）", "正体はカビ。湿度が高く栄養分も多い浴室では、放っておくと目地などに発生する（TOTO）", "発生してすぐなら浴室用中性洗剤。落ちにくい場合はカビ取り剤（TOTO）。床まわりのコーキング材のカビもカビ取り剤（LIXIL）"],
                ["サーモフロアの黒ずみ", "洗い場のコーナー付近などに付き、洗剤で取れない場合がある（LIXIL）", "先割れ加工の浴室用ブラシで、かき出すようにする（LIXIL）"],
                ["皮脂汚れ", "—", "たわしや浴室用ブラシに浴室用クリームクレンザーを付けてこする。カラリ床では溝にクレンザーが残りやすいので念入りに流す（TOTO）"],
                ["金属石けん（白っぽく固い汚れ）", "石けん分や身体の脂肪分が、水道水のカルシウムなどと反応してできる（TOTO）", "付いてすぐなら浴室用中性洗剤。蓄積したら浴室用クリームクレンザーで、表面を傷つけないようにこする（TOTO）"],
                ["水あか・湯あか", "水道水に含まれるケイ酸が堆積したもの（TOTO）", "こびりついたら浴室用中性洗剤でこする（TOTO）"],
              ],
              note: "TOTO・LIXILの公式のお手入れページを 2026-11-20 に確認。床材の種類によって使える道具・洗剤が異なるため、お使いの浴室の取扱説明書もご確認ください。",
            },
          },
        ],
      },
      {
        h2: "TOTOの床のお手入れ手順",
        blocks: [
          {
            ol: [
              "砂や小石があるときは、よく洗い流してから始めます（キズ・変色・さびの付着の原因になるため）。",
              "スポンジに浴室用中性洗剤を付けてこすり洗いします。ほっカラリ床は、週に1度、中性洗剤と毛先のやわらかい樹脂製（ポリプロピレンなど）のブラシで洗うよう案内されています。",
              "落ちない場合は、たわしや浴室用ブラシに浴室用中性洗剤を付けてこすります。",
              "洗剤成分をよく洗い流し、水気を拭き取ります。",
            ],
          },
          "コーキング部は強くこすらず、ブラシも使いません（切れ・はがれの原因）。バケツなどを置くときは下にタオルを敷きます。TOTOは、壁や床のFRPなどの素材は強い洗剤やたわしで洗うと傷つくおそれがあるとしています。",
        ],
      },
      {
        h2: "LIXILの毎日・定期のお手入れ",
        blocks: [
          {
            ul: [
              "毎日のお手入れの基本はシャワーとスポンジ。少し熱めのシャワーで汚れを流し、こびり付いた汚れはスポンジでやさしくこすり、最後に水のシャワーで浴室を常温程度に下げてから水分を拭き取り、換気します。床から1mの高さまでは特に汚れが付きやすいので念入りに洗います。",
              "床の目地やコーキング材は、浴室用中性洗剤をかけて2〜3分置き、スポンジでこすって洗い流します。スポンジが溝や細かい凹凸に届かない場合は、先割れ加工の浴室用ブラシを使います。",
              "1か月〜汚れが目立ってきた時期の定期的なお手入れとして、コーキング材などに生えたカビにはカビ取り剤を使います。",
            ],
          },
        ],
      },
      {
        h2: "カビ取り剤を使うときの注意",
        blocks: [
          "LIXILは、カビ取り剤を使う場合は注意書きをよく読み、マスク・ゴム手袋・保護メガネを着用して、窓を開けるか換気扇を回すよう案内しています。肩より高い場所には直接スプレーせず、長時間放置したり洗剤を残したりしないようにします。",
          "国民生活センターは2026年3月18日に、浴室のカビ取りなどをうたう塩素系洗浄剤を他の洗剤と一緒に使ったときの塩素ガス濃度を調べ、スプレータイプの塩素系洗浄剤と酸性洗浄剤を浴室内で一緒に使うと、数分後に塩素ガス濃度が16ppmを超えたと公表しました。浴室で塩素系洗浄剤とクエン酸を同時に使い、救急要請に至った相談事例もあります。同センターは、塩素系洗浄剤は必ず単独で使い、換気と保護具の着用を呼びかけています。",
        ],
      },
    ],
    whenPro: [
      "カビ取り剤や先割れブラシを使っても、床や目地の黒ずみが残る場合",
      "床だけでなく、壁・天井・浴槽・エプロン内部も含めて浴室全体を洗いたい場合（ダスキンは浴槽エプロン内部のクリーニングを掲載しています）",
      "掃除の後に汚れを付きにくくしたい場合（おそうじ本舗のお手入れ簡単コーティング、ダスキンのカビ防止コートなどのオプションがあります）",
      "TOTOも、自分でできない部分をプロが掃除するサービスとして、同社の「クリーニングパック」を案内しています",
    ],
    priceHeading: "浴室クリーニングの料金（大手3社の公式料金）",
    priceLead: "床の黒ずみ・カビの除去は、業者の浴室クリーニングの範囲に含まれています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATH_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: [
      { href: "/services/bathroom/", label: "浴室クリーニング業者を探す" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "お風呂の床の黒ずみの正体は何ですか。", a: "TOTOは、壁・床のタイルや目地の黒ずみの正体をカビとしています。カビの栄養源になる石けんかすなどの汚れを洗い落とし、十分に換気して湿気を払うことが予防になると説明しています。" },
      { q: "お風呂の床はどのくらいの頻度で掃除しますか。", a: "TOTOは、ほっカラリ床を週に1度、中性洗剤とやわらかいブラシで洗うよう案内しています。LIXILは、毎日〜1週間の目安でシャワーとスポンジによるお手入れ、1か月〜汚れが目立ってきたら定期的なお手入れを案内しています。" },
      { q: "カビ取り剤とクエン酸を続けて使ってもよいですか。", a: "同時に使わないでください。塩素系のカビ取り剤と酸性の洗剤が混ざると有毒な塩素ガスが発生します。国民生活センターは、浴室で塩素系洗浄剤とクエン酸を同時に使って救急要請に至った事例を公表し、塩素系洗浄剤は必ず単独で使うよう呼びかけています。" },
      { q: "床にクレンザーを使ってもよいですか。", a: "TOTOは、皮脂汚れや蓄積した金属石けんに浴室用クリームクレンザーを使う方法を案内しています。カラリ床ではクレンザーが溝に残りやすいため念入りに洗い流し、表面を傷つけないようにこすります。" },
    ],
    sources: [SRC2.totoFloor, SRC2.totoDirt, SRC2.lixilFloorDaily, SRC2.lixilFloorRegular, SRC2.kokusen, { name: "おそうじ本舗 風呂・浴室クリーニング", url: HONPO_BATH }, { name: "ダスキン 浴室クリーニング", url: DUSKIN_BATH }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["toilet-citric-acid", "bathtub-cleaning"],
  },
  {
    slug: "bathtub-cleaning",
    kw: "浴槽 掃除",
    title: "浴槽の掃除方法｜LIXIL・TOTOの公式手順とエプロン内部・追いだき配管を業者に頼む目安 | クリーンナビ",
    description:
      "浴槽の掃除方法を、LIXIL・TOTO・日立の公式のお手入れ方法で整理しました。浴槽・追いだき循環口・追いだき配管・エプロン内部（浴槽下）の頻度の目安、使ってはいけない道具、エプロンを外せない浴槽、大手3社のエプロン内部・追いだき配管の公式料金を掲載しています。",
    h1: "浴槽の掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "LIXILは、浴槽の週1回のお手入れとして、浴室用中性洗剤をかけて2〜3分置き、スポンジでやさしくこすってから洗い流す方法を案内しています。粉末クレンザー・磨き粉・サンドペーパーなど粒子の粗い研磨材やタワシは浴槽を傷つけるため使いません。中性洗剤で落ちない水アカは、浴室用クリームクレンザーを付けたスポンジで、強くこすらずに少しずつ落とします。",
      "浴槽まわりには、浴槽の内側のほかに、追いだき配管とエプロン内部（浴槽下）があります。LIXILは追いだき配管の洗浄を月1回、エプロンを外した浴槽下のお手入れを半年に1回の目安としています。エプロンを外せない浴槽や、自分で落とせない汚れは、業者の浴室クリーニングとそのオプションで対応しています。",
    ],
    sections: [
      {
        h2: "浴槽まわりのお手入れの頻度（LIXIL・TOTO・日立）",
        blocks: [
          "メーカー3社の公式のお手入れ方法を、当サイトで部位ごとに並べました。",
          {
            table: {
              head: ["部位", "頻度の目安", "方法", "出典"],
              rows: [
                ["浴槽の内側", "毎日（入浴後）", "最後に入浴した人が、残り湯を抜きながら浴槽内の湯あかをスポンジで落とす。から拭きで水気を取るとカビ予防にもなる", "TOTO"],
                ["浴槽の内側", "週1回", "浴室用中性洗剤をかけて2〜3分置き、スポンジでやさしくこする。洗剤が残らないようシャワーで洗い流す", "LIXIL"],
                ["浴槽の水アカ", "1か月〜汚れが目立ってきたら", "スポンジに浴室用クリームクレンザーを付け、4〜5回磨いては水をかける作業を繰り返し、少しずつ落とす", "LIXIL"],
                ["追いだき循環口のカバー", "週1回", "カバーを外し、外したカバーと浴槽側の樹脂部分を浴室用中性洗剤と歯ブラシで洗う。循環口カバー以外は外さない（漏水のおそれ）", "LIXIL"],
                ["追いだき配管", "月1回", "浴槽にためた水に風呂釜洗浄剤を入れ、風呂釜内と配管の汚れを落とす。洗浄剤と給湯器の取扱説明書の注意書きに従う", "LIXIL"],
                ["追いだき配管（エコキュート）", "半年に1回程度", "市販の洗浄剤で「循環洗浄」を行う。推奨洗浄剤は「ジャバ1つ穴用」。硫黄・酸・アルカリを含んだ洗浄剤は使わない", "日立"],
                ["浴槽下（エプロン内部）", "半年に1回", "エプロンを外し、浴槽下の床・壁に浴室用中性洗剤をかけて2〜3分置き、柄付きスポンジでこする。強めのシャワーで流し、バス排水パイプを外して目皿のゴミを取る", "LIXIL"],
              ],
              note: "各社の公式ページを 2026-11-20 に確認。追いだき配管の洗浄の目安は、LIXIL（浴室側・月1回）と日立のエコキュート（給湯機側・半年に1回程度）で異なります。お使いの浴室・給湯器の取扱説明書の記載を優先してください。",
            },
          },
        ],
      },
      {
        h2: "浴槽に付く汚れの種類",
        blocks: [
          {
            table: {
              head: ["汚れ", "メーカーの説明", "お手入れ"],
              rows: [
                ["湯あか・皮脂汚れ", "入浴のたびに付く汚れ", "入浴後すぐスポンジで落とす（TOTO）。週1回は浴室用中性洗剤で洗う（LIXIL）"],
                ["水あか・金属石けん（白っぽく固い、ザラザラした汚れ）", "水道水のカルシウム・マグネシウムが水分の蒸発後に残ったもの。石けんカスと皮脂が水道水の金属成分と反応してできる金属石けんもある。浴槽のふちに付きやすい（TOTO）", "浴室用クリームクレンザーで少しずつ落とす（LIXIL）"],
                ["もらいさび（赤茶色の汚れ）", "浴槽・床のFRPはさびないが、ヘアピン・カミソリなどさびるものを置いたり、水道水中の鉄分がさびたりして付着する（TOTO）", "TOTO・LIXILがさびの落とし方を個別に案内している"],
                ["銅石けん（水面近くの青い筋）", "給湯機内部や配管の銅管からわずかに溶け出した銅イオンと、石けんやあかの脂肪酸が反応してできる。銅イオンは単独では青く染まらず、人体への影響もない（TOTO）", "TOTO・LIXILが落とし方を個別に案内している"],
              ],
              note: "TOTO「Help!こんなときは、どうしよう？」、LIXIL「浴槽の定期的なお手入れ」を 2026-11-20 に確認。",
            },
          },
        ],
      },
      {
        h2: "エプロンを外して掃除するときの注意（LIXIL）",
        blocks: [
          {
            ul: [
              "浴槽下に防水パン（床）がない場合や、在来工法の浴室でタイル貼りのエプロンは取り外せません。",
              "LIXILの「スパージュ（2014年〜）」のエプロンは、利用者による取り外しができません。構造上、エプロンのすき間から浴槽裏側へ水が流れ込むのを防いでいるため、取り外してのお手入れは不要とされています。",
              "外し方はシリーズ・タイプによって異なります（そのまま外せるもの、固定部材やカウンターを外す必要があるもの、下半分のみ外せるものなど）。取扱説明書か、LIXILのQ&Aに掲載されたシリーズ別の手順書で確認してから作業します。",
              "目皿から取り除いたゴミを直接流したり、目皿を外したまま使ったりしないでください。排水管が詰まるおそれがあります。",
            ],
          },
        ],
      },
      {
        h2: "追いだき配管が汚れているときのサイン",
        blocks: [
          "LIXILは、湯張りや追いだきのときに次の現象がある場合、配管内部の汚れ（バイオフィルム）が主な原因として、風呂釜洗浄剤（配管洗浄剤）で汚れを落とすよう案内しています。",
          { ul: ["フワフワとした汚れが出ている", "黒いススのような汚れが出ている", "お湯が臭う", "お湯の色が濁っている", "お湯にぬめりがある"] },
          "日立は、エコキュートの自動洗浄の直後は配管内の高温のお湯が循環アダプターから出てやけどをするおそれがあるため、浴槽の掃除は、循環アダプターからお湯が出なくなり、完全に排水された後に行うよう案内しています。",
        ],
      },
    ],
    whenPro: [
      "エプロン内部の汚れが気になるものの、エプロンの外し方が分からない、または取り付けに不安がある場合",
      "風呂釜洗浄剤で洗浄しても、追いだきのときにフワフワした汚れや黒いススのような汚れが出る場合",
      "浴室用クリームクレンザーでも浴槽の水アカが落ちない場合",
      "浴槽だけでなく、壁・床・天井・ドアも含めて浴室全体を洗いたい場合",
      "LIXILも、リクシルオーナーズクラブの「リクシルのお掃除サービス」（会員以外も利用可）をプロによる掃除として案内しています",
    ],
    priceHeading: "浴室クリーニング・エプロン内部・追いだき配管の料金（大手3社の公式料金）",
    priceLead:
      "浴槽の洗浄は業者の浴室クリーニングに含まれており、エプロン内部と追いだき配管は各社ともオプションまたは別メニューです。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATHTUB_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "浴槽はどのくらいの頻度で掃除しますか。", a: "LIXILは、浴室用中性洗剤とスポンジによる浴槽のお手入れを週1回の目安としています。TOTOは、最後に入浴した人が残り湯を抜きながら浴槽内の湯あかをスポンジで落とす習慣を勧めています。" },
      { q: "浴槽を洗うのにタワシやクレンザーを使ってもよいですか。", a: "LIXILは、粉末クレンザー・磨き粉・サンドペーパーなど粒子の粗い研磨材やタワシは浴槽を傷つけるため使わないよう案内しています。中性洗剤で落ちない水アカには浴室用クリームクレンザーを使い、強くこすらずに少しずつ落とします。" },
      { q: "エプロンは外して掃除したほうがよいですか。", a: "LIXILは、エプロンを外した浴槽下のお手入れを半年に1回の目安としています。ただし、防水パンがない浴槽や在来工法のタイル貼りのエプロン、LIXILのスパージュ（2014年〜）のように、利用者が外せない・外す必要のないタイプもあります。取扱説明書で確認してください。" },
      { q: "追いだき配管はどうやって掃除しますか。", a: "LIXILは、浴槽にためた水に風呂釜洗浄剤を入れて風呂釜内と配管の汚れを落とす方法を、月1回の目安で案内しています。日立のエコキュートは、推奨洗浄剤（ジャバ1つ穴用）による循環洗浄を半年に1回程度とし、硫黄・酸・アルカリを含んだ洗浄剤は使わないよう案内しています。給湯器の取扱説明書の指定を優先してください。" },
    ],
    sources: [SRC3.lixilTubDaily, SRC3.lixilTubRegular, SRC3.lixilReheatPort, SRC3.lixilPipe, SRC3.lixilUnderTub, SRC3.lixilApron, SRC3.totoBath, SRC3.totoHelp, SRC3.hitachiEcoPipe, { name: "おそうじ本舗 風呂・浴室クリーニング", url: HONPO_BATH }, { name: "ダスキン 浴室クリーニング", url: DUSKIN_BATH }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bath-floor-black-stains", "oxiclean-bathroom"],
  },
  {
    slug: "oxiclean-bathroom",
    kw: "オキシクリーン お風呂",
    title: "オキシクリーンでお風呂を掃除する方法｜公式の分量・手順と使えない素材、追いだき配管の注意 | クリーンナビ",
    description:
      "オキシクリーンでお風呂を掃除する方法を、日本公式サイト（グラフィコ）の案内で整理しました。バスグッズ・床・ドアの手順と分量（お湯4ℓに約28g）、使えない素材、混ぜてはいけない洗剤、追いだき配管に使う洗浄剤についての給湯器メーカーの案内、浴室クリーニングの公式料金を掲載しています。",
    h1: "オキシクリーンでお風呂を掃除する方法と注意点",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "オキシクリーンの日本公式サイト（輸入販売元：株式会社グラフィコ）は、お風呂場での使い方として、バスグッズやフタのぬめり汚れの「オキシ漬け」と、浴室の汚れ・浴室ドアの「オキシこすり」を案内しています。どちらも40〜60℃のお湯に溶かして使い、分量はお湯4ℓに対して約28g（スプーン1杯）が目安、漬けおきは20分程度（最大6時間）です。",
      "オキシクリーンは、過炭酸ナトリウムと炭酸ナトリウムを成分とする弱アルカリ性の酸素系漂白剤です。金属全般・大理石などには使えず、塩素系漂白剤やアンモニアを含む製品、家庭用洗剤とは混ぜないよう注意書きがあります。公式サイトのお風呂の使い方に、追いだき配管（風呂釜）の洗浄は掲載されていません（2026-11-20 確認）。",
    ],
    sections: [
      {
        h2: "公式サイトが案内しているお風呂での使い方",
        blocks: [
          {
            table: {
              head: ["対象", "使い方", "公式の手順"],
              rows: [
                ["バスグッズ・フタのぬめり汚れ", "オキシ漬け", "40〜60℃のお湯にオキシクリーンを溶かし、20分程度漬けおく（最大6時間まで）。ブラシで軽くこすり、水で洗い流す"],
                ["浴室の汚れ（床など）", "オキシこすり", "40〜60℃のお湯とオキシクリーンを混ぜた溶液を浴室に撒き、5分ほど置く。ブラシで軽くこすり、水で洗い流すか水拭きする"],
                ["浴室ドア", "オキシこすり", "40〜60℃のお湯に溶かした溶液をブラシに付けてドアをこすり、しっかりと水で洗い流す"],
                ["洗面台まわり", "オキシこすり", "洗面台のシンクにお湯とオキシクリーンを入れ、歯ブラシ置きやカップなどを20分程度漬けおく。漬けている間に溶液でこすり洗いし、すすいでから周りを水拭きする"],
              ],
              note: "オキシクリーン日本公式サイト「お風呂場・洗面所の汚れ」「オキシ漬け」を 2026-11-20 に確認。分量はお湯4ℓに対して約28g（スプーン1杯。キャップ1杯・大スプーンのライン2もほぼ同じ量）。お湯4ℓは、直径30cmほどの洗い桶の8分目程度とされています。混ぜる棒は金属製でないものを使います。",
            },
          },
        ],
      },
      {
        h2: "使えない素材と、混ぜてはいけないもの（公式の注意書き）",
        blocks: [
          {
            ul: [
              "使えないもの：宝石類・サビ・金属全般・金属製の付属品・ラテックス塗料、革・ペルシャ製カーペット・畳・大理石、ジュート・チーク材・仕上げ木材など、ウール・シルクなど水洗いできない繊維製品",
              "金属素材での漬けおきは変色する可能性があり、金属に溶液が付いた場合はすぐに水で洗い流すよう案内されています。浴室では、水栓金具・排水口の金属部品・手すりなどに溶液が付いたら、すぐに洗い流します。",
              "熱湯では使いません（40〜60℃のお湯で使う）。",
              "洗濯洗剤以外（アンモニアを含む製品、還元系漂白剤、塩素系漂白剤、家庭用洗剤）とは混ぜません。",
              "使用前に目立たない場所で試し、乾燥させてから色落ちがないか確認します。皮膚に長く触れさせないよう、ゴム手袋を使います。",
            ],
          },
          "公式サイトは、使用する素材・器具・設備の取扱説明書もあわせて確認するよう求めています。浴室のメーカー（LIXIL・TOTO）が日常のお手入れとして案内しているのは、浴室用中性洗剤とスポンジです。",
        ],
      },
      {
        h2: "追いだき配管（風呂釜）に使う洗浄剤",
        blocks: [
          "追いだき配管の洗浄について、浴室・給湯機のメーカーと洗剤メーカーの公式の案内を当サイトで並べました。",
          {
            table: {
              head: ["出典", "追いだき配管の洗浄についての案内"],
              rows: [
                ["LIXIL（浴室）", "月1回を目安に、風呂釜洗浄剤（配管洗浄剤）で配管内部の汚れを落とす。風呂釜洗浄剤と給湯器の取扱説明書の注意書きを読んで使う。LIXILが推奨する配管洗浄剤は弱アルカリ性で、成分に過炭酸ナトリウムを含む"],
                ["日立（エコキュート）", "推奨洗浄剤は「ジャバ1つ穴用」。硫黄・酸・アルカリを含んだ洗浄剤は使用しない"],
                ["オキシクリーン公式サイト", "お風呂の使い方のページに、追いだき配管の洗浄は掲載されていない"],
              ],
              note: "各社の公式ページを 2026-11-20 に確認。オキシクリーンは弱アルカリ性のため、日立のエコキュートの案内（アルカリを含んだ洗浄剤は使用しない）に当てはまります。追いだき配管に使う洗浄剤は、お使いの給湯器の取扱説明書の指定に従ってください。",
            },
          },
        ],
      },
    ],
    whenPro: [
      "オキシこすりやカビ取り剤を使っても、床・ドア・目地の汚れが落ちない場合",
      "追いだきのときに、フワフワとした汚れや黒いススのような汚れが出る場合（LIXILは配管内部の汚れが主な原因としています）",
      "エプロン内部（浴槽の裏側）の汚れやカビが気になる場合",
      "金属部品が多い、素材が分からないなど、自分で洗剤を選ぶのが難しい場合",
    ],
    priceHeading: "浴室クリーニング・エプロン内部・追いだき配管の料金（大手3社の公式料金）",
    priceLead:
      "浴室全体の洗浄は業者の浴室クリーニングで、エプロン内部と追いだき配管は各社ともオプションまたは別メニューで対応しています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATHTUB_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "オキシクリーンでお風呂の床を掃除できますか。", a: "公式サイトは「オキシこすり」として、40〜60℃のお湯とオキシクリーンを混ぜた溶液を浴室に撒いて5分ほど置き、ブラシで軽くこすってから水で洗い流すか水拭きする方法を案内しています。床材の取扱説明書もあわせて確認してください。" },
      { q: "浴槽にお湯を張ってオキシ漬けをしてもよいですか。", a: "公式サイトのお風呂場・洗面所の使い方のページには、浴槽にお湯を張って漬けおく方法は掲載されていません（2026-11-20 確認）。オキシクリーンは金属素材で変色する可能性があるため、浴槽の金属部品や追いだきの循環口に溶液が残らないよう注意が必要です。浴槽・給湯器の取扱説明書を確認してください。" },
      { q: "追いだき配管（風呂釜）の掃除にオキシクリーンを使えますか。", a: "公式サイトのお風呂の使い方に、追いだき配管の洗浄は掲載されていません。日立のエコキュートは、硫黄・酸・アルカリを含んだ洗浄剤を使わないよう案内しており、弱アルカリ性のオキシクリーンはこれに当てはまります。LIXILは風呂釜洗浄剤（配管洗浄剤）を、給湯器の取扱説明書の注意書きを確認して使うよう案内しています。" },
      { q: "カビ取り剤とオキシクリーンを一緒に使ってもよいですか。", a: "オキシクリーンの使用上の注意には、塩素系漂白剤・アンモニアを含む製品・還元系漂白剤・家庭用洗剤と混ぜないよう記載されています。塩素系のカビ取り剤とは同時に使わず、使う場合は日を分け、十分に洗い流して換気してください。" },
    ],
    sources: [SRC3.oxiBath, SRC3.oxiDuke, SRC3.oxiProduct, SRC3.oxiTub, SRC3.lixilPipe, SRC3.hitachiEcoPipe, SRC2.totoFloor, SRC2.lixilFloorDaily, { name: "おそうじ本舗 風呂・浴室クリーニング", url: HONPO_BATH }, { name: "ダスキン 浴室クリーニング", url: DUSKIN_BATH }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bathtub-cleaning", "bath-floor-black-stains", "washer-tub-cleaning"],
  },
  {
    slug: "washer-tub-cleaning",
    kw: "洗濯機 槽洗浄",
    title: "洗濯機の槽洗浄のやり方と頻度｜日立・パナソニックの公式案内と使える洗剤、業者に頼む目安 | クリーンナビ",
    description:
      "洗濯機の槽洗浄の頻度とやり方を、日立・パナソニックの公式案内で整理しました。使える洗剤・使えない洗剤（酸素系・台所用漂白剤・重曹・クエン酸）をメーカーごとに比較し、日立の槽洗浄コースの種類、オキシクリーン公式の洗い方、洗濯機クリーニングの公式料金を掲載しています。",
    h1: "洗濯機の槽洗浄のやり方と頻度｜メーカー公式の案内と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "日立は、槽洗浄の頻度を、自動おそうじ機能を設定していない（または搭載していない）機種で1〜2か月に1回、設定している機種で3〜4か月に1回としています。パナソニックは、同社の洗濯機について、月に1度の衣類用塩素系漂白剤による槽洗浄を勧めています。",
      "使う洗剤はメーカーによって案内が異なります。日立とパナソニックは、酸素系漂白剤や台所用漂白剤を、泡が大量に発生するため使わない・控えるよう案内しています。一方、オキシクリーン（酸素系）の公式サイトは洗濯槽の洗い方を掲載しています。お使いの洗濯機の取扱説明書の指定を優先してください。槽洗浄をしてもにおいや汚れが取れない場合は、業者の洗濯機クリーニング（分解洗浄）で対応しています。",
    ],
    sections: [
      {
        h2: "槽洗浄に使える洗剤（メーカーごとの比較）",
        blocks: [
          "日立・パナソニックと、洗剤メーカーの公式の案内を、当サイトで洗剤の種類ごとに並べました。",
          {
            table: {
              head: ["洗剤", "日立（タテ型・ドラム式）", "パナソニック", "オキシクリーン公式サイト"],
              rows: [
                ["衣類用塩素系漂白剤", "使用できる（例：ハイターなど）", "月に1度の槽洗浄に勧めている（強アルカリ性で、槽内を黒カビが発生・生育しにくい環境に整える）", "—"],
                ["塩素系の洗濯槽クリーナー", "使用できる。11時間コースでしっかり洗浄するときは防食剤配合の塩素系漂白剤（日立 SK-1500・ドラム式用 SK-750）", "衣類に汚れが付くほど汚れたときは、専用クリーナー N-W1（ドラム式用 N-W2）", "—"],
                ["酸素系漂白剤・酸素系の洗濯槽クリーナー", "使用しない（泡が多量に発生し、故障や水漏れの原因になる）", "使用を控える。泡で洗濯機が異常と検知し、途中で排水されることがある。酸素系・界面活性剤配合・高発泡タイプのクリーナーも勧めていない", "縦型・ドラム式の洗い方を掲載（「洗濯機の取扱説明書をご確認のうえ」と注記）"],
                ["台所用漂白剤・食器洗い洗剤", "台所用漂白剤は使用しない", "使用を控える", "—"],
                ["重曹・クエン酸・酢", "—", "適していない。重曹は溶け残って排水経路が詰まるおそれ、クエン酸・酢は金属部品をさびさせるおそれ", "—"],
              ],
              note: "日立「洗濯槽のお掃除（槽洗浄コース）」（タテ型・ドラム式）、パナソニック公式通販の解説記事、オキシクリーン日本公式サイトを 2026-11-20 に確認。「—」は公式ページに記載がないことを示します。",
            },
          },
        ],
      },
      {
        h2: "日立の槽洗浄コースの種類と使い方（タテ型）",
        blocks: [
          {
            table: {
              head: ["コース", "用途・頻度"],
              rows: [
                ["15分コース", "短時間で洗濯脱水槽の汚れや糸くずを洗い流す。洗濯槽クリーナーは使わない"],
                ["3時間コース", "においの発生を抑えたいときの定期的なお手入れ。自動おそうじ未設定・非搭載なら1〜2か月に1回、設定しているなら3〜4か月に1回"],
                ["11時間コース", "洗濯槽や洗濯物に汚れが付いたとき、においが気になるとき。1回で落としきれなければ繰り返す"],
              ],
              note: "機種によって搭載されていないコースがあります（日立公式・2026-11-20 確認）。",
            },
          },
          {
            ol: [
              "洗濯槽内に衣類が残っていれば取り除き、換気を十分に行います。",
              "水栓（蛇口）を開けて電源を入れ、槽洗浄コースを選びます（ボタンは機種により「洗濯」「コース」「便利」など）。",
              "洗濯槽クリーナーを入れます。洗濯槽以外に付着すると金属部のさびやプラスチック部の破損の原因になるため、付いたらすぐに拭き取ります。",
              "使用量はクリーナーや漂白剤の表示に従います。表示がない場合の目安は、タテ型で500mL、ドラム式で200mLです。日立洗濯槽クリーナーは1回で使い切ります。",
            ],
          },
        ],
      },
      {
        h2: "日ごろの予防（槽乾燥）",
        blocks: [
          {
            ul: [
              "日立は、ドラム式では洗濯運転の終了後に毎回槽乾燥をすることを勧めています。",
              "パナソニックは、「槽乾燥」コースがある洗濯機では週に一度は槽乾燥を行うよう案内しています。",
              "パナソニックは、市販の洗濯槽クリーナーを使う場合は、洗濯機の説明書ではなく、クリーナーに書かれた使用方法を見て掃除するよう案内しています。",
            ],
          },
        ],
      },
      {
        h2: "オキシクリーン公式サイトの洗濯槽の洗い方（参考）",
        blocks: [
          {
            ul: [
              "縦型：お湯を高水位まで入れてからオキシクリーンを入れ、5分ほど回したあと6時間（最大）置きます。浮いてきた汚れをすくい取って排水し、通常の洗濯コース（槽洗浄コースがあればそちら）を1回行います。浮く汚れがなくなるまで繰り返します。",
              "ドラム式：40〜60℃のお湯とオキシクリーンを混ぜた溶液を洗濯槽に入れ、通常の洗濯コースを1回行います。",
              "分量はお湯4Lに対して約28g（スプーン1杯）。例として、お湯68Lならスプーン17杯とされています。",
              "同サイトは、ステンレス槽を長時間漬けおくと変色する可能性があるとしています。",
            ],
          },
          "日立・パナソニックの洗濯機では、前の表のとおり、メーカーが酸素系の漂白剤・クリーナーの使用を案内していません。他のメーカーの洗濯機も、取扱説明書で使える洗剤を確認してください。",
        ],
      },
    ],
    whenPro: [
      "槽洗浄をしても、においが残る、黒いカスが洗濯物に付くといった症状が続く場合",
      "洗濯槽を取り外して、裏側まで洗いたい場合（おそうじ本舗の「完全分解洗浄」オプションなど）",
      "洗濯機を動かして、洗濯パンや排水口まわりも一緒に洗いたい場合",
      "おそうじ本舗は、製造から6年以上経過した洗濯機は、メーカーの部品製造終了などのため対応できない場合があるとしています。依頼前に製造年を確認してください",
    ],
    priceHeading: "洗濯機クリーニングの料金（大手の公式料金）",
    priceLead:
      "洗濯槽の裏側の汚れは、業者の洗濯機クリーニングで洗浄しています。大手の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: WASHER_PRICES,
    ctaText: "洗濯機クリーニングの作業内容と料金を確認できます。",
    cta: WASHER_CTA,
    faq: [
      { q: "槽洗浄はどのくらいの頻度で行いますか。", a: "日立は、自動おそうじ機能を設定していない（または搭載していない）機種で1〜2か月に1回、設定している機種で3〜4か月に1回としています。パナソニックは、同社の洗濯機について、月に1度の衣類用塩素系漂白剤による槽洗浄を勧めています。" },
      { q: "オキシクリーンなどの酸素系漂白剤で槽洗浄してもよいですか。", a: "日立は酸素系漂白剤を、泡が多量に発生して故障や水漏れの原因になるため使わないよう案内しています。パナソニックも、泡で洗濯機が異常と検知し途中で排水されることがあるため使用を控えるよう案内しています。オキシクリーンの公式サイトは洗濯槽の洗い方を掲載していますが、洗濯機の取扱説明書の確認を求めています。" },
      { q: "重曹やクエン酸で洗濯槽を掃除できますか。", a: "パナソニックは、重曹は洗浄力が比較的弱く溶け残って排水経路が詰まるおそれがあり、クエン酸や酢は洗濯槽内の金属部品をさびさせるおそれがあるため、洗濯槽の掃除には適していないとしています。" },
      { q: "洗濯槽クリーナーの量が分からないときはどうしますか。", a: "日立は、クリーナーや漂白剤に記載された使用量に従い、表示がない場合はタテ型で500mL、ドラム式で200mLを目安にするよう案内しています。" },
    ],
    sources: [SRC3.hitachiTubFreq, SRC3.hitachiTubTate, SRC3.hitachiTubDrum, SRC3.panaTub, SRC3.oxiTub, { name: "おそうじ本舗 縦型洗濯機クリーニング", url: HONPO_WASHER_TOP }, { name: "おそうじ本舗 ドラム式洗濯機クリーニング", url: HONPO_WASHER_FRONT }, { name: "ダスキン 洗濯機クリーニング", url: DUSKIN_WASHER }],
    related: ["washer-drain-cleaning", "washer-lifespan", "oxiclean-bathroom"],
  },
  {
    slug: "sink-water-stains",
    kw: "シンク 水垢",
    title: "シンクの水垢の落とし方｜LIXIL・パナソニックの公式手順と材質別に使えない道具、業者に頼む目安 | クリーンナビ",
    description:
      "キッチンのシンクの水垢の落とし方を、LIXILとパナソニックの公式のお手入れ方法で整理しました。クエン酸水の作り方とパックの手順、ステンレス（コーティングの有無）・人造大理石など材質別に使える道具・洗剤、ステンレスシンクで避けること、キッチンクリーニングの公式料金を掲載しています。",
    h1: "シンクの水垢の落とし方｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "LIXILは、シンクに付く白い汚れやシミの主な原因を、水道水の成分や石けんカスが固まった「水アカ」と「金属石けん」としています。軽い汚れは台所用中性洗剤で、固まった汚れはクエン酸水（水200mlにクエン酸小さじ1杯程度）で落とします。落ちない場合は、クエン酸水をスプレーしてキッチンペーパーなどを置き、30分置いてから、やわらかい歯ブラシなどでこすり落とします。",
      "使える道具・洗剤は、シンクの材質とコーティングの有無で異なります。LIXILのデュアルコート付きステンレスシンクではクレンザーやナイロンタワシ・金属タワシを使えず、パナソニックはステンレスシンクに金属タワシや粒子の粗いクレンザーを使わないよう案内しています。自分で落とせない汚れは、業者のキッチンクリーニング（シンク・蛇口を含む）で対応しています。",
    ],
    sections: [
      {
        h2: "シンクの水垢を落とす手順（LIXIL）",
        blocks: [
          {
            ol: [
              "やわらかい布またはスポンジに台所用中性洗剤を付けて軽くこすり、水で流します。",
              "くもりが残っていたら、クリームクレンザー（研磨剤20%以下のもの）で、円を描きながら周りとなじませるようにこすり、水で流します。デュアルコート付きのステンレスシンクではこの手順を省き、クレンザーは使いません。",
              "落ちない場合は、クエン酸水をスプレーし、やわらかい布で拭き取ります。",
              "それでも落ちない場合は、クエン酸水をスプレーしてキッチンペーパーなどを置き、30分放置してから、やわらかい歯ブラシなどでこすり落とし、水で洗い流します。",
              "仕上げに、乾いたやわらかい布で水分を拭き取ります。水滴が残ると、白くざらついた水アカ汚れの原因になります。",
            ],
          },
          "LIXILは、水アカや金属石けんを放置するとシンク表面を侵食し、腐食やさびの原因になるとして、早めのお手入れを勧めています。クエン酸水は、水200mlにクエン酸小さじ1杯程度を混ぜて作ります。",
        ],
      },
      {
        h2: "材質別に使える道具・洗剤（LIXIL・パナソニック）",
        blocks: [
          "LIXILの「用具・洗剤の使用可否一覧表」と、パナソニックのキッチンのお手入れ資料を、当サイトで材質ごとに並べました。",
          {
            table: {
              head: ["シンクの材質", "クリームクレンザー", "メラミンスポンジ", "金属タワシ・研磨粒子入りの道具"],
              rows: [
                ["LIXIL ステンレス（デュアルコートなし）", "使用できる（粉末クレンザーは不可）", "使用できる", "使用できない"],
                ["LIXIL ステンレス（デュアルコート付き）", "使用できない", "水や洗剤を含ませ、なでるようにやさしく使う場合のみ", "使用できない（ナイロンタワシも研磨粒子の有無を問わず不可）"],
                ["LIXIL 人造大理石（コートなし）・ハイブリッドクォーツ", "使用できる（ハイブリッドクォーツは研磨剤20%以下のもの）。エプロン部は不可", "シンクは使用できる。エプロン部は不可", "研磨粒子入りナイロンタワシはキズの補修時のみ。金属タワシは不可"],
                ["パナソニック ステンレスシンク", "クリームクレンザーを含ませたスポンジで一定方向に磨く（光沢が変わる場合あり）。粒子の粗いクレンザーは使わない", "アルミ鍋などのこすれ跡に使う", "金属タワシは使わない"],
                ["パナソニック ステンレスシンク（ささっと仕様）", "クレンザー類は使用できない（公式に製品例を掲載）", "強くこすらない・同じ場所を何度もこすらない条件で使用できる（コーティングがはがれるため）", "研磨剤入り不織布・金属タワシは使用できない"],
              ],
              note: "LIXIL Q&A「キッチンのシンクをお手入れする方法」、パナソニック「シンクの汚れが取れない！」を 2026-11-20 に確認。スポンジは水を含ませて使います（乾いた状態で使うとキズの原因になる＝LIXIL）。お使いのシンクの取扱説明書もご確認ください。",
            },
          },
        ],
      },
      {
        h2: "ステンレスシンクで日ごろ気を付けること（パナソニック）",
        blocks: [
          {
            ul: [
              "水滴にはカルシウム分が含まれ、水あかの原因になります。食器洗いの後に台所用洗剤（中性）を付けたスポンジでサッと洗い、水で流してふきんなどで水滴を拭き取ります。",
              "週に1度を目安に水あか汚れを落とし、月に1度はシーリングの黒ずみを落とします。",
              "塩素系漂白剤を流したり、シンク内に水を張って食器類を漂白したりしないでください。使った場合は十分に水洗いします。",
              "もらいさびが付いたら、市販のステンレスクリーナーで磨きます。",
            ],
          },
          "塩素系の漂白剤と、クエン酸などの酸性の洗剤を同時に使うと有毒な塩素ガスが発生します。クエン酸水で水垢を落とす日と、塩素系漂白剤を使う日は分けてください。",
        ],
      },
    ],
    whenPro: [
      "クエン酸水のパックを試しても、白い水垢やくもりが落ちない場合",
      "シンクの材質やコーティングの有無が分からず、使える道具を判断できない場合",
      "シンクだけでなく、蛇口・排水口・コンロまわりも含めてキッチン全体を洗いたい場合",
    ],
    priceHeading: "キッチンクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "シンク・蛇口の水垢の除去は、業者のキッチンクリーニングの範囲に含まれています（おそうじ本舗はシンク・蛇口を、ダスキンはシンクの排水口・ゴミ受けまでを作業範囲として掲載）。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: KITCHEN_PRICES,
    ctaText: "キッチンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: [
      { href: "/services/kitchen/", label: "キッチンクリーニング業者を探す" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "シンクの水垢にクエン酸は使えますか。", a: "LIXILは、固まった水アカにクエン酸水（水200mlにクエン酸小さじ1杯程度）を使う方法を案内しています。スプレーしてやわらかい布で拭き取り、落ちなければキッチンペーパーなどを置いて30分放置してから、やわらかい歯ブラシなどでこすり落とします。" },
      { q: "シンクにメラミンスポンジを使ってもよいですか。", a: "材質とコーティングによって異なります。LIXILでは、デュアルコートなしのステンレスや人造大理石のシンクは使用でき、デュアルコート付きのステンレスは水や洗剤を含ませてやさしくなでる場合に限られます。人造大理石・ハイブリッドクォーツのエプロン部には使えません。" },
      { q: "シンクの水垢を防ぐにはどうすればよいですか。", a: "LIXILは、シンクを使った後に十分な水で汚れや洗剤成分を洗い流し、乾いたやわらかい布で水分をしっかり拭き取るよう案内しています。パナソニックも、水滴を拭き取ることで水あかが付きにくくなるとしています。" },
      { q: "水垢がひどい場合はどうすればよいですか。", a: "メーカーの手順で落ちない場合や、材質が分からず道具を選べない場合は、業者のキッチンクリーニングで対応しています。大手3社の公式料金は、おそうじ本舗19,800円、ダスキン20,680円（間口3m未満）、おそうじ革命17,930円です（2026-11-20 確認・税込）。" },
    ],
    sources: [SRC3.lixilSinkWhite, SRC3.lixilSinkQa, SRC3.lixilSinkRegular, SRC3.panaSink, SRC2.kokusen, { name: "おそうじ本舗 キッチンクリーニング", url: HONPO_KITCHEN }, { name: "ダスキン キッチンクリーニング", url: DUSKIN_KITCHEN }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["gas-stove-cleaning", "toilet-citric-acid"],
  },
  {
    slug: "aircon-heating-not-warm",
    kw: "エアコン 暖房 効かない",
    title: "エアコンの暖房が効かない原因と対処｜日立・三菱電機・パナソニックの公式案内と業者に頼む目安 | クリーンナビ",
    description:
      "エアコンの暖房が効かない・暖まらないときの原因と対処を、日立・三菱電機・パナソニックの公式案内で整理しました。予熱運転・霜取り運転で暖かい風が出ない時間の目安をメーカーごとに比較し、設定・フィルター・室外機の確認手順、点検・修理を相談するサイン、エアコンクリーニングの公式料金を掲載しています。",
    h1: "エアコンの暖房が効かない原因と対処｜メーカー公式の確認手順",
    publishedAt: D2,
    checkedAt: D2,
    answer: [
      "暖房の運転開始直後と霜取り運転中は、故障でなくても暖かい風が出ません。日立は予熱運転に2〜3分、霜とり運転に5〜22分かかるとしています。三菱電機は、運転開始時の準備に約3分、霜取り運転は最大10分（外気温度が低いときなどに約30〜90分に1回程度）としています。",
      "それ以外で暖まらないときは、運転モード（自動運転・省エネ機能）、設定温度と風向き、フィルターの汚れ、室外機のまわりの物や雪を確認します。日立・三菱電機とも、フィルターが汚れていると暖まりにくくなるとしています。設置直後から暖かい風が出ない、ランプが点滅しているといった場合は、販売店やメーカーの修理窓口への相談が案内されています。",
    ],
    sections: [
      {
        h2: "暖かい風が出ない時間の目安（メーカーごとの比較）",
        blocks: [
          {
            table: {
              head: ["メーカー", "運転開始時（予熱）", "霜取り運転"],
              rows: [
                ["日立", "2〜3分", "5〜22分。運転ランプの点滅や予熱・霜とりランプの点灯で知らせる"],
                ["三菱電機", "約3分（外気温度などにより、最低でも3分は待つ）", "最大10分。外気温度が低いときなどに約30〜90分に1回程度。終了後、暖かい風を出す準備にさらに数分かかることがある"],
                ["パナソニック", "—", "霜が付くと暖房効率が下がるため、一時的に暖房を止めて霜を溶かし、終わると暖房を再開する。同社の「エネチャージシステム」搭載機は霜取り中も暖房が止まらない（霜の付着量が多い環境では止める場合がある）"],
              ],
              note: "日立「暖房運転しても、部屋が暖まりません。」、三菱電機「冬の時期に多いお問い合わせ」、パナソニックの暖房の解説ページを 2026-11-20 に確認。「—」は公式ページに数値の記載がないことを示します。機種によって異なるため、取扱説明書もご確認ください。",
            },
          },
          "三菱電機は、暖房運転中に室外機から湯気が出たり水が流れ出たりするのは、霜取り運転で霜が融けるためで、故障ではないと説明しています。",
        ],
      },
      {
        h2: "暖まらないときの確認手順（日立・三菱電機）",
        blocks: [
          {
            ol: [
              "運転モードを確認します。自動運転になっていれば暖房運転に切り替えます（日立）。三菱電機は、A.I.自動では季節の変わりめに暖房と判定されない場合があるとしています。",
              "省エネ機能を確認します。eco機能（省エネ運転）を使っていると、省エネを優先するため暖まりにくいと感じることがあります（日立）。",
              "設定温度を上げ、風速を「自動」にします。室温が設定温度に近づくと風速を弱めるためです（日立）。",
              "風向きを「自動」か「下向き」にします。暖かい空気は部屋の上のほうにたまるためです（日立）。",
              "部屋の空気を循環させます。エアコン周辺の風通しを良くし、扇風機やサーキュレーターを併用し、ドア・窓・カーテンを閉めます。湿度は40〜60%程度を勧めています（日立）。",
              "フィルターの汚れを取ります。汚れやホコリが付いていると暖かい風が出にくくなります（日立）。三菱電機は2週間に一度のお手入れを勧め、フィルターおそうじメカ搭載機でも油汚れやタバコのヤニ汚れが気になるときは取り外して手入れするよう案内しています。",
              "室内機の吹出口・吸込口を家具などでふさいでいないか確認します（三菱電機）。",
              "室外機のまわりに物を置かないようにし、吸込み口・吹き出し口のゴミを取ります。季節風や雪が吹き込む場所では、風雪ガードや防雪フードで防ぎます（日立）。",
            ],
          },
        ],
      },
      {
        h2: "点検・修理の相談が必要なサイン（日立）",
        blocks: [
          "日立は、予熱運転が終わった後も次に当てはまる場合は、本体の点検・修理が必要として、販売店または修理相談窓口への相談を案内しています。",
          {
            ul: [
              "設置直後から暖かい風が出ない（本体または据付状態に問題が発生している可能性）",
              "暖房32℃・風速自動に設定しても暖風が出ず、室外機のファンが回らない",
              "タイマーランプ・みはりランプ・除湿ランプのいずれかが点滅している",
            ],
          },
          "これらはクリーニングでは直らない可能性があるため、業者のエアコンクリーニングではなく、販売店やメーカーの修理窓口に相談してください。日立は、対応機種でのセルフ故障診断と、修理料金の目安一覧（「冷えない・暖まらない」の項目）も案内しています。",
        ],
      },
    ],
    whenPro: [
      "フィルターを掃除しても、吹出口や送風ファンに黒い汚れが見える場合（メーカー各社は、送風ファンや内部の洗浄を利用者が行わないよう案内しています）",
      "長く内部の洗浄をしておらず、暖房シーズンの前にまとめて洗浄したい場合",
      "上の「点検・修理の相談が必要なサイン」に当てはまる場合は、クリーニングではなく修理の相談が先です",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "エアコンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "暖房をつけてもすぐに暖かい風が出ないのは故障ですか。", a: "運転開始直後は暖かい風を出す準備（予熱運転）をしているため、すぐには出ません。日立は2〜3分、三菱電機は約3分（外気温度などにより最低でも3分は待つ）としています。それ以上たっても出ない場合は、運転モードや設定温度を確認してください。" },
      { q: "暖房中に風が止まるのはなぜですか。", a: "室外機に付いた霜を溶かす霜取り運転の可能性があります。日立は5〜22分、三菱電機は最大10分（外気温度が低いときなどに約30〜90分に1回程度）としています。霜取り運転が終わると暖房運転が再開します。" },
      { q: "暖房中に室外機から湯気や水が出ます。", a: "三菱電機は、霜取り運転で霜が融けるときに湯気や水が出るもので、故障ではないと説明しています。排水でお困りの場合は、購入した販売店に排水工事を相談するよう案内しています。" },
      { q: "フィルターはどのくらいの頻度で掃除しますか。", a: "三菱電機は2週間に一度のお手入れを勧めています。日立は、フィルターに汚れやホコリが付くと暖かい風が出にくくなるとしています。" },
    ],
    sources: [SRC3.hitachiHeat, SRC3.mitsubishiWinter, SRC3.panaHeat, SRC.hitachiFilter, SRC.hitachiOutdoor, SRC.hitachiFan, SRC.daikinCare, ...SRC_AC_PRICES],
    related: ["aircon-not-cooling", "outdoor-unit-cleaning", "aircon-self-cleaning"],
  },
];

export function getDiyGuide(slug: string): DiyGuide {
  const g = DIY_GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`diy guide not found: ${slug}`);
  return g;
}
