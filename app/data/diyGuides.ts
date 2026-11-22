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

// 2026-11-21 深夜02時の回で追加（エアコン内部クリーン・トイレ換気扇・トイレ床・浴室換気扇・魚焼きグリル）。料金・公式情報は 2026-11-21 に確認。
const D3 = "2026-11-21";

const TOILET_FAN_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "トイレクリーニング（作業範囲の換気扇は「換気扇カバー（内部を含まず）」）", price: "9,900円／式", src: HONPO_TOILET },
  { brand: "おそうじ本舗", menu: "トイレ換気扇クリーニング（オプション。トイレの換気扇に付着した汚れを専用の機材で洗浄）", price: "＋3,300円／式", src: HONPO_TOILET },
  { brand: "ダスキン", menu: "トイレ1室（床面積2m²未満。お掃除箇所の換気は「換気口の表面」）", price: "10,340円", src: DUSKIN_TOILET },
  { brand: "おそうじ革命", menu: "トイレ（換気扇はカバーを外して洗浄。外せない場合は表面の拭き上げ）", price: "8,250円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "通常換気扇クリーニング（トイレのオプション）", price: "＋3,850円", src: KAKUMEI_PRICE },
];

const TOILET_FLOOR_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "トイレクリーニング（便器・便座・床・壁面など。約1.5時間。床のワックスは含まない）", price: "9,900円／式", src: HONPO_TOILET },
  { brand: "おそうじ本舗", menu: "床ワックス塗布（オプション）", price: "＋1,100円／式", src: HONPO_TOILET },
  { brand: "ダスキン", menu: "トイレ1室（床面積2m²未満。お掃除箇所に「床、幅木」を含む）", price: "10,340円", src: DUSKIN_TOILET },
  { brand: "ダスキン", menu: "トイレの床面積1m²追加ごと", price: "＋2,530円", src: DUSKIN_TOILET },
  { brand: "おそうじ革命", menu: "トイレ（床を含む。ワックス塗布は含まない）", price: "8,250円", src: KAKUMEI_PRICE },
];

const BATH_FAN_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "風呂・浴室クリーニング（作業範囲の換気扇は「換気扇フィルター／換気扇カバー（内部は含まず）」）", price: "19,800円／式", src: HONPO_BATH },
  { brand: "おそうじ本舗", menu: "浴室乾燥機クリーニング（オプション。本体カバー・フィルター・ファンを取り外して洗浄）", price: "＋7,700円／式", src: HONPO_BATH },
  { brand: "ダスキン", menu: "浴室暖房乾燥機（換気扇）内部クリーニング（ファン取外し不可）※浴室クリーニングのオプション", price: "＋5,830円", src: DUSKIN_BATH },
  { brand: "ダスキン", menu: "浴室暖房乾燥機（換気扇）内部クリーニング（ファン取外し可能）※浴室クリーニングのオプション", price: "＋10,120円", src: DUSKIN_BATH },
  { brand: "ダスキン", menu: "浴室暖房乾燥機（換気扇）内部クリーニングのみの場合", price: "11,000円", src: DUSKIN_BATH },
  { brand: "おそうじ革命", menu: "浴室乾燥機クリーニング", price: "11,000円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "通常換気扇クリーニング", price: "3,850円", src: KAKUMEI_PRICE },
];

const SRC4 = {
  mitsuInner: { name: "三菱電機 CLUB MITSUBISHI ELECTRIC「エアコンの内部クリーンの機能と効果」", url: "https://www.mitsubishielectric.co.jp/club-me/howto/memo/2006/index.html" },
  panaGlossary: { name: "パナソニック「エアコンの機能解説・用語集 清潔・空気清浄編」", url: "https://panasonic.jp/aircon/glossary/clean.html" },
  panaManual: { name: "パナソニック ルームエアコン取扱説明書（CS-K222D ほか・PDF）「内部クリーン運転について」", url: "https://panasonic.jp/content/dam/panasonic/jp/ja/pim-assets/support/manual/000/000/000/368/082/000000000368082/cs_22k.pdf" },
  fujitsuManual: { name: "富士通ゼネラル ルームエアコン取扱説明書（AS-ZN253N ほか・PDF）", url: "https://www.generalww.com/datafiles/W9322864420-0301_OM_Ja_AS-ZN253N-W.pdf" },
  hitachiInner: { name: "日立の家電品「内部クリーン運転について知りたいです。（内部乾燥・カビ抑制）」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/a34.html" },
  hitachiDry: { name: "日立の家電品「『内部送風乾燥運転』について知りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-159.html" },
  toshibaClean: { name: "東芝ライフスタイル「清潔 Nシリーズ」（エアコン 商品特長）", url: "https://www.toshiba-lifestyle.com/jp/air_conditioners/feature/n_series_clean/" },
  toshibaFaq: { name: "東芝ライフスタイル FAQ「[エアコン]自動クリーニング（フィルター掃除・内部乾燥）を毎回運転させない方法はありますか？」", url: "https://faq-toshiba-lifestyle.dga.jp/answer.html?id=704&category=126&page=1" },
  sharpManual: { name: "シャープ ルームエアコン取扱説明書（AY-L22S〜L40S・PDF）「内部清浄運転」", url: "https://jp.sharp/support/air_con/doc/ayl22_40s_mn.pdf" },
  daikinInnerFaq: { name: "ダイキン よくあるご質問「内部クリーンとは（ルームエアコン）」", url: "https://www.daikincc.com/faq/customer/web/knowledge2504.html" },
  daikinInnerTime: { name: "ダイキン よくあるご質問「内部クリーン運転は自動で止まりますか（ルームエアコン）」", url: "https://www.daikincc.com/faq/customer/web/knowledge2995.html" },
  daikinInnerStop: { name: "ダイキン よくあるご質問「内部クリーンを途中で止めてもよいですか（ルームエアコン）」", url: "https://www.daikincc.com/faq/customer/web/knowledge2930.html" },
  panaFanManual: { name: "パナソニック 天井埋込形換気扇 取扱説明書（PDF）", url: "https://www2.panasonic.biz/ideacontout/2020/03/11/2020031100220043.PDF" },
  mitsuFanCare: { name: "三菱電機「換気扇のお手入れ」", url: "https://www.mitsubishielectric.co.jp/ldm/ventilationfan/maintenance/index.html" },
  mitsuPipeFan: { name: "三菱電機「パイプ用ファン（排気用）」のお手入れ", url: "https://www.mitsubishielectric.co.jp/ldm/ventilationfan/maintenance/detail_05.html" },
  mitsuDuctFan: { name: "三菱電機「ダクト用換気扇」のお手入れ", url: "https://www.mitsubishielectric.co.jp/ldm/ventilationfan/maintenance/detail_04.html" },
  mitsuBathDryer: { name: "三菱電機「バス乾燥・暖房・換気システム」のお手入れ", url: "https://www.mitsubishielectric.co.jp/ldm/ventilationfan/maintenance/detail_07.html" },
  mitsuRenewal: { name: "三菱電機「換気扇の取り替え目安」", url: "https://www.mitsubishielectric.co.jp/ldm/ventilationfan/renewal/" },
  totoToiletFloor: { name: "TOTO「床・壁・天井（トイレ）のお手入れ」", url: "https://jp.toto.com/support/maintenance/toilet/cleaningtool/floorwallceiling/" },
  lixilToiletFloorDaily: { name: "LIXIL「トイレの壁・床の日常のお手入れ」", url: "https://www.lixil.co.jp/support/clean/toilet_05_daily.htm" },
  lixilToiletFloorRegular: { name: "LIXIL「トイレの壁・床の定期的なお手入れ」", url: "https://www.lixil.co.jp/support/clean/toilet_05_regular.htm" },
  panaToiletBasic: { name: "パナソニック「お手入れの基礎知識（トイレのお手入れ）」", url: "https://sumai.panasonic.jp/support/care/toilet/basic/" },
  toliCf: { name: "東リ 床材FAQ「クッションフロアのお手入れ方法について」", url: "https://www.toli.co.jp/faq/floor/11.html" },
  sangetsuFloor: { name: "サンゲツ「床材のお手入れ方法」", url: "https://www.sangetsu.co.jp/style/floor_care.html" },
  panaBathCeiling: { name: "パナソニック「壁・天井（お風呂・浴室のお手入れ）」", url: "https://sumai.panasonic.jp/support/care/bath/07/" },
  totoSankanou: { name: "TOTO「浴室換気暖房乾燥機（三乾王）のお手入れ」", url: "https://jp.toto.com/support/maintenance/bath/wall/sankanoumainte/" },
  lixilBathFan: { name: "LIXIL Q&A「ユニットバスの換気扇をお手入れする方法」", url: "https://faq.lixil.co.jp/--626cd6cbf8139c001dc7ae4a" },
  lixilBathFanLife: { name: "LIXIL「浴室換気扇が不調になったら？寿命や取り付け方法について解説」", url: "https://www.lixil.co.jp/square/articles/179/" },
  maxBathDryer: { name: "マックス よくあるご質問「浴室乾燥機のお手入れ方法を教えてください。」", url: "https://faq.max-ltd.co.jp/faq/show/658?site_domain=default" },
  rinnaiSafety: { name: "リンナイ「ガステーブル・ビルトインコンロ 長期間製品を安全にお使いいただくための大切なお知らせ」", url: "https://www.rinnai.co.jp/safety/use/tc/" },
  rinnaiNoWater: { name: "リンナイ よくあるご質問「水無しグリルに水を入れて使用してもいいの？」", url: "https://faq.rinnai.co.jp/faq/show/449?category_id=33&site_domain=default" },
  rinnaiNet: { name: "リンナイ よくあるご質問「グリル焼き網のお手入れ方法を教えてください」", url: "https://faq.rinnai.co.jp/faq/show/499?category_id=35&site_domain=default" },
  noritzConro: { name: "ノーリツ「ガスコンロの掃除・お手入れ方法」", url: "https://www.noritz.co.jp/aftersupport/maintenance/conro.html" },
  palomaGrill: { name: "パロマ「部品別お手入れ方法 グリル（受け皿・焼き網）」", url: "https://www.paloma.co.jp/special/clean/cleaning/grillpan.html" },
  panaIhGrill: { name: "パナソニック IHクッキングヒーター「従来のグリル（焼き網タイプ）のお手入れ」", url: "https://sumai.panasonic.jp/ihcook/feature/clean_grill.html" },
  nite489: { name: "NITE 製品安全情報マガジン Vol.489（2025年11月25日号）「ガス給湯器、ガスこんろの事故」", url: "https://www.nite.go.jp/jiko/chuikanki/mailmagazin/2025fy/vol489_251125.html" },
  tfdKonro: { name: "東京消防庁「コンロからの火災を防ごう！」", url: "https://www.tfd.metro.tokyo.lg.jp/lfe/kasai/bouka/konro.html" },
};

// 2026-11-21 深夜04時の回（kwexp）: レンジフードフィルター・トイレ掃除の基本・エアコンの異音・キッチン排水口・IH
const HONPO_FAN = "https://www.osoujihonpo.com/house-cleaning/kitchen/fan/";
const DUSKIN_FAN = "https://www.duskin.jp/servicemaster/water/sm000070/";

const RANGE_HOOD_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "レンジフード・換気扇クリーニング（外装カバー・本体内部・ファン・フィルター・ファンハウジング。屋外側のフード・ダクトは対象外。約2.5時間）", price: "19,800円／式", src: HONPO_FAN },
  { brand: "おそうじ本舗", menu: "お掃除機能付き製品（追加）", price: "＋6,600円／台", src: HONPO_FAN },
  { brand: "ダスキン", menu: "レンジフードまたはフード付き換気扇1台（幅95cm未満。フィルター・ファンなど家庭で外しにくい部分も分解して洗浄）", price: "22,000円", src: DUSKIN_FAN },
  { brand: "ダスキン", menu: "幅15cm追加ごと", price: "＋2,530円", src: DUSKIN_FAN },
  { brand: "おそうじ革命", menu: "レンジフード（フィルターの浸け置き洗浄・ファンの洗浄・照明カバーなどを含む）", price: "17,930円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "フード無しプロペラ・天埋換気扇タイプ", price: "9,900円", src: KAKUMEI_PRICE },
];

const RANGE_HOOD_CTA: DiyGuide["cta"] = [
  { href: "/services-detail/ventilation/", label: "換気扇・レンジフードクリーニングの内容を見る" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
];

const KITCHEN_DRAIN_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "キッチンクリーニング（シンク・蛇口・ガス台またはIHなど。排水トラップを外して排水口の中も掃除。約2.5時間）", price: "19,800円／式", src: HONPO_KITCHEN },
  { brand: "ダスキン", menu: "キッチン1ヵ所（間口3m未満。シンクの排水口・水切りかごなども洗浄）", price: "20,680円", src: DUSKIN_KITCHEN },
  { brand: "ダスキン", menu: "キッチン排水管（オプション）", price: "＋1,980円", src: DUSKIN_KITCHEN },
  { brand: "おそうじ革命", menu: "キッチン", price: "17,930円", src: KAKUMEI_PRICE },
];

const KITCHEN_CTA: DiyGuide["cta"] = [
  { href: "/services/kitchen/", label: "キッチンクリーニング業者を探す" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
];

const SRC5 = {
  panaRangeHood: { name: "パナソニック「レンジフード（キッチンのお手入れ）」", url: "https://sumai.panasonic.jp/support/care/kitchen/05/" },
  lixilRangeHoodDaily: { name: "LIXIL「レンジフードの日常のお手入れ」", url: "https://www.lixil.co.jp/support/clean/kitchen_08_daily.htm" },
  lixilRangeHoodRegular: { name: "LIXIL「レンジフードの定期的なお手入れ」", url: "https://www.lixil.co.jp/support/clean/kitchen_08_regular.htm" },
  mitsuRangeHood: { name: "三菱電機「浅形レンジフードファン」のお手入れ", url: "https://www.mitsubishielectric.co.jp/ldm/ventilationfan/maintenance/detail_09.html" },
  totoToiletTop: { name: "TOTO「トイレのお手入れ」", url: "https://jp.toto.com/support/maintenance/toilet/" },
  totoBowlTank: { name: "TOTO「便器・タンクのお手入れ」", url: "https://jp.toto.com/support/water/toilet/07.htm" },
  totoWashlet: { name: "TOTO「ウォシュレットのお手入れ」", url: "https://jp.toto.com/support/maintenance/toilet/cleaningtool/washlet_soji/" },
  hitachiNoiseIn: { name: "日立の家電品「室内機の音の原因を知りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-65.html" },
  hitachiKataKata: { name: "日立の家電品「エアコン（室内機）からカタカタと音がします。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-70.html" },
  hitachiPokoPoko: { name: "日立の家電品「エアコンの室内機から『ポコポコ』という音が出ます。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/a08.html" },
  hitachiNoiseOut: { name: "日立の家電品「室外機の音が気になります。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/a07.html" },
  daikinNoiseIn: { name: "ダイキン よくあるご質問「室内機から変わった音がする（ルームエアコン）」", url: "https://www.daikincc.com/faq/customer/web/knowledge3009.html" },
  daikinNoiseOut: { name: "ダイキン よくあるご質問「室外機から変わった音がする（ルームエアコン）」", url: "https://www.daikincc.com/faq/customer/web/knowledge3010.html" },
  panaKitchenDrain: { name: "パナソニック「排水口（キッチンのお手入れ）」", url: "https://sumai.panasonic.jp/support/care/kitchen/03/" },
  lixilSinkRegular: { name: "LIXIL「シンクの定期的なお手入れ」（排水口・排水管）", url: "https://www.lixil.co.jp/support/clean/kitchen_02_regular.htm" },
  panaIh: { name: "パナソニック「IHクッキングヒーター グリル ガスコンロ（キッチンのお手入れ）」", url: "https://sumai.panasonic.jp/support/care/kitchen/06/" },
  mitsuIh: { name: "三菱電機 くらトク「IHクッキングヒーターの掃除・お手入れ方法を、掃除するときの注意点とあわせて解説」（2022年7月22日）", url: "https://kuratoku.lcx.mitsubishielectric.co.jp/professional/detail_665/" },
};

// 2026-11-21 20:00 の回（kwexp）: 壁紙のカビ・フローリングのカビ・換気扇の異音・浴室の鏡の水垢・浴室の赤カビ。料金は各社公式ページを 2026-11-21 に確認。
const HONPO_FLOOR = "https://www.osoujihonpo.com/house-cleaning/room/flooring/";
const DUSKIN_FLOOR = "https://www.duskin.jp/servicemaster/spot/sm000030/";

const WALL_MOLD_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "壁紙クリーニング（20㎡以下一律。対象として挙げる汚れはヤニ・手アカ・ホコリ。20㎡超・高所は別途見積もり）", price: "11,000円／式", src: HONPO_CLOTH },
  { brand: "おそうじ本舗", menu: "壁紙染色（20㎡以下一律・天井を除く壁面のみ）", price: "22,000円／式（20㎡を超える場合は1,100円〜／㎡）", src: HONPO_DYEING },
  { brand: "おそうじ革命", menu: "壁紙補修（抗菌・消臭・脱臭効果のある染色剤で壁紙全体を塗装。工面20㎡未満）", price: "1枚塗り15,400円／2枚塗り20,680円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "壁紙補修（工面20㎡以上・2枚塗り）", price: "1,034円／㎡", src: KAKUMEI_PRICE },
];

const FLOOR_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "フローリング洗浄ワックス（10帖以下一律。約2時間。素材によってはワックスを塗布できない場合あり）", price: "13,200円／式（10帖超は1,320円／帖）", src: HONPO_FLOOR },
  { brand: "おそうじ本舗", menu: "フローリングハクリ＆ワックス（古いワックスをはがして洗浄・再塗布。10帖以下一律。約7時間）", price: "46,200円／式（10帖超は4,620円／帖）", src: HONPO_FLOOR },
  { brand: "ダスキン", menu: "フロアクリーニング（フローリング・クッションフロア。Sエリア〔東京・神奈川〕・Aエリアの標準料金）", price: "10m² 11,425円〜／17m² 18,929円〜／25m² 26,413円〜", src: DUSKIN_FLOOR },
  { brand: "ダスキン", menu: "フロアクリーニング（Bエリアの標準料金）", price: "10m² 10,081円〜", src: DUSKIN_FLOOR },
  { brand: "おそうじ革命", menu: "フローリング 拭き清掃＋掃除機がけ／清掃＋スタンダードワックス（1回塗り）／清掃＋ハイグレードワックス（2回塗り）", price: "330円／605円／1,100円（いずれも1㎡あたり）", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "剥離洗浄（オプション）", price: "1,100円／㎡", src: KAKUMEI_PRICE },
];

const FLOOR_CTA: DiyGuide["cta"] = [
  { href: "/services-detail/floor-wax/", label: "床ワックスがけ（フローリング）の内容を見る" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
];

const MIRROR_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "風呂・浴室クリーニング（鏡の水アカの掃除を含む。強固な水アカの除去はオプション。約2時間）", price: "19,800円／式", src: HONPO_BATH },
  { brand: "おそうじ本舗", menu: "鏡の水アカ除去＆コーティング仕上げ（浴室クリーニングと同時注文のオプション）", price: "＋3,300円／式", src: HONPO_BATH },
  { brand: "おそうじ本舗", menu: "鏡の水アカ除去＆曇り止めフィルム仕上げ（同上）", price: "＋5,500円／式", src: HONPO_BATH },
  { brand: "ダスキン", menu: "浴室1室（床面積3m²・高さ2.4m未満。鏡を含む浴室全体）", price: "22,000円", src: DUSKIN_BATH },
  { brand: "ダスキン", menu: "浴室鏡曇り止めフィルム施工サービス（1枚・オプション）", price: "＋3,630円", src: DUSKIN_BATH },
  { brand: "おそうじ革命", menu: "浴室（鏡は表面の石鹸カスなどを可能な限り除去）", price: "17,930円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "鏡水垢防止コーティング（オプション）", price: "＋7,700円", src: KAKUMEI_PRICE },
];

const SRC6 = {
  sangetsuVinylPdf: { name: "サンゲツ 技術資料「壁紙のメンテナンス 一般ビニル壁紙」（PDF）", url: "https://contents.sangetsu.co.jp/doc/technical-data/%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9_%E4%B8%80%E8%88%AC%E3%83%93%E3%83%8B%E3%83%AB%E5%A3%81%E7%B4%99.pdf" },
  lilyAttention: { name: "リリカラ お手入れ便利帳「取扱上の注意」", url: "https://www.lilycolor.co.jp/interior/mentenance/attention/index.html" },
  lilyColumnMold: { name: "リリカラ コラム「夏のジメジメした空気にさようなら！『機能性壁紙』で…」（2019年）", url: "https://www.lilycolor.co.jp/interior/lilycolornote/190701_7.html" },
  kaoQaWall: { name: "花王 製品Q&A「『強力カビハイター』は、押入れの隅や、リビングの壁に生えたカビにも使えるの？」", url: "https://www.kao.com/jp/qa/detail/16331/" },
  kaoProKabiHaiter: { name: "花王プロフェッショナル「強力カビハイター 業務用 スプレー付き 1000mL」", url: "https://pro.kao.com/jp/products/kps08/4901301506177/" },
  tokyoCondensation: { name: "東京都保健医療局「健康・快適居住環境の指針」結露の防止（PDF）", url: "https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/web_bunya2" },
  tokyoMold: { name: "東京都保健医療局「健康・快適居住環境の指針」室内のカビ対策（PDF）", url: "https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/web_bunya3" },
  tokyoAllergy: { name: "東京都アレルギー情報navi.「室内環境対策」", url: "https://www.hokeniryo1.metro.tokyo.lg.jp/allergy/measure/indoor.html" },
  mlitLeaflet: { name: "国土交通省「これでわかる！賃貸住宅を退去する時の原状回復のポイント」（PDF）", url: "https://www.mlit.go.jp/jutakukentiku/house/content/001595124.pdf" },
  eidaiManual: { name: "永大産業「木質フローリング快適生活マニュアル」（PDF）", url: "https://www.eidai.com/contact/oteire/pdf/K1892109.pdf" },
  woodtecManual: { name: "朝日ウッドテック「床のメンテナンスブック」（PDF）", url: "https://www.woodtec.co.jp/cms/wp-content/uploads/2023/06/LNPmaintenance_web-4.pdf" },
  daikenCareList: { name: "大建工業 FAQ「床材のお手入れ方法一覧」", url: "https://faq.daiken.jp/faq/show/3189?site_domain=user" },
  daikenHeavyDirt: { name: "大建工業 FAQ「床材にひどい汚れがついた時のお手入れ方法は？」", url: "https://faq.daiken.jp/faq/show/222?site_domain=user" },
  daikenRug: { name: "大建工業 FAQ（敷物による床材の変色）", url: "https://faq.daiken.jp/faq/show/332?site_domain=user" },
  daikenRepair: { name: "大建工業 FAQ（床材の表面のはがれと補修）", url: "https://faq.daiken.jp/faq/show/3849?site_domain=user" },
  panaRangeNoise: { name: "パナソニック FAQ「使っているうちに、だんだん音が大きくなってきたのはなぜですか。（レンジフードに関して）」", url: "https://jpn.faq.panasonic.com/app/answers/detail/a_id/81877" },
  panaRangeNoiseDed: { name: "パナソニック FAQ「【レンジフード】異常音がします。どうしたらいいですか。」（DEDシリーズ）", url: "https://jpn.faq.panasonic.com/app/answers/detail/a_id/62437" },
  panaRangeFan: { name: "パナソニック FAQ「羽根（ファン）のお手入れについて教えてください。（レンジフードに関して）」", url: "https://jpn.faq.panasonic.com/app/answers/detail/a_id/81831" },
  mitsuNoise: { name: "三菱電機 FAQ「運転すると異常音(異音)がする。運転音が大きくなった。原因は何でしょうか？」", url: "https://faq01.mitsubishielectric.co.jp/faq/show/6692?site_domain=default" },
  mitsuNoisePipe: { name: "三菱電機 FAQ「運転すると異常音(異音)がする。」（パイプ用ファン）", url: "https://faq01.mitsubishielectric.co.jp/faq/show/9125?site_domain=default" },
  mitsuWind: { name: "三菱電機 FAQ「風が強いときにパタパタ音(異音)がする場合、原因は何でしょうか？」", url: "https://faq01.mitsubishielectric.co.jp/faq/show/10714?site_domain=default" },
  mitsuLongUse: { name: "三菱電機「長年ご使用の換気扇についてお知らせとお願い」", url: "https://www.mitsubishielectric.co.jp/tenken/naganen_kaden/kisyu02.html" },
  mitsuWindowFanManual: { name: "三菱電機 窓用換気扇 E-20WH2/E-25WH2 取扱説明書（PDF）", url: "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/FAN_IB/1902876h21701_ib.pdf" },
  lixilRangeNoise: { name: "LIXIL Q&A「キッチンのレンジフード（換気扇）を運転すると異音がする」", url: "https://faq.lixil.co.jp/キッチンのレンジフード（換気扇）を運転すると異音がする-626cd6cc1d59830023aad720" },
  fujiohManual: { name: "富士工業 レンジフード AGG-AP752/952 取扱説明書（PDF）", url: "https://fujioh.com/airpro/product/agg/download/manual_agg_2503.pdf" },
  totoBathHelp: { name: "TOTO「Help!こんなときは、どうしよう？」（浴室）", url: "https://jp.toto.com/support/maintenance/bath/help-time/" },
  totoSenzai: { name: "TOTO「おすすめのお手入れ用品や洗剤」（浴室）", url: "https://jp.toto.com/support/water/bath/senzai.htm" },
  totoMirrorRakuraku: { name: "TOTO「お掃除ラクラク鏡（くもり止めヒーターなし）のお手入れ」", url: "https://jp.toto.com/support/maintenance/bath/mirror/bath-mirror_rakurakunashi/" },
  totoMirrorHeater: { name: "TOTO「一般鏡（くもり止めヒーター付き）のお手入れ」", url: "https://jp.toto.com/support/maintenance/bath/mirror/bath-mirror_ippanari/" },
  lixilMirror: { name: "LIXIL「鏡のお手入れ・お掃除方法」", url: "https://www.lixil.co.jp/support/clean/bathroom_13_regular.htm" },
  lixilMirrorFaq: { name: "LIXIL Q&A「ユニットバス（風呂）の鏡をお手入れする方法」", url: "https://faq.lixil.co.jp/ユニットバス（風呂）の鏡をお手入れする方法-626cd6cc2cb4bd00237e21a3" },
  lixilStoreMirror: { name: "LIXILストア 住まいのべんり帖（浴室の鏡）", url: "https://parts.lixil.co.jp/lixilps/shop/campaign/bath-kaiketsu/mirror/" },
  panaMirror: { name: "パナソニック「カウンター・収納棚・ミラー（バスルームのお手入れ）」", url: "https://sumai.panasonic.jp/support/care/bath/05/" },
  panaScaleArticle: { name: "パナソニック「お風呂の水あかをきれいに落とす掃除&やってはいけない方法！」", url: "https://sumai.panasonic.jp/bathroom/article/06.html" },
  kaoQaMirror: { name: "花王 製品Q&A「浴室内の鏡のお手入れには『バスマジックリン』が使えるの？」", url: "https://www.kao.com/jp/qa/detail/28678/" },
  lixilKabitori: { name: "LIXIL「お風呂カビ取り完全マニュアル」", url: "https://parts.lixil.co.jp/sumai/bath-kabitori/" },
  lixilBathTips: { name: "LIXIL「汚れの種類とお手入れ方法」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_tips02.htm" },
  lixilPinkFaq: { name: "LIXIL Q&A「ユニットバスの洗い場の床にピンクや黒色の汚れがついた」", url: "https://faq.lixil.co.jp/%E3%83%A6%E3%83%8B%E3%83%83%E3%83%88%E3%83%90%E3%82%B9%E3%81%AE%E6%B4%97%E3%81%84%E5%A0%B4%E3%81%AE%E5%BA%8A%E3%81%AB%E3%83%94%E3%83%B3%E3%82%AF%E3%82%84%E9%BB%92%E8%89%B2%E3%81%AE%E6%B1%9A%E3%82%8C%E3%81%8C%E3%81%A4%E3%81%84%E3%81%9F-626cd6cc2cb4bd00237e210a" },
  lionPink: { name: "ライオン ニュースリリース（ルックプラス バスタブクレンジング 銀イオンプラス）2024年", url: "https://www.lion.co.jp/ja/newsroom/news/2024/4706" },
  panaBathBook: { name: "パナソニック「わが家のバスルームメンテナンス」お手入れ読本（PDF）", url: "https://panasonic.co.jp/phs/pawe/datadownload/data/data_manual/bath_oteiredokuhon.pdf" },
  kaoMyKaoPink: { name: "花王 MyKao くらしラボ（浴室のピンク汚れ）", url: "https://my.kao-kirei.com/kurashi-labo/laundry-cleaning/cleaning/024/" },
};

// 2026-11-22 深夜02時の回（kwexp）: 賃貸のエアコンクリーニング・ベランダ掃除の洗剤・お風呂の椅子・お風呂の壁・お風呂の排水口。料金・公式情報は 2026-11-22 に確認。
const D4 = "2026-11-22";
const HONPO_EXTERIOR = "https://www.osoujihonpo.com/house-cleaning/others/exterior/";
const KAKUMEI_BALCONY = "https://www.osoujikakumei.jp/house-cleaning/indoor/balcony";

const BALCONY_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "ベランダ・外回り高圧洗浄（ベランダ・カーポート・外壁・玄関ポーチ等。10㎡まで同額）", price: "11,000円／式", src: HONPO_EXTERIOR },
  { brand: "おそうじ本舗", menu: "10㎡を超える場合（1㎡追加ごと）", price: "＋1,100円／㎡", src: HONPO_EXTERIOR },
  { brand: "おそうじ本舗", menu: "タイルのエフロ（白華）除去 0.5㎡（オプション）", price: "＋3,300円／式", src: HONPO_EXTERIOR },
  { brand: "おそうじ革命", menu: "ベランダ・バルコニークリーニング（10㎡未満）", price: "7,700円", src: KAKUMEI_BALCONY },
  { brand: "おそうじ革命", menu: "ベランダ・バルコニークリーニング（10㎡以上20㎡未満／20㎡以上30㎡未満）", price: "15,400円／23,100円", src: KAKUMEI_BALCONY },
];

