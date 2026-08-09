// 地域索引データ（都道府県 → 市区グルーピング）
// app/areas/ 配下の実在238ディレクトリ・public/sitemap.xml と1対1で突合済み。
// slugを追加・削除する場合は必ず app/areas/ の実在ディレクトリと sitemap.xml を更新すること。

export type AreaLink = { slug: string; name: string };

export type CityGroup = {
  city: string; // 表示用グループ名（例: 札幌市 / 東京23区 / その他の市 / 全域）
  prefix: string; // サイトマップ表示用の接頭辞（区名の前に付ける。例: 札幌市 → 札幌市中央区）
  areas: AreaLink[];
};

export type PrefGroup = {
  pref: string;
  cities: CityGroup[];
};

export const AREA_INDEX: PrefGroup[] = [
  {
    pref: "北海道",
    cities: [
      {
        city: "札幌市",
        prefix: "札幌市",
        areas: [
          { slug: "sapporo", name: "札幌市" },
          { slug: "sapporo-chuo", name: "中央区" },
          { slug: "sapporo-kita", name: "北区" },
          { slug: "sapporo-higashi", name: "東区" },
          { slug: "sapporo-shiroishi", name: "白石区" },
          { slug: "sapporo-atsubetsu", name: "厚別区" },
          { slug: "sapporo-toyohira", name: "豊平区" },
          { slug: "sapporo-kiyota", name: "清田区" },
          { slug: "sapporo-minami", name: "南区" },
          { slug: "sapporo-nishi", name: "西区" },
          { slug: "sapporo-teine", name: "手稲区" },
        ],
      },
    ],
  },
  {
    pref: "宮城県",
    cities: [
      {
        city: "仙台市",
        prefix: "仙台市",
        areas: [
          { slug: "sendai", name: "仙台市" },
          { slug: "sendai-aoba", name: "青葉区" },
          { slug: "sendai-miyagino", name: "宮城野区" },
          { slug: "sendai-wakabayashi", name: "若林区" },
          { slug: "sendai-taihaku", name: "太白区" },
          { slug: "sendai-izumi", name: "泉区" },
        ],
      },
    ],
  },
  {
    pref: "東京都",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "tokyo", name: "東京都" }],
      },
      {
        city: "東京23区",
        prefix: "東京都",
        areas: [
          { slug: "tokyo-chiyoda", name: "千代田区" },
          { slug: "tokyo-chuo", name: "中央区" },
          { slug: "tokyo-minato", name: "港区" },
          { slug: "tokyo-shinjuku", name: "新宿区" },
          { slug: "tokyo-bunkyo", name: "文京区" },
          { slug: "tokyo-taito", name: "台東区" },
          { slug: "tokyo-sumida", name: "墨田区" },
          { slug: "tokyo-koto", name: "江東区" },
          { slug: "tokyo-shinagawa", name: "品川区" },
          { slug: "tokyo-meguro", name: "目黒区" },
          { slug: "tokyo-ota", name: "大田区" },
          { slug: "tokyo-setagaya", name: "世田谷区" },
          { slug: "tokyo-shibuya", name: "渋谷区" },
          { slug: "tokyo-nakano", name: "中野区" },
          { slug: "tokyo-suginami", name: "杉並区" },
          { slug: "tokyo-toshima", name: "豊島区" },
          { slug: "tokyo-kita", name: "北区" },
          { slug: "tokyo-arakawa", name: "荒川区" },
          { slug: "tokyo-itabashi", name: "板橋区" },
          { slug: "tokyo-nerima", name: "練馬区" },
          { slug: "tokyo-adachi", name: "足立区" },
          { slug: "tokyo-katsushika", name: "葛飾区" },
          { slug: "tokyo-edogawa", name: "江戸川区" },
        ],
      },
      {
        city: "市部",
        prefix: "",
        areas: [
          { slug: "hachioji", name: "八王子市" },
          { slug: "machida", name: "町田市" },
        ],
      },
    ],
  },
  {
    pref: "神奈川県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "kanagawa", name: "神奈川県" }],
      },
      {
        city: "横浜市",
        prefix: "横浜市",
        areas: [
          { slug: "yokohama", name: "横浜市" },
          { slug: "yokohama-tsurumi", name: "鶴見区" },
          { slug: "yokohama-kanagawa", name: "神奈川区" },
          { slug: "yokohama-nishi", name: "西区" },
          { slug: "yokohama-naka", name: "中区" },
          { slug: "yokohama-minami", name: "南区" },
          { slug: "yokohama-konan", name: "港南区" },
          { slug: "yokohama-hodogaya", name: "保土ケ谷区" },
          { slug: "yokohama-asahi", name: "旭区" },
          { slug: "yokohama-isogo", name: "磯子区" },
          { slug: "yokohama-kanazawa", name: "金沢区" },
          { slug: "yokohama-kohoku", name: "港北区" },
          { slug: "yokohama-midori", name: "緑区" },
          { slug: "yokohama-aoba", name: "青葉区" },
          { slug: "yokohama-tsuzuki", name: "都筑区" },
          { slug: "yokohama-totsuka", name: "戸塚区" },
          { slug: "yokohama-sakae", name: "栄区" },
          { slug: "yokohama-izumi", name: "泉区" },
          { slug: "yokohama-seya", name: "瀬谷区" },
        ],
      },
      {
        city: "川崎市",
        prefix: "川崎市",
        areas: [
          { slug: "kawasaki", name: "川崎市" },
          { slug: "kawasaki-kawasaki", name: "川崎区" },
          { slug: "kawasaki-saiwai", name: "幸区" },
          { slug: "kawasaki-nakahara", name: "中原区" },
          { slug: "kawasaki-takatsu", name: "高津区" },
          { slug: "kawasaki-tama", name: "多摩区" },
          { slug: "kawasaki-miyamae", name: "宮前区" },
          { slug: "kawasaki-asao", name: "麻生区" },
        ],
      },
      {
        city: "相模原市",
        prefix: "相模原市",
        areas: [
          { slug: "sagamihara-midori", name: "緑区" },
          { slug: "sagamihara-chuo", name: "中央区" },
          { slug: "sagamihara-minami", name: "南区" },
        ],
      },
      {
        city: "その他の市",
        prefix: "",
        areas: [
          { slug: "fujisawa", name: "藤沢市" },
          { slug: "yokosuka", name: "横須賀市" },
        ],
      },
    ],
  },
  {
    pref: "埼玉県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "saitama", name: "埼玉県" }],
      },
      {
        city: "さいたま市",
        prefix: "さいたま市",
        areas: [
          { slug: "saitama-nishi", name: "西区" },
          { slug: "saitama-kita", name: "北区" },
          { slug: "saitama-omiya", name: "大宮区" },
          { slug: "saitama-minuma", name: "見沼区" },
          { slug: "saitama-chuo", name: "中央区" },
          { slug: "saitama-sakura", name: "桜区" },
          { slug: "saitama-urawa", name: "浦和区" },
          { slug: "saitama-minami", name: "南区" },
          { slug: "saitama-midori", name: "緑区" },
          { slug: "saitama-iwatsuki", name: "岩槻区" },
        ],
      },
      {
        city: "その他の市",
        prefix: "",
        areas: [
          { slug: "kawaguchi", name: "川口市" },
          { slug: "kawagoe", name: "川越市" },
          { slug: "tokorozawa", name: "所沢市" },
          { slug: "koshigaya", name: "越谷市" },
        ],
      },
    ],
  },
  {
    pref: "千葉県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "chiba", name: "千葉県" }],
      },
      {
        city: "千葉市",
        prefix: "千葉市",
        areas: [
          { slug: "chiba-chuo", name: "中央区" },
          { slug: "chiba-hanamigawa", name: "花見川区" },
          { slug: "chiba-inage", name: "稲毛区" },
          { slug: "chiba-wakaba", name: "若葉区" },
          { slug: "chiba-midori", name: "緑区" },
          { slug: "chiba-mihama", name: "美浜区" },
        ],
      },
      {
        city: "その他の市",
        prefix: "",
        areas: [
          { slug: "funabashi", name: "船橋市" },
          { slug: "matsudo", name: "松戸市" },
          { slug: "ichikawa", name: "市川市" },
          { slug: "kashiwa", name: "柏市" },
          { slug: "ichihara", name: "市原市" },
        ],
      },
    ],
  },
  {
    pref: "新潟県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "niigata", name: "新潟県" }],
      },
      {
        city: "新潟市",
        prefix: "新潟市",
        areas: [
          { slug: "niigata-kita", name: "北区" },
          { slug: "niigata-higashi", name: "東区" },
          { slug: "niigata-chuo", name: "中央区" },
          { slug: "niigata-konan", name: "江南区" },
          { slug: "niigata-akiha", name: "秋葉区" },
          { slug: "niigata-minami", name: "南区" },
          { slug: "niigata-nishi", name: "西区" },
          { slug: "niigata-nishikan", name: "西蒲区" },
        ],
      },
    ],
  },
  {
    pref: "富山県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "toyama", name: "富山市" }] }],
  },
  {
    pref: "石川県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "kanazawa", name: "金沢市" }] }],
  },
  {
    pref: "福井県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "fukui", name: "福井市" }] }],
  },
  {
    pref: "山梨県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "kofu", name: "甲府市" }] }],
  },
  {
    pref: "長野県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "nagano", name: "長野市" }] }],
  },
  {
    pref: "岐阜県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "gifu", name: "岐阜市" }] }],
  },
  {
    pref: "静岡県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "shizuoka", name: "静岡県" }],
      },
      {
        city: "静岡市",
        prefix: "静岡市",
        areas: [
          { slug: "shizuoka-aoi", name: "葵区" },
          { slug: "shizuoka-suruga", name: "駿河区" },
          { slug: "shizuoka-shimizu", name: "清水区" },
        ],
      },
    ],
  },
  {
    pref: "愛知県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "aichi", name: "愛知県" }],
      },
      {
        city: "名古屋市",
        prefix: "名古屋市",
        areas: [
          { slug: "nagoya-chikusa", name: "千種区" },
          { slug: "nagoya-higashi", name: "東区" },
          { slug: "nagoya-kita", name: "北区" },
          { slug: "nagoya-nishi", name: "西区" },
          { slug: "nagoya-nakamura", name: "中村区" },
          { slug: "nagoya-nakaku", name: "中区" },
          { slug: "nagoya-showa", name: "昭和区" },
          { slug: "nagoya-mizuho", name: "瑞穂区" },
          { slug: "nagoya-atsuta", name: "熱田区" },
          { slug: "nagoya-nakagawa", name: "中川区" },
          { slug: "nagoya-minato", name: "港区" },
          { slug: "nagoya-minami", name: "南区" },
          { slug: "nagoya-moriyama", name: "守山区" },
          { slug: "nagoya-midori", name: "緑区" },
          { slug: "nagoya-meito", name: "名東区" },
          { slug: "nagoya-tempaku", name: "天白区" },
        ],
      },
    ],
  },
  {
    pref: "京都府",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "kyoto", name: "京都府" }],
      },
      {
        city: "京都市",
        prefix: "京都市",
        areas: [
          { slug: "kyoto-city", name: "京都市" },
          { slug: "kyoto-kita", name: "北区" },
          { slug: "kyoto-kamigyo", name: "上京区" },
          { slug: "kyoto-sakyo", name: "左京区" },
          { slug: "kyoto-nakagyo", name: "中京区" },
          { slug: "kyoto-higashiyama", name: "東山区" },
          { slug: "kyoto-shimogyo", name: "下京区" },
          { slug: "kyoto-minami", name: "南区" },
          { slug: "kyoto-ukyo", name: "右京区" },
          { slug: "kyoto-fushimi", name: "伏見区" },
          { slug: "kyoto-yamashina", name: "山科区" },
          { slug: "kyoto-nishikyo", name: "西京区" },
        ],
      },
    ],
  },
  {
    pref: "大阪府",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "osaka", name: "大阪府" }],
      },
      {
        city: "大阪市",
        prefix: "大阪市",
        areas: [
          { slug: "osaka-miyakojima", name: "都島区" },
          { slug: "osaka-fukushima", name: "福島区" },
          { slug: "osaka-konohana", name: "此花区" },
          { slug: "osaka-nishi", name: "西区" },
          { slug: "osaka-minato", name: "港区" },
          { slug: "osaka-taisho", name: "大正区" },
          { slug: "osaka-tennoji", name: "天王寺区" },
          { slug: "osaka-naniwa", name: "浪速区" },
          { slug: "osaka-nishiyodogawa", name: "西淀川区" },
          { slug: "osaka-higashiyodogawa", name: "東淀川区" },
          { slug: "osaka-higashinari", name: "東成区" },
          { slug: "osaka-ikuno", name: "生野区" },
          { slug: "osaka-asahi", name: "旭区" },
          { slug: "osaka-joto", name: "城東区" },
          { slug: "osaka-tsurumi", name: "鶴見区" },
          { slug: "osaka-abeno", name: "阿倍野区" },
          { slug: "osaka-suminoe", name: "住之江区" },
          { slug: "osaka-sumiyoshi", name: "住吉区" },
          { slug: "osaka-higashisumiyoshi", name: "東住吉区" },
          { slug: "osaka-hirano", name: "平野区" },
          { slug: "osaka-nishinari", name: "西成区" },
          { slug: "osaka-yodogawa", name: "淀川区" },
          { slug: "osaka-kita", name: "北区" },
          { slug: "osaka-chuo", name: "中央区" },
        ],
      },
      {
        city: "その他の市",
        prefix: "",
        areas: [
          { slug: "toyonaka", name: "豊中市" },
          { slug: "suita", name: "吹田市" },
          { slug: "takatsuki", name: "高槻市" },
          { slug: "hirakata", name: "枚方市" },
          { slug: "higashiosaka", name: "東大阪市" },
        ],
      },
    ],
  },
  {
    pref: "兵庫県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "hyogo", name: "兵庫県" }],
      },
      {
        city: "神戸市",
        prefix: "神戸市",
        areas: [
          { slug: "kobe-higashinada", name: "東灘区" },
          { slug: "kobe-nada", name: "灘区" },
          { slug: "kobe-chuo", name: "中央区" },
          { slug: "kobe-hyogo", name: "兵庫区" },
          { slug: "kobe-kita", name: "北区" },
          { slug: "kobe-nagata", name: "長田区" },
          { slug: "kobe-suma", name: "須磨区" },
          { slug: "kobe-tarumi", name: "垂水区" },
          { slug: "kobe-nishi", name: "西区" },
        ],
      },
      {
        city: "その他の市",
        prefix: "",
        areas: [
          { slug: "himeji", name: "姫路市" },
          { slug: "nishinomiya", name: "西宮市" },
          { slug: "amagasaki", name: "尼崎市" },
        ],
      },
    ],
  },
  {
    pref: "和歌山県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "wakayama", name: "和歌山市" }] }],
  },
  {
    pref: "岡山県",
    cities: [
      {
        city: "岡山市",
        prefix: "岡山市",
        areas: [
          { slug: "okayama", name: "岡山市" },
          { slug: "okayama-kita", name: "北区" },
          { slug: "okayama-naka", name: "中区" },
          { slug: "okayama-higashi", name: "東区" },
          { slug: "okayama-minami", name: "南区" },
        ],
      },
    ],
  },
  {
    pref: "広島県",
    cities: [
      {
        city: "広島市",
        prefix: "広島市",
        areas: [
          { slug: "hiroshima", name: "広島市" },
          { slug: "hiroshima-naka", name: "中区" },
          { slug: "hiroshima-higashi", name: "東区" },
          { slug: "hiroshima-minami", name: "南区" },
          { slug: "hiroshima-nishi", name: "西区" },
          { slug: "hiroshima-asaminami", name: "安佐南区" },
          { slug: "hiroshima-asakita", name: "安佐北区" },
          { slug: "hiroshima-aki", name: "安芸区" },
          { slug: "hiroshima-saeki", name: "佐伯区" },
        ],
      },
    ],
  },
  {
    pref: "香川県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "takamatsu", name: "高松市" }] }],
  },
  {
    pref: "愛媛県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "matsuyama", name: "松山市" }] }],
  },
  {
    pref: "高知県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "kochi", name: "高知市" }] }],
  },
  {
    pref: "福岡県",
    cities: [
      {
        city: "全域",
        prefix: "",
        areas: [{ slug: "fukuoka", name: "福岡県" }],
      },
      {
        city: "福岡市",
        prefix: "福岡市",
        areas: [
          { slug: "fukuoka-higashi", name: "東区" },
          { slug: "fukuoka-hakata", name: "博多区" },
          { slug: "fukuoka-chuo", name: "中央区" },
          { slug: "fukuoka-minami", name: "南区" },
          { slug: "fukuoka-nishi", name: "西区" },
          { slug: "fukuoka-jonan", name: "城南区" },
          { slug: "fukuoka-sawara", name: "早良区" },
        ],
      },
      {
        city: "北九州市",
        prefix: "北九州市",
        areas: [
          { slug: "kitakyushu-moji", name: "門司区" },
          { slug: "kitakyushu-wakamatsu", name: "若松区" },
          { slug: "kitakyushu-tobata", name: "戸畑区" },
          { slug: "kitakyushu-kokurakita", name: "小倉北区" },
          { slug: "kitakyushu-kokuraminami", name: "小倉南区" },
          { slug: "kitakyushu-yahatahigashi", name: "八幡東区" },
          { slug: "kitakyushu-yahatanishi", name: "八幡西区" },
        ],
      },
    ],
  },
  {
    pref: "熊本県",
    cities: [
      {
        city: "熊本市",
        prefix: "熊本市",
        areas: [
          { slug: "kumamoto", name: "熊本市" },
          { slug: "kumamoto-chuo", name: "中央区" },
          { slug: "kumamoto-higashi", name: "東区" },
          { slug: "kumamoto-nishi", name: "西区" },
          { slug: "kumamoto-minami", name: "南区" },
          { slug: "kumamoto-kita", name: "北区" },
        ],
      },
    ],
  },
  {
    pref: "大分県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "oita", name: "大分市" }] }],
  },
  {
    pref: "宮崎県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "miyazaki", name: "宮崎市" }] }],
  },
  {
    pref: "鹿児島県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "kagoshima", name: "鹿児島市" }] }],
  },
  {
    pref: "沖縄県",
    cities: [{ city: "", prefix: "", areas: [{ slug: "naha", name: "那覇市" }] }],
  },
];

// 総エリア数（238であることをビルド時に検証可能にする）
export const AREA_TOTAL = AREA_INDEX.reduce(
  (sum, p) => sum + p.cities.reduce((s, c) => s + c.areas.length, 0),
  0
);

// サイトマップ等での表示ラベル（区名には市名prefixを付与して一意化）
export function areaLabel(group: CityGroup, area: AreaLink): string {
  if (area.name.endsWith("区") && group.prefix) {
    return `${group.prefix}${area.name}`;
  }
  return area.name;
}