const BALCONY_CTA: DiyGuide["cta"] = [
  { href: "/services-detail/balcony/", label: "ベランダ・バルコニークリーニングの内容を見る" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
];

const SRC7 = {
  mlitGuideline: { name: "国土交通省「原状回復をめぐるトラブルとガイドライン（再改訂版）」第1章（PDF）", url: "https://www.mlit.go.jp/common/000991391.pdf" },
  mlitGuidelineTop: { name: "国土交通省「『原状回復をめぐるトラブルとガイドライン』について」", url: "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000020.html" },
  lixilRail: { name: "LIXIL「ベランダ手すり」取扱い説明書（MAF-658F・PDF）", url: "https://assets.lixil.com/content/dam/lixil-assets/manual/202403/MAF-658F.pdf" },
  lixilBalcony: { name: "LIXIL「バルコニー」取扱い説明書（M70407B・PDF）", url: "https://assets.lixil.com/content/dam/lixil-assets/manual/oldext/201607/M70407B.pdf" },
  toyotaBalcony: { name: "トヨタホーム オーナー向けメンテナンス情報「ベランダ」（PDF）", url: "https://owners.toyotahome.co.jp/module/pdf/rashiku_maintenance/r-maintenance25.pdf" },
  toyotaBalcony2: { name: "トヨタホーム オーナー向けメンテナンス情報「台風や大雨に備える 排水口だけでなくベランダのお掃除も」（PDF）", url: "https://owners.toyotahome.co.jp/module/pdf/rashiku_maintenance/r-maintenance39.pdf" },
  kaoBathBasic: { name: "花王 住まいのおそうじガイド「基本的なお風呂掃除のやり方」", url: "https://www.kao.co.jp/osouji/kihon/ofuro/" },
  kaoMold: { name: "花王 住まいのおそうじガイド「住まいのカビ対策、場所別カビ取りの方法」", url: "https://www.kao.co.jp/osouji/yogore/kabi/" },
  kaoQaMold: { name: "花王 製品Q&A「【生活情報】浴室のカビをしっかり落とすには？」", url: "https://www.kao.com/jp/qa/detail/28131/" },
  lixilWallDaily: { name: "LIXIL「壁の日常のお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_08_daily.htm" },
  lixilWallRegular: { name: "LIXIL「壁の定期的なお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_08_regular.htm" },
  lixilCeiling: { name: "LIXIL「天井の定期的なお手入れ」（浴室）", url: "https://www.lixil.co.jp/support/clean/bathroom_07_regular.htm" },
  totoWallFloor: { name: "TOTO「床のお手入れ」（浴室の壁・床）", url: "https://jp.toto.com/support/maintenance/bath/wall/wallfloor/" },
  lixilDrainDaily: { name: "LIXIL「スタンダード排水口の日常のお手入れ」", url: "https://www.lixil.co.jp/support/clean/bathroom_09_daily.htm" },
  lixilDrainRegular: { name: "LIXIL「スタンダード排水口の定期的なお手入れ」", url: "https://www.lixil.co.jp/support/clean/bathroom_09_regular.htm" },
  lixilKururinDaily: { name: "LIXIL「くるりんポイ排水口の日常のお手入れ」", url: "https://www.lixil.co.jp/support/clean/bathroom_10_daily.htm" },
  totoDrainSlow: { name: "TOTO「洗い場の排水口の流れが悪い」", url: "https://jp.toto.com/support/repair/bath/drain/floordrain/" },
  totoDrainSmell: { name: "TOTO「排水口より異臭がする」", url: "https://jp.toto.com/support/repair/bath/drain/floordrainsmell/" },
  duskinBath: { name: "ダスキン 浴室クリーニング", url: DUSKIN_BATH },
  honpoBath: { name: "おそうじ本舗 風呂・浴室クリーニング", url: HONPO_BATH },
};

// 2026-11-22 深夜04時の回で追加（ユニットバス・窓と網戸・洗濯機の自動投入・天井埋込エアコン・キッチンタイル）。料金・公式情報は 2026-11-22 に確認。
const HONPO_AC_CEIL = "https://www.osoujihonpo.com/house-cleaning/aircon/ceil/";
const DUSKIN_WINDOW = "https://www.duskin.jp/servicemaster/window/sm000130/";

const WINDOW_PRICES: DiyGuide["prices"] = [
  { brand: "ダスキン", menu: "網戸クリーニング 腰高窓（1枚0.5〜1m²未満）S・Aエリア／Bエリア", price: "1,122円〜／990円〜", src: DUSKIN_WINDOW },
  { brand: "ダスキン", menu: "網戸クリーニング 掃き出し窓（1枚1〜2m²未満）S・Aエリア／Bエリア", price: "1,496円〜／1,320円〜", src: DUSKIN_WINDOW },
  { brand: "ダスキン", menu: "ガラス・サッシクリーニング 掃き出し窓（1枚1〜2m²未満）S・Aエリア／Bエリア", price: "2,992円〜／2,640円〜", src: DUSKIN_WINDOW },
  { brand: "おそうじ革命", menu: "窓ガラス・サッシ", price: "3,850円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "網戸洗浄（オプション）", price: "＋1,100円", src: KAKUMEI_PRICE },
];

const WINDOW_CTA: DiyGuide["cta"] = [
  { href: "/services-detail/window/", label: "窓・サッシクリーニングの内容を見る" },
  { href: "/price/", label: "箇所別の料金相場を見る" },
];

const CEIL_AC_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "エアコンクリーニング（天井埋込1・2方向タイプ。約3時間／台）", price: "27,500円／台", src: HONPO_AC_CEIL },
  { brand: "おそうじ本舗", menu: "お掃除機能付き（オプション）", price: "＋8,800円／台", src: HONPO_AC_CEIL },
  { brand: "おそうじ本舗", menu: "4方向タイプ（オプション）", price: "要相談", src: HONPO_AC_CEIL },
  { brand: "おそうじ革命", menu: "家庭用天井埋め込み型", price: "20,900円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "業務用天井埋め込み型（天カセ）", price: "26,400円", src: KAKUMEI_PRICE },
];

const SRC8 = {
  totoBathTop: { name: "TOTO「浴室のまるごとお掃除」", url: "https://jp.toto.com/support/maintenance/bath/" },
  totoFloor: { name: "TOTO「床のお手入れ」（浴室）", url: "https://jp.toto.com/support/water/bath/12.htm" },
  totoCeiling: { name: "TOTO「壁・天井（浴室）のお手入れ」", url: "https://jp.toto.com/support/water/bath/16.htm" },
  lixilBathTools: { name: "LIXIL「浴室のお手入れ・お掃除のコツ｜お掃除道具の紹介」", url: "https://www.lixil.co.jp/support/clean/bathroom_tips01.htm" },
  lixilBathDirt: { name: "LIXIL「浴室のお手入れ・お掃除のコツ｜浴室の汚れの種類とお手入れ方法」", url: "https://www.lixil.co.jp/support/clean/bathroom_tips02.htm" },
  lixilScreen: { name: "LIXIL「網戸のお手入れ・お掃除方法」", url: "https://www.lixil.co.jp/support/clean/window_shutter_04.htm" },
  lixilAlumi: { name: "LIXIL「アルミ製品のお手入れ・お掃除方法」", url: "https://www.lixil.co.jp/support/clean/window_shutter_01.htm" },
  lixilGlass: { name: "LIXIL「ガラスのお手入れ・お掃除方法」", url: "https://www.lixil.co.jp/support/clean/window_shutter_05.htm" },
  lixilFixedScreen: { name: "LIXIL「固定式網戸（フレームレス）取扱い説明書」（MAN-201A・PDF）", url: "https://assets.lixil.com/content/dam/lixil-assets/manual/202309/MAN-201A.pdf" },
  hitachiAutoDose: { name: "日立の家電品「自動投入部のお手入れ方法を知りたいです。（ドラム式）」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a255.html" },
  daikinCassette: { name: "ダイキン「自分でもできる！業務用（天井カセット形）エアコンのお手入れ」", url: "https://www.ac.daikin.co.jp/customercenter/useful/article/18" },
  daikinCassetteFaq: { name: "ダイキン ハウジングエアコン「入れかえお悩みQ&A 製品編（天井埋込カセット形）」", url: "https://www.ac.daikin.co.jp/sumai/aircon/replace/faq/cassette" },
  lixilKitchenTile: { name: "LIXIL「キッチン壁（キッチンバック）のお手入れ・お掃除方法」（タイル建材）", url: "https://www.lixil.co.jp/support/clean/tile_04.htm" },
  duskinWindow: { name: "ダスキン ガラス・サッシ・網戸クリーニング", url: DUSKIN_WINDOW },
  honpoAcCeil: { name: "おそうじ本舗 エアコンクリーニング（天井埋込1・2方向タイプ）", url: HONPO_AC_CEIL },
  honpoKitchen: { name: "おそうじ本舗 キッチンクリーニング", url: HONPO_KITCHEN },
  duskinKitchen: { name: "ダスキン キッチンクリーニング", url: DUSKIN_KITCHEN },
  kakumeiPrice: { name: "おそうじ革命 料金", url: KAKUMEI_PRICE },
};

// 2026-11-22 20:00 の回で追加（糸くずフィルター・トイレの手洗い・お掃除機能付きエアコン・プロペラ換気扇・悪質なエアコンクリーニング）。料金・公式情報は 2026-11-22 に確認。
const PROPELLER_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ革命", menu: "フード無しプロペラ・天埋換気扇タイプ", price: "9,900円", src: KAKUMEI_PRICE },
  { brand: "おそうじ革命", menu: "レンジフード（参考：フード付きの場合）", price: "17,930円", src: KAKUMEI_PRICE },
  { brand: "おそうじ本舗", menu: "レンジフード・換気扇クリーニング（参考：外装カバー・本体内部・ファン・フィルター・ファンハウジング。約2.5時間）", price: "19,800円／式", src: HONPO_FAN },
  { brand: "ダスキン", menu: "レンジフードまたはフード付き換気扇1台（参考：幅95cm未満）", price: "22,000円", src: DUSKIN_FAN },
];

const AUTO_CLEAN_AC_PRICES: DiyGuide["prices"] = [
  { brand: "おそうじ本舗", menu: "壁掛けエアコン（お掃除機能付き）", price: "24,200円／台（2台以上の注文は22,000円／台）", src: HONPO_AC },
  { brand: "おそうじ本舗", menu: "壁掛けエアコン（お掃除機能なし・参考）", price: "14,300円／台（2台以上の注文は12,100円／台）", src: HONPO_AC },
  { brand: "ダスキン", menu: "フィルター自動お掃除機能付きエアコン（1台）", price: "26,400円", src: DUSKIN_AC },
  { brand: "ダスキン", menu: "家庭用壁掛けエアコン（1台・参考）", price: "15,400円", src: DUSKIN_AC },
  { brand: "おそうじ革命", menu: "壁掛け お掃除機能付き／お掃除機能なし（参考）", price: "18,700円／9,980円", src: KAKUMEI_PRICE },
];

const SRC9 = {
  hitachiLintTop: { name: "日立の家電品「糸くずフィルターのお手入れをしたいです。（タテ型）」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a72.html" },
  hitachiLintDrum: { name: "日立の家電品「糸くずフィルターのお手入れ方法を知りたいです。（ドラム式）」", url: "https://kadenfan.hitachi.co.jp/support/wash/q_a/a49.html" },
  panaLint: { name: "パナソニック よくあるご質問「【タテ型洗濯機】糸くずフィルターのお手入れ」", url: "https://jpn.faq.panasonic.com/app/answers/detail/a_id/15351/" },
  totoTank: { name: "TOTO「便器・タンクのお手入れ」", url: "https://jp.toto.com/support/maintenance/toilet/cleaningtool/tank/" },
  totoFaucetScale: { name: "TOTO「手洗い金具の水あか（トイレ）」", url: "https://jp.toto.com/support/maintenance/toilet/pinkstain/faucetscales/" },
  hitachiDustBox: { name: "日立の家電品「ホコリキャッチャーやダストボックスのお手入れ方法を知りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-11.html" },
  hitachiAutoClean: { name: "日立の家電品「『自動クリーン運転』のフィルター自動お掃除について知りたいです。」", url: "https://kadenfan.hitachi.co.jp/support/ra/q_a/post-85.html" },
  hitachiFreeze: { name: "日立の家電品「熱交換器＆ファン自動お掃除［凍結洗浄 ファンロボ］」（RAS-X40J2）", url: "https://kadenfan.hitachi.co.jp/ra/lineup/xseries_j/feature01.html" },
  mitsubishiFilter: { name: "三菱電機 霧ヶ峰「フィルターのお手入れ」", url: "https://www.mitsubishielectric.co.jp/home/kirigamine_user/care/filter/" },
  sharpDustBox: { name: "シャープ「ダストボックスのお手入れ方法（取りはずし・取り付け方法） AY-J/Hシリーズ」", url: "https://jp.sharp/support/air_con/mt_doc/dustbox_clean_hx.html" },
  daikinAx: { name: "ダイキン 壁掛形エアコン AXシリーズ「クリーン（フィルター自動お掃除）」", url: "https://www.ac.daikin.co.jp/kabekake/products/ax_series/kinou/osoji" },
  mitsubishiFanManual: { name: "三菱電機「メタルコンパック換気扇（台所用）20cm・25cm・30cm 据付・取扱説明書」（PDF）", url: "https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/wink/FAN_IB/1005874hb8304_ib.pdf" },
  panaFanDetergent: { name: "パナソニック よくあるご質問「【一般換気扇】換気扇のお手入れに使用する洗剤はありますか。」", url: "https://jpn.faq.panasonic.com/app/answers/detail/a_id/61556" },
  panaFanBlade: { name: "パナソニック よくあるご質問「【一般換気扇】羽根を洗浄したいのですが、羽根が外れません。」", url: "https://jpn.faq.panasonic.com/app/answers/detail/a_id/61466/" },
  kokusenHouse: { name: "国民生活センター「ハウスクリーニングのトラブルにご注意」（2025年2月28日）", url: "https://www.kokusen.go.jp/news/data/n-20250228_1.html" },
  kokusenPhone: { name: "国民生活センター 見守り新鮮情報 第450号「低価格で誘う換気扇やエアコンクリーニングの電話勧誘」（2023年5月16日）", url: "https://www.kokusen.go.jp/mimamori/mj_mailmag/mj-shinsen450.html" },
  caaDoor: { name: "消費者庁 特定商取引法ガイド「訪問販売」", url: "https://www.no-trouble.caa.go.jp/what/doortodoorsales/" },
  honpoAc: { name: "おそうじ本舗 壁掛けエアコンクリーニング", url: HONPO_AC },
  duskinAc: { name: "ダスキン エアコンクリーニング", url: DUSKIN_AC },
  honpoWasherTop: { name: "おそうじ本舗 縦型洗濯機クリーニング", url: HONPO_WASHER_TOP },
  honpoWasherFront: { name: "おそうじ本舗 ドラム式洗濯機クリーニング", url: HONPO_WASHER_FRONT },
  duskinWasher: { name: "ダスキン 洗濯機クリーニング", url: DUSKIN_WASHER },
  honpoToilet: { name: "おそうじ本舗 トイレクリーニング", url: HONPO_TOILET },
  duskinToilet: { name: "ダスキン トイレクリーニング", url: DUSKIN_TOILET },
  honpoFan: { name: "おそうじ本舗 レンジフード・換気扇クリーニング", url: HONPO_FAN },
  duskinFan: { name: "ダスキン レンジフードクリーニング", url: DUSKIN_FAN },
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
    related: ["aircon-smell", "aircon-water-leak", "aircon-cleaning-spray", "aircon-fan-cleaning", "outdoor-unit-cleaning", "aircon-noise", "ceiling-aircon-cleaning", "auto-clean-aircon-cleaning"],
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
    related: ["aircon-self-cleaning", "aircon-water-leak", "aircon-fan-cleaning", "aircon-internal-clean", "rental-aircon-cleaning"],
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
    related: ["aircon-not-cooling", "aircon-self-cleaning", "balcony-cleaning-detergent"],
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
    related: ["sink-water-stains", "fish-grill-cleaning", "range-hood-filter-cleaning", "ih-cooktop-cleaning", "kitchen-tile-cleaning"],
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
    related: ["bath-floor-black-stains", "toilet-floor-cleaning", "toilet-fan-cleaning", "toilet-cleaning-basics"],
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
    related: ["wallpaper-mold"],
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
    related: ["toilet-citric-acid", "bathtub-cleaning", "bath-pink-mold", "bath-mirror-water-stains"],
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
    related: ["bath-floor-black-stains", "oxiclean-bathroom", "bath-fan-cleaning", "unit-bath-cleaning"],
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
    related: ["washer-drain-cleaning", "washer-lifespan", "oxiclean-bathroom", "washer-auto-dosing-cleaning", "washer-lint-filter-cleaning"],
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
    related: ["gas-stove-cleaning", "toilet-citric-acid", "kitchen-drain-cleaning"],
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
  {
    slug: "aircon-internal-clean",
    kw: "エアコン 内部クリーン",
    title: "エアコンの内部クリーンとは｜メーカー7社の運転時間・電気代・止め方と、掃除の代わりにならない理由 | クリーンナビ",
    description:
      "エアコンの内部クリーン（内部乾燥）運転を、三菱電機・パナソニック・富士通ゼネラル・日立・東芝・シャープ・ダイキンの公式情報で比較しました。運転時間・電気代・室温が上がる理由・途中で止めてよいか・すでに発生したカビは取れないことと、業者のエアコンクリーニングの公式料金を掲載しています。",
    h1: "エアコンの内部クリーンとは｜運転時間・電気代・止め方をメーカー公式で比較",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "内部クリーンは、冷房や除湿の運転で結露した室内機の内部（熱交換器や送風路）を、運転停止後に送風や弱い暖房で乾燥させ、カビやにおいの発生を抑える機能です。名称はメーカーによって異なり、シャープは「内部清浄」、東芝は「セルフクリーン」（内部乾燥）と呼んでいます。運転時間は、日立の約60分からダイキンの約80〜140分まで、機種によって幅があります。",
      "当サイトが確認した7社とも、この機能は乾燥によってカビの発生を抑えるものとしており、三菱電機・パナソニック・富士通ゼネラル・日立・シャープ・ダイキンは、すでに発生したカビは内部クリーンでは取れないと明記しています（東芝は記載を確認できませんでした）。においや吹出口の奥のカビが気になる場合は、業者のエアコンクリーニングで内部を洗浄します。",
    ],
    sections: [
      {
        h2: "メーカー7社の内部クリーンの比較",
        blocks: [
          "各社の公式FAQ・取扱説明書・製品ページを開き、同じ項目でそろえて整理しました。時間や設定は機種によって異なるため、お手持ちのエアコンの取扱説明書もあわせてご確認ください。",
          {
            table: {
              head: ["メーカー", "機能の名称", "運転の内容と時間", "電気代の目安（公式）", "すでに発生したカビ"],
              rows: [
                ["三菱電機", "内部クリーン", "冷房・除湿の停止後、最大10分間の弱暖房で内部を乾燥。室温が約2〜3℃上がることがある", "記載なし", "取り除く機能ではない"],
                ["パナソニック", "ナノイーX内部クリーン", "30分以上運転して停止した後に自動で作動。取扱説明書（CS-K222D ほか）では冷房・除湿後に約80〜95分（送風→暖房→送風）", "1回あたり約1.7円", "生えてしまったカビを除去する機能ではない"],
                ["富士通ゼネラル", "内部クリーン", "取扱説明書（AS-ZN253N ほか）では冷房・除湿の停止後に約100分の送風。この機種のお買い上げ時の設定は「切」", "記載なし", "除去する働きはない（除去は別機能の「加熱除菌」）"],
                ["日立", "内部クリーン", "冷房・除湿・涼快の停止後、弱暖房のあと送風で約60分乾燥（機種により「内部送風乾燥運転」約2時間）", "記載なし", "除去・殺菌はできない"],
                ["東芝", "セルフクリーン（自動クリーニング）", "運転停止後にフィルター自動お掃除と内部乾燥・UV照射（Nシリーズ）", "記載なし", "公式ページで記載を確認できず"],
                ["シャープ", "内部清浄", "停止前の運転により約20〜90分。冷房・除湿の後は約70〜90分（暖房運転は最大10分間）", "約0.3〜2円", "内部清浄運転では取れない"],
                ["ダイキン", "内部クリーン（ストリーマ内部クリーン）", "冷房・除湿の停止後に送風・暖房で約80〜140分。水内部クリーンは別機能で約150〜290分", "1回あたり2〜4円程度（水内部クリーンは45〜95円）", "除去できない"],
              ],
              note: "各社の公式ページ・取扱説明書を 2026-11-21 に確認。電気代は各社が示す計算条件による目安で、料金単価の前提は各社で異なります。東芝は運転時間・電気代・室温の記載を公式ページで確認できなかったため「記載なし」としています。",
            },
          },
        ],
      },
      {
        h2: "運転中に室温が上がる・においがする理由",
        blocks: [
          "内部クリーンは、内部を乾燥させるために弱い暖房や送風を行います。そのため運転中は室内の温度や湿度が上がることがあり、三菱電機は室温が約2〜3℃上がる場合があるとしています。ダイキンと三菱電機は、気になる場合は外出時など部屋に人がいないときに使うよう案内しています。",
          "運転中のにおいについて、ダイキンは一時的にニオイが発生する場合があるとし、三菱電機と富士通ゼネラルは、熱交換器が汚れているとにおいが出ることがあると説明しています。三菱電機はこの場合、エアコン内部のお手入れを勧めています。",
          "運転を止めたのに風が出る、ランプが点いたままといった状態は、多くの場合、内部クリーンの作動中です。シャープは、カビの増殖やニオイを抑制するためにも最後まで運転するよう案内しています。",
        ],
      },
      {
        h2: "自動運転の切り替えと、途中で止めるとき",
        blocks: [
          {
            table: {
              head: ["メーカー", "自動運転の初期設定と切り替え（公式の記載）"],
              rows: [
                ["三菱電機", "リモコンの内部クリーンボタン、またはメニューから「入」に設定する。設定すると停止のたびに自動で作動"],
                ["パナソニック", "工場出荷時は自動で作動。設定で「クリーン 無」にすると自動では作動しない。「送風」に変えると暖房を使わない分、約150〜240分に延びる（CS-K222D ほか）"],
                ["富士通ゼネラル", "メニューの「熱交換器加熱除菌・内部クリーン」から「入／切」を設定（AS-ZN253N ほかは初期設定「切」）"],
                ["日立", "機種により操作が異なる（機能選択で設定／専用ボタン／停止ボタンを約3秒長押し）。取り消しは同じ操作"],
                ["東芝", "自動クリーニングを毎回運転させない設定にはできない（同社FAQ）。停止ボタンをもう一度押すと止まる"],
                ["シャープ", "工場出荷時は「入」。リモコンのメニューの「内部清浄」で入／切を切り替える"],
                ["ダイキン", "工場出荷時は「入」。リモコンのメニューの「便利機能」から「自動内部クリーン」の入／切を切り替える"],
              ],
              note: "各社の公式ページ・取扱説明書を 2026-11-21 に確認。機種によって操作が異なります。",
            },
          },
          "途中で止めることについて、ダイキンは停止ボタンで止められるものの、乾燥しきらず効果が得られにくくなると説明しています。東芝・パナソニックも、止めることはできるがなるべく最後まで運転するよう案内しています。",
          "タイマーで停止した場合は自動で作動しない機種があります（ダイキンはタイマー・スマートフォンでの停止、日立は切タイマーなど、富士通ゼネラルはおやすみタイマーでの停止）。日立は、冷房などの運転時間が10分未満の場合も作動しないとしています。",
        ],
      },
    ],
    whenPro: [
      "内部クリーンを使っていても、運転中や運転開始時にカビ臭い・酸っぱいにおいがする場合（三菱電機・シャープは、においが出る場合は内部のお手入れやエアコンクリーニングを勧めています）",
      "吹出口から見える送風ファンや風向板の奥に、黒い点状の汚れが見える場合（すでに発生したカビは内部クリーンでは取れないと各社が明記しています）",
      "内部クリーンの機能がない機種や、長期間クリーニングをしていない機種で、内部の汚れが気になる場合",
      "焦げ臭いにおい・異音・水漏れがある場合は、クリーニングではなく販売店やメーカーの修理窓口へご相談ください",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "内部のカビやにおいが気になる場合は、エアコンクリーニング業者の料金と対応エリアを比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "内部クリーンは毎回使ったほうがよいですか。", a: "ダイキンは、冷房や除湿の後は室内機の内部が結露しており、そのままにするとカビやニオイの原因になるとして、内部クリーンの使用を勧めています。室温の上昇が気になる場合は、外出時など部屋に人がいないときに使う方法があります。" },
      { q: "内部クリーンの電気代はいくらですか。", a: "各社が公式に示す目安は、パナソニックが1回あたり約1.7円、シャープが約0.3〜2円、ダイキンが2〜4円程度です（計算に使う電気料金の単価は各社で異なります）。三菱電機・富士通ゼネラル・日立・東芝は、当サイトが確認した公式ページに電気代の記載がありませんでした。" },
      { q: "内部クリーンを使っていればエアコンクリーニングは不要ですか。", a: "内部クリーンは、乾燥によってカビの発生を抑える機能です。三菱電機・パナソニック・富士通ゼネラル・日立・シャープ・ダイキンは、すでに発生したカビは取れないと明記しています。においや内部のカビが気になる場合は、業者のエアコンクリーニングをご検討ください。" },
      { q: "暖房の後にも内部クリーンは動きますか。", a: "機種によって異なります。シャープの取扱説明書（AY-L22S〜L40S）では、暖房の後は約20分の送風運転を行うとしています。三菱電機・日立・富士通ゼネラル・ダイキンは、冷房・除湿などの後に作動すると説明しています。" },
    ],
    sources: [SRC4.mitsuInner, SRC4.panaGlossary, SRC4.panaManual, SRC4.fujitsuManual, SRC4.hitachiInner, SRC4.hitachiDry, SRC4.toshibaClean, SRC4.toshibaFaq, SRC4.sharpManual, SRC4.daikinInnerFaq, SRC4.daikinInnerTime, SRC4.daikinInnerStop, ...SRC_AC_PRICES],
    related: ["aircon-smell", "daikin-aircon-cleaning", "aircon-fan-cleaning"],
  },
  {
    slug: "toilet-fan-cleaning",
    kw: "トイレ 換気扇 掃除",
    title: "トイレの換気扇の掃除方法｜パナソニック・三菱電機の公式手順と頻度、業者に頼む場合の料金 | クリーンナビ",
    description:
      "トイレの換気扇の掃除方法を、パナソニック（天井埋込形換気扇）と三菱電機（パイプ用ファン・ダクト用換気扇）の公式のお手入れ方法で整理しました。頻度の目安、ブレーカーを切る理由、使えない洗剤、自分で分解しない部分と、大手3社のトイレ換気扇クリーニングの公式料金を掲載しています。",
    h1: "トイレの換気扇の掃除方法と、業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "パナソニックの天井埋込形換気扇の取扱説明書は、1か月に1回程度ルーバー（カバー）を洗って本体をふき、3か月に1回程度は羽根とオリフィスも洗うよう案内しています。三菱電機は、パイプ用ファンを約4か月に1度、ダクト用換気扇のグリルを約3〜6か月に1度を目安としています。どちらも作業前にスイッチと分電盤のブレーカーを切り、台所用中性洗剤を使います。",
      "モーターなど本体の内部は、両社とも自分で分解しないよう案内しています。羽根の奥の汚れが落ちない、回転音がおかしいといった場合は、業者のトイレ換気扇クリーニング（大手のオプションで3,300〜3,850円）や、販売店・工事店への点検の相談が選択肢になります。",
    ],
    sections: [
      {
        h2: "換気扇の種類別のお手入れの頻度と方法",
        blocks: [
          "トイレの換気扇は、天井に埋め込まれたタイプと、壁の穴に付いたパイプ用ファンが一般的です。パナソニックと三菱電機の公式のお手入れ方法を、当サイトで同じ項目にそろえました。",
          {
            table: {
              head: ["項目", "パナソニック（天井埋込形換気扇）", "三菱電機（パイプ用ファン）", "三菱電機（ダクト用換気扇）"],
              rows: [
                ["頻度の目安", "1か月に1回程度：ルーバーを洗う・本体をふく／3か月に1回程度：羽根・オリフィスも洗う", "約4か月に1度", "グリルを約6か月または約3か月に1度"],
                ["洗い方", "羽根・オリフィス・ルーバーは台所用中性洗剤をとかしたぬるま湯に浸して水洗いし、からぶき。本体は中性洗剤を含ませた布でふく", "グリルは中性洗剤を溶かしたぬるま湯（40℃以下）に浸して洗い、よく乾かす。羽根・本体は同じ液を含ませた布でふく", "グリルは台所用中性洗剤を含ませた布でふき、乾いた布で洗剤をふき取る"],
                ["使えないもの", "アルカリ性・弱アルカリ性洗剤、かびとり剤、シンナー、ベンジン、アルコール、金属タワシ", "シンナー、アルコール、ベンジン、ガソリン、灯油、スプレー、酸性・アルカリ性洗剤、化学ぞうきんの薬剤、研磨剤入り洗剤、殺菌剤、消毒剤", "—"],
                ["その他の注意", "熱で乾燥させない（変形・変質の原因）。シャフトのリングは外さない（異音の原因）", "グリルの落下に注意し、パネルを支えながら外す", "グリル以外の汚れがひどい場合や振動・騒音がある場合は販売店・修理窓口に相談"],
              ],
              note: "パナソニックの天井埋込形換気扇 取扱説明書（浴室・トイレ・洗面所用ほか）と三菱電機の公式お手入れページを 2026-11-21 に確認。機種によって部品の構造が異なるため、お手持ちの換気扇の取扱説明書もご確認ください。",
            },
          },
        ],
      },
      {
        h2: "作業前に確認すること",
        blocks: [
          {
            ol: [
              "換気扇のスイッチと、分電盤のブレーカーを切ります。パナソニックは感電やけがのおそれがあるため、ぬれた手でスイッチやブレーカーを操作しないよう案内しています。",
              "足場を安定させます。便器やタンクの上に乗らず、しっかりした踏み台を使います。三菱電機は、足元が不安定な状態で作業しないよう案内しています。",
              "手袋や保護めがねなどを着用します。パナソニックは、ホコリが目に入る、板金の切り口でけがをするおそれがあるとして、保護具の使用を挙げています。",
              "本体に直接水やお湯、かび取り剤をかけないでください（ショートや感電のおそれ・パナソニック）。",
            ],
          },
          "洗った部品は確実に取り付けます。両社とも、取り付けが不十分だと落下によるけがのおそれがあるとしています。",
        ],
      },
      {
        h2: "自分で分解しない部分と、点検・交換の目安",
        blocks: [
          "パナソニックは、本体を絶対に分解・修理・改造しないよう警告しています。羽根やオリフィスを外せる機種でも、モーターなどの本体内部には手を入れません。",
          "回転音が不規則、異常な音や振動、異臭がするといった症状がある場合、パナソニックは使用を中止して点検を依頼するよう案内しています。パナソニックの天井埋込形換気扇の設計上の標準使用期間は15年で、三菱電機も換気扇は約15年で設計上の標準使用期間を迎えるとしています。三菱電機は、中性以外の洗剤を設置場所で頻繁に使うと寿命が短くなる場合があると説明しています。",
        ],
      },
    ],
    whenPro: [
      "カバーや羽根を外す方法が分からない、天井が高く安全に作業できない場合",
      "羽根や本体の奥にホコリが固着し、中性洗剤でふいても落ちない場合",
      "トイレ全体（便器・床・壁・換気扇）をまとめて掃除したい場合。大手のトイレクリーニングの基本料金では、換気扇はカバーや表面までが対象で、内部はオプションです",
      "異音・振動・異臭がある場合は、クリーニングではなく販売店・工事店やメーカーの点検をご利用ください",
    ],
    priceHeading: "トイレクリーニング・換気扇の料金（大手3社の公式料金）",
    priceLead:
      "大手3社のトイレクリーニングでは、換気扇はカバー（表面）までが基本料金の範囲で、換気扇の内部はおそうじ本舗とおそうじ革命がオプションとして掲載しています。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: TOILET_FAN_PRICES,
    ctaText: "トイレクリーニングの作業内容と料金の目安をご確認いただけます。",
    cta: [
      { href: "/services-detail/toilet/", label: "トイレクリーニングの内容を見る" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "トイレの換気扇はどのくらいの頻度で掃除しますか。", a: "パナソニックの天井埋込形換気扇は、1か月に1回程度ルーバーと本体、3か月に1回程度は羽根とオリフィスまでのお手入れを目安としています。三菱電機は、パイプ用ファンを約4か月に1度、ダクト用換気扇のグリルを約3〜6か月に1度としています。" },
      { q: "換気扇の掃除にアルカリ性の洗剤やカビ取り剤を使ってもよいですか。", a: "パナソニックは、アルカリ性・弱アルカリ性の洗剤やかびとり剤を使わないものとして挙げ、樹脂部の変色・破損のおそれがあるとしています。三菱電機も酸性・アルカリ性洗剤を使わないよう案内しています。台所用中性洗剤を使ってください。" },
      { q: "掃除のときにブレーカーまで切る必要はありますか。", a: "パナソニックと三菱電機は、お手入れの際にスイッチだけでなく分電盤のブレーカーを切るよう案内しています（三菱電機は「ブレーカーを切るか、電源スイッチを切る」）。感電やけがを防ぐためです。" },
      { q: "掃除をしても換気扇の音が大きいままです。", a: "パナソニックは、回転音が不規則、異常音や振動があるといった場合は使用を中止し、点検を依頼するよう案内しています。設計上の標準使用期間（15年）を超えている場合は、交換も含めて販売店・工事店にご相談ください。" },
    ],
    sources: [SRC4.panaFanManual, SRC4.mitsuFanCare, SRC4.mitsuPipeFan, SRC4.mitsuDuctFan, SRC4.mitsuRenewal, { name: "おそうじ本舗 トイレクリーニング", url: HONPO_TOILET }, { name: "ダスキン トイレクリーニング", url: DUSKIN_TOILET }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["toilet-floor-cleaning", "bath-fan-cleaning", "toilet-citric-acid"],
  },
  {
    slug: "toilet-floor-cleaning",
    kw: "トイレ 床 掃除",
    title: "トイレの床の掃除方法｜TOTO・LIXIL・床材メーカーの公式の手入れと、黒ずみ・目地・業者に頼む目安 | クリーンナビ",
    description:
      "トイレの床の掃除方法を、TOTO・LIXIL・パナソニックと床材メーカー（東リ・サンゲツ）の公式のお手入れ方法で整理しました。ふだんの拭き方、便器まわりの黒いシミの原因、タイル目地と弾性目地の違い、クッションフロアに使えないものと、大手3社のトイレクリーニングの公式料金を掲載しています。",
    h1: "トイレの床の掃除方法｜メーカー公式の手入れと業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "TOTOとLIXILは、トイレの床のふだんのお手入れとして、ホコリを取ってから水拭きする方法を案内しています。汚れが気になるときは、中性洗剤を含ませた布でふき、洗剤が残らないよう水拭き・から拭きで仕上げます。便器と床のすき間は、割り箸に布を巻いたもので汚れと水分を取ります（TOTO）。",
      "TOTOは、便器まわりの床の黒いシミの原因を尿に含まれるアンモニアや結露とし、長時間放置すると木質系のフローリング床材を腐らせる原因にもなるとしています。床にこぼれた水分はすぐにふき取ります。拭いても落ちないシミや目地の黒ずみが広がっている場合は、業者のトイレクリーニング（大手で8,250〜10,340円、床を含む）を検討できます。",
    ],
    sections: [
      {
        h2: "床のお手入れの方法（TOTO・LIXIL・パナソニック）",
        blocks: [
          "便器メーカー3社の公式のお手入れ方法を、当サイトで同じ項目にそろえました。",
          {
            table: {
              head: ["項目", "TOTO", "LIXIL", "パナソニック"],
              rows: [
                ["ふだんのお手入れ", "そうじは上から下へ。ペーパーモップでホコリを取ってから水拭き", "掃除機をかけ、トイレ用中性洗剤をしみ込ませて固くしぼったぞうきんでふき、最後に水拭き", "—"],
                ["汚れが気になるとき", "布に住宅用中性洗剤を付けてふき、水拭き・から拭きで仕上げる", "—", "黄色い汚れはトイレ用洗剤（中性）。落ちにくい場合は漂白剤の湿布法"],
                ["便器と床のすき間", "割り箸に布を巻いたもので細かい汚れや水分を取る", "—", "—"],
                ["タイルの目地", "目地の黒ずみは歯ブラシにクリームクレンザーを付けてこする", "ブラシにクリームクレンザーを付けてこする。やわらかい弾性目地材はこすると摩耗するため、中性洗剤を使い固くしぼったぞうきんで軽くふく", "—"],
                ["使わないもの", "—", "—", "シンナー、ベンジン、灯油、アルコール、研磨剤入り洗剤。塩素系と酸性タイプの洗剤を混ぜない"],
              ],
              note: "TOTO・LIXIL・パナソニックの公式のお手入れページを 2026-11-21 に確認。床材によって使える洗剤が異なるため、床材の取扱説明書もご確認ください。",
            },
          },
        ],
      },
      {
        h2: "便器まわりの黒いシミ・黄ばみの原因",
        blocks: [
          "TOTOは、便器まわりの床の黒いシミを、尿に含まれるアンモニアや梅雨時などの結露が原因と説明しています。長時間放置すると木質系のフローリング床材を腐らせる原因にもなるため、床にこぼれた水分はすぐにふき取るよう案内しています。",
          "パナソニックは、黄色い汚れができやすい場所の一つに床を挙げ、便器の外側に付く汚れを尿酸やリン酸、アンモニアなどが付着したものと説明しています。中性のトイレ用洗剤で落とし、落ちにくい場合は漂白剤の湿布法を案内しています。塩素系の漂白剤と酸性タイプの洗剤は混ぜないでください。",
        ],
      },
      {
        h2: "クッションフロアのお手入れ（床材メーカー）",
        blocks: [
          "トイレの床に多いクッションフロアについて、床材メーカー2社の公式の案内です。",
          {
            ul: [
              "ふだんは掃除機でホコリを取り、固く絞った雑巾で水拭きします（東リ・サンゲツ）。",
              "汚れがひどい場合は、薄めた中性洗剤でふき、洗剤分が残らないよう水拭きします（東リ）。凹凸の黒ずみは、薄めた中性洗剤を付けた歯ブラシで円を描くようにこすります（サンゲツ）。",
              "住宅ではワックスは基本的に不要です。使う場合は床用の樹脂ワックスを使い、油性ワックスやカーワックスは使いません（東リ）。",
              "ゴム製品や防虫剤などに触れると黄色や茶色に変色し、除去できなくなります（東リ）。トイレマットの裏のゴムなどにご注意ください。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "便器まわりの黒いシミや黄ばみが、中性洗剤や湿布法でも落ちない場合",
      "タイル目地の黒ずみが広範囲にある場合や、弾性目地材をこすらずに落としたい場合",
      "床だけでなく、便器・便座・壁・換気扇カバーなどトイレ全体をまとめて掃除したい場合（大手3社のトイレクリーニングは、いずれも床を基本料金の範囲に含めています）",
      "フローリングの床が変色・腐食している場合は、清掃ではなく床材の補修・張り替えをリフォーム会社にご相談ください",
    ],
    priceHeading: "トイレクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "大手3社のトイレクリーニングは、いずれも床を基本料金の範囲に含めています。床のワックスはおそうじ本舗がオプション、おそうじ革命は含まないと明記しています。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: TOILET_FLOOR_PRICES,
    ctaText: "トイレクリーニングの作業内容と料金の目安をご確認いただけます。",
    cta: [
      { href: "/services-detail/toilet/", label: "トイレクリーニングの内容を見る" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "トイレの床はどんな洗剤で拭けばよいですか。", a: "TOTOは住宅用中性洗剤、LIXILはトイレ用中性洗剤を使い、最後に水拭きで洗剤を残さないよう案内しています。パナソニックは、シンナー・ベンジン・灯油・アルコール・研磨剤入り洗剤を使わないものとして挙げています。床材によって使える洗剤が異なるため、床材の取扱説明書もご確認ください。" },
      { q: "便器のまわりの床が黒くなっています。", a: "TOTOは、尿に含まれるアンモニアや結露が原因としています。長時間放置すると木質系のフローリング床材を腐らせる原因にもなるため、こぼれた水分はすぐにふき取ってください。中性洗剤で落ちない場合は、業者のトイレクリーニングをご検討ください。" },
      { q: "タイルの目地の黒ずみはどう落としますか。", a: "TOTO・LIXILは、歯ブラシやブラシにクリームクレンザーを付けてこする方法を案内しています。ただしLIXILは、やわらかい弾性目地材はこすると摩耗するため、中性洗剤を使い、固くしぼったぞうきんで軽くふくよう案内しています。" },
      { q: "クッションフロアにワックスは必要ですか。", a: "東リは、住宅ではワックスは基本的に不要としています。使う場合は床用の樹脂ワックスを使い、油性ワックスやカーワックスは使わないよう案内しています。業者に依頼する場合、おそうじ本舗は床ワックス塗布をオプション（1,100円）として掲載しています。" },
    ],
    sources: [SRC4.totoToiletFloor, SRC4.lixilToiletFloorDaily, SRC4.lixilToiletFloorRegular, SRC4.panaToiletBasic, SRC4.toliCf, SRC4.sangetsuFloor, { name: "おそうじ本舗 トイレクリーニング", url: HONPO_TOILET }, { name: "ダスキン トイレクリーニング", url: DUSKIN_TOILET }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["toilet-citric-acid", "toilet-fan-cleaning"],
  },
  {
    slug: "bath-fan-cleaning",
    kw: "お風呂 換気扇 掃除",
    title: "お風呂の換気扇の掃除方法｜パナソニック・三菱電機・TOTO・LIXILの公式手順と頻度、浴室乾燥機を業者に頼む料金 | クリーンナビ",
    description:
      "お風呂（浴室）の換気扇・浴室換気乾燥機の掃除方法を、パナソニック・三菱電機・TOTO・LIXIL・マックスの公式のお手入れ方法で整理しました。フィルター・グリルの頻度、使えない洗剤、自分で分解しない部分、交換の目安と、大手3社の浴室乾燥機クリーニングの公式料金を掲載しています。",
    h1: "お風呂の換気扇の掃除方法と、業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "パナソニック・LIXIL・マックスは、浴室の換気扇（浴室換気乾燥機）のフィルターなどのお手入れを月1回程度としています。電源やブレーカーを切ってからグリル（カバー）とフィルターを外し、掃除機でホコリを取り、カバーは薄めた中性洗剤を含ませた布でふきます。三菱電機のバス乾燥・暖房・換気システムは、フィルターのほこり取りを6か月に1回程度としており、頻度は製品によって異なります。",
      "三菱電機・マックスは、利用者が自分で分解して清掃しないよう案内しています。ファンの奥のホコリやカビが気になる場合は、業者の浴室乾燥機クリーニング（大手3社で5,830〜11,000円）が選択肢です。おそうじ本舗は、製造から9年以上たった浴室乾燥機はサービスを断る、または保証できない場合があるとしています。",
    ],
    sections: [
      {
        h2: "メーカー別のお手入れの頻度と方法",
        blocks: [
          "浴室の換気扇・浴室換気乾燥機の公式のお手入れ方法を、当サイトで同じ項目にそろえました。",
          {
            table: {
              head: ["メーカー", "頻度の目安", "方法", "使わないもの・してはいけないこと"],
              rows: [
                ["パナソニック", "月1回（換気扇・暖房換気乾燥機）", "電源を切り、吸込グリルとフィルターを外して掃除機でホコリを吸うか軽くはたく。ルーバーは薄めた浴室用中性洗剤を含ませて固く絞った布でふき、水拭き・から拭き", "水や洗剤を本体に直接かけない。硬いタワシは使わない。浴槽の上に乗らない"],
                ["三菱電機（バス乾燥・暖房・換気システム）", "フィルターのほこり取り6か月に1回程度・水洗い1年に1回程度", "ブレーカーを切り、停止ボタンを押して24時間換気も止める。グリルは中性洗剤を溶かしたぬるま湯（40℃以下）に浸した布でふき、から拭き", "本体に水・お湯・かび取り剤をかけない。シンナー・アルコール・ベンジン・アルカリ洗剤・研磨剤入り洗剤などを使わない。ドライヤーで乾かさない。フィルターを外したまま運転しない。自分で分解清掃しない"],
                ["TOTO（三乾王）", "フィルター・副吸込口は月1回、グリルは半年に1回", "電源を切ってフィルターを抜き取り、掃除機でほこりを吸う。浴室用中性洗剤を溶かしたぬるま湯（40℃以下）に数分ひたし、スポンジで洗ってすすぎ、よく乾かす", "シンナー・ベンジン・アルカリ性洗剤・カビ取り剤は使わない。グリルは取り外さない。市販のフィルターを付けない"],
                ["LIXIL（ユニットバスの換気扇）", "月1回／汚れが目立ってきたとき", "運転を停止してブレーカーを切り、フロントカバーを外す（裏にたまった結露水を先に落とす）。カバーはぬるま湯に浸して固く絞った布でふき、本体は薄めた浴室用中性洗剤でふく。羽根のホコリはすき間ブラシで取る", "お手入れで力を入れすぎない（故障や漏電につながる可能性）"],
                ["マックス（浴室乾燥機）", "月1回程度", "フィルターを取り外し、掃除機などでほこりを取る", "自分で分解・点検・清掃をしない（点検・清掃は有償）"],
              ],
              note: "各社の公式ページ・Web取扱説明書を 2026-11-21 に確認。暖房換気乾燥機は機種ごとに手順が異なるため、お手持ちの機器の取扱説明書を優先してください。",
            },
          },
        ],
      },
      {
        h2: "作業するときの注意",
        blocks: [
          {
            ul: [
              "電源を切ってから作業します。三菱電機・LIXILはブレーカーを切るよう案内しています。",
              "浴槽のふちやふたの上に乗らず、安定した踏み台を使います。パナソニックは浴槽の上に乗ると危険とし、TOTOは脚立や踏み台が滑らないよう注意を呼びかけています。",
              "ゴム手袋を着用し、水滴やほこりの落下に注意します（パナソニック・三菱電機）。",
              "カビ取り剤を換気扇やグリルに使わないでください。三菱電機とTOTOは、かび取り剤・カビ取り剤を使わないものとして挙げています（TOTOは材質の変色・変異のおそれ）。",
            ],
          },
          "パナソニックは、浴室のカビ予防として、入浴後すぐに換気扇を回すか窓を開け、水滴をふいてから乾くまで換気を続けるよう案内しています。",
        ],
      },
      {
        h2: "不調のサインと交換の目安",
        blocks: [
          "LIXILは、浴室換気扇の不調のサインとして、普段と違う音、変なにおい、回っているのに換気できていないことを挙げ、寿命はおよそ10年としています（5〜6年で不具合が出るケースもあるとしています）。三菱電機は、換気扇は約15年で設計上の標準使用期間を迎えるとし、異音・部品の破損・風量の低下を劣化のサインとしています。",
          "三菱電機は、異常な振動や騒音、取付ネジのサビ、本体のヒビなどがある場合は修理窓口に相談するよう案内しています。LIXILは、電気工事は専門業者に頼むよう案内しています。",
        ],
      },
    ],
    whenPro: [
      "フィルターやグリルを掃除しても、ファンや本体の奥にホコリ・カビが残っている場合（三菱電機・マックスは、利用者による分解清掃をしないよう案内しています）",
      "浴室の天井が高く、安全な足場を確保できない場合",
      "浴室全体の掃除とあわせて換気扇・乾燥機の内部も洗いたい場合（大手の浴室クリーニングの基本料金は、換気扇はフィルター・カバーまでが対象です）",
      "異音・異臭・換気できないといった不調がある場合は、クリーニングではなく販売店やメーカーの修理窓口にご相談ください",
    ],
    priceHeading: "浴室クリーニング・浴室乾燥機の料金（大手3社の公式料金）",
    priceLead:
      "大手3社の浴室クリーニングでは、換気扇はフィルターやカバーまでが基本料金の範囲で、ファンを含む内部の洗浄はオプションまたは単独のメニューです。おそうじ本舗は、製造から9年以上経過した浴室乾燥機は、メーカーが部品の製造を終了しているため、サービスを断る、または保証できない場合があるとしています。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATH_FAN_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "お風呂の換気扇はどのくらいの頻度で掃除しますか。", a: "パナソニック・LIXIL・マックスは、フィルターなどのお手入れを月1回程度としています。TOTOの三乾王はフィルターを月1回・グリルを半年に1回、三菱電機のバス乾燥・暖房・換気システムはフィルターのほこり取りを6か月に1回程度としています。お使いの機器の取扱説明書をご確認ください。" },
      { q: "換気扇のカビにカビ取り剤を使ってもよいですか。", a: "三菱電機とTOTOは、換気扇・浴室換気暖房乾燥機にかび取り剤（カビ取り剤）を使わないよう案内しています。中性洗剤を使い、本体に直接水や洗剤をかけないでください。奥のカビが気になる場合は、業者の浴室乾燥機クリーニングをご検討ください。" },
      { q: "浴室乾燥機は自分で分解して掃除できますか。", a: "三菱電機は「ご自分での分解清掃は行わないでください」、マックスは「ご自身で分解、点検、清掃は行わないでください」と案内しています。自分で行うのはフィルターやグリル（カバー）までにとどめてください。" },
      { q: "浴室乾燥機のクリーニングは何年たった機種でも頼めますか。", a: "おそうじ本舗は、製造から9年以上経過している浴室乾燥機は、メーカーが部品の製造を終了しているため、サービスを断る、または保証できない場合があるとしています。依頼の前に、製造年と型番を確認して業者に伝えてください。" },
    ],
    sources: [SRC4.panaBathCeiling, SRC4.mitsuBathDryer, SRC4.mitsuRenewal, SRC4.totoSankanou, SRC4.lixilBathFan, SRC4.lixilBathFanLife, SRC4.maxBathDryer, { name: "おそうじ本舗 風呂・浴室クリーニング", url: HONPO_BATH }, { name: "ダスキン 浴室クリーニング", url: DUSKIN_BATH }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bathtub-cleaning", "bath-floor-black-stains", "toilet-fan-cleaning"],
  },
  {
    slug: "fish-grill-cleaning",
    kw: "魚焼きグリル 掃除",
    title: "魚焼きグリルの掃除方法｜リンナイ・ノーリツ・パロマの公式手順とグリル火災を防ぐ注意、業者に頼む目安 | クリーンナビ",
    description:
      "魚焼きグリルの掃除方法を、リンナイ・ノーリツ・パロマ・パナソニック（IH）の公式のお手入れ方法で、受け皿・焼き網・庫内・扉・排気口の部位別に整理しました。NITEのグリル火災の注意喚起、水あり・水なしグリルの違い、食器洗い乾燥機の可否と、大手3社のキッチンクリーニングでのグリルの扱いと公式料金を掲載しています。",
    h1: "魚焼きグリルの掃除方法｜部位別の公式の手入れと業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "リンナイは、グリル皿や庫内にたまった脂が過熱されて発火する場合があるとして、グリルを使った後はグリル皿と庫内をお手入れするよう案内しています。受け皿と焼き網は、使うたびに台所用中性洗剤とスポンジで水洗いするのが基本です（ノーリツ・パロマ）。焼き網の汚れは、水に5分程度浸すか中性洗剤をかけて5分置いてから洗うと落ちやすくなります。",
      "NITE（製品評価技術基盤機構）は、グリルの誤った使い方や庫内の汚れの放置などが原因のグリル火災が目立つと注意を呼びかけています。庫内の脂汚れが落ちない場合は、業者のキッチンクリーニングでも対応範囲が分かれており、大手3社とも受け皿・焼き網などが中心で、おそうじ革命はグリル内部を含まないと明記しています。",
    ],
    sections: [
      {
        h2: "部位別のお手入れ方法（メーカー公式）",
        blocks: [
          "ガスコンロ・IHクッキングヒーターのメーカー4社の公式のお手入れ方法を、当サイトで部位ごとにそろえました。",
          {
            table: {
              head: ["部位", "お手入れの方法", "注意点", "出典"],
              rows: [
                ["受け皿（グリル皿）", "使うたびに中性洗剤で水洗い（スポンジのやわらかい面）", "熱いまま急に水で冷やさない（変形のおそれ）", "ノーリツ・パロマ"],
                ["焼き網", "水に5分程度浸すか、中性洗剤をかけて5分置いてからスポンジで水洗い。汚れがひどいときは洗剤を付けたキッチンペーパーを両面に約30分貼ってから洗う", "フッ素加工の網・皿はタワシやスポンジの硬い面を使わない（ノーリツ）。ナイロンたわしは細かいキズがつくおそれ（リンナイ）", "ノーリツ・パロマ・リンナイ"],
                ["グリル庫内", "冷めてから、薄めた中性洗剤を含ませた布でふき、最後に必ず水拭き", "必要に応じて15分程度の空焼き。空焼きの前に脂をおおまかにふき取り、焼き網を外し、空焼き中はグリルの前から離れない", "ノーリツ"],
                ["前面ガラス（扉）", "薄めた中性洗剤を付けたキッチンペーパーを内側と外側に貼り、15分ほど置いてからふく", "—", "ノーリツ"],
                ["グリル排気口", "カバーを外して中性洗剤で洗い、水ですすいで乾かす", "タオルやふきんでふさがない（不完全燃焼・火災の原因・リンナイ）", "ノーリツ・リンナイ"],
              ],
              note: "リンナイ・ノーリツ・パロマの公式ページを 2026-11-21 に確認。お手入れはガス栓を閉じ、機器が冷えてから手袋をはめて行います（ノーリツ）。機種によって部品の材質や使える道具が異なるため、お手持ちのコンロの取扱説明書もご確認ください。",
            },
          },
        ],
      },
      {
        h2: "グリル火災を防ぐための注意（NITE・リンナイ）",
        blocks: [
          "NITEは、2025年11月の製品安全情報マガジンで、グリルの誤った使い方や庫内の汚れの放置に加え、使用中に目を離したことなどが原因のグリル火災の事故が目立つとしています。同じ号では、ガス器具の事故の約2.5割がガスこんろ（過去10年間の受付分）とされています。",
          {
            ul: [
              "受け皿に水を入れる必要があるグリルは、必ず水を入れて使います（NITE）。リンナイの水ありグリルは約200mlで、続けて焼くときは毎回入れ直します。",
              "水なしグリルは、グリル皿に水を入れません（リンナイ）。",
              "使用後は食品かすや油脂を小まめに取り除きます（NITE）。",
              "脂の多い食材を焼くときにアルミ箔を敷くと発火のおそれがあります。排気口をアルミ箔などで完全にふさぐと、一酸化炭素中毒や火災、機器焼損の原因になります（NITE）。",
              "庫内で火が出たら、つまみを止にし、炎が消えるまでグリル扉を開けません（リンナイ）。",
            ],
          },
          "東京消防庁も、コンロからの火災を防ぐため、換気扇や壁、魚焼きグリルなどをこまめに掃除するよう呼びかけています。",
        ],
      },
      {
        h2: "食器洗い乾燥機で洗えるか",
        blocks: [
          "食器洗い乾燥機の可否は、メーカーと部品によって異なります。",
          {
            ul: [
              "パナソニックのIHクッキングヒーター（従来の焼き網タイプのグリル）は、受け皿は食器洗い乾燥機で洗えるとし、焼き網と扉は使えないとしています。",
              "リンナイは、グリルプレートは表面が変色・変質するおそれがあるとして、食器洗い乾燥機の使用を控えるよう案内しています。",
              "ノーリツは、プレートパンなどの専用容器を食器洗い乾燥機でお手入れしないよう案内しています。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "受け皿・焼き網をつけ置きしても、焦げ付きや脂汚れが落ちない場合",
      "グリルだけでなく、ガス台・五徳・シンク・壁面などキッチン全体をまとめて掃除したい場合",
      "業者に依頼する場合は、グリルのどこまでが対象かを事前に確認します。おそうじ本舗はグリルの扉・焼網・皿、ダスキンは皿・網のみ（オプション）、おそうじ革命は引き出し・受け皿・網で、グリル内部は含まないと明記しています",
      "点火しない、炎が安定しない、庫内で発火したといった場合は、クリーニングではなく販売店・メーカーの点検をご利用ください",
    ],
    priceHeading: "キッチンクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "魚焼きグリルの洗浄は、おそうじ本舗とおそうじ革命ではキッチンクリーニングの範囲に、ダスキンではオプションに含まれています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: KITCHEN_PRICES,
    ctaText: "キッチンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: [
      { href: "/services/kitchen/", label: "キッチンクリーニング業者を探す" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "魚焼きグリルは毎回掃除しないといけませんか。", a: "ノーリツとパロマは、受け皿と焼き網を使うたびに中性洗剤で水洗いするよう案内しています。リンナイは、グリル皿や庫内にたまった脂が過熱されて発火する場合があるとして、使用後のお手入れを求めています。" },
      { q: "焼き網の焦げ付きはどう落としますか。", a: "パロマは水に5分程度浸してから洗う方法、汚れがひどいときは洗剤を付けたキッチンペーパーを両面に約30分貼ってから洗う方法を案内しています。フッ素加工の焼き網は、タワシやスポンジの硬い面を使わないでください（ノーリツ）。" },
      { q: "受け皿にアルミホイルを敷いてもよいですか。", a: "NITEは、脂の多い食材を焼くときにアルミ箔を敷くと発火のおそれがあるとしています。受け皿に水を入れる必要があるグリルは必ず水を入れ、水なしグリルには水を入れないでください（リンナイ）。" },
      { q: "業者のキッチンクリーニングでグリルの内部まで洗ってもらえますか。", a: "大手3社の公式サイトでは、おそうじ本舗はグリルの扉・焼網・皿、ダスキンは魚焼きグリルクリーニング（皿・網のみ・オプション2,530円）、おそうじ革命は引き出し・受け皿・網で内部は含まないとしています。庫内の洗浄を希望する場合は、依頼前に対応可否を確認してください。" },
    ],
    sources: [SRC4.rinnaiSafety, SRC4.rinnaiNoWater, SRC4.rinnaiNet, SRC4.noritzConro, SRC4.palomaGrill, SRC4.panaIhGrill, SRC4.nite489, SRC4.tfdKonro, { name: "おそうじ本舗 キッチンクリーニング", url: HONPO_KITCHEN }, { name: "ダスキン キッチンクリーニング", url: DUSKIN_KITCHEN }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["gas-stove-cleaning", "sink-water-stains"],
  },
  {
    slug: "range-hood-filter-cleaning",
    kw: "換気扇フィルター 掃除",
    title: "換気扇（レンジフード）フィルターの掃除方法｜パナソニック・LIXIL・三菱電機の頻度とつけ置き手順、業者に頼む目安 | クリーンナビ",
    description:
      "キッチンの換気扇（レンジフード）のフィルター掃除を、パナソニック・LIXIL・三菱電機の公式のお手入れ方法で整理しました。頻度（月1回〜3か月に1度）、つけ置きのお湯の温度・時間、使ってはいけない洗剤・道具、市販フィルターカバーの注意と、大手3社のレンジフードクリーニングの公式料金を掲載しています。",
    h1: "換気扇（レンジフード）フィルターの掃除方法｜メーカー公式の頻度・手順と業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "キッチンの換気扇のフィルターは、三菱電機が「1か月に1度以上」（油調理が多い場合はこまめに）、LIXILが月1回、パナソニックが3か月に1度の基本のお手入れと半年に1度のつけ置きを目安にしています。外したフィルターは、中性の台所用洗剤を溶かしたぬるま湯（パナソニックは35〜40℃で20〜30分、LIXILは約40℃）につけ置きし、スポンジや歯ブラシで洗ってから、よく乾かして戻します。",
      "作業の前には必ず電源を切り（ブレーカーを切るか電源プラグを抜く）、手袋をはめます。LIXILはアルカリ性洗剤・シンナー・ベンジン・アルコール・金属たわしを、三菱電機は金属たわしと硬いスポンジを使わないよう案内しています。ファンや本体内部まで油汚れがたまっている場合は、業者のレンジフードクリーニングで分解洗浄できます。",
    ],
    sections: [
      {
        h2: "フィルター掃除の頻度（メーカー3社の公式）",
        blocks: [
          "メーカーによって目安の頻度が異なります。お使いの機種の取扱説明書もあわせてご確認ください。",
          {
            table: {
              head: ["メーカー", "フィルター", "ファン（羽根）", "そのほか"],
              rows: [
                ["三菱電機（浅形レンジフードファン）", "1か月に1度以上。油調理が多い場合はこまめに（油が残ると滴下するおそれ）", "半年に1度以上", "工具が必要な部品の取り外し・清掃は行わない"],
                ["LIXIL", "月1回（ベタつく油汚れ）。調理中の油や蒸気の汚れは、その日のうちにふき取る", "月1回の定期お手入れに含む", "モーター・スイッチなどの電機部品に水をかけない"],
                ["パナソニック", "3か月に1度（ぬるま湯と中性洗剤）、半年に1度（つけ置き）", "フィルターと同じ（シロッコファン・プロペラ）", "市販のフィルターカバーは使わない"],
              ],
              note: "三菱電機・LIXIL・パナソニックの公式のお手入れページを 2026-11-21 に確認し、当サイトで1表にまとめました。",
            },
          },
        ],
      },
      {
        h2: "フィルターをつけ置きで洗う手順",
        blocks: [
          {
            ol: [
              "電源を切ります。電源プラグが抜きにくい場合はブレーカーを切ります（LIXIL）。ランプの点灯中や消灯直後は周辺が熱いので清掃しません（三菱電機）。",
              "ゴム手袋をはめ、フィルターを取り外します。取り外し方は機種によって異なるため、取扱説明書に従います。",
              "シンクの排水口をふさいでゴミ袋を広げ、約40℃のお湯に中性の台所用洗剤を溶かしてフィルターをつけます（LIXIL）。パナソニックは35〜40℃のお湯で20〜30分のつけ置きを案内しています。",
              "スポンジや歯ブラシで汚れを落とします。三菱電機は、スポンジなどで「目に沿って軽くこする」よう案内しています。固まった汚れは木ベラでこそげ落とし、落ちにくいところはクリームクレンザーを付けた歯ブラシでこすります（パナソニック）。",
              "ぬるま湯ですすぎ、よく乾かしてから取り付けます。フィルターは変形しやすいので慎重に扱います（三菱電機）。",
            ],
          },
          "フード本体の外側は、薄めた台所用中性洗剤を含ませた布でふき、油の受け溝も掃除してから、水ぶき・からぶきで仕上げます（LIXIL）。",
        ],
      },
      {
        h2: "使ってはいけない洗剤・道具と注意点",
        blocks: [
          {
            table: {
              head: ["内容", "メーカー"],
              rows: [
                ["アルカリ性洗剤・シンナー・ベンジン・アルコール・金属たわしは使わない", "LIXIL"],
                ["金属タワシ・硬いスポンジは使わない", "三菱電機"],
                ["市販のフィルターカバーは使わない（網目が細かく、吸い込みが悪くなるため付属のフィルターを使う）", "パナソニック"],
                ["取り外せない部分のガンコな油汚れには、ぬるま湯で薄めた換気扇用の弱アルカリ性洗剤をキッチンペーパーに含ませて15〜30分貼る", "パナソニック"],
              ],
              note: "アルカリ性洗剤は、LIXILが「使用しない」とする一方、パナソニックは取り外せない部分の湿布に「換気扇用の弱アルカリ性洗剤」を挙げています。メーカーで案内が分かれるため、お使いの機種の取扱説明書に従ってください。",
            },
          },
          "羽根（ファン）を外して洗う場合、三菱電機は、モーターシャフトピンのゴムキャップを外さないこと、羽根を変形させないこと（どちらも異常音の原因）を注意しています。",
        ],
      },
    ],
    whenPro: [
      "つけ置きしてもフィルターの目詰まりや油汚れが落ちない場合",
      "ファン（シロッコファン）や本体内部・ファンハウジングまで油汚れがたまっている場合。ダスキンは、フィルターやファンなど家庭では取り外しが難しい部分も分解して洗浄するとしています",
      "工具が必要な部品の取り外しが必要な場合（三菱電機は、工具が必要な部品の取り外し・清掃は行わないよう案内しています）",
      "おそうじ本舗は、製造から9年以上たった換気扇は部品の製造が終了しているため、サービスを断る、または保証できない場合があるとしています。古い機種は依頼前に伝えます",
    ],
    priceHeading: "レンジフード・換気扇クリーニングの料金（大手3社の公式料金）",
    priceLead:
      "フィルターだけでなくファン・本体内部まで洗いたい場合は、業者のレンジフードクリーニングを利用できます。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: RANGE_HOOD_PRICES,
    ctaText: "換気扇・レンジフードのクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: RANGE_HOOD_CTA,
    faq: [
      { q: "換気扇のフィルターはどのくらいの頻度で掃除しますか。", a: "三菱電機は1か月に1度以上（油調理が多い場合はこまめに）、LIXILは月1回、パナソニックは3か月に1度の基本のお手入れと半年に1度のつけ置きを目安にしています。" },
      { q: "つけ置きのお湯は何度にしますか。", a: "パナソニックは中性洗剤を溶かした35〜40℃のお湯に20〜30分、LIXILは約40℃のお湯と中性洗剤を案内しています。" },
      { q: "市販のフィルターカバーを付けてもよいですか。", a: "パナソニックは、網目が細かく吸い込みが悪くなるとして、市販のフィルターカバーを使わず付属のフィルターを使うよう案内しています。" },
      { q: "業者に頼むとフィルター以外も洗ってもらえますか。", a: "おそうじ本舗は外装カバー・本体内部・ファン・フィルター・ファンハウジング（屋外側のフードとダクトは対象外）、ダスキンはフィルターやファンなど家庭で外しにくい部分も分解して洗浄、おそうじ革命はフィルターの浸け置き洗浄・ファンの洗浄・照明カバーなどを作業範囲としています。" },
    ],
    sources: [SRC5.mitsuRangeHood, SRC5.lixilRangeHoodDaily, SRC5.lixilRangeHoodRegular, SRC5.panaRangeHood, { name: "おそうじ本舗 レンジフード・換気扇クリーニング", url: HONPO_FAN }, { name: "ダスキン レンジフードクリーニング", url: DUSKIN_FAN }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["gas-stove-cleaning", "fish-grill-cleaning", "ventilation-fan-noise", "propeller-fan-cleaning"],
  },
  {
    slug: "toilet-cleaning-basics",
    kw: "トイレ掃除 やり方",
    title: "トイレ掃除のやり方｜TOTO・パナソニックの公式手順で部位別・頻度別に整理、業者に頼む目安 | クリーンナビ",
    description:
      "トイレ掃除のやり方を、TOTOとパナソニックの公式のお手入れ方法で、便器・便座・ウォシュレット（ノズル・脱臭フィルター）・タンクの部位別、毎日・月1回・年1〜2回の頻度別に整理しました。使ってはいけない洗剤、塩素系と酸性を混ぜない注意、大手3社のトイレクリーニングの公式料金を掲載しています。",
    h1: "トイレ掃除のやり方｜部位別・頻度別の公式の手順と業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "TOTOは、便器の内側はトイレ用ブラシでフチ裏までこすり、便座は肌に触れる部分からよく絞った柔らかい布でふく掃除を「使った後や気づいたときに（1日1回と決めてもOK）」行うよう案内しています。汚れが気になってきたら洗剤を使い、ウォシュレットのノズルと脱臭フィルターは月に1回、普通便座の取り外し掃除は年に1〜2度が目安です。",
      "パナソニックは、洗浄力の弱い中性のトイレ用洗剤から段階的に使い、塩素系と酸性タイプは同時だけでなく前後の使用でも混ぜないよう注意しています。尿石や黒ずみが落ちない、タンクの中まで洗いたいといった場合は、業者のトイレクリーニングで対応できます。",
    ],
    sections: [
      {
        h2: "頻度別の掃除の手順（TOTO）",
        blocks: [
          {
            table: {
              head: ["頻度", "部位", "やり方"],
              rows: [
                ["ふだん（使った後や気づいたとき・1日1回でも可）", "便器の内側", "トイレ用ブラシでこする。フチ裏も忘れずに"],
                ["ふだん", "便座・便ふた・タンク", "よく絞った柔らかい布で、肌に触れる部分からふく。洗剤は不要"],
                ["ふだん", "便器の外側・便座の裏", "小水が飛び散りやすいのでふく"],
                ["汚れが気になりだしたら", "便器の裏側・フチ裏", "トイレ用中性洗剤を付けてブラシでこすり、布でふいた後、水ぶきで洗剤成分を取る"],
                ["汚れが気になりだしたら", "タンクの外側・給水金具", "中性洗剤を付けた布で全体をふき、水ぶきで仕上げる"],
                ["月に1回", "ウォシュレットのノズル・脱臭フィルター・電源プラグ・本体と便器のすき間", "電源プラグを抜いてから。ノズルは柔らかい布で水ぶき（引っ張る・押し込むのは不可）、脱臭フィルターは歯ブラシなどで汚れを取る"],
                ["半年に1回", "給水フィルター付水抜栓", "止水栓を閉めてから外し、歯ブラシなどで掃除する"],
                ["年に1〜2度", "普通便座の取り外し", "ナットを外して便座・便ふたを外し、底面と便器の取付面をふく"],
              ],
              note: "TOTO「便器・タンクのお手入れ」「ウォシュレットのお手入れ」を 2026-11-21 に確認。TOTOは、毎日のふき掃除には洗剤は不要としています。",
            },
          },
        ],
      },
      {
        h2: "汚れの種類と洗剤の選び方（パナソニック）",
        blocks: [
          "パナソニックは、洗浄力の弱いものから段階的に使うことを勧めています。",
          {
            table: {
              head: ["汚れ・部位", "原因（パナソニック）", "使う洗剤"],
              rows: [
                ["赤〜ピンクの汚れ", "水温や水質の条件で繁殖する細菌", "中性のトイレ用洗剤とブラシ。落ちにくい場合は漂白剤の湿布法"],
                ["黄色い汚れ（便器・床）", "カルシウムや尿酸、リン酸などの付着", "中性のトイレ用洗剤とブラシ。ガンコな黄ばみは塩素系・アルカリ性のトイレ用洗浄剤"],
                ["黒い汚れ", "カビ", "中性洗剤で落ちなければ塩素系・アルカリ性の漂白剤"],
                ["便座・便ふた", "—", "台所用洗剤（中性）を使い、柔らかい布でふき取る"],
              ],
              note: "パナソニック「お手入れの基礎知識（トイレのお手入れ）」（2026-11-21 確認）。アラウーノシリーズは陶器タイプと手順が異なる部分があります。",
            },
          },
        ],
      },
      {
        h2: "やってはいけないこと",
        blocks: [
          {
            ul: [
              "塩素系と酸性タイプの洗剤を、同時だけでなく前後でも混ぜない（有害な塩素ガスが発生・パナソニック）",
              "シンナー・ベンジン・灯油・アルコール・研磨剤入り洗剤を使わない（パナソニック）。研磨剤入り洗剤や業務用の強酸性・強アルカリ性洗剤は陶器表面を傷つけたり侵したりするため使わない（TOTO）",
              "ウォシュレットのプラスチック部分に酸性・アルカリ性の洗剤を使わない（割れの原因・TOTO）。便器用洗剤が付いたら水で濡らした布でしっかりふき取る",
              "トイレ用洗剤で便器を掃除したときは3分以内に洗い流し、便座・便ふたは開けたままにする（洗剤の気化ガスが本体内に入ると故障の原因・TOTO）",
              "タンクのふた・タンク内部に酸性・アルカリ性の洗剤を使わない。タンク内の樹脂・ゴム部品を傷め、止水不良や水漏れの原因になる（TOTO）",
              "ウォシュレットに水をかけて掃除しない。お手入れの前は電源プラグを抜く（誤作動による故障や感電の原因・TOTO）",
            ],
          },
          "クエン酸を使った掃除は「トイレ掃除にクエン酸を使うときの注意点」、床の掃除は「トイレの床の掃除方法」、換気扇は「トイレの換気扇の掃除方法」で詳しく扱っています。",
        ],
      },
    ],
    whenPro: [
      "便器の黄ばみ・尿石や黒ずみが、洗剤を変えても落ちない場合",
      "タンクの中まで洗いたい場合（TOTOはタンク内に酸性・アルカリ性洗剤を使わないよう案内しています。ダスキンとおそうじ革命はタンク内の清掃をオプションで用意しています）",
      "便器だけでなく、床・壁・換気扇カバーまでまとめて掃除したい場合",
      "水が止まらない、ウォシュレットが動かないといった症状は、クリーニングではなくメーカーや販売店の修理窓口へ相談します",
    ],
    priceHeading: "トイレクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "便器・便座・床・壁面などのトイレ全体の掃除は、業者のトイレクリーニングで対応しています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: TOILET_PRICES,
    ctaText: "トイレクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: [
      { href: "/services-detail/toilet/", label: "トイレクリーニングの内容と料金を見る" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "トイレ掃除は毎日しないといけませんか。", a: "TOTOは、便器の内側のブラシ掛けと便座・タンクのふき掃除を、使った後や気づいたときに行うよう案内し、1日1回と決めてもよいとしています。毎日のふき掃除に洗剤は不要としています。" },
      { q: "ウォシュレットのノズルはどう掃除しますか。", a: "TOTOは月に1回を目安に、ノズルを出して柔らかい布で水ぶきするよう案内しています。ノズルを引っ張ったり、押し込んだり、押さえつけたりしないでください。" },
      { q: "トイレ用洗剤は何を使えばよいですか。", a: "パナソニックは、まず中性のトイレ用洗剤を使い、ガンコな汚れには塩素系・アルカリ性のトイレ用洗浄剤など、洗浄力の弱いものから段階的に使うよう案内しています。塩素系と酸性タイプは前後の使用でも混ぜないでください。" },
      { q: "タンクの中に洗浄剤を入れてもよいですか。", a: "TOTOは、タンク内部は樹脂製・ゴム製の器具が多く、酸性・アルカリ性洗剤や芳香洗浄剤は器具を傷め、止水不良や水漏れの原因になるおそれがあるとしています。" },
    ],
    sources: [SRC5.totoToiletTop, SRC5.totoBowlTank, SRC5.totoWashlet, SRC4.panaToiletBasic, { name: "おそうじ本舗 トイレクリーニング", url: HONPO_TOILET }, { name: "ダスキン トイレクリーニング", url: DUSKIN_TOILET }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["toilet-citric-acid", "toilet-floor-cleaning", "toilet-fan-cleaning", "toilet-hand-wash-cleaning"],
  },
  {
    slug: "aircon-noise",
    kw: "エアコン 異音",
    title: "エアコンの異音の原因と対処｜日立・ダイキンの公式FAQで音の種類別に整理（故障でない音・フィルター掃除で直る音・点検が必要な音） | クリーンナビ",
    description:
      "エアコンの異音を、日立とダイキンの公式FAQで音の種類別に整理しました。「ピシッ」「ポコポコ」「シュルシュル」など故障ではない音、フィルターの目詰まりやパネルの付け忘れで出る音、販売店・メーカーの点検が必要な音と、エアコンクリーニングで対応できる範囲・大手3社の公式料金を掲載しています。",
    h1: "エアコンの異音の原因と対処｜音の種類別の公式の見分け方",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "エアコンの音の多くは故障ではありません。日立とダイキンは、「ピシッ」「パキ」（温度変化による部品の伸び縮み）、「シュルシュル」「シャー」（冷媒が流れる音）、「ポコポコ」（ドレンホースから外の空気が入る音）などを、動作上発生する音としています。",
      "「ゴー」「サー」といった風の音はフィルターの目詰まり（ダイキン）、運転中の「カタカタ」はフロントパネルやフィルターの付け方（日立）が原因のことがあり、フィルター掃除や付け直しで改善する場合があります。「キュルキュル」「キーキー」「カッカッ」など、ファンが部品に当たったり異物が入ったりした可能性がある音や、急に大きくなった音は、販売店またはメーカーに点検を依頼します。",
    ],
    sections: [
      {
        h2: "故障ではない音（日立・ダイキン）",
        blocks: [
          {
            table: {
              head: ["音", "原因", "出典"],
              rows: [
                ["「ピシッ」「パキ」「キシキシ」", "温度変化で室内機の部品（樹脂部品）が伸び縮みする音。熱交換器のフィンの凍結・解凍の音も", "ダイキン・日立"],
                ["「シャー」「シュルシュル」", "内部を冷媒が流れる音", "ダイキン・日立"],
                ["「プシュー」", "霜取運転や運転停止時に、冷媒の流れが切り替わる音", "ダイキン・日立"],
                ["「ポタポタ」「ピチャピチャ」", "結露水（ドレン水）がドレンパンに落ちる音。冷房・除湿の停止後もしばらく続くことがある", "ダイキン"],
                ["「カチッ」「ジー」「ウィーン」「ギィー」", "フラップやルーバー（風向板）が動く音", "ダイキン・日立"],
                ["「シュー」「パチッ」", "空気清浄機能（ストリーマ放電）の音（ダイキンの搭載機種）", "ダイキン"],
                ["「ウィーン」「ブーン」「チリチリ」", "自動フィルター掃除のユニットが動く音（日立の搭載機種）", "日立"],
              ],
              note: "日立「室内機の音の原因を知りたいです。」、ダイキン「室内機から変わった音がする（ルームエアコン）」を 2026-11-21 に確認。ダイキンは「ポタポタ」の場合も、念のためドレンホースに詰まりやたるみがないか確認するよう案内しています。",
            },
          },
        ],
      },
      {
        h2: "掃除や使い方で改善できる音",
        blocks: [
          {
            table: {
              head: ["音", "原因", "対処", "出典"],
              rows: [
                ["「ゴー」「ボー」「サー」「ザー」（風切り音）", "エアフィルターの目詰まりで風の通りが悪くなっている", "フィルターを掃除する", "ダイキン"],
                ["「カタカタ」「ガガガ」（運転中）", "フロントパネルやエアフィルターが正しく取り付けられていない", "フロントパネルを外し、フィルターなどを取り付け直す", "日立"],
                ["「ポコポコ」「ボコボコ」", "気密性の高い部屋で換気扇を使ったときや風の強い日に、ドレンホースから外の空気が入る", "換気扇を止める、窓や換気口を少し開ける、ドレンホース先端の向きを変える。気になる場合は逆止弁の取り付けを販売店に相談", "日立・ダイキン"],
              ],
              note: "電源を入れた直後の「カタカタ」は、室外機の電磁弁が開閉する音で故障ではありません（日立）。",
            },
          },
          "フィルターの掃除方法は「エアコン掃除を自分でできる範囲」で扱っています。",
        ],
      },
      {
        h2: "点検が必要な音",
        blocks: [
          {
            ul: [
              "「キュルキュル」「キーキー」：ファンなどの動作部品がハウジングに当たっている可能性（ダイキン）",
              "「コトコト」「カサカサ」「カッカッ」「チッチッチッ」：ファンが周辺部品に接触している、または内部に異物が入っている可能性（日立）",
              "「ピーピー」が鳴り続ける：エラー状態。運転を止め、電源プラグを抜くか専用ブレーカーを切って約1分待ってから入れ直し、再び鳴る場合は点検を依頼（ダイキン）",
              "室外機の音が急に大きくなって止まらない、上記に当てはまらない音がする（日立・ダイキン）",
              "市販の洗浄スプレーなどで自分で洗浄した後に、異常な振動や音がする（日立は、直ちに使用を中止し電源プラグを抜いて点検を相談するよう案内）",
            ],
          },
          "日立とダイキンは、以前より音が大きくなった場合や、今までなかった音が急にするようになった場合は、販売店またはメーカーに点検を依頼するよう案内しています。",
        ],
      },
    ],
    whenPro: [
      "異音の多くは、クリーニングでは直りません。ファンの接触・異物・エラー音・室外機の異常音は、まず販売店・メーカーの修理窓口に点検を依頼します",
      "フィルターを掃除しても、吹き出し口から見える送風ファンや熱交換器の汚れが気になる場合は、エアコン内部の洗浄を業者に依頼できます（メーカー各社は内部の洗浄を自分で行わないよう案内しています）",
      "室外機のまわりに物があると振動音や反響で音が大きくなることがあります（ダイキン）。室外機の汚れや目詰まりの掃除は「エアコン室外機の掃除方法」で扱っています",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "エアコンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "エアコンから「ピシッ」「パキッ」と音がします。故障ですか。", a: "ダイキンと日立は、温度変化で部品がわずかに伸び縮みする音などとして、故障ではないとしています。" },
      { q: "エアコンから「ポコポコ」と音がします。", a: "気密性の高い部屋で換気扇を使ったときや風の強い日に、ドレンホースから外の空気が入る音です。換気扇を止める、窓を少し開けるなどで止まることがあります。気になる場合は、逆止弁の取り付けを販売店に相談してください（日立・ダイキン）。" },
      { q: "「ゴー」という風の音が大きくなりました。", a: "ダイキンは、エアフィルターの目詰まりで風の通りが悪くなっていることが多いとして、まずフィルターの掃除を案内しています。" },
      { q: "エアコンクリーニングで異音は直りますか。", a: "メーカーが点検を勧めている音（ファンの接触・異物・エラー音など）は、クリーニングでは対応できません。業者のクリーニングは、熱交換器・送風ファンなどの汚れを洗浄するサービスです。" },
    ],
    sources: [SRC5.hitachiNoiseIn, SRC5.hitachiKataKata, SRC5.hitachiPokoPoko, SRC5.hitachiNoiseOut, SRC5.daikinNoiseIn, SRC5.daikinNoiseOut, SRC.hitachiSpray, ...SRC_AC_PRICES],
    related: ["aircon-self-cleaning", "aircon-water-leak", "outdoor-unit-cleaning"],
  },
  {
    slug: "kitchen-drain-cleaning",
    kw: "キッチン 排水口 掃除",
    title: "キッチンの排水口の掃除方法｜パナソニック・LIXILの公式手順（毎日・週1回・月1回）と使ってはいけないもの、業者に頼む目安 | クリーンナビ",
    description:
      "キッチンの排水口の掃除方法を、パナソニックとLIXILの公式のお手入れ方法で、毎日・週1回・月1回の頻度別に整理しました。ヌメリ・におい・詰まりの予防、熱湯や塩素系ヌメリ取り剤についてのメーカーの注意、排水口のタイプ別のパイプ洗浄剤の使い方と、大手3社のキッチンクリーニングの公式料金を掲載しています。",
    h1: "キッチンの排水口の掃除方法｜頻度別の公式の手順と業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "パナソニックは、毎日の片づけのあとに生ゴミを捨てて網カゴを中性の台所用洗剤で洗い、週1回は排水プレート・網カゴ・排水口の内側を歯ブラシなどで磨き、月1回は市販のパイプ洗浄剤で排水管の汚れを取るよう案内しています。",
      "パナソニックは、煮立ったお湯を流すと排水口の樹脂部分をいためるとしています。排水口の構造はメーカー・タイプによって異なり、LIXILは封水筒やワン付トラップのタイプ別に洗浄剤の入れ方を分けて案内しています。流れが悪い・においが取れない場合は、業者のキッチンクリーニング（排水管のオプションを含む）で対応できます。",
    ],
    sections: [
      {
        h2: "頻度別の掃除の手順（パナソニック）",
        blocks: [
          {
            table: {
              head: ["頻度", "目的", "やり方"],
              rows: [
                ["毎日", "汚れをためない", "生ゴミを処理し、網カゴを外して穴のまわりのゴミも取る。中性の台所用洗剤を付けたスポンジで網カゴを洗う（油を使った料理の後は念入りに）"],
                ["週1回", "ヌメリ対策", "中性洗剤を含ませたスポンジで排水プレートと網カゴを洗う。網目はクリームクレンザーと歯ブラシで磨き、排水口の内側も歯ブラシで磨いて、最後にたっぷり水を流す"],
                ["週1回", "排水管の詰まり予防", "排水プレートと網カゴを外して排水口にフタをし、洗剤を薄めたぬるま湯をためてから、フタを外して一気に流す。最後にシンクを水洗いする"],
                ["月1回", "詰まりかけたとき", "肉の脂などが排水管の壁面に付着すると汚れがたまりやすくなるため、市販のパイプ洗浄剤で汚れを取る。浄化槽を使っている場合は浄化槽のメンテナンス店などに相談する"],
              ],
              note: "パナソニック「排水口（キッチンのお手入れ）」を 2026-11-21 に確認。シンクの種類によってはクレンザーを使えない部品があります（パナソニックの「ささっと仕様」の排水プレート・網カゴ、「クリアシンク」の網カゴ）。",
            },
          },
        ],
      },
      {
        h2: "排水口のタイプ別のパイプ洗浄剤の使い方（LIXIL）",
        blocks: [
          "LIXILは、排水口内の封水筒や排水ワンも定期的に手入れするよう案内し、排水管のお手入れには「排水パイプ用洗浄剤（塩素系）」と台所用洗剤を用意するとしています。",
          {
            table: {
              head: ["排水口のタイプ（LIXIL）", "手順"],
              rows: [
                ["くるりんポイ排水口・てまなし排水口", "封水筒を外して洗浄剤（ノズルが90°横を向いたタイプ）を入れ、封水筒を付けてから、2〜3L程度の水を一気に数回流す"],
                ["ワン付排水口（ワン付トラップ）", "ワン付ストレーナーを外して排水トラップに洗浄剤を入れ、2〜3L程度の水を一気に数回流してから部品を戻す"],
                ["浅型排水口（浅型トラップ）", "トラップ内に約210mlの水がたまっているため下にバケツを置き、点検キャップを外して洗浄ブラシで汚れを取る。キャップをしっかり締め、水を流して水漏れがないか確認する"],
              ],
              note: "LIXIL「シンクの定期的なお手入れ」（2026-11-21 確認）。",
            },
          },
        ],
      },
      {
        h2: "使ってはいけないもの・においが気になるとき",
        blocks: [
          {
            ul: [
              "煮立ったお湯（熱湯）を流さない。排水口の樹脂部分をいためる（パナソニック）",
              "塩素系のヌメリ取り剤は、塩素ガスの発生や、ステンレスのサビ・ゴムの劣化のおそれがある（パナソニック）",
            ],
          },
          "塩素系の扱いは、パナソニックがヌメリ取り剤について注意しているのに対し、LIXILは排水管のお手入れに塩素系の排水パイプ用洗浄剤を挙げています。使う前に、お使いのシンク・排水口の取扱説明書と洗剤の表示を確認し、酸性タイプの洗剤とは混ぜないでください。",
          "においが気になるときは、窓を開けるか換気扇を回して換気し、排水口の中を磨きます。魚などをグリルで焼いたら、熱いうちにお湯で洗い流し、生ゴミには消毒用エタノールをスプレーします（パナソニック）。",
        ],
      },
    ],
    whenPro: [
      "パイプ洗浄剤を使っても流れが悪い、においが取れない場合",
      "排水口だけでなく、シンク・蛇口・コンロまわりも含めてキッチン全体を洗いたい場合（おそうじ本舗は排水トラップを外して排水口の中まで掃除、ダスキンはシンクの排水口に加えて排水管をオプション〔1,980円〕で用意しています）",
      "水があふれる・逆流するなど詰まりが進んでいる場合は、クリーニングではなく水道修理の業者や管理会社に相談します",
    ],
    priceHeading: "キッチンクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "排水口の洗浄は、業者のキッチンクリーニングの範囲に含まれています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: KITCHEN_DRAIN_PRICES,
    ctaText: "キッチンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: KITCHEN_CTA,
    faq: [
      { q: "キッチンの排水口はどのくらいの頻度で掃除しますか。", a: "パナソニックは、網カゴの洗浄を毎日、排水プレート・排水口の内側のヌメリ取りと詰まり予防を週1回、パイプ洗浄剤を月1回（詰まりかけたとき）としています。" },
      { q: "排水口に熱湯を流してもよいですか。", a: "パナソニックは、煮立ったお湯を流すと排水口の樹脂部分をいためるとしています。" },
      { q: "排水口のヌメリ取りに塩素系の洗剤を使えますか。", a: "パナソニックは、塩素系のヌメリ取り剤は塩素ガスが発生し、ステンレスのサビやゴムの劣化のおそれがあるとしています。一方、LIXILは排水管のお手入れに塩素系の排水パイプ用洗浄剤を挙げています。お使いの製品の取扱説明書に従ってください。" },
      { q: "業者のキッチンクリーニングで排水口も洗ってもらえますか。", a: "おそうじ本舗は排水トラップを外して排水口の中を掃除するとし、ダスキンはシンクの排水口の洗浄に加え、キッチン排水管をオプション（1,980円）で用意しています。" },
    ],
    sources: [SRC5.panaKitchenDrain, SRC5.lixilSinkRegular, { name: "おそうじ本舗 キッチンクリーニング", url: HONPO_KITCHEN }, { name: "ダスキン キッチンクリーニング", url: DUSKIN_KITCHEN }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["sink-water-stains", "gas-stove-cleaning", "range-hood-filter-cleaning", "bath-drain-cleaning"],
  },
  {
    slug: "ih-cooktop-cleaning",
    kw: "IHコンロ 掃除",
    title: "IHコンロ（IHクッキングヒーター）の掃除方法｜パナソニック・三菱電機の公式手順で焦げ付き・油汚れ・吸排気口を整理、業者に頼む目安 | クリーンナビ",
    description:
      "IHコンロ（IHクッキングヒーター）の掃除方法を、パナソニックと三菱電機の公式のお手入れ方法で整理しました。トッププレートの毎日のふき取り、焦げ付きのクリームクレンザーでの落とし方（研磨剤30%以下）、吸・排気口の月1回以上の水洗い、使ってはいけない道具と、大手3社のキッチンクリーニングの公式料金を掲載しています。",
    h1: "IHコンロの掃除方法｜焦げ付き・油汚れ・吸排気口の公式の手入れと業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "IHクッキングヒーターは、電源を切り、トッププレートが冷めてから掃除します。パナソニックは、使用後すぐに水で固く絞った布でふき、油汚れは薄めた中性の台所用洗剤でふいてから水ぶき・からぶきで仕上げるよう案内しています。",
      "こびりついた焦げは、クリームクレンザーで落とします。パナソニックは月1回、丸めたアルミホイルで、三菱電機は丸めたラップで円を描くようにこする方法を紹介しています。三菱電機は研磨剤の配合率が30%以下のクリームタイプを選ぶよう注意しています。吸・排気口は目詰まりすると通電が止まることがあるため、月に1度以上外して水洗いします（パナソニック）。",
    ],
    sections: [
      {
        h2: "部位別のお手入れ方法（メーカー公式）",
        blocks: [
          {
            table: {
              head: ["部位", "頻度", "やり方", "出典"],
              rows: [
                ["トッププレート（毎日）", "使用後すぐ", "水で固く絞った布でふく。油汚れは、ぬるま湯で薄めた中性の台所用洗剤を含ませたスポンジや布でふき、水ぶき・からぶき", "パナソニック・三菱電機"],
                ["トッププレート（焦げ付き）", "月1回（パナソニック）", "クリームクレンザーを適量たらし、丸めたアルミホイル（パナソニック）または丸めたラップ（三菱電機）で円を描くようにこする。濡らして固く絞った布でふき取り、落ちなければ繰り返す", "パナソニック・三菱電機"],
                ["トッププレート（油汚れ）", "汚れたとき", "中性洗剤と水を混ぜたペーストをのせてラップで覆い、15分〜1時間ほど置いてからふき取る", "三菱電機"],
                ["吸・排気口（パネル・カバー）", "月に1度以上（パナソニック）／1週間に1度が目安（三菱電機）", "取り外して中性洗剤で水洗い。奥の部分は割りばしにキッチンペーパーを巻き、中性洗剤を含ませてふく", "パナソニック・三菱電機"],
                ["操作部・操作パネル", "汚れたとき", "乾いた柔らかい布でやさしくふく（パナソニック）。固く絞った濡れ布巾でふき、最後に乾いた布で水気を取る（三菱電機）", "パナソニック・三菱電機"],
              ],
              note: "パナソニック「IHクッキングヒーター グリル ガスコンロ（キッチンのお手入れ）」、三菱電機 くらトク（2022年7月22日公開）を 2026-11-21 に確認。焦げを落とす道具はメーカーで案内が分かれるため、お使いの機種の取扱説明書に従ってください。",
            },
          },
          "パナソニックは、吸・排気パネルが目詰まりすると「フィルター目詰まり検知」が働き、通電が止まることがあるとしています。",
        ],
      },
      {
        h2: "使ってはいけない洗剤・道具",
        blocks: [
          {
            ul: [
              "タワシ・磨き粉・ナイロン面のあるスポンジ、シンナー・ベンジン（パナソニック）",
              "金たわし・金属製のヘラで焦げを削る（三菱電機）",
              "研磨剤の配合率が30%を超えるクレンザー。印刷が落ちたり天板を傷つけたりするおそれがある（三菱電機）",
              "重曹やオキシクリーンなどのアルカリ性洗剤は、塗装のはがれやサビの原因になるため、取扱説明書では使用が勧められていないことがほとんどで、日常の掃除には中性洗剤を使う（三菱電機）",
            ],
          },
          "電源を入れたままの掃除は故障の原因になることがあります。調理直後は天板が熱いため、冷めてから掃除します（三菱電機）。トッププレートにひびが入った場合は、電源を切って使用を中止し、購入店や取扱説明書の相談窓口に連絡します（三菱電機）。",
        ],
      },
      {
        h2: "グリルのお手入れ",
        blocks: [
          "三菱電機は、グリルの受け皿の頑固な焦げは、40度くらいのお湯に中性洗剤を溶かして約30分つけ置きし、浮いた汚れをスポンジで洗い流す方法を紹介しています。グリルの部位別の手入れと食器洗い乾燥機の可否は「魚焼きグリルの掃除方法」で扱っています。",
        ],
      },
    ],
    whenPro: [
      "クレンザーで繰り返しこすっても焦げ付きが落ちない場合",
      "IHだけでなく、グリル・シンク・壁面などキッチン全体をまとめて掃除したい場合（おそうじ本舗はキッチンクリーニングの作業範囲に「ガス台またはIH」を挙げています）",
      "加熱しない、エラー表示が消えない、トッププレートが割れた・ひびが入ったといった場合は、クリーニングではなく販売店・メーカーに相談します",
    ],
    priceHeading: "キッチンクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "IHクッキングヒーターの掃除は、業者のキッチンクリーニングで対応しています（作業範囲は業者・キッチンの仕様によって異なります）。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: KITCHEN_PRICES,
    ctaText: "キッチンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: KITCHEN_CTA,
    faq: [
      { q: "IHの焦げ付きはどう落としますか。", a: "パナソニックはクリームクレンザーを丸めたアルミホイルで、三菱電機は丸めたラップでこする方法を紹介しています。三菱電機は研磨剤の配合率が30%以下のクリームタイプを選ぶよう注意しています。" },
      { q: "IHの掃除に重曹を使ってもよいですか。", a: "三菱電機は、重曹やオキシクリーンなどのアルカリ性洗剤は塗装のはがれやサビの原因になるため、取扱説明書では使用が勧められていないことがほとんどだとして、日常の掃除には中性洗剤を使うよう案内しています。" },
      { q: "吸・排気口はどのくらいの頻度で掃除しますか。", a: "パナソニックは月に1度以上外して水洗いするよう案内しています。目詰まりすると「フィルター目詰まり検知」が働き、通電が止まることがあります。三菱電機は取り外せるカバーを1週間に1度を目安に洗う方法を紹介しています。" },
      { q: "業者のキッチンクリーニングでIHも掃除してもらえますか。", a: "おそうじ本舗はキッチンクリーニングの作業範囲に「ガス台またはIH」を挙げています。業者や機種によって対応範囲が異なるため、依頼前に確認してください。" },
    ],
    sources: [SRC5.panaIh, SRC5.mitsuIh, { name: "おそうじ本舗 キッチンクリーニング", url: HONPO_KITCHEN }, { name: "ダスキン キッチンクリーニング", url: DUSKIN_KITCHEN }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["gas-stove-cleaning", "fish-grill-cleaning", "kitchen-drain-cleaning"],
  },
  {
    slug: "wallpaper-mold",
    kw: "壁紙 カビ",
    title: "壁紙（クロス）のカビの落とし方｜サンゲツ・花王の公式見解と結露の防ぎ方、業者に頼む目安 | クリーンナビ",
    description:
      "壁紙（クロス）に生えたカビの落とし方を、サンゲツの技術資料・花王の製品Q&A・東京都保健医療局の指針をもとに整理しました。表面のカビは消毒用アルコールで拭き取り、漂白剤・カビ取り剤は使わないこと、家具と壁の間を5cm以上あける結露対策、賃貸の原状回復の考え方、業者の壁紙クリーニング・染色の公式料金を掲載しています。",
    h1: "壁紙（クロス）のカビの落とし方｜メーカー公式の方法と業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "サンゲツは、カビが壁紙の表面だけに発生している場合は、早めに消毒用アルコールで拭き取るのが効果的としています。壁紙の種類によっては表面が傷むことがあるため、目立たないところで試してから使い、拭き残しがないように仕上げます。有機溶剤・漂白剤・研磨剤は、劣化・変色・破損のおそれがあるため使いません（サンゲツ）。花王も、水で洗い流せないリビングの壁には「強力カビハイター」は使えないと回答しています。",
      "カビが壁紙の内部や裏側に達している場合や、広い範囲に発生した場合は、自分で落とすことは困難です（サンゲツ・花王）。リリカラは、壁紙の裏側（躯体）のカビは原因を改善しなければ張り替えても再び変色するとして、施工会社への相談を勧めています。",
    ],
    sections: [
      {
        h2: "壁紙のカビに使えるもの・使えないもの",
        blocks: [
          "壁紙メーカーと洗剤メーカーの公式の記載を、当サイトで同じ項目にそろえました。",
          {
            table: {
              head: ["使うもの", "可否", "公式の記載"],
              rows: [
                ["消毒用アルコール", "表面のカビに使う（目立たないところで試す）", "表面だけのカビは早めに消毒用アルコールで拭き取るのが効果的。拭き残しがないように拭き取る（退色・変色のおそれ）（サンゲツ）。アルコールで拭ける材質なら、最後に拭くことで再発を抑えられる（花王）"],
                ["塩素系のカビ取り剤・漂白剤", "使わない", "漂白剤は劣化促進・変色・破損のおそれ（サンゲツ）。強力カビハイターは水で洗い流せない場所には使えない。業務用製品の「使えないもの」にクロス壁・しっくい壁を明記（花王）"],
                ["中性洗剤", "ビニル壁紙の汚れ落としに使う", "落ちにくい汚れには中性洗剤を使い、残った洗剤は真水かぬるま湯で拭き取る（サンゲツ）"],
                ["有機溶剤（シンナー等）・研磨剤", "使わない", "劣化促進・変色・破損のおそれ（サンゲツ）"],
              ],
              note: "サンゲツ技術資料「壁紙のメンテナンス 一般ビニル壁紙」・壁紙のお手入れ方法、花王 製品Q&A・強力カビハイター業務用の製品情報を 2026-11-21 に確認。紙・織物の壁紙のカビの扱いは、確認できた公式資料に記載がありません。織物壁紙は濡れたタオルや洗剤でシミになるとサンゲツは案内しています。",
            },
          },
        ],
      },
      {
        h2: "拭き取りの手順と作業時の注意",
        blocks: [
          {
            ol: [
              "窓を開けるなどして換気します。東京都は、薬剤でカビを除去する際は安全のために必ず十分な換気をするよう案内しています。",
              "カビに直接掃除機をかけると、胞子をまき散らすおそれがあります（東京都保健医療局「室内のカビ対策」）。",
              "目立たない場所で消毒用アルコールを試し、変色や表面の傷みがないことを確かめます（サンゲツ・花王）。",
              "布に含ませたアルコールで、カビの部分を拭き取ります。拭き残しは退色・変色の原因になるため、最後まで拭き取ります（サンゲツ）。",
              "拭いた後はよく乾燥させます（花王）。",
            ],
          },
          "花王は、木材や壁の内部にまで入り込んだカビは落としきれない場合があるとしています。拭いても色が残る場合は、無理にこすらず、業者や施工会社に相談します。",
        ],
      },
      {
        h2: "壁紙にカビが生える原因と予防（結露・湿気）",
        blocks: [
          {
            ul: [
              "結露は北側の窓や壁に多く発生し、壁や窓ガラスに付いた水滴は建材や壁紙を傷め、カビを発生させやすくします（東京都「健康・快適居住環境の指針」結露の防止）。",
              "部屋の隅は空気がよどみ、温度が低く湿度が高くなりがちです。家具を置くときは、後ろの壁と5cm以上の空間を設けます（東京都）。",
              "東京都の指針「室内のカビ対策」は、カビが好む条件を温度20〜35℃前後・湿度70%以上としています。",
              "結露や過度の湿気は、シミ・剥がれ・カビ発生の原因になり、加湿器を使った後などは特に発生しやすくなります。除湿器や吸湿材の活用も有効です（サンゲツ）。",
              "壁紙のほとんどには防かび性能がありますが、壁紙単体でカビの発生を防ぐことはできません（サンゲツ）。",
              "たまったホコリが湿気を吸うとカビの原因になるため、定期的にホコリを取ります（サンゲツ）。",
            ],
          },
        ],
      },
      {
        h2: "賃貸住宅の場合（国土交通省の原状回復の考え方）",
        blocks: [
          "国土交通省のリーフレット「これでわかる！賃貸住宅を退去する時の原状回復のポイント」は、賃借人の善管注意義務違反や故意・過失の一例として「結露を放置したことにより拡大したカビ、シミ」を挙げています。通常の生活でもカビやシミが発生する物件はあるものの、放置して拡大すると賃借人負担となる可能性が高いため、定期的な清掃や換気が大切だとしています。",
          "賃貸住宅で広い範囲にカビが出た場合は、自分で薬剤を試す前に管理会社・貸主に連絡すると、原因（結露・漏水など）の確認と費用負担の話し合いを進めやすくなります。",
        ],
      },
    ],
    whenPro: [
      "消毒用アルコールで拭いても黒い色が残る、または広い範囲に広がっている場合（サンゲツは、内部に達したカビや大量のカビは専門業者への相談を勧めています）",
      "同じ場所に何度も生える場合。リリカラは、壁紙の裏側のカビは原因を突き止めて改善しなければ張り替えても再び変色するとしています",
      "業者の壁紙クリーニングは、おそうじ本舗の公式ページではヤニ・手アカ・ホコリが対象として挙げられ、カビの除去は明記されていません。カビ跡の扱いは見積もり時に確認します",
      "シミが残った壁紙は、染色（ビニールクロスのみ）や張り替えの相談になります",
    ],
    priceHeading: "壁紙クリーニング・染色の料金（業者の公式料金）",
    priceLead:
      "壁紙の洗浄と染色・補修は、おそうじ本舗とおそうじ革命が公式サイトに料金を掲載しています（ダスキンの公式サイトには壁紙の洗浄メニューの掲載がありません）。いずれもカビ取りの専用メニューではないため、カビ跡の扱いは事前に確認してください。",
    prices: WALL_MOLD_PRICES,
    ctaText: "お住まいの地域のハウスクリーニング業者と、箇所別の料金の目安をご確認いただけます。",
    cta: [
      { href: "/services/", label: "ハウスクリーニング業者を探す" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "壁紙のカビにカビキラーやカビハイターを使ってもよいですか。", a: "花王は、水で洗い流せないリビングの壁などには「強力カビハイター」は使えないと回答しており、業務用製品の「使えないもの」にもクロス壁を挙げています。サンゲツも、漂白剤は劣化・変色・破損のおそれがあるとして使用しないよう案内しています。" },
      { q: "壁紙のカビは何で拭けばよいですか。", a: "サンゲツは、壁紙の表面だけのカビは消毒用アルコールで早めに拭き取るのが効果的としています。壁紙の種類によっては表面が傷むため、目立たないところで試し、拭き残しがないように拭き取ります。" },
      { q: "家具の裏の壁にカビが生えるのはなぜですか。", a: "部屋の隅や家具の裏は空気がよどみ、温度が低く湿度が高くなりやすいため結露が起きやすい場所です。東京都は、家具を置くときは後ろの壁と5cm以上の空間を設けるよう案内しています。" },
      { q: "賃貸の壁紙にカビが生えたら退去時に費用を請求されますか。", a: "国土交通省のリーフレットは「結露を放置したことにより拡大したカビ、シミ」を賃借人の善管注意義務違反等の一例に挙げています。カビに気づいたら早めに清掃・換気し、広い範囲なら管理会社・貸主に連絡してください。" },
    ],
    sources: [SRC6.sangetsuVinylPdf, SRC2.sangetsu, SRC6.lilyAttention, SRC6.lilyColumnMold, SRC6.kaoQaWall, SRC6.kaoProKabiHaiter, SRC6.tokyoCondensation, SRC6.tokyoMold, SRC6.tokyoAllergy, SRC6.mlitLeaflet, { name: "おそうじ本舗 壁紙クリーニング", url: HONPO_CLOTH }, { name: "おそうじ本舗 壁紙染色", url: HONPO_DYEING }, { name: "おそうじ革命 料金（壁紙補修）", url: KAKUMEI_PRICE }],
    related: ["wallpaper-stain-removal", "flooring-mold", "bath-pink-mold"],
  },
  {
    slug: "flooring-mold",
    kw: "フローリング カビ",
    title: "フローリングのカビ・黒ずみの対処｜床材メーカー3社の公式の手入れと使ってはいけない洗剤、業者に頼む目安 | クリーンナビ",
    description:
      "フローリングのカビ・黒ずみへの対処を、永大産業・朝日ウッドテック・大建工業の公式のお手入れ方法と東京都の指針で整理しました。カビ取り剤（強アルカリ性）やスチームクリーナーを使わない理由、アルコールの可否がメーカーで分かれる点、ラグの下の結露対策と、業者のフローリング洗浄・ワックスの公式料金を掲載しています。",
    h1: "フローリングのカビ・黒ずみの対処｜床材メーカーの公式の手入れと業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "床材メーカーの公式資料に、フローリングのカビを落とす専用の手順は掲載されていません。共通して案内されているのは、乾いた雑巾やモップでのからぶき、落ちない汚れは固く絞った雑巾か薄めた中性洗剤で拭き、水分を残さないことです（永大産業・朝日ウッドテック・大建工業）。カビ取り剤などの強アルカリ性洗剤は変色のおそれがあるため使いません（永大産業）。",
      "スチームクリーナーは、熱や水分でフローリングに膨れ・ヒビワレ・カビ・変色などを生じるおそれがあるため控えるよう、朝日ウッドテックは案内しています。消毒用アルコールは、大建工業のFAQの中でも「ひどい汚れには使用可」と「一般床材には使わない」に分かれるため、床材の取扱説明書を確認し、目立たない場所で試してから使います。",
    ],
    sections: [
      {
        h2: "床材メーカー3社の公式の手入れ（使えるもの・使えないもの）",
        blocks: [
          {
            table: {
              head: ["項目", "永大産業", "朝日ウッドテック", "大建工業"],
              rows: [
                ["日ごろの手入れ", "ゴミやホコリを取り、乾いた雑巾やモップで拭く", "水気が残るような雑巾がけは避ける", "固く絞った雑巾で水拭きし、水分が残らないように乾拭き"],
                ["落ちない汚れ", "固く絞った雑巾か、住居用洗剤（中性）を含ませた雑巾で拭く", "水で濡らして固く絞った雑巾で取り除き、使用後はカラ拭き", "住宅用洗剤（中性）や中性の床クリーナーを薄め、固く絞って拭く"],
                ["カビ取り剤・強アルカリ性洗剤", "こぼすと変色のおそれ（漂白剤・カビ取り剤を強アルカリ性洗剤として例示）", "強アルカリ性のものは使用しない", "強アルカリ性のクリーナーは変色する場合があるため使わない"],
                ["消毒用アルコール", "クレヨン・マーカーの汚れはアルコールを含ませた布で軽く速やかに拭き取る", "記載なし（確認範囲）", "ひどい汚れはアルコールを含ませた雑巾で拭く（FAQ 222）／一般床材には消毒用の薬品を使わない・変色や白化のおそれ（FAQ 3189）"],
                ["スチーム・ウェットタイプ", "水を噴きつけるタイプ・スチーム洗浄タイプは使用しない", "スチーム洗浄機は控える（膨れ・ヒビワレ・カビ・変色・白化のおそれ）", "湿式ロボット掃除機・スチームモップは使用しない"],
              ],
              note: "永大産業「木質フローリング快適生活マニュアル」、朝日ウッドテック「床のメンテナンスブック」、大建工業 FAQ を 2026-11-21 に確認。床材の種類（シート・突板・無垢など）によって可否が異なるため、お住まいの床材の取扱説明書を優先してください。",
            },
          },
          "花王の「強力カビハイター 業務用」も、製品情報の「使えないもの」に木製品を挙げています。浴室用のカビ取り剤をフローリングに使うことは、床材メーカー・洗剤メーカーのいずれの公式資料でも案内されていません。",
        ],
      },
      {
        h2: "カビ・黒ずみが出やすい場所と予防",
        blocks: [
          {
            ul: [
              "湿気の高い場所でマット・カーペット等を長期間敷くと、湿気がこもりシミになる可能性があるため、定期的に位置を変えます（永大産業）。大建工業も、敷物によっては長時間敷きっぱなしにすると床の表面が変色するとして、ときどき敷物を移動して空拭きするよう案内しています。",
              "長期にわたり結露の水分が床に吸収されると、シミや波打ちが起こります（朝日ウッドテック）。",
              "部屋の隅や家具の置き場所は低温・高湿度になり結露しやすく、北側の押入れなどでは床や側壁にスノコを置く方法を東京都は紹介しています。",
              "東京都の指針は、カビが好む条件を温度20〜35℃前後・湿度70%以上としています。同じ指針の一覧では、室内の湿度の目安を40〜60%としています。",
              "カビに直接掃除機をかけると胞子をまき散らすおそれがあるため、作業時は換気し、手袋・マスクを着用します（東京都保健医療局「室内のカビ対策」）。",
            ],
          },
        ],
      },
      {
        h2: "掃除で戻らない場合",
        blocks: [
          "大建工業は、床材の表面のシートが広い範囲ではがれた場合は補修が難しく、部屋全体の床材の張替えや上張りが必要になる場合があるとし、建築業者・リフォーム業者、軽微な傷みは補修専門のリペア会社への相談を案内しています。拭いても色が戻らない黒ずみや、床が波打つ・ぶかぶかする状態は、クリーニングではなく施工会社への相談が先です。",
        ],
      },
    ],
    whenPro: [
      "古いワックスの上から汚れが重なり、中性洗剤で拭いても黒ずみが取れない場合（業者にはワックスをはがして洗浄・再塗布するメニューがあります）",
      "部屋全体の床をまとめて洗浄し、ワックスで保護したい場合",
      "いずれの業者の公式ページもカビ除去を明記していないため、カビ跡がある場合は見積もり時に伝えます。無垢材・床暖房の床は別途相談（おそうじ革命）、素材によってはワックスを塗布できない場合あり（おそうじ本舗）",
      "シートのはがれ・波打ちは、クリーニングではなく施工会社・リフォーム業者に相談します",
    ],
    priceHeading: "フローリング洗浄・ワックスの料金（大手3社の公式料金）",
    priceLead:
      "フローリングの洗浄とワックスがけは、大手3社が公式サイトに料金を掲載しています。料金の単位（帖・m²・㎡単価）が業者ごとに異なるため、部屋の広さに合わせて比較してください。",
    prices: FLOOR_PRICES,
    ctaText: "床ワックスがけに対応する業者と料金の目安をご確認いただけます。",
    cta: FLOOR_CTA,
    faq: [
      { q: "フローリングのカビにカビ取り剤を使ってもよいですか。", a: "永大産業はカビ取り剤などの強アルカリ性洗剤をこぼすと変色のおそれがあるとし、朝日ウッドテック・大建工業も強アルカリ性のものは使わないよう案内しています。花王の強力カビハイター業務用も「使えないもの」に木製品を挙げています。" },
      { q: "フローリングを消毒用アルコールで拭いてもよいですか。", a: "大建工業のFAQでは、ひどい汚れはアルコールを含ませた雑巾で拭くとする回答と、一般床材には消毒用の薬品を使わない（変色・白化のおそれ）とする回答があります。床材の取扱説明書を確認し、目立たない場所で試してから使ってください。" },
      { q: "スチームクリーナーでカビを落とせますか。", a: "朝日ウッドテックは、スチーム洗浄機は熱や水分でフローリングに膨れ・ヒビワレ・カビ・変色などを生じるおそれがあるとして使用を控えるよう案内しています。永大産業・大建工業もスチームタイプの使用を避けるよう案内しています。" },
      { q: "ラグの下のフローリングが黒ずむのを防ぐには。", a: "永大産業は湿気の高い場所でマット・カーペットを長期間敷くと湿気がこもりシミになる可能性があるとして、定期的に位置を変えるよう案内しています。大建工業も、ときどき敷物を移動して空拭きするよう案内しています。" },
    ],
    sources: [SRC6.eidaiManual, SRC6.woodtecManual, SRC6.daikenCareList, SRC6.daikenHeavyDirt, SRC6.daikenRug, SRC6.daikenRepair, SRC6.kaoProKabiHaiter, SRC6.tokyoMold, SRC6.tokyoCondensation, { name: "おそうじ本舗 フローリングクリーニング", url: HONPO_FLOOR }, { name: "ダスキン フロアクリーニング", url: DUSKIN_FLOOR }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["wallpaper-mold", "toilet-floor-cleaning", "wallpaper-stain-removal"],
  },
  {
    slug: "ventilation-fan-noise",
    kw: "換気扇 異音",
    title: "換気扇・レンジフードの異音の原因と対処｜パナソニック・三菱電機・LIXIL・富士工業の公式の確認手順、掃除で直る音と修理が必要な音 | クリーンナビ",
    description:
      "換気扇・レンジフードの異音の原因と対処を、パナソニック・三菱電機・LIXIL・富士工業の公式FAQと取扱説明書で整理しました。給気不足・ファンの汚れ・取り付けのゆるみなど自分で確認できる原因と、モーター軸受の摩耗など点検が必要な原因、業者のレンジフードクリーニングの公式料金を掲載しています。",
    h1: "換気扇・レンジフードの異音の原因と対処｜掃除で直る音と修理が必要な音の見分け方",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "メーカー各社が最初に挙げる原因は、給気不足と汚れです。窓や給気口が閉じている、フィルターやファン（羽根）に油やほこりが詰まっていると、吸い込みが悪くなってファンの回転が上がり、音が大きくなります（パナソニック・三菱電機・LIXIL）。給気を確保し、フィルターとファンを掃除し、取り付けのゆるみを直すと改善する場合があります。",
      "これらに当てはまらないのに音や振動が続く場合、パナソニックはファンの回転バランスのずれや、モーターの回転軸受などの摩耗による振動の可能性を挙げ、修理窓口での点検を案内しています。運転中の異常な音・振動、焦げ臭いにおいがある場合は、使用を中止してブレーカーを切り、販売店やメーカーに連絡します（三菱電機・富士工業）。",
    ],
    sections: [
      {
        h2: "異音の原因と対処の一覧（メーカー公式）",
        blocks: [
          "4社の公式FAQ・取扱説明書に掲載されている原因を、当サイトで「自分で対処できるもの」と「点検・修理が必要なもの」に分けて整理しました。",
          {
            table: {
              head: ["原因", "自分で対処できるか", "対処（公式の記載）"],
              rows: [
                ["給気不足（窓・給気口が閉じている）", "できる", "窓・給気口を開け、十分な給気を確保する（LIXIL・富士工業・三菱電機）"],
                ["フィルター・ファン（羽根）の汚れ・目詰まり", "できる（掃除）", "吸い込みを弱める目詰まり・汚れを確認する（パナソニック）。グリル・シャッター・羽根に付いたほこりや異物を清掃する（三菱電機）。スロットフィルタは中性洗剤とぬるま湯で洗い、汚れがひどい場合は30〜40分つけ置き（LIXIL）"],
                ["ファン・前面パネル・オリフィスの取り付けのゆるみ", "できる（ブレーカーを切ってから）", "ファンを正しく取り付け直す、オリフィスを固定するつまみを締め直す（パナソニック・LIXIL・富士工業）"],
                ["市販のフィルターの使用・フィルターの重ね付け", "できる", "通気抵抗が増え、吸い込み不良・異音の原因になるため、専用のフィルターを使う（LIXIL・富士工業）"],
                ["外風でシャッターがバタつく（パタパタ音）", "—", "換気扇の異常ではない（三菱電機・富士工業）。三菱電機は耐外風フードの相談を案内"],
                ["屋外のベントキャップの防鳥網の目詰まり", "状況による", "運転音が異常に大きい・吸い込みが悪い原因として、防鳥網のお手入れを挙げる（富士工業）。高所の作業は無理に行わない"],
                ["ファンの回転バランスのずれ・変形、モーター軸受などの摩耗", "できない", "機器の不具合として修理窓口に点検を依頼（パナソニック）。変形したファンで運転すると振動・異音のおそれ（富士工業）"],
              ],
              note: "パナソニック FAQ（a_id 81877・62437）、三菱電機 FAQ（6692・9125・10714）、LIXIL Q&A、富士工業 AGG-AP752/952 取扱説明書を 2026-11-21 に確認。三菱電機は、DCモーターの定風量タイプでは自動の風量制御で音が変わることがあり、異常ではないとしています。",
            },
          },
        ],
      },
      {
        h2: "ファンを掃除するときの注意",
        blocks: [
          {
            ul: [
              "ファンにはバランスをとるためのおもり（バランサー）が付いている場合があります。外したり動かしたりすると異常や故障の原因になるため、絶対に外さないでください（パナソニック・富士工業）。外れた場合やファンが変形した場合は修理依頼（有料）になります（パナソニック）。",
              "羽根の掃除の目安は、パナソニックが3か月に1回程度、富士工業がファンは3か月に1回程度・フード等は1か月に1回程度、三菱電機の窓用換気扇は約3か月に1度です。三菱電機は、羽根にほこりなどが付着すると風量低下や異常音の原因になるとしています。",
              "作業の前にスイッチを切り、ブレーカーを切ってから、厚手のゴム手袋をして行います（パナソニック・LIXIL）。",
            ],
          },
          "フィルターのつけ置きの手順と頻度は「換気扇（レンジフード）フィルターの掃除方法」で、トイレ・浴室の換気扇はそれぞれの掃除方法のページで扱っています。",
        ],
      },
      {
        h2: "使用を中止して点検を依頼するサイン",
        blocks: [
          "三菱電機は、長年使用した換気扇は内部部品（コンデンサー・モーターなど）の劣化により発煙・発火のおそれがあるとして、次の症状があればすぐに使用を停止し、銘板の形名と製造年を確認して連絡するよう案内しています。",
          {
            ul: [
              "スイッチを入れても回らない、回転が異常に遅い・不規則",
              "運転中に異常な音や振動がする",
              "モーター部分が異常に熱い、焦げ臭いにおいがする",
              "コードに傷がある、コードに触れると運転したり止まったりする",
            ],
          },
          "三菱電機の窓用換気扇の取扱説明書は、設計上の標準使用期間を製造年から15年とし、超えて使用すると経年劣化による発火・けが等の事故に至るおそれがあるとしています（無償保証期間とは異なります）。一方で、モーターの軸受は時間が経つにつれ音が変化することがあり、それだけでは異常ではないとも記載しています。富士工業のレンジフードは、補修用部品の保有期間を製造打ち切り後6年としています。",
        ],
      },
    ],
    whenPro: [
      "フィルターは自分で洗えても、ファンやファンケーシングの奥に油汚れが固まり、吸い込みの悪さと音が改善しない場合（業者のレンジフードクリーニングはファン・本体内部まで分解して洗浄します）",
      "バランサーの付いたファンを外すのが不安な場合",
      "掃除・給気・取り付けを確認しても音や振動が続く場合、焦げ臭いにおいがする場合は、クリーニングではなく販売店・メーカーの修理窓口に点検を依頼します（三菱電機は、点検で異常がなければ保証期間内でも点検料がかかるとしています）",
    ],
    priceHeading: "レンジフード・換気扇クリーニングの料金（大手3社の公式料金）",
    priceLead:
      "ファン・本体内部の油汚れは、業者のレンジフード・換気扇クリーニングで洗浄しています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。クリーニングで直るのは汚れ・目詰まりが原因の音に限られます。",
    prices: RANGE_HOOD_PRICES,
    ctaText: "換気扇・レンジフードクリーニングの内容と、箇所別の料金の目安をご確認いただけます。",
    cta: RANGE_HOOD_CTA,
    faq: [
      { q: "換気扇の音がだんだん大きくなってきたのはなぜですか。", a: "パナソニックは、吸い込みが悪くなるとファンに負荷がかかり、うなり音のような異音が出たり回転が上がって音が大きくなったりするとして、まず目詰まり・汚れの確認を案内しています。当てはまらない場合は、回転バランスのずれやモーター軸受などの摩耗の可能性があり、点検が必要です。" },
      { q: "風が強い日にパタパタ音がします。故障ですか。", a: "三菱電機と富士工業は、外風の影響で製品背面のシャッターがバタつくことによる音で、換気扇の異常ではないとしています。気になる場合、三菱電機は耐外風フードの相談を案内しています。" },
      { q: "市販のフィルターカバーを付けたら音が大きくなりました。", a: "LIXILと富士工業は、市販のフィルターの使用やフィルターの重ね付けは通気抵抗が増えて吸い込みが悪くなり、異音・振動の原因になるとして、専用のフィルターを使うよう案内しています。" },
      { q: "換気扇は何年くらいで交換を考えますか。", a: "三菱電機の窓用換気扇の取扱説明書は、設計上の標準使用期間を製造年から15年としています。年数にかかわらず、異常な音や振動・焦げ臭いにおいがある場合は使用を中止して点検を依頼します。" },
    ],
    sources: [SRC6.panaRangeNoise, SRC6.panaRangeNoiseDed, SRC6.panaRangeFan, SRC6.mitsuNoise, SRC6.mitsuNoisePipe, SRC6.mitsuWind, SRC6.mitsuLongUse, SRC6.mitsuWindowFanManual, SRC6.lixilRangeNoise, SRC6.fujiohManual, { name: "おそうじ本舗 レンジフード・換気扇クリーニング", url: HONPO_FAN }, { name: "ダスキン レンジフードクリーニング", url: DUSKIN_FAN }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["range-hood-filter-cleaning", "toilet-fan-cleaning", "bath-fan-cleaning"],
  },
  {
    slug: "bath-mirror-water-stains",
    kw: "お風呂 鏡 水垢",
    title: "お風呂の鏡の水垢（ウロコ）の落とし方｜TOTO・LIXIL・パナソニックの公式手順とクエン酸の可否、業者に頼む目安 | クリーンナビ",
    description:
      "お風呂の鏡の水垢（ウロコ）の落とし方を、TOTO・LIXIL・パナソニックの公式のお手入れ方法で整理しました。クリームクレンザーでの落とし方、クエン酸パックの時間がメーカーで1時間と3分に分かれる点、加工された鏡に使えないもの、業者の鏡の水アカ除去オプションの公式料金を掲載しています。",
    h1: "お風呂の鏡の水垢（ウロコ）の落とし方｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "鏡の白い水垢は、水道水の成分が水分の蒸発後に残ったものです。TOTOとLIXILは、ふつうの鏡に固まった水垢を浴室用クリームクレンザーと柔らかいスポンジで、強くこすらずに「磨いてはお湯（水）で流す」を4〜5回繰り返して落とすよう案内しています。予防には、入浴後に鏡の水滴を拭き取ることが基本です（パナソニック・LIXIL）。",
      "ただし、防汚・くもり止めなど特殊加工の鏡には、研磨剤入りの洗剤や硬いスポンジは使えません（TOTO・花王）。クエン酸は、パナソニックが1時間ほどのパック、LIXILストアが3分間のパックで30分以上置かないよう案内し、TOTOは「酸性」表示の洗剤を使わないものに挙げるなど、メーカーで扱いが分かれます。鏡の種類を確かめてから選びます。",
    ],
    sections: [
      {
        h2: "鏡の種類別の落とし方（メーカー公式）",
        blocks: [
          {
            table: {
              head: ["鏡の種類", "落とし方", "使わないもの"],
              rows: [
                ["ふつうの鏡（特殊加工なし）", "軽い水垢は浴室用中性洗剤をかけて2〜3分おき、スポンジでやさしくこする（LIXIL）。固まった水垢は浴室用クリームクレンザーを柔らかいスポンジに付け、強くこすらず、磨いてはお湯で流すを4〜5回繰り返す（TOTO・LIXIL）", "粒子の粗い研磨剤入りのコンパウンド（パナソニック）。鏡の周りのレール部分へのクリームクレンザー（LIXIL）"],
                ["TOTO お掃除ラクラク鏡", "取扱いページの手順に従う", "研磨剤入りの洗剤・かたい研磨スポンジ・鏡スポンジ（特殊表面処理を傷つける）"],
                ["くもり止めヒーター付きの鏡（TOTO 一般鏡）", "電源を切り、表面が冷めてから手入れする（感電・やけど・けがのおそれ）", "研磨剤入りの洗剤・かたい研磨スポンジ"],
                ["LIXIL キレイ鏡（鏡の隅にマーク）", "専用の手順に従う。クリームクレンザーを使うと防汚効果が失われ通常の鏡になる", "（防汚効果を残したい場合）研磨剤。LIXILストアは一部の製品にクエン酸を推奨していないとしています"],
                ["パナソニック クリアミラー", "カビ取り用洗浄剤で洗浄する", "パナソニックが一般のミラー向けに紹介している水あか用の製品"],
              ],
              note: "TOTO・LIXIL・パナソニックの公式お手入れページ、花王 製品Q&A を 2026-11-21 に確認。花王は、くもり止めや防水など特殊加工の鏡、研磨剤の使用を禁止している鏡には同社の水アカ用スプレーは使えないとしています。",
            },
          },
        ],
      },
      {
        h2: "クエン酸・メラミンスポンジの扱い（メーカーで分かれる点）",
        blocks: [
          "同じ「鏡の水垢」でも、メーカーの公式の案内は次のように分かれています。当サイトで並べると、次のとおりです。",
          {
            table: {
              head: ["項目", "案内している内容", "出典"],
              rows: [
                ["クエン酸パック", "水200mlとクエン酸小さじ1〜2杯の液をキッチンペーパーに含ませ、ラップで覆って1時間ほど置く", "パナソニック（コラム）"],
                ["クエン酸パック", "水200mlに約2gのクエン酸（濃度1%）。ラップで覆って3分間置く。30分以上は置かない（鏡の表面が傷むおそれ）。一部のLIXIL製品の鏡にはクエン酸を推奨していない", "LIXILストア"],
                ["酸性の洗剤", "「酸性」の表示のある洗剤・洗浄剤・漂白剤を、浴室のお手入れに使わないものに挙げる", "TOTO"],
                ["メラミンスポンジ", "軽い水垢なら浴室用中性洗剤や市販のメラミンスポンジで落ちる", "パナソニック（お手入れページ）"],
                ["メラミンスポンジ", "ソフトコーティング加工の鏡をこすると、コーティングが不均等に削られ表面が曇る", "パナソニック（コラム）"],
              ],
              note: "2026-11-21 確認。酸性の洗剤と塩素系のカビ取り剤を続けて使うと有毒な塩素ガスが発生します。国民生活センターの再現テストでは、浴室内で一緒に使った数分後に塩素ガス濃度が16ppmを超えました。",
            },
          },
        ],
      },
      {
        h2: "毎日の予防と、落とせない汚れ",
        blocks: [
          {
            ul: [
              "入浴後はシャワーでせっけんの泡などを洗い流し、サッとからぶきします（パナソニック）。LIXILストアは、お風呂あがりに鏡の水滴を拭き取ることを最も効果的な習慣としています。",
              "LIXILのQ&Aは、週1回を目安に浴室用中性洗剤で鏡を掃除するよう案内しています。",
              "鏡の裏面の銀膜が水分や洗剤の影響で腐食すると、鏡の周囲に黒っぽいシミ（シケ）が出ます。LIXILとパナソニックは、このシミは補修できず鏡ごとの交換が必要としています。鏡の周囲に洗剤を残さないことが予防になります。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "クリームクレンザーで繰り返し磨いても白いウロコが残る場合（おそうじ本舗は、強固な水アカの除去は浴室クリーニングのオプションとしています）",
      "防汚・くもり止め加工の鏡で、研磨剤を使えずに汚れが落ちない場合は、加工の有無を伝えて見積もりを取ります（おそうじ本舗は表面加工のある鏡は対応できない場合があるとしています）",
      "鏡の周囲の黒いシミ（シケ）は掃除では落ちないため、クリーニングではなく鏡の交換の相談になります",
    ],
    priceHeading: "浴室クリーニングと鏡のオプションの料金（大手3社の公式料金）",
    priceLead:
      "鏡は3社とも浴室クリーニングの作業範囲に含まれますが、ウロコ状の強固な水垢の除去を独立したオプションとして掲載しているのはおそうじ本舗です。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: MIRROR_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "お風呂の鏡の水垢はクエン酸で落ちますか。", a: "パナソニックはクエン酸パック（水200mlにクエン酸小さじ1〜2杯・1時間ほど）を紹介していますが、LIXILストアは3分間のパックで30分以上置かないよう案内し、一部の製品の鏡にはクエン酸を推奨していないとしています。TOTOは「酸性」表示の洗剤を浴室のお手入れに使わないものに挙げています。鏡の取扱説明書を確認してください。" },
      { q: "鏡のウロコにクレンザーを使ってもよいですか。", a: "特殊加工のないふつうの鏡なら、TOTOとLIXILは浴室用クリームクレンザーを柔らかいスポンジに付け、強くこすらず4〜5回磨いては流す方法を案内しています。防汚・くもり止め加工の鏡には研磨剤入りの洗剤は使えません。" },
      { q: "鏡の端の黒いシミは落とせますか。", a: "LIXILとパナソニックは、鏡の裏面の銀膜が腐食してできるシミで補修できず、鏡ごとの交換が必要としています。" },
      { q: "業者に鏡の水垢除去だけを頼めますか。", a: "おそうじ本舗の「鏡の水アカ除去＆コーティング仕上げ」（3,300円）と「鏡の水アカ除去＆曇り止めフィルム仕上げ」（5,500円）は、浴室クリーニングと同時に注文するオプションです（2026-11-21 確認・税込）。" },
    ],
    sources: [SRC6.totoBathHelp, SRC6.totoSenzai, SRC6.totoMirrorRakuraku, SRC6.totoMirrorHeater, SRC6.lixilMirror, SRC6.lixilMirrorFaq, SRC6.lixilStoreMirror, SRC6.panaMirror, SRC6.panaScaleArticle, SRC6.kaoQaMirror, SRC2.kokusen, { name: "おそうじ本舗 風呂・浴室クリーニング", url: HONPO_BATH }, { name: "ダスキン 浴室クリーニング", url: DUSKIN_BATH }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bathtub-cleaning", "bath-floor-black-stains", "bath-pink-mold"],
  },
  {
    slug: "bath-pink-mold",
    kw: "お風呂 赤カビ",
    title: "お風呂の赤カビ（ピンク汚れ）の落とし方｜LIXIL・TOTO・パナソニックの公式の手入れと予防、業者に頼む目安 | クリーンナビ",
    description:
      "お風呂の赤カビ（ピンク汚れ）の正体と落とし方を、LIXIL・TOTO・パナソニック・ライオン・花王の公式情報で整理しました。正体は酵母（ロドトルラ）で黒カビより落としやすいこと、浴室用中性洗剤での落とし方、1〜2日で再発する理由と入浴後の予防、使ってはいけない洗剤、大手3社の浴室クリーニングの公式料金を掲載しています。",
    h1: "お風呂の赤カビ（ピンク汚れ）の落とし方｜正体と公式の手入れ、業者に頼む目安",
    publishedAt: D3,
    checkedAt: D3,
    answer: [
      "お風呂の「赤カビ」と呼ばれるピンク色の汚れは、LIXILとライオンによると、ロドトルラという酵母などの微生物が皮脂などを養分にして増えたもので、厳密にはカビではありません。パナソニックはカビと比べて比較的取れやすい汚れとしています。",
      "LIXILの手順は、浴室用中性洗剤をかけて2〜3分おき、スポンジでこすって洗い流すことです。中性洗剤で落ちない場合はカビ取り剤を使います。掃除をしても1〜2日で再び発生することがあるため（LIXIL）、入浴後に汚れを洗い流し、換気して乾かすことが予防になります。",
    ],
    sections: [
      {
        h2: "赤カビ（ピンク汚れ）と黒カビの違い",
        blocks: [
          {
            table: {
              head: ["項目", "赤カビ（ピンク汚れ）", "出典"],
              rows: [
                ["正体", "ロドトルラという酵母（厳密にはカビではない）。皮脂等を養分にして酵母が増えた汚れ", "LIXIL・ライオン"],
                ["出やすい場所", "排水口周辺・床・カウンター・壁の下部・ドア・パッキン、洗面器", "パナソニック・花王"],
                ["増える速さ", "1〜2日で増殖。掃除をしても1〜2日で再び発生することがある", "LIXIL"],
                ["落としやすさ", "カビと比べて比較的取れやすい。根が浅い", "パナソニック・LIXIL"],
                ["放置すると", "色素が沈着して取れなくなる", "LIXIL"],
              ],
              note: "2026-11-21 確認。呼び方はメーカーで異なり、TOTOは「カビ（ピンク・紫・黒などの汚れ）」としてまとめて扱っています。黒カビの落とし方は「お風呂の床の黒ずみの落とし方」で扱っています。",
            },
          },
        ],
      },
      {
        h2: "落とし方の手順（LIXILの公式手順）",
        blocks: [
          {
            ol: [
              "浴室用中性洗剤をかけ、2〜3分おきます。",
              "スポンジでこすります。床の溝や隅は先割れの浴室用ブラシを使います（LIXIL Q&A）。",
              "洗剤が残らないように洗い流します。",
              "浴室用中性洗剤で落ちなかった汚れには、カビ取り剤を使います。",
            ],
          },
          "LIXILは、目地やシーリング材を硬いものでこすらないよう注意しています。パナソニックのお手入れ読本は、酸性表示の洗剤・シンナー・ベンジン・灯油・アルコール・オレンジオイル系洗剤・研磨剤入りの洗剤やスポンジは素材を傷めるおそれがあるとして使わないよう案内し、中性以外の洗剤は目立たない場所で試すよう勧めています。",
        ],
      },
      {
        h2: "カビ取り剤を使うときの注意",
        blocks: [
          {
            ul: [
              "塩素系のカビ取り剤は必ず単独で使い、換気を十分に行い保護具を着用します（国民生活センター）。酸性タイプと混ぜたり、前後に続けて使ったりすると有害な塩素ガスが発生します（パナソニック）。",
              "カビ取り剤を吹きつけてから長い間放置すると、金属がさびる場合があります（TOTO）。パナソニックは、水栓・ドア枠・ミラーの縁・シャワーなど金属部分に塩素系の洗剤がかからないよう注意しています。",
              "LIXILは、キレイ鏡にカビ取り剤をかけて放置したり洗剤が残ったりすると、変色・変質・サビ・ゴムの劣化の原因になるとしています。",
            ],
          },
        ],
      },
      {
        h2: "再発を防ぐ入浴後の習慣",
        blocks: [
          {
            ul: [
              "入浴後、浴室全体にお湯のシャワーをかけて、その日の汚れ（養分）を洗い流します（LIXIL）。",
              "TOTOは、入浴後は冷水をまいて温度を下げ、3時間以上換気扇を回すか窓を開けるよう案内しています。花王も、換気しても室温が下がりにくい場合は壁全体に水のシャワーをかけて温度を下げる方法を紹介しています。",
              "スクイージーや乾いた布で水気を拭き取ります（花王・LIXIL）。",
            ],
          },
          "LIXILのお湯で洗い流す手順と、TOTO・花王の冷水で温度を下げる手順は、続けて行うことができます（お湯で汚れを流した後に冷水をかける）。",
        ],
      },
    ],
    whenPro: [
      "ピンク汚れが目地やシーリング材に色として残り、中性洗剤とカビ取り剤で落ちない場合（LIXILは、放置すると色素が沈着して取れなくなるとしています）",
      "黒カビも含めて浴室全体をまとめて掃除したい場合（おそうじ本舗は、カビがある場合はオリジナルのカビ取り剤で除去するとしています）",
      "業者でも、目地やパッキンの奥まで入り込んだ汚れは完全に除去できない場合があります（ダスキン・おそうじ本舗）",
    ],
    priceHeading: "浴室クリーニングの料金（大手3社の公式料金）",
    priceLead: "浴室のカビ・ピンク汚れは、業者の浴室クリーニングで対応しています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATH_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "お風呂の赤カビの正体は何ですか。", a: "LIXILとライオンは、ロドトルラという酵母などの微生物が増えてできる汚れとしています。LIXILは、一般に「赤カビ」と呼ばれるものの、厳密にはカビではないと説明しています。" },
      { q: "赤カビはカビキラーなどのカビ取り剤で落とすべきですか。", a: "LIXILは、まず浴室用中性洗剤をかけて2〜3分おき、スポンジでこすって落とし、中性洗剤で落ちなかった汚れにカビ取り剤を使う手順を案内しています。カビ取り剤は単独で使い、換気と保護具の着用を守ります。" },
      { q: "掃除してもすぐピンク汚れが出てくるのはなぜですか。", a: "LIXILは、ピンク汚れは1〜2日で増殖し、掃除をしても1〜2日で再び発生することがあるとしています。入浴後にお湯で汚れを流し、冷水で温度を下げ、換気して水気を拭き取ることが予防になります（LIXIL・TOTO・花王）。" },
      { q: "赤カビの掃除に重曹は使えますか。", a: "LIXILの「お風呂カビ取り完全マニュアル」は、根が浅いため重曹でこまめに落とすのが効果的としています。一方で、LIXILの公式のお手入れ手順は浴室用中性洗剤を使う方法です。" },
    ],
    sources: [SRC6.lixilKabitori, SRC6.lixilBathTips, SRC6.lixilPinkFaq, SRC6.lionPink, SRC6.panaBathBook, SRC6.kaoMyKaoPink, SRC6.totoBathHelp, SRC2.kokusen, { name: "おそうじ本舗 風呂・浴室クリーニング", url: HONPO_BATH }, { name: "ダスキン 浴室クリーニング", url: DUSKIN_BATH }, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bath-floor-black-stains", "bathtub-cleaning", "bath-mirror-water-stains", "bath-wall-cleaning", "bath-chair-cleaning"],
  },  {
    slug: "rental-aircon-cleaning",
    kw: "賃貸 エアコンクリーニング",
    title: "賃貸のエアコンクリーニングは誰が負担する？｜国交省ガイドラインの考え方と特約・退去時の確認点 | クリーンナビ",
    description:
      "賃貸住宅のエアコンクリーニング（内部洗浄）の費用負担を、国土交通省「原状回復をめぐるトラブルとガイドライン」の記載で整理しました。喫煙等の臭いがない場合は賃貸人負担とする考え方、借主負担になりうる例、特約が有効とされる3要件、入居中に依頼する前の確認点と大手3社の公式料金を掲載しています。",
    h1: "賃貸のエアコンクリーニングの費用負担｜国交省ガイドラインの考え方と確認点",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "国土交通省の「原状回復をめぐるトラブルとガイドライン（再改訂版）」は、エアコンの内部洗浄について、喫煙等による臭いなどが付着していない限り、通常の生活において必ず行うとまでは言い切れず、賃借人の管理の範囲を超えているため、賃貸人の負担とすることが妥当としています。",
      "ただし、ガイドラインは契約時に参考にする一般的な基準で、すでに結んだ契約は契約書の内容に沿った取扱いが原則です。退去時のクリーニング費用を借主負担とする特約がある場合は、その特約が有効かどうかが問題になります。費用負担を当サイトで判断することはできないため、契約書と管理会社・貸主への確認を前提にご覧ください。",
    ],
    sections: [
      {
        h2: "ガイドラインでの区分（エアコンに関する項目）",
        blocks: [
          {
            table: {
              head: ["項目", "ガイドラインの区分", "ガイドラインの考え方（要旨）"],
              rows: [
                ["エアコンの内部洗浄（喫煙等の臭いなどが付着していない場合）", "賃貸人負担とすることが妥当", "通常の生活で必ず行うとまでは言い切れず、賃借人の管理の範囲を超えている"],
                ["タバコ等のヤニ・臭い（喫煙等によりクロス等が変色したり、臭いが付着している場合）", "賃借人負担になりうる例", "通常の使用による損耗を超えるもの"],
                ["エアコン（賃借人所有）の設置による壁のビス穴・跡", "賃貸人負担とすることが妥当", "エアコンもテレビ等と同様に生活の必需品になっており、設置によるビス穴等は通常の損耗"],
                ["クーラー（賃貸人所有）から水漏れし、賃借人が放置したため壁が腐食", "賃借人負担になりうる例", "保守は所有者（賃貸人）が行うべきだが、水漏れを放置したり、その後の手入れを怠った場合は通常の使用による損耗を超える"],
                ["クーラー（賃借人所有）から水漏れし、放置したため壁が腐食", "賃借人負担になりうる例", "保守は所有者（この場合は賃借人）が行うべきで、怠った結果壁等を腐食させた場合は善管注意義務違反"],
                ["設備機器の故障・使用不能（機器の寿命によるもの）", "賃貸人負担とすることが妥当", "経年劣化による自然損耗で、賃借人に責任はない"],
              ],
              note: "国土交通省「原状回復をめぐるトラブルとガイドライン（再改訂版）」第1章の別表・事例区分を当サイトで抜粋（2026-11-22 確認）。区分は「〜と考えられる」「〜と判断されることが多い」という一般的な基準で、個別の契約や使用状況によって結論は変わります。",
            },
          },
        ],
      },
      {
        h2: "借主の負担になりうる場合と、負担額の考え方",
        blocks: [
          "ガイドラインは、原状回復を「賃借人の居住、使用により発生した建物価値の減少のうち、賃借人の故意・過失、善管注意義務違反、その他通常の使用を超えるような使用による損耗・毀損を復旧すること」と定義し、経年変化や通常の使用による損耗の修繕費用は賃料に含まれるものとしています。",
          {
            ul: [
              "エアコンの内部洗浄が賃貸人負担とされているのは「喫煙等の臭いなどが付着していない場合」です。喫煙等で臭いが付着している場合は、扱いが変わる可能性があります。",
              "設備の交換などで賃借人の負担が生じる場合、ガイドラインは経過年数を考慮して負担割合を減らす考え方をとり、エアコン（冷房用・暖房用機器）の耐用年数は6年としています。",
              "一方、クリーニングについては経過年数を考慮しないとしています。賃借人が通常の清掃を実施していない場合、部位または住戸全体の清掃費用相当分が賃借人負担になるという整理です。",
            ],
          },
        ],
      },
      {
        h2: "退去時クリーニングの特約が有効とされる要件",
        blocks: [
          "ガイドラインは、通常の原状回復義務を超える負担を賃借人に課す特約について、次の3つの要件を満たしていなければ効力を争われることに十分留意すべきとしています。",
          {
            ol: [
              "特約の必要性があり、かつ、暴利的でないなどの客観的、合理的理由が存在すること",
              "賃借人が特約によって通常の原状回復義務を超えた修繕等の義務を負うことについて認識していること",
              "賃借人が特約による義務負担の意思表示をしていること",
            ],
          },
          "ガイドラインは、特約を設ける場合は契約書面に明確に定めたうえで賃借人の十分な認識と了解をもって契約することが必要とし、将来負担することになる費用がどの程度になるか、単価等を明示しておくことも紛争防止に欠かせないとしています。契約書の特約欄に「エアコンクリーニング」の記載と金額があるかを確認してください。",
        ],
      },
      {
        h2: "入居中に自分で業者へ依頼する前の確認点",
        blocks: [
          {
            ul: [
              "エアコンの所有者を確認します。ガイドラインは、クーラーの保守は所有者が行うべきものとしています。備え付けのエアコンは貸主の設備のため、分解洗浄の可否や費用の扱いを先に管理会社・貸主に確認します。",
              "水漏れや異音など故障が疑われる場合は、クリーニングより先に管理会社へ連絡します。ガイドラインは、水漏れを放置して壁等を腐食させた場合は賃借人の負担になりうるとしています。",
              "自分で行う手入れはフィルター掃除など取扱説明書の範囲にとどめます。内部の洗浄はメーカーも利用者自身では行わないよう案内しています（「エアコン掃除を自分でできる範囲」参照）。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "入居時からカビ臭い・吹出口に黒い汚れが見えるなど、内部の汚れが気になる場合（備え付けのエアコンは、先に管理会社・貸主に相談します）",
      "自分で設置したエアコンを、退去・引越しの前に洗浄しておきたい場合",
      "契約書の特約で、退去時のエアコンクリーニングを借主が手配する定めになっている場合",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "業者に依頼する場合の大手3社の通常価格は次のとおりです。特約に金額が書かれている場合は、その金額と比べる目安になります（2026-11-22 確認・税込）。",
    prices: AIRCON_PRICES,
    ctaText: "エアコンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "賃貸のエアコンクリーニング代は借主が払う必要がありますか。", a: "国土交通省のガイドラインは、喫煙等の臭いなどが付着していない場合のエアコンの内部洗浄を、賃貸人負担とすることが妥当としています。ただし、契約書に有効な特約がある場合はその内容によります。最終的な扱いは契約書と管理会社・貸主への確認が必要です。" },
      { q: "タバコを吸っていた場合はどうなりますか。", a: "ガイドラインは、エアコンの内部洗浄を賃貸人負担とする条件を「喫煙等の臭いなどが付着していない場合」としています。また、喫煙等によりクロス等が変色したり臭いが付着している場合を、賃借人の負担になりうる例に挙げています。" },
      { q: "備え付けのエアコンを入居中に自分の判断でクリーニングしてもよいですか。", a: "備え付けのエアコンは貸主の設備です。ガイドラインはクーラーの保守は所有者が行うべきものとしているため、依頼前に管理会社・貸主に連絡し、作業の可否と費用の扱いを確認してください。" },
      { q: "ガイドラインに従わない契約は無効ですか。", a: "ガイドラインは契約時の参考となる一般的な基準で、すでに結んだ契約は契約書の内容に沿った取扱いが原則とされています。特約については、必要性・合理性、賃借人の認識、意思表示の3要件を満たさなければ効力を争われることに留意すべきとしています。" },
    ],
    sources: [SRC7.mlitGuideline, SRC7.mlitGuidelineTop, SRC.daikinCare, SRC.hitachiClean, ...SRC_AC_PRICES],
    related: ["aircon-self-cleaning", "aircon-smell", "aircon-water-leak", "aircon-cleaning-scams"],
  },
  {
    slug: "balcony-cleaning-detergent",
    kw: "ベランダ掃除 洗剤",
    title: "ベランダ掃除に使う洗剤｜手すり・床・排水口のメーカー公式のお手入れ方法と使えない洗剤、業者に頼む目安 | クリーンナビ",
    description:
      "ベランダ掃除に使う洗剤を、LIXILの手すり・バルコニーの取扱い説明書とトヨタホームのお手入れ方法で整理しました。中性洗剤を使う理由、酸性・アルカリ性・塩素系が使えない部位、防水シートを傷めない手順と排水口の掃除、ベランダ清掃の業者の公式料金を掲載しています。",
    h1: "ベランダ掃除に使う洗剤｜手すり・床・排水口のお手入れと業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "ベランダの手すりやアルミ部分の汚れには、中性洗剤を使います。LIXILのベランダ手すり・バルコニーの取扱い説明書は、洗剤は必ず中性洗剤を使い、酸性・アルカリ性・塩素系の薬品はアルミ形材やステンレス部品の腐食・塗膜のはがれを起こすため使わないよう求めています。",
      "床は、ほうきで砂やほこりを取り除いてから、水とブラシで洗い流すのが基本です。トヨタホームは、落ちにくい汚れにだけ中性洗剤を使い、年1〜2回を目安にお手入れするよう案内しています。排水口の詰まりは大雨時のあふれや漏水につながるため、こまめにゴミを取り除きます。",
    ],
    sections: [
      {
        h2: "部位別に使う洗剤と道具（メーカー公式）",
        blocks: [
          {
            table: {
              head: ["部位", "使う洗剤・道具", "使わないもの", "出典"],
              rows: [
                ["手すり・アルミ部分", "軽い汚れは水でぬらしたぞうきんで拭き、から拭きする。ひどい汚れは薄めた中性洗剤で落とし、洗剤が残らないように拭き取る", "酸性・アルカリ性・塩素系の薬品、ベンジン・シンナー等の有機溶剤、金属製ブラシ・金ベラ", "LIXIL 取扱い説明書"],
                ["手すりのパネル（アクリル板等）", "ほこりを十分に取ってから、薄めた中性洗剤できめの細かい布で丁寧に拭き取る", "有機溶剤および有機溶剤入りの洗浄剤（ヒビや変形のおそれ）", "LIXIL 取扱い説明書"],
                ["床（タイルシートの下の防水シート）", "ほうきで砂・ほこりを取り除き、水とブラシで洗い落とす。落ちにくい汚れには中性洗剤", "防水シートを傷つける道具（マイナスドライバー等の当て方に注意）", "トヨタホーム"],
                ["壁についた藻・苔などの汚れ", "ブラッシングすると水だけで落ちる。どうしても落ちない汚れには中性洗剤", "—", "トヨタホーム"],
                ["排水口", "落ち葉などのゴミを取り除き、点検口を開けて詰まりがないか確認する", "—", "トヨタホーム"],
              ],
              note: "LIXIL「ベランダ手すり」「バルコニー」取扱い説明書、トヨタホームのオーナー向けメンテナンス情報（PDF）を 2026-11-22 に確認。床の仕上げ（防水シート・塗膜防水・タイル・デッキ材）は住宅ごとに異なるため、お住まいの取扱説明書の記載を優先してください。",
            },
          },
        ],
      },
      {
        h2: "床と排水口の掃除の手順（トヨタホームの手順）",
        blocks: [
          {
            ol: [
              "排水口にたまった落ち葉などのゴミを取り除きます。",
              "タイルシートが敷かれている場合は、ベランダ全体を大まかに4分割し、端から外して排水口のある側へ重ねます（ベランダは排水口側へゆるやかに傾斜しているため、汚水が流れやすくなります）。",
              "防水シートの表面をほうきで掃いて砂やほこりを取り除き、水とブラシで汚れを洗い落とします。",
              "タイルシートを元の位置に戻し、残りの部分も同じ手順で掃除します。",
              "仕上げにタイルシートの上を水でブラッシングします。",
            ],
          },
          "トヨタホームは、タイルシートの下にたまった砂やゴミが防水シートの表面を傷つけ、劣化を早めることがあるとしています。作業中に防水シートの亀裂や穴を見つけた場合は補修が必要になるため、施工会社への連絡を案内しています。",
        ],
      },
      {
        h2: "掃除の頻度と注意点",
        blocks: [
          {
            ul: [
              "LIXILは、アルミは比較的腐食しにくい材質だが、砂・ほこり・塩分などが付いたまま長い間放置すると腐食の原因になるとし、清掃の目安を少なくとも年1〜2回、海岸地域や交通量の多い道路沿いはこまめにとしています。",
              "LIXILは、年1回程度、手すりのねじ・ボルト類のゆるみを点検し、締め直してもガタつく場合は販売店や修理窓口に連絡するよう案内しています。",
              "トヨタホームは、排水口が詰まっていると大雨で水があふれ、漏水や浸水につながるおそれがあり、特にルーフバルコニーでは階下の居室の雨漏りの原因になることもあるとしています。",
              "トヨタホームは、防水シートが塩化ビニル製で穴が開くと雨漏りの原因になるとして、ベランダでの喫煙やバーベキューなど火気の使用をしないよう注意しています。",
              "集合住宅では、ベランダで水を流す掃除や高圧洗浄機の使用について、管理規約で制限されている場合があります。事前に管理規約をご確認ください。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "床や壁の苔・黒ずみがブラシと中性洗剤で落ちない場合（おそうじ本舗は高圧洗浄機による洗浄をメニューにしています）",
      "タイルや外構に白い粉状の汚れ（エフロレッセンス）が出ている場合（おそうじ本舗はエフロ除去をオプションとしています）",
      "広いルーフバルコニーや、室外機・給湯器まわりまでまとめて掃除したい場合（おそうじ革命は室外機・給湯器の拭き取りを作業例に挙げています）",
      "防水シートの亀裂・はがれ、排水口のあふれが見られる場合は、清掃ではなく施工会社・管理会社への点検の相談になります",
    ],
    priceHeading: "ベランダ清掃の料金（公式サイトに掲載のある2社）",
    priceLead:
      "ベランダの清掃メニューと料金を公式サイトで確認できたのは、大手3社のうちおそうじ本舗とおそうじ革命です。公式サイトに掲載されている通常価格は次のとおりです（2026-11-22 確認・税込）。",
    prices: BALCONY_PRICES,
    ctaText: "ベランダ・バルコニーの清掃に対応する業者のサービス内容と、ほかの箇所の料金相場を確認できます。",
    cta: BALCONY_CTA,
    faq: [
      { q: "ベランダ掃除にはどんな洗剤を使えばよいですか。", a: "LIXILの取扱い説明書は、ベランダ手すりやバルコニーのアルミ部分には必ず中性洗剤を使い、酸性・アルカリ性・塩素系の薬品は使わないよう求めています。床は水とブラシで洗い、落ちにくい汚れにだけ中性洗剤を使う方法をトヨタホームが案内しています。" },
      { q: "ベランダの苔は塩素系漂白剤で落とせますか。", a: "トヨタホームは、壁についた藻などの汚れはブラッシングすると水だけで落ち、落ちない汚れには中性洗剤を使う方法を案内しています。LIXILはアルミ部分やステンレス部品に塩素系薬品を使わないよう求めており、誤って使った場合はすぐに大量の水で洗い流すよう案内しています。" },
      { q: "ベランダ掃除はどのくらいの頻度で行えばよいですか。", a: "トヨタホームは年1〜2回、LIXILはアルミ部分の清掃を少なくとも年1〜2回としています。排水口のゴミは詰まりを防ぐため、こまめに取り除きます。" },
      { q: "業者に頼むといくらかかりますか。", a: "おそうじ本舗のベランダ・外回り高圧洗浄は10㎡まで11,000円（以降1㎡ごとに1,100円）、おそうじ革命のベランダ・バルコニークリーニングは10㎡未満7,700円・10㎡以上20㎡未満15,400円です（2026-11-22 確認・税込）。" },
    ],
    sources: [SRC7.lixilRail, SRC7.lixilBalcony, SRC7.toyotaBalcony, SRC7.toyotaBalcony2, { name: "おそうじ本舗 ベランダ・外回り高圧洗浄", url: HONPO_EXTERIOR }, { name: "おそうじ革命 ベランダ・バルコニークリーニング", url: KAKUMEI_BALCONY }],
    related: ["outdoor-unit-cleaning", "wallpaper-mold", "flooring-mold", "window-screen-cleaning"],
  },
  {
    slug: "bath-chair-cleaning",
    kw: "お風呂 椅子 掃除",
    title: "お風呂の椅子（風呂いす）の掃除方法｜花王の公式手順とカビ取り剤の使い方、業者に頼む目安 | クリーンナビ",
    description:
      "お風呂の椅子（風呂いす）・洗面器の掃除方法を、花王の公式のお掃除ガイドと製品Q&Aで整理しました。脚や内側にヌメリ・カビが出やすい理由、逆さにして洗う手順、黒カビにカビ取り剤を使うときの時間と注意、ゴム製品に使えない点、浴室クリーニングの公式料金を掲載しています。",
    h1: "お風呂の椅子（風呂いす）の掃除方法｜公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "花王は、椅子の脚や桶の裏側は水がたまりやすくヌメリが発生しやすいため、浴室用洗剤（バスクリーナー）をスプレーしてスポンジでこすり洗いし、逆さにして脚や底も忘れずに洗うよう案内しています。",
      "黒いカビには、こすり洗いではなくカビ取り剤を使います。花王は、浴室用洗剤でこすり洗いするとかえってカビを広げてしまうことがあるとし、カビが生えやすい場所の例に風呂椅子の内側を挙げています。カビ取り剤は約5分置いてから十分に水で洗い流し、ゴム製品には使えません。",
    ],
    sections: [
      {
        h2: "汚れの種類別の落とし方（花王の公式情報）",
        blocks: [
          {
            table: {
              head: ["汚れ", "落とし方", "注意点"],
              rows: [
                ["脚・裏側のヌメリ、皮脂汚れ", "浴室用洗剤（バスクリーナー）をスプレーし、スポンジでこすり洗いする。逆さにして脚や底を洗う", "洗剤の成分を十分に洗い流す"],
                ["内側の黒いカビ", "カビ取り剤を10cmほど離してスプレーし、約5分置いてから十分に水で洗い流す。しつこい汚れは15〜30分程度置く", "浴室用洗剤でこすり洗いすると、かえってカビを広げてしまうことがある"],
                ["落ちにくいカビ", "カビ取り剤をスプレーし、ティッシュペーパー等をかぶせて上からさらにスプレーし、10〜15分くらい置く（湿布法）", "カビ取り剤は浴室が乾いた状態で使う（水でぬれていると薄まって効果が下がる）"],
                ["洗面器・椅子などの小物のカビ", "花王は、シャワーヘッド・洗面器・椅子・蓋などは漬け込み洗いを勧めている", "ゴム製品は劣化するおそれがあるため使えない"],
              ],
              note: "花王 住まいのおそうじガイド（基本的なお風呂掃除のやり方・場所別カビ取りの方法）と製品Q&A 28131 を 2026-11-22 に確認。洗剤・カビ取り剤は、製品ごとの使用上の注意を必ず確認してください。",
            },
          },
        ],
      },
      {
        h2: "カビ取り剤を使うときの注意",
        blocks: [
          {
            ul: [
              "塩素系のカビ取り剤は単独で使います。酸性タイプの洗剤やクエン酸と混ぜたり、続けて使ったりすると有毒な塩素ガスが発生します。国民生活センターの再現テストでは、浴室内で一緒に使った数分後に塩素ガス濃度が16ppmを超えました。",
              "換気をよくし、眼鏡（保護メガネ）・炊事用手袋・マスクを着用します（花王）。",
              "椅子に金属の部品がある場合は、カビ取り剤を長く放置しないようにします。TOTOは、カビ取り剤を吹きつけてから長い間放置すると金属がさびる場合があるとしています。",
              "ゴム製の脚カバーや滑り止めが付いた椅子は、花王がゴム製品は劣化するおそれがあるとしているため、漬け込み洗いを避けます。",
            ],
          },
        ],
      },
      {
        h2: "カビ・ヌメリを防ぐ使い方",
        blocks: [
          {
            ul: [
              "花王は、カビが繁殖しやすい環境をつくらないため、汚れと水分が残り続けないよう水回りの置物を浮かせる工夫を勧めています。",
              "花王は、カビの生育条件を「適度な温度」「水分」「栄養分（石けんカスや皮脂汚れ）」とし、浴室内の水滴をスクイージーや乾いた布でぬぐい取り、換気扇を3時間以上運転するよう案内しています。",
              "花王は、浴そう・床・排水口などは毎日、その他の場所は週1回程度と、場所ごとに掃除の頻度を決めることを勧めています。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "椅子や洗面器だけでなく、浴室の壁・床・ドアのパッキンにも黒カビが広がっている場合",
      "カビ取り剤を使っても色素が残る場合（業者でも、素材の奥まで入り込んだ汚れは完全に除去できない場合があります）",
      "カビ取り剤を使っても色素が残る椅子・洗面器は、買い替えも選択肢になります",
    ],
    priceHeading: "浴室クリーニングの料金（大手3社の公式料金）",
    priceLead:
      "業者の浴室クリーニングは、浴槽・壁・床・天井などの浴室全体が対象です。ダスキンは浴室小物の水アカもサービス内容に挙げています。大手3社の公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATH_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "お風呂の椅子のピンク汚れや黒ずみは何で落としますか。", a: "ヌメリや皮脂汚れは浴室用洗剤をスプレーしてスポンジでこすり洗いします。黒いカビは、花王がこすり洗いではカビを広げることがあるとしているため、カビ取り剤をスプレーして約5分置き、十分に水で洗い流します。" },
      { q: "風呂いすをカビ取り剤に漬け込んでもよいですか。", a: "花王は、シャワーヘッド・洗面器・椅子・蓋などの漬け込み洗いを勧めています。ただし、ゴム製品は劣化するおそれがあるため使えないとしています。使う製品の使用上の注意も確認してください。" },
      { q: "椅子の脚の裏側が汚れやすいのはなぜですか。", a: "花王は、椅子の脚や桶の裏側は水がたまりやすく、ヌメリが発生することがあるとしています。逆さにして脚や底を洗うことを勧めています。" },
      { q: "カビ取り剤とクエン酸を続けて使ってもよいですか。", a: "使えません。塩素系のカビ取り剤と酸性タイプの洗剤・クエン酸を一緒に使ったり続けて使ったりすると、有毒な塩素ガスが発生します。カビ取り剤は単独で使い、十分に洗い流してください。" },
    ],
    sources: [SRC7.kaoBathBasic, SRC7.kaoMold, SRC7.kaoQaMold, SRC6.totoBathHelp, SRC2.kokusen, SRC7.honpoBath, SRC7.duskinBath, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bath-pink-mold", "bath-floor-black-stains", "bathtub-cleaning"],
  },
  {
    slug: "bath-wall-cleaning",
    kw: "お風呂 壁 掃除",
    title: "お風呂の壁の掃除方法｜LIXIL・TOTO・花王の公式手順とカビ取り剤の使い方、業者に頼む目安 | クリーンナビ",
    description:
      "お風呂の壁の掃除方法を、LIXIL・TOTO・花王の公式のお手入れ方法で整理しました。毎日のシャワーと週1回の浴室用中性洗剤の手順、床から1mが汚れやすい理由、目地のカビにカビ取り剤を使うときの注意（肩・目より高い位置にスプレーしない）、浴室クリーニングの公式料金を掲載しています。",
    h1: "お風呂の壁の掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "LIXILは、浴室の壁を毎日シャワーで洗い流し、週1回は浴室用中性洗剤をかけて2〜3分おき、スポンジでやさしくこすってから水で洗い流すよう案内しています。床から1mの高さまでは特に汚れがつきやすいため、念入りに洗います。TOTOも週に1度、浴室用中性洗剤と毛先の柔らかい樹脂製ブラシで洗う方法を案内しています。",
      "タイル目地などに生えたカビにはカビ取り剤を使います。LIXILは肩より高い場所に、花王は目より高い位置にカビ取り剤を直接スプレーしないよう求めており、高い場所は柄つきスポンジや雑巾に付けて塗りつけます。",
    ],
    sections: [
      {
        h2: "頻度別の手順（LIXIL・TOTO）",
        blocks: [
          {
            table: {
              head: ["頻度", "手順", "出典"],
              rows: [
                ["毎日（入浴後）", "少し熱めのシャワーで汚れを洗い流し、こびりついた汚れはスポンジでやさしくこすり落とす。水のシャワーで浴室内の温度を常温程度に下げ、残った水分を拭き取って換気する", "LIXIL"],
                ["週1回", "浴室用中性洗剤をかけて2〜3分おき、スポンジでやさしくこすり、水のシャワーでよく洗い流す", "LIXIL"],
                ["週1回", "浴室用中性洗剤と、毛先が柔らかい樹脂製（ポリプロピレンなど）のブラシで洗い、洗剤をよく洗い流す。コーキング部は強くこすらない", "TOTO"],
                ["カビが生えたとき", "タイル目地などに生えたカビにはカビ取り剤を使う", "LIXIL"],
              ],
              note: "LIXIL「壁の日常のお手入れ」「壁の定期的なお手入れ」、TOTO「床のお手入れ」を 2026-11-22 に確認。LIXILは、ドアには直接水をかけないよう注意しています（水がドアの外へ飛び散ることがあるため）。",
            },
          },
          "TOTOは、壁や床にはFRPなど比較的汚れやカビがつきにくい素材が使われている反面、強い洗剤やたわしなどで洗うと傷つくおそれがあるとしています。花王は、壁や浴槽の上部から先に洗って汚れや洗剤を下に流し、最後に床を掃除する順番を勧めています。",
        ],
      },
      {
        h2: "壁のカビにカビ取り剤を使うときの注意",
        blocks: [
          {
            ul: [
              "LIXILは、カビ取り剤を使うときは注意書きをよく読み、マスク・ゴム手袋・保護メガネを着用して換気し、肩より高い場所には直接スプレーしないよう案内しています（顔や衣服に付着するおそれ）。長時間放置したり、洗剤を残したりしないようにします。",
              "花王は、目より高い位置に直接スプレーすると液が目に入る可能性があり大変危険として、柄つきスポンジなどにカビ取り剤をスプレーして塗りつける方法を案内しています。",
              "花王は、カビ取り剤はなるべく浴室が乾いた状態で使うよう勧めています（水でぬれていると薄まって効果が下がるため）。浴室用洗剤でこすり洗いすると、かえってカビを広げてしまうことがあるとしています。",
              "塩素系のカビ取り剤は単独で使います。酸性タイプの洗剤と混ぜたり続けて使ったりすると、有毒な塩素ガスが発生します（国民生活センター）。",
            ],
          },
          "天井は、花王が目に垂れてくる場合があるため洗剤の使用を控え、長柄のスポンジやワイパーで水拭きするよう案内しています。LIXILは月1回、長い柄付スポンジに浴室用中性洗剤を含ませてやさしくこすり、湿らせた布で洗剤を拭き取る方法を案内しており、天井の手入れはメーカーで扱いが分かれます。",
        ],
      },
      {
        h2: "壁のカビを防ぐ入浴後の習慣",
        blocks: [
          {
            ul: [
              "TOTOは、カビが最も活発に活動するのは20〜30℃としています。入浴後は冷水をかけて温度を下げ、3時間以上換気扇を回すか窓を開けるよう案内しています。",
              "花王は、浴室内の水滴をスクイージーや乾いた布でぬぐい取ることを勧めています。",
              "花王は、天井や換気扇など手の届きにくい場所は月1回程度、と場所ごとに頻度を決めることを勧めています。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "タイル目地やコーキングにカビの色素が残り、カビ取り剤を使っても落ちない場合",
      "壁の高い位置や天井まで黒カビが広がり、自分で薬剤を使うのが難しい場合（おそうじ本舗は、カビがある場合はオリジナルのカビ取り剤で除去するとしています）",
      "コーキングのはがれや壁パネルの浮きがある場合は、清掃ではなく施工会社・管理会社への点検の相談になります",
    ],
    priceHeading: "浴室クリーニングの料金（大手3社の公式料金）",
    priceLead: "浴室の壁・天井は、大手3社とも浴室クリーニングの作業範囲に含まれています。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATH_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "お風呂の壁はどのくらいの頻度で掃除すればよいですか。", a: "LIXILは、毎日入浴後にシャワーで洗い流し、週1回は浴室用中性洗剤でこする方法を案内しています。TOTOも週に1度、浴室用中性洗剤と毛先の柔らかい樹脂製ブラシで洗う方法を案内しています。" },
      { q: "壁の高いところのカビはどう落としますか。", a: "花王は、目より高い位置に直接スプレーすると液が目に入るおそれがあるとして、柄つきスポンジなどにカビ取り剤をスプレーして塗りつける方法を案内しています。LIXILも、肩より高い場所に直接スプレーしないよう求めています。" },
      { q: "壁をたわしでこすってもよいですか。", a: "TOTOは、FRPなどの壁や床は強い洗剤やたわしなどで洗うと傷つくおそれがあるとし、毛先が柔らかい樹脂製のブラシを使うよう案内しています。" },
      { q: "壁の掃除は浴槽や床より先に行いますか。", a: "花王は、壁や浴槽の上部から先に洗って汚れや洗剤を下に流し、最後に床や浴槽の下部を掃除する順番を勧めています。" },
    ],
    sources: [SRC7.lixilWallDaily, SRC7.lixilWallRegular, SRC7.lixilCeiling, SRC7.totoWallFloor, SRC6.totoBathHelp, SRC7.kaoBathBasic, SRC7.kaoQaMold, SRC7.kaoMold, SRC2.kokusen, SRC7.honpoBath, SRC7.duskinBath, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["bath-pink-mold", "bath-floor-black-stains", "bath-fan-cleaning"],
  },
  {
    slug: "bath-drain-cleaning",
    kw: "お風呂 排水口 掃除",
    title: "お風呂の排水口の掃除方法｜LIXIL・TOTOの公式手順（ヘアキャッチャー・封水筒）と臭いの対処、業者に頼む目安 | クリーンナビ",
    description:
      "お風呂の洗い場の排水口の掃除方法を、LIXIL・TOTO・花王の公式情報で整理しました。週1回のヘアキャッチャー、月1回の封水筒・排水トラップ内部の手順、髪の毛を流してはいけない理由、外してはいけない部品、臭いがするときの確認点と浴室クリーニングの公式料金を掲載しています。",
    h1: "お風呂の排水口の掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "LIXILは、洗い場の排水口を週1回、目皿を外して排水トラップの周囲をシャワーをかけながらスポンジで洗い、ヘアキャッチャーにからみついた髪の毛を歯ブラシで取るよう案内しています。月1回は封水筒を外してヌメリを取り、排水トラップの内部も掃除します。",
      "取り除いた髪の毛やゴミは排水口に流さないでください。TOTOとLIXILは、排水管の詰まりや悪臭の原因になるとしています。掃除のあとは封水筒を確実に取り付け、排水トラップに水がたまった状態に戻します。",
    ],
    sections: [
      {
        h2: "頻度別の手順（LIXIL スタンダード排水口）",
        blocks: [
          {
            table: {
              head: ["頻度", "手順", "注意点"],
              rows: [
                ["週1回", "目皿を外し、排水トラップ周囲や目皿にシャワーをかけながらスポンジで掃除する。ヘアキャッチャーを外し、からみついた髪の毛を歯ブラシで取る。ヌメリには浴室用中性洗剤をかけて2〜3分おき、洗い流す", "取り除いたゴミを直接流したり、ヘアキャッチャーを外したまま使ったりしない（排水管が詰まるおそれ）"],
                ["月1回", "目皿→ヘアキャッチャー（左に回す）→封水筒（三角部分を持って反時計回り）の順に外し、封水筒のヌメリと排水トラップ内部の汚れを取る。封水筒・ヘアキャッチャー・目皿の順に元通り取り付ける", "フランジ部分は外さない（接続部からの漏水の原因）。封水筒の取付が不十分だと下水の臭気が上がるおそれ"],
                ["月1回（エルボ・ホースがある場合）", "エルボを引き抜き、エルボとホースを綿棒などで掃除する", "エルボが挿入されていた穴に直接水をかけない（浴室外に漏水するおそれ）"],
              ],
              note: "LIXIL「スタンダード排水口の日常のお手入れ」「定期的なお手入れ」を 2026-11-22 に確認。LIXILの「くるりんポイ排水口」は発売時期（2007〜2013年・2013年〜・2021年〜）で手順が異なり、2013年以降の製品は日常のお手入れのみとされています。形状はシリーズで異なるため、取扱説明書をご確認ください（TOTO）。",
            },
          },
        ],
      },
      {
        h2: "TOTOの手順で補足されている点",
        blocks: [
          {
            ul: [
              "ヘアキャッチャーはシャワーなどでぬらすと、ゴミや髪の毛が取りやすくなります。LIXILも、浴槽のお湯を排水した直後の掃除を勧めています（くるりんポイ排水口）。",
              "排水トラップに髪の毛がからまっているときは、手やピンセットなどで取り除き、水あかや湯あかはスポンジで洗い落とします。",
              "封水筒が固くて回らないときは、排水口カバーなどをつまみ部にかけて回します。",
              "封水筒を外すと下水管側と通気され、臭気が上がってくることがあります。排水ピースはゴムパッキンがずれた状態で差し込まず、確実に差し込まないと封水筒が取り付きません。",
            ],
          },
          "花王は、浴そう・床・排水口など汚れがたまりやすい場所は毎日の掃除を勧めており、排水口のカバーを外して髪の毛やゴミを取り除き、洗剤とスポンジやブラシで汚れをこすり落とす手順を案内しています。メーカーの週1回・月1回は、部品を外して洗う頻度の目安です。",
        ],
      },
      {
        h2: "排水口から臭いがするときの確認点（TOTO）",
        blocks: [
          {
            table: {
              head: ["確認すること", "TOTOの案内"],
              rows: [
                ["排水口の汚れ", "排水口のお手入れで改善される場合がある"],
                ["封水筒の取り付け", "封水筒をしっかり締めることで改善される場合がある"],
                ["排水トラップの水", "排水トラップ内に水がたまった状態でないと、下水管からのにおいや虫が侵入する場合がある。掃除のあとは水をためる"],
                ["部品の破損・劣化", "排水ピース・封水筒・ヘアキャッチャーが破損・劣化している場合は交換部品を購入する"],
              ],
              note: "TOTO「排水口より異臭がする」「洗い場の排水口の流れが悪い」を 2026-11-22 に確認。",
            },
          },
        ],
      },
    ],
    whenPro: [
      "部品を外して掃除しても流れが悪い、臭いが消えない場合（TOTOは、自分でできない部分をプロが掃除するサービスを案内しています）",
      "封水筒が固着して外れない、部品の外し方が取扱説明書で確認できない場合（無理に回すと破損や漏水のおそれがあります）",
      "排水口だけでなく浴室全体の汚れ・カビもまとめて落としたい場合（ダスキンは、浴室クリーニングで排水口を分解して奥まで洗浄するとしています）",
    ],
    priceHeading: "浴室クリーニングの料金（大手3社の公式料金）",
    priceLead:
      "排水口は浴室クリーニングの作業範囲に含まれています（おそうじ本舗は「天井・壁面・蛇口・排水口まわり」、ダスキンは「排水口を分解し、奥までしっかりクリーニング」と記載）。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATH_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "お風呂の排水口はどのくらいの頻度で掃除すればよいですか。", a: "LIXILは、ヘアキャッチャーと排水トラップの周囲を週1回、封水筒と排水トラップ内部を月1回としています。花王は、排水口のゴミ取りを含め、汚れがたまりやすい場所は毎日の掃除を勧めています。" },
      { q: "排水口の髪の毛は流してもよいですか。", a: "流さないでください。TOTOとLIXILは、髪の毛やゴミを流すと排水管が詰まり、悪臭などの原因になるとしています。取り除いて捨ててください。" },
      { q: "掃除したあとに臭いがするのはなぜですか。", a: "TOTOは、封水筒を外すと下水管側と通気され臭気が上がることがあるとしています。封水筒を確実に取り付け、排水トラップに水をためてください。LIXILも、封水筒の取付が不十分だと下水の臭気が上がってくるおそれがあるとしています。" },
      { q: "排水口の部品はどこまで外してよいですか。", a: "LIXILのスタンダード排水口では、目皿・ヘアキャッチャー・封水筒までを外して掃除し、フランジ部分は接続部からの漏水の原因になるため外さないよう案内しています。形状はシリーズで異なるため、取扱説明書をご確認ください。" },
    ],
    sources: [SRC7.lixilDrainDaily, SRC7.lixilDrainRegular, SRC7.lixilKururinDaily, SRC7.totoDrainSlow, SRC7.totoDrainSmell, SRC7.kaoBathBasic, SRC7.honpoBath, SRC7.duskinBath, { name: "おそうじ革命 料金", url: KAKUMEI_PRICE }],
    related: ["kitchen-drain-cleaning", "washer-drain-cleaning", "bath-floor-black-stains"],
  },
  {
    slug: "unit-bath-cleaning",
    kw: "ユニットバス 掃除",
    title: "ユニットバスの掃除方法｜TOTO・LIXILの公式手順（床・壁・天井）と汚れ別の洗剤、業者に頼む目安 | クリーンナビ",
    description:
      "ユニットバス（システムバス）の掃除方法を、TOTO・LIXILの公式情報で整理しました。入浴後の軽い掃除、週1回の床・壁・天井の手順、汚れの種類別の洗剤、天井や床で使わないもの、浴室クリーニングの公式料金を掲載しています。",
    h1: "ユニットバスの掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "TOTOは、最後に入浴した人がシャワーで壁や床を流し、残り湯を抜きながら浴槽の湯あかをスポンジで落とす「入浴後の軽い掃除」を勧めています。床と壁・天井は、週1回、浴室用中性洗剤とやわらかいスポンジ（床は毛先がやわらかい樹脂製ブラシも可）で洗い、十分に洗い流します。",
      "TOTOは、天井にシンナー・ベンジン・アルカリ性洗剤・カビ取り剤を使わないよう案内しています（変色・変質のおそれ）。一度の掃除は15〜30分が目安で、長くても1時間までとしています。",
    ],
    sections: [
      {
        h2: "場所別の手順と頻度（TOTO）",
        blocks: [
          {
            table: {
              head: ["場所", "頻度・手順", "使わないもの・注意"],
              rows: [
                ["浴槽・壁・床（入浴後）", "最後に入浴した人がシャワーで壁や床を流し、残り湯を抜きながら浴槽の湯あかをスポンジで落とす。から拭きで水気を取るとカビ予防になる", "入浴後はできるだけ長く換気扇を回すか、窓を開ける"],
                ["床", "週1回、浴室用中性洗剤で洗い、洗剤が残らないようによく洗い流す。しつこい汚れはスポンジ→落ちなければたわしか浴室用ブラシに中性洗剤。皮脂汚れは浴室用クリームクレンザーでこすり、念入りに流す", "強い洗剤やたわしで傷つくおそれ（床材に合った洗剤と道具を使う）。コーキング部は強くこすらずブラシも使わない。砂や小石は先に洗い流す"],
                ["壁・天井", "週1回、やわらかいスポンジ（柄付きが便利）に浴室用中性洗剤をつけてこすり洗いし、十分に洗い流す。シャワーが届かない所は洗面器などで流す", "シンナー・ベンジン・アルカリ性洗剤・カビ取り剤は使わない。化学ぞうきんでこすったり長時間接触させたりしない。脚立や踏み台は滑らないよう注意"],
              ],
              note: "TOTO「浴室のまるごとお掃除」「床のお手入れ」「壁・天井（浴室）のお手入れ」を 2026-11-22 に確認。浴槽・排水口・鏡・換気扇の詳しい手順は、関連ガイドとメーカーの各ページをご覧ください。",
            },
          },
        ],
      },
      {
        h2: "汚れの種類と落とし方（LIXIL）",
        blocks: [
          "LIXILは、浴室の汚れを種類ごとに分け、まず浴室用中性洗剤をかけて2〜3分おき、スポンジでこすって洗い流す方法を基本としています。",
          {
            table: {
              head: ["汚れ", "特徴・原因", "落とし方"],
              rows: [
                ["水アカ・湯アカ", "白色・褐色で表面がざらつく。水アカは水道水のケイ酸、湯アカは皮脂・石けんカス・ホコリが結びついたもの", "浴室用中性洗剤。落ちなければ浴室用クリームクレンザー（キレイ鏡を除く）"],
                ["金属石けん", "白色・灰色のざらついた固い汚れ。水道水のカルシウム・マグネシウム等と石けん成分・皮脂が結びついたもの", "浴室用中性洗剤。落ちなければ浴室用クリームクレンザー（キレイ鏡を除く）"],
                ["カビ", "黒・紫・ピンクの汚れ。温度20〜30℃・湿度70％以上・養分（石けんかす・皮脂・ホコリ等）がそろうとふえやすい", "カビ取り剤をかけ、しばらくしてから水でよく洗い流す"],
                ["ピンクヌメリ", "皮脂等を養分に酵母がふえた汚れ。放っておくと色素が沈着して取れなくなる", "浴室用中性洗剤。落ちなければカビ取り剤"],
              ],
              note: "LIXIL「浴室の汚れの種類とお手入れ方法」を 2026-11-22 に確認。",
            },
          },
          {
            ul: [
              "クリームクレンザーは強くこすらず、汚れ部分を4〜5回磨いては水をかけ、少しずつ落とします。こすりすぎると傷が付いたり、逆にツヤが出すぎたりすることがあります（LIXIL）。",
              "カビ取り剤は長時間放置したり洗剤が残ったりすると、変色や変質、サビ、ゴムの劣化の原因になります（LIXIL）。TOTOは天井にはカビ取り剤を使わないよう案内しているため、天井と壁・床で洗剤を分けてください。",
              "メラミンフォームは、水栓の印字部分、木目柄付きや光沢のある樹脂製部品、キレイ鏡には使わないよう案内されています（LIXIL）。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "カビ取り剤を使っても黒いカビが残る、天井や高い所のカビを自分で落とせない場合（TOTOは天井にカビ取り剤を使わないよう案内しています）",
      "床の皮脂汚れや白いざらついた汚れが、中性洗剤とクリームクレンザーでも落ちない場合",
      "エプロン内部や追いだき配管など、ふだん手の届かない部分もまとめて洗いたい場合（大手3社ともエプロン内部・追いだき配管の料金を公式サイトに掲載しています）",
    ],
    priceHeading: "浴室クリーニングの料金（大手3社の公式料金）",
    priceLead:
      "ユニットバス（浴室）全体のクリーニングは、大手3社が浴室クリーニングとして掲載しています（おそうじ本舗は浴槽・壁面・床・天井などを含むと記載）。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: BATHTUB_PRICES,
    ctaText: "浴室クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: BATH_CTA,
    faq: [
      { q: "ユニットバスはどのくらいの頻度で掃除すればよいですか。", a: "TOTOは、入浴後に壁や床をシャワーで流し浴槽の湯あかを落とす軽い掃除と、床・壁・天井の週1回のお手入れを案内しています。一度の掃除は15〜30分が目安です。" },
      { q: "天井にカビ取り剤を使ってもよいですか。", a: "TOTOは、浴室の天井にシンナー・ベンジン・アルカリ性洗剤・カビ取り剤を使わないよう案内しています（材質を変色・変質させるおそれ）。柄付きのやわらかいスポンジと浴室用中性洗剤で洗ってください。" },
      { q: "床をたわしでこすってもよいですか。", a: "TOTOは、強い洗剤やたわしで洗うと傷つくおそれがあるとし、床材に合った洗剤と道具を使うよう案内しています。毛先がやわらかい樹脂製（ポリプロピレンなど）のブラシが勧められています。" },
      { q: "床や壁の白いざらざらした汚れは何ですか。", a: "LIXILは、水道水のケイ酸がたまった水アカや、水道水のカルシウム・マグネシウム等と石けん成分が結びついた金属石けんとしています。浴室用中性洗剤で落ちなければ浴室用クリームクレンザーを使います。" },
    ],
    sources: [SRC8.totoBathTop, SRC8.totoFloor, SRC8.totoCeiling, SRC8.lixilBathTools, SRC8.lixilBathDirt, SRC7.honpoBath, SRC7.duskinBath, SRC8.kakumeiPrice],
    related: ["bathtub-cleaning", "bath-wall-cleaning", "bath-floor-black-stains", "bath-drain-cleaning"],
  },
  {
    slug: "window-screen-cleaning",
    kw: "窓 網戸 掃除",
    title: "窓と網戸の掃除方法｜LIXILの公式手順（網戸・ガラス・アルミサッシ）と使えない洗剤、業者に頼む目安 | クリーンナビ",
    description:
      "窓と網戸の掃除方法を、LIXILの公式のお手入れ方法で整理しました。網戸は室内側を下にして水洗い、ガラスは数ヶ月に1回以上、アルミサッシは年1〜2回以上。使えない洗剤・道具と、窓・網戸クリーニングの公式料金を掲載しています。",
    h1: "窓と網戸の掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "LIXILは、網戸を取り外して室内側の面を下にして床に置き、やわらかい布・スポンジ・ブラシで水洗いするよう案内しています。油汚れがひどい場合は、水で薄めた中性洗剤で軽く拭きます。立てたまま洗うと網が緩んだり破れたりするおそれがあります。",
      "ガラスは数ヶ月に1回以上、アルミサッシは少なくとも年1〜2回の手入れが目安です（LIXIL）。どちらも水拭きが基本で、汚れがひどい場合は薄めた中性洗剤を使います。サッシに酸性・アルカリ性・塩素系の薬品、クレンザーや金たわしは使いません。",
    ],
    sections: [
      {
        h2: "部位別の手順（LIXIL）",
        blocks: [
          {
            table: {
              head: ["部位", "頻度・手順", "使わないもの・注意"],
              rows: [
                ["網戸", "取り外して室内側の面を下にして床に置き、やわらかい布・スポンジ・ブラシで水洗いする。油汚れがひどい場合は、水で薄めた中性洗剤をやわらかい布かスポンジにつけて軽く拭く", "室内側の面を上にしたり、立てたまま洗ったりしない（網が押されて緩む・破れるおそれ）。取り外し方は製品の案内に従う"],
                ["ガラス", "数ヶ月に1回以上。室内外とも水拭きが基本。汚れがひどい場合は薄めた中性洗剤で拭き、水で洗い流してから拭き取る", "必ずやわらかい布を使う（傷が付くと割れるおそれ）。傷・欠け・ヒビは施工会社か販売店に相談して早めに交換"],
                ["アルミサッシ・レール", "少なくとも年1〜2回（海岸地帯・交通量の多い道路沿いはこまめに）。砂やほこりを取り除き（隅は歯ブラシ）、ぬらした布かスポンジで拭く。汚れがひどい場合は薄めた中性洗剤→水洗い→かたく絞った布で仕上げる", "酸性・アルカリ性・塩素系の薬品、エタノール以外の有機溶剤、クレンザー、金たわし、ワイヤーブラシ、サンドペーパーは使わない。電装部品に水をかけない"],
              ],
              note: "LIXIL「網戸」「ガラス」「アルミ製品」のお手入れ・お掃除方法を 2026-11-22 に確認。",
            },
          },
        ],
      },
      {
        h2: "取り外せない網戸の場合",
        blocks: [
          "LIXILの固定式網戸（フレームレス）の取扱い説明書では、網のホコリをはたきや乾いた布で軽くはらい、通常の汚れはぬらしたスポンジで拭き、汚れがひどい場合は薄めた中性洗剤を使ったあと洗剤が残らないように拭き取る方法を案内しています。",
          {
            ul: [
              "シンナー・ベンジンなどの有機溶剤や漂白剤は使わない（色あせ・変色の原因）",
              "タワシなどの硬い物でこすらない（網のほつれや劣化の原因）",
              "網戸の形状や外し方は製品で異なるため、取扱説明書でご確認ください",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "2階以上の外側のガラスなど、手が届かない窓がある場合（ダスキンは、地上2m以上の高所ガラスを見積もりで案内しています）",
      "網戸の外し方が分からない、外すと戻せない場合（無理に外すと破損のおそれがあります）",
      "家じゅうの窓・網戸をまとめて掃除したい場合（業者は1枚単位・1か所単位の料金で掲載しています）",
    ],
    priceHeading: "窓・網戸クリーニングの料金（公式料金）",
    priceLead:
      "窓ガラス・サッシと網戸のクリーニングの料金を、公式サイトに料金を掲載している2社分まとめました。ダスキンは窓1枚の面積と地域（Sエリア＝東京・神奈川、Aエリア、Bエリア）で料金が分かれます。",
    prices: WINDOW_PRICES,
    ctaText: "窓・サッシクリーニングの作業内容と料金を確認できます。",
    cta: WINDOW_CTA,
    faq: [
      { q: "網戸は外して洗ったほうがよいですか。", a: "LIXILは、網戸を取り外して室内側の面を下にして床に置き、水洗いする方法を案内しています。立てたまま洗うと網が押されて緩んだり破れたりするおそれがあります。" },
      { q: "窓ガラスはどのくらいの頻度で掃除しますか。", a: "LIXILは、外観を保つために数ヶ月に1回以上のお手入れを勧めています。アルミサッシは少なくとも年1〜2回が目安です。" },
      { q: "サッシのレールに使ってはいけないものはありますか。", a: "LIXILは、酸性・アルカリ性・塩素系の薬品、エタノール以外の有機溶剤、クレンザー、金たわし、ワイヤーブラシ、サンドペーパーを使わないよう案内しています。中性洗剤と歯ブラシ・布で掃除します。" },
      { q: "網戸に漂白剤を使ってもよいですか。", a: "LIXILの固定式網戸の取扱い説明書では、有機溶剤や漂白剤は色あせ・変色の原因になるため使わないよう記載しています。薄めた中性洗剤を使ってください。" },
    ],
    sources: [SRC8.lixilScreen, SRC8.lixilGlass, SRC8.lixilAlumi, SRC8.lixilFixedScreen, SRC8.duskinWindow, SRC8.kakumeiPrice],
    related: ["balcony-cleaning-detergent", "wallpaper-stain-removal", "outdoor-unit-cleaning"],
  },
  {
    slug: "washer-auto-dosing-cleaning",
    kw: "洗濯機 自動投入 掃除",
    title: "洗濯機の自動投入の掃除方法｜日立の公式手順（タンク・経路）とお手入れが必要なとき、相談先 | クリーンナビ",
    description:
      "洗濯機の自動投入タンクと経路の掃除方法を、日立の公式案内で整理しました。2〜3か月に1回の目安、お手入れが必要なとき、約40℃のお湯で洗う手順、運転後の確認、パッキンの注意と、点検を頼む目安・洗濯機クリーニングの公式料金を掲載しています。",
    h1: "洗濯機の自動投入の掃除方法｜メーカー公式の手順と相談先",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "日立は、ドラム式の自動投入部を2〜3か月に1回を目安に、タンクと経路の両方をお手入れするよう案内しています。洗剤や柔軟剤の種類を変えたとき、自動投入を1か月以上使わないとき、洗剤がゼリー状に固まっているときなども対象です。",
      "タンクと部品を水ですすぎ（汚れがひどい場合は約40℃のお湯に10分程度浸して歯ブラシで洗う）、取付部を拭いたあと、タンクに約40℃のお湯を入れて経路のお手入れ運転をします。手順は機種で異なるため、取扱説明書で確認してください。",
    ],
    sections: [
      {
        h2: "お手入れが必要なとき（日立）",
        blocks: [
          {
            ul: [
              "2〜3か月に1回（目安）",
              "液体洗剤や柔軟剤の種類を変えたとき",
              "自動投入を1か月以上使わないとき（早めのお手入れを推奨）",
              "「残量少」表示が点滅したまま、1週間以上補充しなかったとき",
              "タンク取付部に汚れが残っているとき、透明ふたを開けたまま放置したとき",
              "液体洗剤や柔軟剤がゼリー状に固まっているとき",
            ],
          },
        ],
      },
      {
        h2: "タンクと経路のお手入れ手順（日立・ドラム式）",
        blocks: [
          {
            table: {
              head: ["順番", "手順", "注意点"],
              rows: [
                ["1 タンク", "自動投入部のふたを開け、取っ手を持ってタンクをまっすぐ引き上げる。残った液は別の容器に移す。透明ふた・タンクのふた・フロートピースを外し、タンクと部品を水ですすぐ（汚れがひどい場合は約40℃のお湯に10分程度浸し、歯ブラシで洗う）。泡立ちやぬめりがなくなるまですすぎ、水気を拭いて元どおり組み立てる", "タンクを傾けると液がこぼれることがある"],
                ["2 タンク取付部", "取付部の周辺を湿った布で拭く。汚れがひどい場合は歯ブラシでやさしく落とし、底面に水気や汚れが残っていないか確認する", "パッキンに色が移っていても、歯ブラシなどで強くこすらない（パッキンが傷み液漏れの原因）"],
                ["3 経路", "タンクに約40℃のお湯を目印まで入れて取り付け、水栓を開けて電源を入れる。お手入れ時間を設定してスタート（自動投入を使い続けている場合は「4分」、使っていない場合は「9時間」）。終了後、タンクの残水を捨てて水気を拭く", "必ずタンクと取付部のお手入れのあとに行う。液体洗剤と柔軟剤の経路は同時にお手入れできない。洗濯・脱水槽に衣類を入れない"],
              ],
              note: "日立「自動投入部のお手入れ方法を知りたいです。（ドラム式）」を 2026-11-22 に確認。時間設定の操作（例：BD-SV120J）やタンクの形状は機種で異なります。",
            },
          },
          "運転後の目安として、日立は「9時間」設定でお湯が約3分の1残る、「4分」設定で半分以上残るとしています。お湯がほとんど減っていない場合は、経路の詰まりなどの不具合の可能性があります。",
        ],
      },
    ],
    whenPro: [
      "何度お手入れしてもタンクのお湯が減らない場合（日立は、販売店または修理相談窓口に点検を依頼するよう案内しています）",
      "汚れが取り切れず心配な場合や、タンク取付部底面のパッキンが破損した場合（パッキンはお客様自身では交換できないとされています）",
      "自動投入だけでなく、洗濯槽の裏側の汚れもまとめて落としたい場合（洗濯機クリーニング）",
    ],
    priceHeading: "洗濯機クリーニングの料金（公式料金）",
    priceLead:
      "自動投入のタンクや経路の点検・修理は、日立の案内では販売店または修理相談窓口が窓口です。洗濯槽の裏側の汚れは業者の洗濯機クリーニングで対応しています（自動投入の経路が作業範囲に含まれるかは、各社の公式ページに記載がないため予約時に確認してください）。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: WASHER_PRICES,
    ctaText: "洗濯機クリーニングの作業内容と料金を確認できます。",
    cta: WASHER_CTA,
    faq: [
      { q: "自動投入はどのくらいの頻度で掃除しますか。", a: "日立は、2〜3か月に1回を目安にタンクと経路をお手入れするよう案内しています。洗剤や柔軟剤の種類を変えたとき、自動投入を1か月以上使わないときもお手入れが必要です。" },
      { q: "経路はどうやって洗いますか。", a: "日立のドラム式では、タンクに約40℃のお湯を入れて取り付け、お手入れ時間（使い続けている場合は4分、使っていない場合は9時間）を設定して運転します。必ずタンクと取付部のお手入れのあとに行います。" },
      { q: "お手入れ運転をしてもお湯が減りません。", a: "日立は、運転後にお湯がほとんど減っていない場合は経路の詰まりなどの不具合の可能性があるとし、何度お手入れしても減らない場合は販売店または修理相談窓口に点検を依頼するよう案内しています。" },
      { q: "パッキンの汚れはこすって落としてよいですか。", a: "日立は、パッキンに色が移ることがあっても歯ブラシなどで強くこすらないよう案内しています。パッキンが傷み、液漏れの原因になります。" },
    ],
    sources: [SRC8.hitachiAutoDose, SRC3.hitachiTubDrum, { name: "おそうじ本舗 ドラム式洗濯機クリーニング", url: HONPO_WASHER_FRONT }, { name: "ダスキン 洗濯機クリーニング", url: DUSKIN_WASHER }],
    related: ["washer-tub-cleaning", "washer-drain-cleaning", "washer-lifespan"],
  },
  {
    slug: "ceiling-aircon-cleaning",
    kw: "天井埋め込みエアコン 掃除",
    title: "天井埋め込みエアコンの掃除方法｜ダイキンの公式手順（吸込グリル・フィルター）と業者に頼む目安・料金 | クリーンナビ",
    description:
      "天井埋め込み（天井カセット形）エアコンの掃除方法を、ダイキンの公式案内で整理しました。吸込グリルとフィルターの手順、清掃用スプレーを使わない理由、内部は業者に頼むという案内と、天井埋込エアコンクリーニングの公式料金を掲載しています。",
    h1: "天井埋め込みエアコンの掃除方法｜メーカー公式の手順と業者の料金",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "ダイキンは、天井カセット形エアコンのお手入れとして、吸込グリルを外して拭き、フィルターのホコリを掃除機で吸い取り、汚れが残れば水洗い（油汚れは中性洗剤とやわらかいブラシ）し、十分に乾かしてから元どおり取り付ける手順を案内しています。",
      "清掃用スプレーをエアコンに直接吹きかけないこと、エアコン内部のクリーニングは必ずプロに依頼することも案内されています。フィルターにカビが見られる場合は、内部も同様の状態と考えられるとしています。",
    ],
    sections: [
      {
        h2: "自分でできるお手入れの手順（ダイキン）",
        blocks: [
          {
            ol: [
              "吸込グリルを外し、グリルに付いたホコリや汚れを拭き取る（汚れがひどい場合は中性洗剤で拭く）",
              "フィルターは、ホコリが多く付いている面から掃除機で吸い取る（ブラシ付きノズルを使うと細かいホコリも取れる）",
              "汚れが残る場合は水洗いし、油汚れがひどい場合は中性洗剤と歯ブラシなどのやわらかいブラシで落とす",
              "十分に乾かしてから、フィルターと吸込グリルを元どおりに取り付ける",
            ],
          },
          "ダイキンの案内は業務用（天井カセット形）のものです。家庭用の天井埋込形も含め、グリルの外し方やフィルターの形状は機種で異なるため、取扱説明書で確認してください。ダイキンは、無理な作業は故障や事故、けがにつながるため、難しい・危険と感じたら必ずプロに依頼するよう注意しています。",
        ],
      },
      {
        h2: "自分で行わない作業",
        blocks: [
          {
            table: {
              head: ["作業", "ダイキンの案内"],
              rows: [
                ["清掃用スプレーの吹き付け", "エアコンに直接吹きかけない（汚れや故障の原因）"],
                ["内部（熱交換器など）の洗浄", "エアコン内部のクリーニングは必ずプロに依頼する"],
                ["フィルターにカビがあるとき", "内部も同様の状態と考えられるため、プロのチェックとクリーニングを勧める"],
              ],
              note: "ダイキン「自分でもできる！業務用（天井カセット形）エアコンのお手入れ」を 2026-11-22 に確認。",
            },
          },
          "フィルター掃除の手間を減らす機能として、ダイキンはハウジングエアコンの天井埋込カセット形に、フィルターのホコリをかき取ってダストボックスにためる自動掃除機能付きの機種や、リモコン操作でダストボックス付きパネルが手元まで降りてくる昇降パネル付きの機種を案内しています。",
        ],
      },
    ],
    whenPro: [
      "フィルターにカビが見られる、吹き出し口から臭いがする場合（ダイキンは、内部も同様の状態と考えられるとしてプロのクリーニングを勧めています）",
      "天井が高い、吸込グリルの外し方が分からないなど、作業が難しい・危険と感じる場合",
      "熱交換器や送風ファンなど内部の汚れを落としたい場合（ダイキンは内部クリーニングは必ずプロに依頼するよう案内しています）",
    ],
    priceHeading: "天井埋込エアコンクリーニングの料金（公式料金）",
    priceLead:
      "天井埋込エアコンのクリーニング料金を公式サイトに掲載している2社分です。おそうじ本舗は、製造から9年以上経過したエアコンは受付を断る場合や作業内容を保証できない場合があるとしています。年式・機種・設置状況によって対応できない場合もあります。",
    prices: CEIL_AC_PRICES,
    ctaText: "エアコンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "天井埋め込みエアコンのフィルターは自分で掃除できますか。", a: "ダイキンは、吸込グリルを外してフィルターのホコリを掃除機で吸い取り、汚れが残れば水洗いする手順を案内しています。難しい・危険と感じたら無理をせずプロに依頼するよう注意しています。" },
      { q: "市販のエアコン洗浄スプレーを使ってもよいですか。", a: "ダイキンは、清掃用スプレーをエアコンに直接吹きかけないよう案内しています。汚れや故障の原因になるためです。内部のクリーニングは必ずプロに依頼するとしています。" },
      { q: "業者に頼むといくらかかりますか。", a: "公式料金は、おそうじ本舗が天井埋込1・2方向タイプで27,500円／台（約3時間。お掃除機能付きは＋8,800円、4方向は要相談）、おそうじ革命が家庭用天井埋め込み型で20,900円です（2026-11-22 確認）。" },
    ],
    sources: [SRC8.daikinCassette, SRC8.daikinCassetteFaq, SRC8.honpoAcCeil, SRC8.kakumeiPrice],
    related: ["aircon-self-cleaning", "aircon-cleaning-spray", "aircon-smell", "aircon-internal-clean"],
  },
  {
    slug: "kitchen-tile-cleaning",
    kw: "キッチンタイル 掃除",
    title: "キッチンタイルの掃除方法｜LIXILの公式手順（油汚れ・目地）と業者に頼む目安 | クリーンナビ",
    description:
      "キッチンの壁タイル（キッチンバック）の掃除方法を、LIXILの公式のお手入れ方法で整理しました。日常の油汚れの拭き取り、落ちにくい汚れのスポンジ、目地に染み込んだ汚れの落とし方と、キッチンクリーニングの公式料金を掲載しています。",
    h1: "キッチンタイルの掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "LIXILは、キッチンバックのタイルの油汚れを、レンジ用洗剤をつけた布巾などで拭き取るよう案内しています。醤油や油は長時間放置すると染み込んだり焼きついたりするため、なるべく早く拭き取ります。",
      "目地に染み込んだ油汚れは、クリームクレンザーをつけた歯ブラシでこすり落とし、ティッシュなどでよく拭き取ります。落ちにくい場合は、薄めた塩素系漂白剤をつけた布巾などで叩くようにして汚れを吸い取ります（LIXIL）。",
    ],
    sections: [
      {
        h2: "汚れ別の手順（LIXIL キッチンバックタイル）",
        blocks: [
          {
            table: {
              head: ["汚れ", "手順", "用意するもの"],
              rows: [
                ["日常の油汚れ", "レンジ用洗剤をつけた布巾などで拭き取る。醤油や油はなるべく早く拭き取る", "ゴム手袋・レンジ用洗剤・布巾"],
                ["雑巾で落ちにくい頑固な汚れ", "ナイロン不織布スポンジ（研磨粒子なし）やメラミンスポンジでこする。固く絞った雑巾で洗剤を拭き取り、最後に絞った雑巾で仕上げ拭き", "スポンジ・雑巾（メラミンスポンジはすぐ磨耗するため交換しながら使う）"],
                ["目地に染み込んだ汚れ", "クリームクレンザーをつけた歯ブラシでこすり落とし、ティッシュ等でよく拭き取る。落ちにくい場合は、薄めた塩素系漂白剤をつけた布巾などで叩くようにして汚れを吸い取る", "歯ブラシ・クリームクレンザー・ティッシュ"],
              ],
              note: "LIXIL「キッチン壁（キッチンバック）のお手入れ・お掃除方法」（タイル建材）を 2026-11-22 に確認。塩素系漂白剤を使うときは、製品の表示（換気・ゴム手袋・ほかの洗剤と混ぜない等）に従ってください。",
            },
          },
        ],
      },
      {
        h2: "汚れをためないために",
        blocks: [
          "LIXILは、キッチンバックのタイルには油汚れが付きものとして、焼きついて落ちにくくなる前になるべく早く掃除するよう案内しています。調理のあとに、レンジ用洗剤をつけた布巾でコンロまわりの壁を拭いておくと、目地への染み込みを防ぎやすくなります。",
          "タイル以外のキッチンパネルや壁紙の壁は、素材で使える洗剤や道具が異なります。キッチンのメーカーや内装材の取扱説明書で確認してください。",
        ],
      },
    ],
    whenPro: [
      "目地の黒ずみや油汚れが、クリームクレンザーや薄めた塩素系漂白剤でも落ちない場合",
      "コンロまわりの壁だけでなく、レンジフードやコンロ・シンクもまとめて掃除したい場合（おそうじ本舗はキッチンクリーニングの作業範囲にキッチン壁面〔壁紙を含まず〕を、ダスキンは壁を含めています）",
    ],
    priceHeading: "キッチンクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "キッチンの壁面は、業者のキッチンクリーニングの作業範囲に含まれています（おそうじ本舗は「キッチン壁面（壁紙を含まず）」、ダスキンは「加熱調理器やシンク・吊り戸棚の表面・床・壁など」と記載）。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: KITCHEN_PRICES,
    ctaText: "キッチンクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: KITCHEN_CTA,
    faq: [
      { q: "キッチンタイルの油汚れには何を使えばよいですか。", a: "LIXILは、レンジ用洗剤をつけた布巾などで拭き取るよう案内しています。落ちにくい場合は、研磨粒子なしのナイロン不織布スポンジやメラミンスポンジでこすり、洗剤を拭き取ってから仕上げ拭きをします。" },
      { q: "タイルの目地の汚れはどう落としますか。", a: "LIXILは、クリームクレンザーをつけた歯ブラシでこすり落とし、ティッシュなどでよく拭き取る方法を案内しています。落ちにくい場合は、薄めた塩素系漂白剤をつけた布巾で叩くようにして汚れを吸い取ります。" },
      { q: "汚れを放置するとどうなりますか。", a: "LIXILは、醤油や油などは長時間放置すると多少染み込んだり、焼きついて落ちにくくなったりするとしています。なるべく早く拭き取ってください。" },
    ],
    sources: [SRC8.lixilKitchenTile, SRC8.honpoKitchen, SRC8.duskinKitchen, SRC8.kakumeiPrice],
    related: ["gas-stove-cleaning", "range-hood-filter-cleaning", "ih-cooktop-cleaning", "sink-water-stains"],
  },
  {
    slug: "washer-lint-filter-cleaning",
    kw: "糸くずフィルター 掃除",
    title: "洗濯機の糸くずフィルターの掃除方法｜タテ型・ドラム式の公式手順と注意点、業者に頼む目安 | クリーンナビ",
    description:
      "洗濯機の糸くずフィルターの掃除方法を、日立・パナソニックの公式情報で整理しました。タテ型は洗濯のたびに水洗い、ドラム式は表示が出たら脱水1分のあとに取り外して洗う手順、やってはいけないこと、洗濯機クリーニングの公式料金を掲載しています。",
    h1: "洗濯機の糸くずフィルターの掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "タテ型洗濯機の糸くずフィルターは、洗濯のたびにごみを捨てて水洗いします（日立・パナソニック）。目詰まりすると、糸くずが衣類に付きやすくなります。目詰まりがひどい場合は、歯ブラシなどで落とします。",
      "ドラム式は、表示部に「フィルター確認」などが出たら掃除します（日立）。運転後は水が残っていることがあるため、脱水だけを約1分運転し、フィルターの手前に水受けを置いてから取り外します。どちらの型も、フィルターを外したまま洗濯してはいけません。",
    ],
    sections: [
      {
        h2: "タテ型とドラム式の違い（日立・パナソニック）",
        blocks: [
          {
            table: {
              head: ["項目", "タテ型", "ドラム式"],
              rows: [
                ["掃除の時期", "洗濯や洗濯〜乾燥運転のたびに（日立）。洗濯のたびに（パナソニック）", "表示部に「フィルター確認」「糸くずフィルター」などが表示されたら（日立）"],
                ["取り外す前", "—", "脱水のみを約1分運転して槽内と排水ホースの水を抜き、電源を切る。フィルターの手前に洗面器などの水受けを置く"],
                ["洗い方", "糸くずを取り除いて水洗い。目詰まりがひどい場合は歯ブラシなどを使う", "開口部を下にして振り糸くずを落とし、水洗い。落ちない場合は約40℃のお湯に薄めた酸素系または塩素系漂白剤を入れ、突起部だけを浸してから歯ブラシや綿棒でこする"],
                ["取り付け", "所定の位置に合わせ、「カチッ」と音がするまで押し込む（外れると運転中に落ちることがある）", "開口部を上にして奥まで差し込み、つまみを右に「カチッ」と音がするまで回す（回しきらないと「C16」表示）"],
              ],
              note: "日立「糸くずフィルターのお手入れをしたいです。（タテ型）」（BW-DX120B の例）・「糸くずフィルターのお手入れ方法を知りたいです。（ドラム式）」、パナソニック「【タテ型洗濯機】糸くずフィルターのお手入れ」を 2026-11-22 に確認。形状と外し方は機種で異なるため、取扱説明書でご確認ください。",
            },
          },
        ],
      },
      {
        h2: "やってはいけないこと",
        blocks: [
          {
            ul: [
              "フィルターを外した状態で洗濯しない（衣類を傷めるおそれ。日立・パナソニック）。",
              "フィルターを外したとき、取り付け口や洗濯槽の穴にヘアピンや硬貨を落とさない（日立・パナソニック）。",
              "フィルターにネットなどを付けない、糸くずがたまったまま運転しない（ドラム式は排水不良の原因。日立）。",
              "ドラム式のゴムパッキンは水洗いしない（潤滑剤が落ちてフィルターが回しにくくなる）。取り付け口の奥へ手を入れない（けがのおそれ。日立）。",
              "フィルターやパッキンが破損したら、そのまま使わず交換する（水漏れ・故障の原因。日立）。糸くずフィルターは消耗品で、販売店などで購入できます。",
            ],
          },
        ],
      },
      {
        h2: "掃除しても表示が消えない・取り付け部が汚れている場合",
        blocks: [
          "日立は、ドラム式でフィルターを掃除しても「C17」（フィルターの詰まり）が消えない場合は、洗濯槽や排水経路の汚れが考えられるとして槽洗浄を案内しています。タテ型でも、フィルターを外したときに取り付け部が汚れている場合は槽洗浄を行うよう案内しています。槽洗浄の手順は関連ガイドをご覧ください。",
        ],
      },
    ],
    whenPro: [
      "フィルターを掃除し、槽洗浄をしても「C17」などの表示や排水不良が続く場合（まず取扱説明書の手順とメーカーの窓口で故障でないかを確認します）",
      "フィルターの取り付け部や洗濯槽の裏側の汚れ・においが、槽洗浄コースでは取れない場合（洗濯槽を外して洗う分解洗浄は業者のメニューです）",
      "フィルターが固くて取り付けにくい場合は無理に押し込まず、日立は販売店か修理窓口への相談を案内しています（クリーニングではなく修理の相談です）",
    ],
    priceHeading: "洗濯機クリーニングの料金（大手の公式料金）",
    priceLead:
      "糸くずフィルターの掃除は自分でできるお手入れです。洗濯槽の裏側まで洗いたい場合は、業者の洗濯機クリーニングが対象になります。おそうじ本舗とダスキンの公式サイトに掲載されている通常価格は次のとおりです。",
    prices: WASHER_PRICES,
    ctaText: "洗濯機クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: WASHER_CTA,
    faq: [
      { q: "糸くずフィルターはどのくらいの頻度で掃除しますか。", a: "タテ型は洗濯のたびに掃除するよう日立・パナソニックが案内しています。ドラム式は、表示部に「フィルター確認」などが出たら掃除します（日立）。" },
      { q: "ドラム式のフィルターを外すと水が出てきます。", a: "日立は、運転後に槽内や排水ホースに水が残っていることがあるため、脱水のみを約1分運転して水を抜き、フィルターの手前に水受けを置いてから外すよう案内しています。" },
      { q: "汚れが落ちないときに漂白剤を使ってもよいですか。", a: "日立はドラム式の糸くずフィルターについて、約40℃のお湯に薄めた酸素系または塩素系漂白剤を入れ、突起部だけを浸してから歯ブラシや綿棒でこする方法を案内しています。ゴムパッキンは水洗いしないでください。" },
      { q: "フィルターが破れました。", a: "糸くずフィルターは消耗品です。破損や傷みがある場合は交換するよう日立・パナソニックが案内しています。販売店やメーカーの部品窓口で購入できます。" },
    ],
    sources: [SRC9.hitachiLintTop, SRC9.hitachiLintDrum, SRC9.panaLint, SRC9.honpoWasherTop, SRC9.honpoWasherFront, SRC9.duskinWasher],
    related: ["washer-tub-cleaning", "washer-drain-cleaning", "washer-auto-dosing-cleaning", "washer-lifespan"],
  },
  {
    slug: "toilet-hand-wash-cleaning",
    kw: "トイレ 手洗い 掃除",
    title: "トイレの手洗い（タンク上の手洗い器・手洗い金具）の掃除方法｜TOTOの公式手順と水あかの落とし方 | クリーンナビ",
    description:
      "トイレのタンク上の手洗い器と手洗い金具の掃除方法を、TOTOの公式のお手入れ方法で整理しました。止水栓を閉めてからの手順、トイレ用中性洗剤と水あか用クリーナーの使い分け、酸性・アルカリ性洗剤を使わない理由、トイレクリーニングの公式料金を掲載しています。",
    h1: "トイレの手洗い器・手洗い金具の掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "TOTOは、手洗い付きタンクの手洗い器と手洗い金具を、止水栓を閉めてタンクの水を流し、タンクふたと手洗い金具を外してから、トイレ用中性洗剤を付けたスポンジで洗う手順を案内しています。洗ったあとは水拭きで洗剤を取り、乾いたタオルで拭きます。",
      "手洗いのタンクふたはタンク内部とつながっており、酸性・アルカリ性の洗剤はタンク内の樹脂部品を傷めるおそれがあるため使いません（TOTO）。頑固な水あかは、水栓金具用のクリーナーで少しずつ落とします。",
    ],
    sections: [
      {
        h2: "手洗い器・手洗い金具の手順（TOTO）",
        blocks: [
          {
            ol: [
              "止水栓を閉め、レバーでタンクの水を流し、水が出てこないことを確認してからタンクふたを外します。",
              "手洗い金具を外します。取り付けの順番があるため、外した順を覚えておきます。",
              "トイレ用中性洗剤をスポンジに付けて洗います。頑固な汚れには、TOTOの水栓金具用「きらりあ」蛇口まわりのクリーナーを、丸めたラップに付けてこすります。",
              "ふたに残った洗剤成分を水拭きで取り、乾いたタオルで拭きます。",
              "外したときと逆の順番で手洗い金具をタンクふたにセットし、タンクふたを合わせて差し込みます。",
            ],
          },
          "TOTOは、手洗い器や水栓金具のお手入れを「汚れが気になりだしたら」行う項目としています。",
        ],
      },
      {
        h2: "手洗い金具の水あかを落とす場合（TOTO）",
        blocks: [
          {
            table: {
              head: ["手順", "内容", "注意"],
              rows: [
                ["準備", "止水栓を閉めてタンクの水を流し、タンクふたと手洗い金具を外す", "洗剤がタンク内に入らないようにする"],
                ["金具の水あか", "歯ブラシにクリーナーを付け、傷が付かないよう軽くこする。落ちにくい場合は力を入れすぎず、時間をおきながら4〜5回繰り返す", "洗剤は直接吹きかけず、タオルや雑巾に含ませて使う"],
                ["本体", "よく絞ったやわらかい布にクリーナーを付けて拭く", "垂れた洗剤が金具下部のパッキンに付くと劣化するため注意する"],
                ["仕上げ", "水拭きで洗剤成分を取り、乾いた布で仕上げる。逆の手順でタンクふたに戻す", "洗剤成分を残さない"],
              ],
              note: "TOTO「便器・タンクのお手入れ」「手洗い金具の水あか（トイレ）」を 2026-11-22 に確認。TOTOが案内しているクリーナーは「きらりあ」水栓金具用蛇口まわりのクリーナー（品番 THYZ3A）です。",
            },
          },
        ],
      },
      {
        h2: "使わない洗剤・道具",
        blocks: [
          {
            ul: [
              "タンクふたやタンク内部の掃除に、酸性・アルカリ性の洗剤を使わない。タンク内は樹脂製・ゴム製の器具が多く、止水不良や水漏れの原因になるおそれがあります（TOTO）。",
              "芳香洗浄剤をタンク内に入れない（同上）。",
              "研磨剤入りの洗剤や、業務用の強酸性・強アルカリ性洗剤を使わない（陶器の表面を傷つけるおそれ。TOTO）。",
            ],
          },
        ],
      },
    ],
    whenPro: [
      "クリーナーを使っても手洗い金具や手洗い器の水あかが落ちない場合",
      "便器の尿石・黄ずみ、床や壁など、トイレ全体をまとめて掃除したい場合",
      "タンクの中まで洗いたい場合（ダスキンはロータンク内除菌クリーニング、おそうじ革命はタンク内清掃をオプションとして公式サイトに掲載しています）",
      "手洗い管から水が出ない・タンクの下から水が漏れるといった症状は、掃除ではなく修理の相談です（TOTOの修理窓口・水道業者）",
    ],
    priceHeading: "トイレクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "トイレクリーニングの作業範囲として、ダスキンは「水洗タンク表面と蛇口」を、おそうじ本舗は作業手順に「タンク・蛇口まわり」を掲載しています。タンク上の手洗い器が範囲に含まれるかは各社の公式サイトに明記がないため、申し込み時にご確認ください。公式サイトに掲載されている通常価格は次のとおりです。",
    prices: TOILET_PRICES,
    ctaText: "トイレクリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: [
      { href: "/services-detail/toilet/", label: "トイレクリーニングの内容を見る" },
      { href: "/price/", label: "箇所別の料金相場を見る" },
    ],
    faq: [
      { q: "トイレの手洗い器は、何で掃除すればよいですか。", a: "TOTOは、トイレ用中性洗剤をスポンジに付けて洗い、洗剤成分を水拭きで取ってから乾いたタオルで拭く方法を案内しています。手洗いのタンクふたはタンク内部とつながっているため、酸性・アルカリ性の洗剤は使いません。" },
      { q: "手洗い金具の白い水あかが落ちません。", a: "TOTOは、水栓金具用の「きらりあ」蛇口まわりのクリーナー（品番 THYZ3A）を歯ブラシに付け、力を入れすぎずに時間をおきながら4〜5回繰り返して落とす方法を案内しています。洗剤は直接吹きかけず、布に含ませて使います。" },
      { q: "止水栓を閉めずに掃除してもよいですか。", a: "TOTOの手順は、止水栓を閉めてタンクの水を流し、水が出てこないことを確認してからタンクふたを外すことになっています。外したまま水が出ると周囲がぬれるため、手順どおりに止水してから作業してください。" },
    ],
    sources: [SRC9.totoTank, SRC9.totoFaucetScale, SRC9.honpoToilet, SRC9.duskinToilet, SRC8.kakumeiPrice],
    related: ["toilet-cleaning-basics", "toilet-citric-acid", "toilet-floor-cleaning", "toilet-fan-cleaning"],
  },
  {
    slug: "auto-clean-aircon-cleaning",
    kw: "お掃除機能付きエアコン 掃除",
    title: "お掃除機能付きエアコンの掃除方法｜ダストボックスのお手入れ時期をメーカー別に比較、業者の料金 | クリーンナビ",
    description:
      "お掃除機能付きエアコンで利用者が行うお手入れを、日立・三菱電機・シャープ・ダイキンの公式情報で整理しました。ダストボックスの時期（年1回・6か月に1回など）と手順、自動お掃除の対象範囲、お掃除機能付きエアコンクリーニングの公式料金を掲載しています。",
    h1: "お掃除機能付きエアコンの掃除方法｜メーカー公式のお手入れと業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "フィルター自動お掃除機能は、フィルターのほこりをブラシなどでかき取り、ダストボックスに集める機能です。集まったほこりを捨てるダストボックスのお手入れは、利用者が行います。目安は日立・三菱電機・ダイキン（AXシリーズ）が1年に1回、シャープ（AY-J/Hシリーズ）が6か月に1回です。",
      "ダイキンは、油汚れやたばこのヤニが付く環境では自動お掃除だけでは汚れを取り切れない場合があるとしています。熱交換器やファンを自動で洗う機能がある日立の上位機種でも、汚れやカビをすべて洗い流せるものではないとしています。",
    ],
    sections: [
      {
        h2: "ダストボックスのお手入れ時期と手順（メーカー別）",
        blocks: [
          {
            table: {
              head: ["メーカー", "お手入れの時期", "手順の要点"],
              rows: [
                ["日立", "1年に1回が目安", "運転を止め、電源プラグを抜くかブレーカーを切る。手袋をしてフロントパネルを外し、ダストボックスのごみを捨てる。ホコリキャッチャーは掃除機でほこりを取ってから水洗い（汚れがひどければ中性洗剤）し、室内で陰干し"],
                ["三菱電機（霧ヶ峰）", "年1回が目安。お手入れランプが点灯したらダストボックスを確認", "ダストボックスのごみを捨て、汚れていれば水洗いして日陰で乾かす。フィルターカセットのフィルターも掃除機か水洗い。終わったら「おそうじリセット」を押す"],
                ["シャープ（AY-J/Hシリーズ）", "6か月に1回が目安（約4,500時間の運転でランプが点滅）", "停止ボタンを2回押して2分以上待ってから電源プラグを抜く。ダストボックスを引き出し、ブラシを外してほこりを捨てる。汚れていれば薄めた台所用中性洗剤で洗って陰干し。終わったら「おそうじリセット」を押す"],
                ["ダイキン（AXシリーズ）", "1年に1度（約10年分のほこりをためられる容量だが、汚れ具合は使用環境で変わるため）", "製品ページと取扱説明書の手順に従う"],
              ],
              note: "日立「ホコリキャッチャーやダストボックスのお手入れ方法を知りたいです。」、三菱電機「フィルターのお手入れ」、シャープ「ダストボックスのお手入れ方法 AY-J/Hシリーズ」、ダイキン「AXシリーズ クリーン」を 2026-11-22 に確認。時期と手順は機種で異なるため、取扱説明書でご確認ください。",
            },
          },
          {
            ul: [
              "内部でファンが高速回転しているため、電源を入れたまま作業しない（日立）。内部の部品でけがをしないよう手袋をします。",
              "フィルター掃除の運転中に電源プラグを抜かない（フィルターが外せなくなるおそれ。シャープ）。",
              "フィルターやダストボックスはブラシやたわしでこすらず、50℃以上のお湯、ベンジン・シンナー・アルコール・みがき粉を使わない。直射日光やドライヤーで乾かさない（三菱電機）。",
              "ほこりを内部に落とさないようゆっくり外し、落ちたら掃除機で取り除く（日立）。",
            ],
          },
        ],
      },
      {
        h2: "自動お掃除の対象範囲",
        blocks: [
          {
            table: {
              head: ["部位", "自動お掃除の扱い", "出典"],
              rows: [
                ["エアフィルター", "運転時間の積算などで自動的に掃除する。日立は約15分以上運転して停止したときなどに動作（約8〜16分）、ダイキンAXは積算約1日分の運転で停止後に動作。室温10℃以下では動かない（ダイキン）", "日立・ダイキン"],
                ["ダストボックス・ホコリキャッチャー", "利用者がお手入れする", "日立・三菱電機・シャープ・ダイキン"],
                ["熱交換器・送風ファン", "一般的なフィルター自動お掃除の対象ではない。日立の凍結洗浄・ファンロボ搭載機（RAS-X40J2 など）は自動で洗うが、汚れやカビをすべて洗い流せるものではないとしている", "日立"],
              ],
            },
          },
          "ダイキンは、油汚れやたばこのヤニが付く環境では自動お掃除運転だけで汚れを取り切れない場合があるとして、定期的なお手入れを勧めています。送風ファンの防カビ加工も、ファンに付いたほこりからのカビ発生を抑えるものではないとしています。",
        ],
      },
    ],
    whenPro: [
      "ダストボックスを掃除しても、吹き出し口の奥の黒い汚れやにおいが残る場合（熱交換器・送風ファンは自動お掃除や利用者のお手入れの範囲外です）",
      "キッチンの近くやたばこを吸う部屋で使っていて、フィルターの油汚れ・ヤニが自動お掃除で取り切れない場合",
      "クリーンランプが点滅する、掃除ユニットが止まるといった症状は、クリーニングの前にメーカーの案内や修理窓口で確認します",
    ],
    priceHeading: "お掃除機能付きエアコンクリーニングの料金（大手3社の公式料金）",
    priceLead:
      "お掃除機能付きエアコンは、お掃除ユニットの分解・組み立てが加わるため、大手3社とも通常の壁掛けエアコンとは別の料金を掲載しています。公式サイトに掲載されている通常価格は次のとおりです（参考として、お掃除機能なしの料金も掲載しています）。",
    prices: AUTO_CLEAN_AC_PRICES,
    ctaText: "お掃除機能付きエアコンに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "お掃除機能付きエアコンでも掃除は必要ですか。", a: "必要です。フィルターのほこりを集めるダストボックスは利用者がお手入れします（日立・三菱電機は年1回、シャープ AY-J/Hシリーズは6か月に1回が目安）。熱交換器や送風ファンは一般的な自動お掃除の対象ではありません。" },
      { q: "ダストボックスを掃除したあと、ランプが消えません。", a: "三菱電機・シャープは、お手入れ後に「おそうじリセット」を押すよう案内しています。三菱電機は、リセット後にクリーンランプが点滅する場合は、フィルターカセット・フィルター・ダストボックスが正しく取り付けられているかを確認するよう案内しています。" },
      { q: "業者のクリーニング料金はなぜ高いのですか。", a: "お掃除ユニットの分解・組み立てが加わるためです。ダスキンは、本体の両側にファンが付いているタイプや特殊構造のタイプも、分解・組立に時間がかかるためフィルター自動お掃除機能付きの料金になるとしています。" },
    ],
    sources: [SRC9.hitachiDustBox, SRC9.hitachiAutoClean, SRC9.hitachiFreeze, SRC9.mitsubishiFilter, SRC9.sharpDustBox, SRC9.daikinAx, SRC9.honpoAc, SRC9.duskinAc, SRC8.kakumeiPrice],
    related: ["aircon-self-cleaning", "daikin-aircon-cleaning", "aircon-internal-clean", "aircon-fan-cleaning"],
  },
  {
    slug: "propeller-fan-cleaning",
    kw: "プロペラ換気扇 掃除",
    title: "プロペラ換気扇の掃除方法｜羽根・スピンナーの外し方と使える洗剤（三菱電機・パナソニック公式）、業者の料金 | クリーンナビ",
    description:
      "壁に付けるプロペラ換気扇（台所用）の掃除方法を、三菱電機の取扱説明書とパナソニックのFAQで整理しました。2〜3か月に1度の目安、羽根・スピンナー・油だまりの外し方と洗い方、使えない洗剤、プロペラ換気扇クリーニングの公式料金を掲載しています。",
    h1: "プロペラ換気扇の掃除方法｜メーカー公式の手順と業者に頼む目安",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "三菱電機は、台所用のプロペラ換気扇（メタルコンパック換気扇）の掃除を、汚れてきたら約2〜3か月に1度を目安としています。電源プラグを抜くかブレーカーを切り、手袋をして、油だまり・スピンナー・羽根・パネルを外し、中性洗剤を溶かしたぬるま湯に浸して汚れを落とします。",
      "使える洗剤は中性洗剤です。三菱電機はシンナー・アルコール・酸性洗剤・アルカリ性洗剤・クレンザーなどを使わないよう、パナソニックも住宅用・家具用のアルカリ性合成洗剤は樹脂部品の変色や破損の原因になるとしています。",
    ],
    sections: [
      {
        h2: "外し方と洗い方（三菱電機 メタルコンパック換気扇の例）",
        blocks: [
          {
            table: {
              head: ["部品", "外し方", "洗い方"],
              rows: [
                ["フィルター（フィルター付タイプ）", "ツマミを持っていったん押し上げ、手前に引く", "お湯を流しながらたわしなどで洗い、水分をふき取って乾かす"],
                ["油だまり", "下側のツマミネジを外し、両横を持って傾けないように外す", "中性洗剤を溶かしたぬるま湯に浸して汚れを落とし、きれいな水で洗ってよく乾かす"],
                ["スピンナー・羽根", "羽根を軽く持ってスピンナーを「ユルム」の方向に回し、羽根を手前に引く", "同上"],
                ["パネル（ベルマウス）", "手掛け部分を手前に引き、上部の角穴を本体の引掛部から外す", "同上"],
                ["本体", "外し方は機種で異なる。本体が木ネジで壁に固定されている場合は外さない（壁側のネジ穴が壊れ、落下の原因）", "中性洗剤を含ませた布でふき、洗剤が残らないよう乾いた布でよくふき取る"],
              ],
              note: "三菱電機「メタルコンパック換気扇（台所用）20cm・25cm・30cm 据付・取扱説明書」を 2026-11-22 に確認。外し方は機種で異なるため、お使いの換気扇の取扱説明書でご確認ください。",
            },
          },
        ],
      },
      {
        h2: "組み立てと注意点",
        blocks: [
          {
            ul: [
              "モーターと充電部をぬらさない。シャッターを開いたまま床などに置かない（三菱電機）。",
              "組み立ては外したときと逆の順番で行い、スピンナーを確実に締めて羽根にガタがないこと、油だまりが傾いていないことを確認してから運転します（三菱電機）。",
              "羽根が固くて外れない場合、パナソニックは一般換気扇について、ドライヤーで温めるか、潤滑油を吹きかけて1時間ほど浸透させてから外す方法を案内しています。洗ったあとは水分をよくふき取ります（さびの原因になるため）。",
              "パナソニックは、換気扇用の推奨洗剤として、樹脂部品への影響を確認した台所用アルカリ性合成洗剤「ネオマライト.H（FY-XA300）」を挙げています。それ以外のアルカリ性合成洗剤は使いません。",
            ],
          },
          "三菱電機は、スイッチを入れても羽根が回らない、運転中に異常音や振動がする、焦げ臭いにおいがするといった症状があれば、使用を中止して販売店に連絡するよう案内しています。この換気扇の設計上の標準使用期間は15年です。",
        ],
      },
    ],
    whenPro: [
      "羽根やスピンナーが固着して外れない、外すと戻せない場合（無理に外すと羽根の変形や破損のおそれがあります）",
      "油汚れが固まり、中性洗剤のぬるま湯に浸しても落ちない場合",
      "高い位置にあり、脚立での作業に不安がある場合",
      "異常音・振動・焦げ臭いにおいがある場合は、クリーニングではなく販売店・メーカーの修理窓口へ相談します",
    ],
    priceHeading: "プロペラ換気扇クリーニングの料金（公式料金）",
    priceLead:
      "フードのないプロペラ換気扇の料金を公式サイトに掲載しているのは、大手3社のうちおそうじ革命です。おそうじ本舗とダスキンは、レンジフード（フード付き換気扇）の料金のみを掲載しており、プロペラ換気扇の対応と料金は店舗への確認が必要です。参考としてレンジフードの料金も掲載しています。",
    prices: PROPELLER_PRICES,
    ctaText: "換気扇クリーニングに対応する業者と料金を、お住まいの地域で比較できます。",
    cta: RANGE_HOOD_CTA,
    faq: [
      { q: "プロペラ換気扇はどのくらいの頻度で掃除しますか。", a: "三菱電機は、台所用のメタルコンパック換気扇について、汚れてきたら約2〜3か月に1度を目安に掃除するよう案内しています。" },
      { q: "スピンナーはどちらに回すと外れますか。", a: "三菱電機の換気扇は、スピンナーに表示された「ユルム」の方向に回して外し、取り付けるときは「シマル」の方向に回して羽根に当たるまで締めます。回す向きは機種で異なるため、取扱説明書でご確認ください。" },
      { q: "マジックリンなどのアルカリ性洗剤を使ってもよいですか。", a: "三菱電機の取扱説明書は、酸性洗剤・アルカリ性洗剤を使わず中性洗剤を使うよう案内しています。パナソニックも、住宅用・家具用のアルカリ性合成洗剤は樹脂部品の変色や破損の原因になるとして、台所用中性洗剤か同社が確認した推奨洗剤を案内しています。" },
    ],
    sources: [SRC9.mitsubishiFanManual, SRC9.panaFanDetergent, SRC9.panaFanBlade, SRC8.kakumeiPrice, SRC9.honpoFan, SRC9.duskinFan],
    related: ["range-hood-filter-cleaning", "ventilation-fan-noise", "kitchen-tile-cleaning", "gas-stove-cleaning"],
  },
  {
    slug: "aircon-cleaning-scams",
    kw: "エアコンクリーニング 悪質",
    title: "悪質なエアコンクリーニング業者のトラブル事例と対処｜国民生活センターの事例・クーリング・オフ | クリーンナビ",
    description:
      "エアコンクリーニングで起きている悪質なトラブルを、国民生活センターが公表した事例（低価格の電話勧誘から約30万円・約60万円の契約、作業中の故障）で整理しました。契約前に確認すること、クーリング・オフ、相談先（消費者ホットライン188）、大手の公式料金を掲載しています。",
    h1: "悪質なエアコンクリーニングのトラブル事例と対処｜公的機関の注意喚起",
    publishedAt: D4,
    checkedAt: D4,
    answer: [
      "国民生活センターは、エアコンや換気扇のクリーニングで、低価格の電話勧誘から作業当日に追加の契約を勧められて高額になった事例や、作業中にエアコンを壊されたあと業者と連絡が取れなくなった事例を公表しています。",
      "同センターは、複数社から見積もりを取ること、作業中の故障・損傷の補償を契約前に確認すること、当日勧められた追加の契約はその場で決めないことを勧めています。困ったときは消費者ホットライン「188」に相談できます。一定の要件を満たす場合は、クーリング・オフ等が適用できることがあります。",
    ],
    sections: [
      {
        h2: "国民生活センターが公表した事例",
        blocks: [
          {
            table: {
              head: ["事例", "内容", "公表"],
              rows: [
                ["低価格の電話勧誘から約30万円", "換気扇とエアコンのクリーニングを「お試し価格3千円」と電話で勧誘され、台所の換気扇の掃除を頼んだ。作業後にコーティングを勧められて断れず、浴室・洗面所の換気扇にも施工され、約30万円を請求された（80歳代）", "見守り新鮮情報 第450号（2023年5月16日）"],
                ["換気扇5,000円から約60万円", "電話で換気扇クリーニング（5,000円）を了承した。来訪した業者に風呂場がカビ臭いと言われ、風呂場・洗面所・トイレのクリーニングを勧められ、相場が分からないまま契約して約60万円を支払うことになった（60歳代）", "ハウスクリーニングのトラブルにご注意（2025年2月28日）"],
                ["作業中の故障と連絡不通", "エアコン掃除の作業中にスタッフがタオルを入れてエアコンが停止し、業者が帰ったあとに部品が出てきた。部品を取り寄せて修理すると説明されたが、その後1か月連絡が取れず、エアコンが26度以下に下がらなくなった（30歳代）", "同上"],
              ],
              note: "国民生活センターの公表資料を 2026-11-22 に確認。特定の事業者を指すものではありません。",
            },
          },
        ],
      },
      {
        h2: "契約前に確認すること（国民生活センターの助言）",
        blocks: [
          {
            ul: [
              "必ず複数社から見積もりを取り、サービス内容と料金を比べる。料金や説明に納得できなければ、きっぱり断る。",
              "作業中の故障・損傷に対する補償内容や、保険への加入の有無を契約前に確認する。エアコンはクリーニングの方法も含めて確認し、必要に応じてメーカーに問い合わせる。",
              "電話で示された低価格だけで訪問を了承しない。いったん電話を切り、身近な人に相談してから決める。",
              "作業当日に追加の契約を勧められても、その場で決めない。できれば家族に立ち会ってもらう。",
            ],
          },
          "料金の比べ方の目安として、下の表に大手3社が公式サイトに掲載している通常価格をまとめています。見積もりがこれと大きく異なる場合は、作業内容と追加料金の条件を書面で確認してください。",
        ],
      },
      {
        h2: "クーリング・オフと相談先",
        blocks: [
          {
            table: {
              head: ["項目", "内容"],
              rows: [
                ["クーリング・オフの期間", "訪問販売・電話勧誘販売は、法律で定められた書面を受け取った日から8日以内（書面または電磁的記録で通知）。事業者がうそを告げたり威迫したりしてクーリング・オフを妨げた場合は、期間が過ぎても行える"],
                ["訪問販売の主なルール", "事業者は勧誘の前に氏名（名称）と契約の勧誘であることを告げる。契約しない意思を示した消費者への再勧誘や、事実と違うことを告げる勧誘は禁止"],
                ["相談先", "消費者ホットライン「188（いやや！）」＝最寄りの市区町村・都道府県の消費生活センター等を案内"],
              ],
              note: "消費者庁 特定商取引法ガイド「訪問販売」・国民生活センターの公表資料を 2026-11-22 に確認。適用の可否は契約の経緯で異なるため、消費生活センターにご相談ください。",
            },
          },
        ],
      },
    ],
    whenPro: [
      "業者を選ぶときは、料金表・作業範囲・追加料金の条件・作業中の破損の補償を公式サイトで公開している業者から見積もりを取ります",
      "作業後にエアコンが動かない、水漏れ・異音が出た場合は、まず依頼した業者に連絡し、連絡が取れない・対応されない場合は消費生活センター（188）に相談します",
    ],
    priceHeading: "エアコンクリーニングの料金（大手3社の公式料金）",
    priceLead: PRICE_LEAD_AIRCON,
    prices: AIRCON_PRICES,
    ctaText: "料金と作業内容を公式サイトに掲載している業者を、お住まいの地域で比較できます。",
    cta: AIRCON_CTA,
    faq: [
      { q: "電話で安いエアコンクリーニングを勧められました。", a: "国民生活センターは、電話で示された低価格だけで訪問を了承せず、いったん電話を切って身近な人に相談してから決めるよう助言しています。低価格の勧誘から作業当日にコーティングなどの追加契約を勧められ、約30万円を請求された事例が公表されています。" },
      { q: "当日に高額な追加作業を契約してしまいました。", a: "一定の要件を満たす場合は、クーリング・オフ等が適用できることがあります。訪問販売・電話勧誘販売のクーリング・オフは、法律で定められた書面を受け取った日から8日以内です。早めに消費者ホットライン188に相談してください。" },
      { q: "作業中にエアコンを壊されたらどうすればよいですか。", a: "まず依頼した業者に連絡します。国民生活センターは、契約前に故障・損傷の補償内容や保険加入の有無を確認するよう勧めています。業者と連絡が取れない場合は、消費生活センター（188）に相談してください。" },
    ],
    sources: [SRC9.kokusenHouse, SRC9.kokusenPhone, SRC9.caaDoor, SRC9.honpoAc, SRC9.duskinAc, SRC8.kakumeiPrice],
    related: ["aircon-self-cleaning", "rental-aircon-cleaning", "aircon-cleaning-spray", "aircon-water-leak"],
  },
];

export function getDiyGuide(slug: string): DiyGuide {
  const g = DIY_GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`diy guide not found: ${slug}`);
  return g;
}
