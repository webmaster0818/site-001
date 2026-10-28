# cleaning-choices.com（site-001）— ハウスクリーニング比較

Discord ch: `1481169542838489150` / push→CF自動ビルド（HTTPS push要トークン§16）
エリア量産: scripts/gen-areas.py＋area_data_group*.py

## 作業ログ

### 2026-07-01 トップのcanonical欠落を修正（MediaXAI全サイトcanonical点検依頼）
- 本番トップ(cleaning-choices.com/)にcanonicalタグが出力されていなかった（配下エリアページ等は正常）。cf-cache-status=DYNAMIC＝キャッシュでなく実配信で欠落。トップがlayoutのcanonical継承に依存していたのが原因
- app/page.tsx に `metadata.alternates.canonical="https://cleaning-choices.com/"` を明示追加→build→push(CF自動ビルド)→本番トップにcanonical反映を確認。title等の継承は維持
- ※別課題「/areas/xxx と /areas/xxx/ の末尾スラッシュ重複インデックス」はcanonicalタグとは別のリダイレクト正規化論点で未対応（戦略Phase0で対応予定）

### 2026-06-12 MediaXAI依頼: 最短・最大成長戦略（ASP以外）
GSC実数診断:
- 28日: クリック14・表示2,411・平均39.2位・CTR 0.58%。週500-700表示で横ばい
- 勝ち筋=区レベル（名古屋北4位/瑞穂8.3/東8、大阪市西区9位）。都市トップ弱い（横浜56.9/札幌47.3）

**発見①: URL重複** — /areas/hyogo と /areas/hyogo/ が別々にインデックス（18.8位と42位）＝評価分散。canonical/redirect統一が最優先のクイックウィン。
**発見②: サービス×エリア面が無い** — 「エアコンクリーニング {市}」系クエリが40-60位で受け皿なし。

戦略（Discord報告済み・承認待ち）:
- Phase 0 = スラッシュ統一＋勝ち筋区ページ強化＋Indexing API
- Phase 1 = サービス×主要都市ページ（3サービス×10都市）＋横浜・札幌の区展開
- Phase 2 = 掲載業者の料金集計の独自データ比較（pilates方式移植）
- KPI: 14→80クリック/28d（7月末）

### 2026-08-09 UI全面刷新+基盤修復（MediaXAI「A進めて。徹底的に直して」）✅
- ★根本原因発見: daisyUI未導入なのにdaisyUIクラスを1,175箇所使用=旧テンプレページがほぼ無スタイルだった→globals.cssに互換シム実装(card/btn/prose/collapse/table/badge/breadcrumbs等)で238地域ページが一斉正常化
- 指摘全消化: 偽受付時間バー削除・最終更新03.18削除・トップ日付8月化・インラインnavbar26撤去(+.navbar{display:none}保険)・インラインfooter260撤去→共通Footer.tsx新設(3列+運営者+PR表記)・パンくず統一スタイル・404詳細再建(company/3-6=おそうじ革命/東京ガス/カジタク/ベアーズ※サイト内既存データのみ・ranking/scene index新設)・地域404隣接リンク14修正・comparison sitemap除去
- デザイン: 深シアン(#0e7490)×紙白×Zen Maru Gothic見出し。Header刷新(CTA→/ranking/・初めての方へ→/guide/)。※Tailwind v4でlg:hiddenが未生成の罠→.only-mobileカスタムクラスで解決
- 絵文字712個/231ファイル一掃(✓★保持)は同日前半に実施済み。sitemap 292URL・GSC送信・本番全項目検証(スクショ付き報告id 1535939419775832156)
- 残: Phase B=13案件(未提携)の公式確認→ranking/サービス紹介掲載→提携後リンク差替。提案中=トップ「こんなお悩み」人物コメントの形式変更(架空の声に見えるリスク)
- 2026-08-10 二重ナビ再指摘→真因: agent除外dirのservices/company/ranking/scene配下に独自header14ブロック残存(特にservices=ナビ直リンク先で目立った)→全撤去。★教訓: 部分サンプル検証でなく**out/全HTMLのheader数機械監査**(≠1をゼロ確認)を標準化。本番11種別で確認・修正報告id 1536031139570122883

### 2026-08-15 D2完了: DB型サイト全面公開（D1+D2一括デプロイ）✅
- D1(c76e73a)=provider 3,526店舗ページ + D2を一括push
- D2内容: ①未作成24県ページ新設(app/areas/[pref]/動的ルート・既存静的dir優先仕様を利用) ②既存23県ページにPrefProviders組込(県別店舗一覧) ③/for-business/新設(掲載基準・訂正/削除依頼・新規掲載窓口) ④/areas/ハブに47県グリッド・HTMLサイトマップに47県+for-business・Footerにfor-business追加 ⑤provider側areaHrefのフォールバック撤去(47県全て実在のため常に県ページ直リンク)
- sitemap.xml=out/から決定的再生成で3,843URL(292→3,843)。PREF_PAGES(47県)をareaIndexData.tsに一元定義
- 機械監査: 全3,845頁でheader=1・絵文字0・内部切れリンク0。全providerが県ページへリンク確認済み
- ⚠️push後40分CF未反映(2回push・空コミット再トリガーも不発・本番は旧版292頁のまま実害なし)。ローカルビルド全パスのためCF側(ビルド失敗/無料枠500回/webhook不達)疑い→MediaXAIにダッシュボード確認依頼(id 1538022629191974986)。反映検知の常駐監視を設置済み→検知後に本番検証+GSC送信+完了報告
- 2026-08-17 CF失敗の真因判明: MediaXAIのビルドログスクショ=buildステップ3m52sでfailure(webhook不達ではない)。ローカル成功×CF失敗=SSG並列ワーカーのOOM推定→next.config.tsにexperimental.cpus:2を追加(3GB制限のローカル検証パス)して再push
- 2026-08-18 真因確定(ログ全文受領): 「Pages only supports up to 20,000 files」=ファイル数上限。Next16のセグメントキャッシュが__next.*.txt×8/頁を生成し34,993ファイル化。対策=next.config.tsにexitフックでビルド後__next.*.txt削除(26,892個・index.txtは残しクライアント遷移無傷)→8,101ファイルに削減。OOM説は誤り(cpus:2は維持)
- 2026-08-18 ★D1+D2全面公開成功(報告id 1538956179810549903): ファイル上限対策後のビルドでデプロイ成功。本番検証全パス(provider3,526/47県/for-business/sitemap3,843/schema)・GSC送信済み。次候補=D3独立系ゲート制/13案件ranking/週次インデックス観測

### 2026-08-18 company詳細の死にボタン削除（MediaXAI指摘）
- スクショの「お問い合わせ」「お気に入りに追加」=company/1-6サイドバー(旧テンプレ由来)。お問い合わせ=送信先なしの飾りモーダル/お気に入り=onClickなし→両方+モーダル削除・未使用import掃除・push済み(id 1539229218930425907)
- ★発見: company/1・2に架空口コミ(利用者A/B/C・日付付き)が旧テンプレのまま残存→削除承認待ち(providerの公式評価は出典付きで別物)
- 本番反映確認済み(company1-6全ページでボタン2種+モーダル消滅・200)・報告id 1539230191170101293。残=架空口コミ削除の承認待ち
- 「当然消して」承認→架空口コミ(利用者A-E)+★評価4.4-4.8+口コミ件数(580-1200件)を全削除(データ配列+表示セクション+ヘッダー星表示)。同根の架空数値として評価値も対象に含めた

### 2026-08-20 口コミ全出典化 第1弾（MediaXAI「口コミは全て出典付きのものに変えたい」）
- 棚卸し結果: 発言型の架空口コミ=トップ「こんなお悩み」6人(30代共働き主婦等+顔アイコン+「多くのお客様が利用」実績主張)のみ。areas228の「利用者の声」=一般アドバイス文(口コミ掲載ではない)。company架空口コミは8/19削除済み。provider3,526=出典付き公式評価で問題なし
- 対処: ①トップ=人物・発言・実績主張を全廃→悩み一般論6項目のリストに刷新 ②services一覧=出典なし★評価(4.4-4.8/580-1200件)8業者分+「口コミ数順」ソート+機能しない評価フィルタを削除(おすすめ順=データ順に) ③機械監査3,845頁でpersona/無出典rating残存ゼロ
- 本番反映確認(トップ架空人物0/services出典なし評価0)・報告id 1539789027325116506。次提案=公式評価データ枠(トップ+ranking)は「進めて」待ち

### 2026-08-23 「進めて」承認→公式評価データ枠実装(トップ+ranking)
- 結果: OfficialRatingStoresコンポーネント新設(公式レビュー100件以上を評価順に決定的選出・独自集計でない旨+確認日明記)→トップ6店+rankingハブ10店に配置。リンク切れ0/header1監査パス・本番反映確認・報告id 1540927313200291890

### 2026-08-27 ブランドハブ3ページ新設（「最新GSC見てネクスト実行」・id 1542378875621744742）
- 実測: ブランド指名が最大面(本舗系541i/ダスキン204i)だが「おそうじ本舗」単体の着地が個別store分散=ハブ不在
- 実行: /brand/{osoujihonpo,duskin,osoujikakumei}/ 新設(解説=company既存実在情報のみ・公式評価上位6・都道府県別全店舗索引)+全3,526 providerのブランドバッジ→ハブリンク化。監査(3,666リンク切れ0/header1)・sitemap3,846・本番3/3 200・GSC済
- 効果観測9/2週次

### 2026-08-31 P2P3完了（「p2p3進めて」・id 1543955254838693910）
- P2=上位20市区(GSC表示実績順・横浜103店〜名古屋北区4店)にCityProviders(住所市区名マッチの決定的抽出)をヒーロー直下組込。全20の店舗数を事前検証
- P3=year-end-package全面再構築(21行薄ページ→2026年版: 結論10-11月予約/箇所3種/料金業者選び/47県導線/FAQ4+schema・金額断定なし)
- sitemap lastmod21・本番検証(4市区+year-end title/FAQ)・GSC済。観測=P2 9月中旬/P3 10月。P1登録リクエストはコンソール待ち

### 2026-09-11 P1-P3+ranking再構築+おそうじ革命A8設置（一括実装日）
- P1: brandハブtitle「店舗一覧・対応エリア検索」化+Footer「ブランドから探す」列(全3,849頁監査)+TOP大手ブランド節(providers.json実数)
- P2: CTR実験=GSC表示上位50店(app/data/ctr_test_slugs.json)のみtitle/desc「近隣店舗と比較」。9/25判定→全展開or撤収
- P3: SeasonalCleaningNote(大掃除節)をGSC観測35市区ページに設置(挿入位置2パターン: CityProviders後/最終section後)
- ranking配下5ページ=404再建スタブ(23行)だったのを全再構築(aircon/bathroom=BrandCompareTable+相場+FAQ schema/cheap=相場+コツ/quick=手順型/review=公式レビューTOP10実数)
- おそうじ革命A8: KakumeiAffiliateCTA.tsx(提供コード改変不可・pixel必須)。設置=革命ハブ(banner付)/kakumei全452店/BrandCompareTable内。他ブランドリーク0を全数監査

### 2026-09-15 felmat提携8案件の掲載準備（MediaXAI「以下対応してほしい」・id 1549342804243652649）
- 新設: app/data/partners.ts(8社・公式一次確認・affiliateUrl null=CTA非描画)・components/PartnerCards.tsx(ジャンル別紹介枠)・/review/(ハブ)・/review/[slug]/(8ページ: 料金表/基本情報/特徴/確認できなかったこと/口コミの読み方/FAQ schema)
- 既存配線: ranking5(aircon/bathroom=tag別・cheap/quick/review=全社)・scene/moving-aircon・new-house(moving)・services/[category] ServicePageClient末尾(category→tag)・TOP(大手ブランド節直後・8社)・Footer・HTMLサイトマップ(PARTNERS動的)
- 照合: 8社の運営会社名・料金・特記をホストcurl+grep 24件中23件OK(migxlキャンセル料はFAQでなく特商法ページで確認済)。★判明: オン=47都道府県(felmat情報の43都府県は誤り)/清風=家庭用2台目割引なし(felmat情報と不一致)/ミガクる=基本2プラン/おそうじLabo=公式エリアは兵庫7市町(felmat情報の尼崎・伊丹より広い)/110番=運営会社の非公開化報道(9/9)のため上場表記は未確認扱い
- sitemap 3,846→3,855(regen_sitemap_clean.py・lastmod12件)。out 8,125ファイル(<20,000)
- 同日 計測リンク受領→設置(3189992): partners.tsにaffiliateUrl/Label/Pixel/banner。PartnerCardsと/review/[slug]でpixel(1x1 fmimp)必須・rel="sponsored nofollow noopener"・文言は提供コードのまま。監査スクリプト=scriptタグ除去後のfmcl/fmimpコード集合一致で確認(RSC payload重複で生カウントは不一致になる罠)

### 2026-09-22 D1: /price/ メタ欠落修正+canonical欠落34頁一括修正（「①進めて」）
- /price/にmetadata(title/desc/canonical)追加+h2→h1。監査でcanonical欠落34頁(export const metadataにalternates無し)を発見→自己参照canonicalを一括注入。62dcfbe。監査コマンド=out/全index.htmlのcanonical==自URL検査(404/_not-found除外)
- 次=A1(一覧154頁の店舗DB前面化)→A2(市区×サービス20頁)→B1B2→C1C2→A3D3

### 2026-09-22 A1: 地域一覧262頁を店舗DB前面型に統一（「②進めて」）
- app/components/AreaProvidersLead.tsx(slug→areaMap.json→providers.json住所マッチ)。ヒーロー直下(最初の<h1>後の</section>直後)に挿入。CityProviders/PrefProviders削除
- scripts/gen-area-map.py: areaIndexData.ts(AREA_INDEX/PREF_PAGES)をnodeで評価→areaMap.json(kind pref/city/ward・match・areaTerms・parent/children・count)。app/areas/実在dirと突合し不一致は異常終了。AREA_INDEX変更時は再実行
- 東京23区=label区名のみ/住所照合は「東京都中野区」。対応エリア(charge_region)は公式表記がlabelと一致(東京=区名/政令市=市+区)
- 監査: out/areas全頁でid="stores"・h1→stores順・店舗数==areaMap.count・内部リンク切れ0。0c732b7

### 2026-10-05 公開前チェック(site-precheck.py)不合格5項目を修正 → 全項目OK
- 構造化データ0(16種別277頁): layoutのJSON-LDがnext/script(クライアント注入)でHTMLに出ていなかった→WebSite/Organizationを素の<script>で静的出力(実在しないSearchAction・空telは削除)。地域ページはAreaProvidersLeadでBreadcrumbList出力([pref]動的ルートは既存があるのでbreadcrumbLd={false})
- og:image無し5頁(about/contact/privacy/terms/sitemap)にimages追加。★public/og-image.pngが存在せず本番404だった→scripts/make-og.pyで生成(数字なし)
- title重複13組: 同名区58頁のtitleを「市名+区名」(東京は東京都+区名)に。同名同住所のダスキン新宮2店は公式店舗ページ番号で区別
- h1×0の12頁: TOP/ranking/scene/services[category]/company[id]のヒーローh2→h1
- 被リンク≤1: provider198=「県内の他の店舗」を先頭6店固定→住所順の前後3店に変更 / guideハブ→guide-detail7 / rankingハブ→comparison5 / company=同カテゴリ業者リンク
- 未対応(要判断): layoutのFAQPage/ItemList/BreadcrumbList(ホームのみ)は全ページにクライアント注入されたまま。areaMapのprefSlugが市ページと同名の12県(長野・岐阜・熊本・広島・鹿児島・岡山・宮崎・富山・和歌山・福井・大分・高知)は県ページが実在せず、店舗ページの「県の業者一覧」リンクが市ページに着地する

### 2026-10-07 title/TOPの「最新」表記を外す + 同名区titleの市名漏れ10頁
- 実測(out/): title「【2026年6月最新】」40頁(名古屋16区+大阪24区)・TOP「2026年8月 最新版」1頁・layout継承のog:title「【2026年最新】」3,615頁・description「【2026年最新】」3頁 → 全て0。内容を今日確認していないため年月を進めず「最新」の語を削除（area titleは接頭辞のみ削除、他は維持）。TOPバッジは「厳選業者を徹底比較」
- 10/05の同名区58頁対応の漏れ: 大阪市中央区・名古屋市中区/南区/東区/緑区・大阪市旭区/鶴見区・横浜市旭区/鶴見区・東京都港区 のtitleに市名付与(title/og/twitterの3箇所)。sitemap lastmod 44
- 残: ranking4頁の「【2026年9月】」は日付表記(「最新」でない)のため据え置き。精査なし
- 公開前チェック 全項目OK（title重複は404系のみ）

### 2026-10-07 エリア238頁のカジタク行を公式に合わせて修正（P1・公開中の数字が事実と不一致）
- hours「10:00-19:00（年末年始除く）」→「10:00-17:00（年末年始除く）」（公式特商法）、description「仕上がり満足度97%を誇る高品質サービス」→「イオングループ運営。お客さま満足度95%（2025年 カジタク調べ）。」。カジタクのブロック内のみ置換（同じ時間文字列を持つ他社行238は未変更）
- ★発見: 238頁中、description/hoursを画面に出すテンプレは135頁（hoursは134頁）。残り103頁（県ページ=niigata/chiba等）は name/kitchen/bathroom/toilet のみ描画でhours/descriptionは非表示（ソースは修正済み）
- sitemap lastmod 238。公開前チェック 全項目OK

### 2026-10-09 Organization構造化データの1頁2個を解消（P2）+ 新潟市南区の「（0店舗）」見出し修正（P4）
- 実測(out/ 3,869 HTML=sitemap 3,866+404.html+404/+_not-found/): `"@type":"Organization"` 文字列は合計7,397個。1個=341頁・2個=3,528頁（provider 3,525＋brand 3）。10/8の「3,869個>3,866頁」はファイル数ベースの数え方で、3超過分は404系3ファイル（重複ではない）。本当の重複は上記3,528頁
- 原因: layoutが全頁にサイト運営者Organizationを出力＋ provider頁が LocalBusiness.parentOrganization に `{"@type":"Organization"}` をネスト、brand頁がブランドをトップレベルOrganizationで出力
- 修正: provider= `parentOrganization(Organization)`→`brand:{"@type":"Brand"}` / brand頁= `Organization`→`Brand`（url追加）。after: 3,869頁すべて Organization 1個（合計3,869）、Brand 3,528。precheck集計 {WebSite 3866, Organization 3866, LocalBusiness 3525, Brand 3}
- /areas/niigata-minami/: 本番h2「新潟市南区のハウスクリーニング店舗一覧（0店舗）」の直下に近隣対応店舗10件が並んでおり見出しと中身が不一致 → AreaProvidersLead で「域内0かつ近隣>0」のときのみ h2 を「{地域}に対応するハウスクリーニング店舗（近隣N店舗）」に。「域内に所在する店舗は公式で確認できていません」の文は維持。該当は238頁中この1頁のみ。削除・noindexなし
- sitemap lastmod 3,529（provider 3,525＋brand 3＋niigata-minami）。公開前チェック 全項目OK

### 2026-10-09 提携8社 /review/ の「口コミ・評判」対策（12:00成長ルーチンC・GSC 28日 全て圏外）
- 対象: migxl・on・kireiyu・seifu・nac-duskin・four-l・osouji-labo・housecleaning110（おそうじ革命は同日新設のため対象外、カジタクはリンクコード待ち）
- 競合（各社 口コミ/評判 上位）は「良い/悪い口コミの傾向」「作業時間」「立会い」「予約の取りやすさ・繁忙期」「破損時」「キャンセル」「おすすめする人/しない人」「他社比較」を持ち、うちは料金表＋汎用の読み方3視点のみだった。口コミ本文はサイトルール上書かない→「口コミで気にされやすい点を公式情報で確認」表（論点×公式原文要約×確認ページ）で代替
- テンプレ追加（partners.ts の任意フィールド）: publishedAt / peakSeason / reviewPoints / officialFaqs / checkedPages。WebPage JSON-LD（datePublished・dateModified）・公開日/最終確認日表示・FAQPage に公式FAQを追加。汎用文の「エアコンの機種」「繁忙期（5〜8月）」は各社公式の繁忙期に置換（記載なしは月を書かない）
- 公式生HTML再確認（2026-10-09）で直した差分: ミガクる エリア「47都道府県」→公式は関東・関西・東海の10都府県中心（47の語は公式に無い）・居住中の扱いは公式内で揺れ / おそうじLabo キャンセル前日→前々日・水回り2点29,800→28,800円・「大阪府全域」→公式一覧は26市町 / キレイユ 200店舗→230店舗超 / 清風 業務用室外機8,800円・市区町村一覧・支払表記がFAQと特商法で不一致 / ナックダスキン サービス別エリア（エアコンは1都3県）・支店34 / フォーエル 実績年数（10年以上/20年以上）と追加料金注記が公式内で不一致→併記 / 110番 公式サイト=hoycambiomibombilla.com、運営会社の公開買付け（2026-09-10〜10-27・上場廃止予定、9/9適時開示）・キャンセルは規約上加盟店へ直接・キャンセル料記載なし
- 公式で確認できず残したもの: ナックの浴室/キッチン料金（画像のみ）・キャンセル規定・休日料金額、各社の再施工保証、保険会社名/上限
- ⚠️調査時に felmat 計測リンク(fmcl)へアクセスあり: 清風 4回（GET、14:10頃）・フォーエル 1回（HEAD）・110番 2回（HEAD）。以後は公式ドメイン直接のみ。**計測リンクは調査で開かない**
- 変化したHTML 21頁（review 9・ranking 5・services 3・scene 2・TOP・/review/）→ sitemap lastmod 21。precheck ✅ 全項目OK（3,867頁）。計測コード集合は旧outと一致
- source db81c7a → 本番反映 約4分 → 8頁 200・title【2026年10月確認】・dateModified 2026-10-09 確認 → Indexing API 20/20

### 2026-10-10 近隣エリアの自己掲載13頁を解消（P4）+ ranking4頁titleの【2026年9月】削除（P4）+ おそうじ革命説明文の公式表記版（wipのみ）
- 近隣エリア: /areas/niigata-minami/ の「新潟市南区」ボタンは実体が /areas/niigata-chuo/ へのリンク（ラベルだけ自区名）。全238頁の監査で同現象13頁（熊本4・新潟7・相模原2、すべて「○○市中央区」リンクが自区名表記）。原因= scripts/gen-areas.py が近隣リンク挿入後に `replace("中央区", ward)` を走らせていた → プレースホルダで文字列置換後に差し込むよう修正。13頁はラベルを実リンク先名（○○市中央区）に。本番 before 13/13 → after 0（out/ 238頁でも0）
- 範囲外で発見（未修正）: 札幌10区・仙台5区の近隣リストで「北海道」「宮城県」ラベルが /areas/sapporo/・/areas/sendai/（市ページ）へリンク＝ラベルとリンク先の不一致15頁（県ページは未作成）
- ranking aircon/bathroom/cheap/review の title「【2026年9月】」: 9月に内容を確認した事実が無い（公式評価=2026-08-15確認、提携8社=9/15・10/9確認、大手3社比較は8月以前の情報）→ 年月を進めず削除。本文の「{verifiedAt}確認」等の確認日表記は維持。本番 2/頁×4=8 → 0。sitemap lastmod 17
- おそうじ革命（wip/osoujikakumei-facts・ローカルのみ・本番未反映）: エリア238ファイルの「約420店舗を全国展開。50日間の研修」→「全国でフランチャイズ展開。2ヶ月間の初期研修（イールシステム）」。公式生HTML＋ヘッドレス描画（top・/company/・/company/why-chosen・/franchise/・/locations/・/support/faq/）に総店舗数の記載なし。研修は消費者向けページ=「2ヶ月間」、/franchise/（加盟募集）には「50日間研修」「約2か月間の研修」の両表記。画面に出るのは135頁（他103頁は description 非描画）
- 範囲外で発見（未修正）: company/3・services/aircon にも「約420店舗」「50日間研修」、エリア233頁に「研修期間50日以上が一つの基準」、エリア238頁のおそうじ革命 hours「9:00-20:00（年中無休）」は公式（年末年始を除き営業）と不一致

### 2026-10-10（続き）おそうじ革命の営業時間「年中無休」を公式表記に（coordinator承認・本番）
- 公式生HTML（/support/faq/）=「年末年始を除き、土日祝日も営業しております」。ブランド共通の営業時間帯は公式に記載なし（top・/company/・/support/・/contact/・/price/）。店舗ページは店ごとに違う（例 aichi_chita=8時～20時・大晦日/元日も相談可、adachi_nishiarai/adachiku_toneri=記載なし）→「9:00-20:00」は確認できないため外した
- 全エリア238ファイルに おそうじ革命 エントリが2つずつある（重複: ①17,930円〜/9:00-20:00 ②17,050円〜・18,150円〜/8:00-20:00）。両方の hours（476個）を「店舗により異なる（年末年始を除き土日祝も営業）」に。旧生成スクリプト15本（create-*.py等）も同様。gen-areas.py はテンプレ chiba-chuo/page.tsx 経由で反映済み
- 本番実測（out/areas 274頁を全件curl・おそうじ革命カード内だけ数える）: 年中無休 268（134頁）→ 0。他社カードの年中無休 670 → 670（不変）。sitemap lastmod 238。966664b / CF deploy fa72ffcf
- wip/osoujikakumei-facts は隣接行のため衝突 → 966664b の上に同一内容で載せ直し（dde0ad3、旧a094c4f）
- 範囲外（未修正）: 重複エントリ②の料金 17,050円〜/18,150円〜 は公式（キッチン・浴室 17,930円）と不一致、説明「プロの技術力と低価格を両立…」も出典なし。1ページに同じブランドが2枚出ている

### 2026-10-11 県名ラベル→市ページの不一致を解消（札幌10区・仙台5区・京都市）
- 監査スクリプト（out/ 全HTML、<a>表示テキスト=都道府県名 かつ 行き先≠PREF_PAGES の県ページ ＋ BreadcrumbList の同条件）: before 21件/16頁（北海道→sapporo 10・宮城県→sendai 10・京都府→kyoto-city(自己) 1）→ after 0。BreadcrumbList は元から0（AreaProvidersLead が prefSlug で正しく出していた）
- /areas/hokkaido/・/areas/miyagi/ は D2 の [pref] 動的ルートで既存（本番200）→新設不要。札幌区=パンくず HOME>北海道>札幌市>区・ボタン→hokkaido。仙台区=HOME>宮城県>仙台市>区・ボタン→miyagi。札幌市・京都市ページのパンくずも県ページへ
- 再発防止: area_data_groupA.py の仙台・広島 parent_name（市slugに県名ラベル）を市名に。sitemap lastmod 17。a40f949

### 2026-10-12 朝ルーチン: /review/ 9本 URL検査 + エリア238頁 おそうじ本舗・東京ガスの行を公式に
- URL検査(GSC API): 登録済み3（migxl・nac-duskin・seifu）/ 検出-未登録5（on・kireiyu・four-l・osouji-labo・housecleaning110）/ 未認識1（osoujikakumei）、/review/ ハブも検出-未登録。全て200・index,follow・自己canonical・sitemap掲載・/review/ ハブとTOP（osoujikakumei以外）からリンクあり → Indexing API 7/7（未登録6＋ハブ）。osoujikakumei はTOPからのリンクなし（エリアページの2エントリからは有り）
- 公式生HTML(2026-10-12): おそうじ本舗 /house-cleaning/kitchen/kitchen/=18,700円・/water/bathroom/=18,700円・/water/toilet/=9,900円（一致）。営業時間はブランド共通の記載なし、店舗ページで店ごとに違う（例 shop/detail/17347=8:30～18:00 不定休、20198=8:30～19:00 不定休。providers.json 1,876店中「8:00～21:00」は33店・「年中無休」は75店）。「47都道府県に対応」「早朝・夜間などの要望にも柔軟」は公式/about・/shop/にあり、「最大手」は無し
- 東京ガス kaji.tokyo-gas.co.jp: キッチン19,800・浴室(ウロコ取りなし)17,600・トイレ13,200円。開始時間帯 8:30～9:30/12～13/15～16/17～18（FAQ側は14～15も含む＝公式内で不一致）、土日祝可・12/29～1/4除く、支払いはクレジットカードのみ。対応エリア=東京・神奈川・埼玉・千葉の指定市区町村＋群馬・茨城の一部
- 修正: 238頁＋旧生成スクリプト17本（batch-update.py・create-*.py・kyoto-header.txt・update-17pages.py・update-companies.js）のこの2社のブロック内だけ置換。out/areas 新しい文言 134頁（各頁2箇所）、古い文言 0。sitemap lastmod 238。precheck 全項目OK。71199c9
- 作業は worktree（~/projects/site-001-wt1012）で実施。メインのチェックアウトに 10/11 から未コミットの providers.json・provider/[slug]/page.tsx（おそうじ革命 survey_rating 等）が残っているため手を付けていない
- 範囲外（未修正）: ①東京ガスが対応エリア外の約150頁（大阪・名古屋・札幌など）にも掲載されている → 判断待ち ②app/company/[id]/CompanyPageClient.tsx に東京ガスの旧説明文「独自の清掃技術をマスター」 ③エリアページの「ハウスクリーニングのミライ」「ホームクリーンサービス」は公式サイトを確認できていない

### 2026-10-13 P2: 会社ページの東京ガスを公式に + 会社ページ明白誤り3社 + ミライ/ホームクリーン調査 + /review/ URL検査
- 東京ガス（kaji.tokyo-gas.co.jp 生HTML 10/13再確認=10/12と同じ）: company/4・services/kitchen の「大手ガス会社が運営…独自の清掃技術をマスター…高品質」「東京・神奈川・千葉・埼玉」→ 公式の対応エリア（1都3県指定市区町村＋群馬3市・茨城7市町）・クレジットカードのみ・土日祝可(12/29〜1/4除く)。浴室19,800→17,600（鏡のウロコ取りなし。ありは22,000）・トイレ13,200追加
- 明白な誤りのみ修正: 革命 company/3「年中無休」→年末年始除く（公式FAQ）/ カジタク company/5 10:00〜19:00→10:00〜17:00（/guide/law）/ ベアーズ company/6・services/kitchen キッチン17,600→18,920（17,600は換気扇）・時間→受付9:00〜18:00（年中無休）
- 未修正（数えただけ）: 本舗=「業界最大手」公式に無し・時間9:00〜20:00は共通記載なし・損害保険/全員有資格者は未確認 / ダスキン=1963・約1,600拠点・料金3種・時間は servicemaster トップ生HTMLで確認できず / 革命=約420店舗・50日間研修・業界最安クラス・追加料金なし（wip/osoujikakumei-facts と同件・判断待ち）/ カジタク=浴室16,500は公式に無し（公式トップは19,580円〜「キャンペーン中」）/ ベアーズ=対応エリア6都府県は未確認（公式に都道府県別ページ多数）
- 「ハウスクリーニングのミライ」(mirai-clean.jp)・「ホームクリーンサービス」(homeclean-service.com): 両ドメインとも DNS NXDOMAIN・whois 未登録。Web検索でも事業者見つからず。全238頁に掲載（1頁1枚ずつ）、うち134頁は「公式サイト」ボタンで未登録ドメインへリンク → 判断待ち（第三者がドメイン取得すると誘導先になる）
- URL検査: on・kireiyu・housecleaning110=検出-未登録 / four-l・osouji-labo=登録済み（10/12クロール）/ osoujikakumei・/review/ハブ=未認識
- 作業は worktree ~/projects/site-001-wt1013（node_modules はシンボリックリンクだと Turbopack の next/font が失敗→ cp -c で複製）。メインの未コミット providers.json 等は未着手
- （同日 coordinator 指示）ミライ/ホームクリーンの「公式サイト」リンクのみ削除＝bbbb734: 238頁＋旧スクリプト16本の website 行を削除し、表示は `{company.website && (...)}` で条件描画（再生成でも戻らない）。本番 out/areas 274頁を全件curl: 両ドメインへの参照 0、掲載は各238頁のまま。sitemap lastmod 134。掲載自体を外すかは coordinator が翌日に既定案として宣言予定

### 2026-10-13 カジタク（felmat D7184U）リンクコード受領→設置（MediaXAI「適材適所で設置して」）
- partners.ts に kajitaku 追加（公式生HTML 10/13: /・/house-cleaning/・/about・/zipcode/area・/guide/law・/guide/terms-service）。テキスト E1140960＋600×500バナー 5114084E を /review/kajitaku/ と PartnerCards（TOP・ranking5・services aircon/bathroom/kitchen）に
- company/5 にテキスト N114090G（partnerSlug で描画）・浴室 16,500→19,580・area「全国対応」→43都道府県の対象市区町村。scene/year-end-package に大掃除セット紹介＋640×100 P114083X。1456×180 G114081O は未使用
- 公式内の不一致: キャンセル（規約=前々日正午以降50% / 特商法=前日正午以降50%）・支払い（特商法=カードのみ / about=AEON Pay・WAON POINT も）→併記。対応エリア一覧は43都道府県（山形・福井・長崎・大分なし）
- review の banner img に maxWidth:100%。sitemap +1（3,868）lastmod 14。precheck 全項目OK。7d24c26 → 本番 6頁でコード確認 → Indexing API 4/4
- 未修正: company/5 の「浴室で防カビコーティング」は公式で未確認

### 2026-10-13 アールクリーニング（A8 4X26）設置（MediaXAI）
- 公式 www.r-cleaning.com 生HTML（トップ・各サービス・対応エリア・ご依頼の流れ・安心のための取り組み・FAQ・運営会社）で partners.ts に r-cleaning 追加。運営=株式会社 Fire Works（杉並区）。テキスト 5YRHE＋300×250 601S1（A8はバナーにも別pixel → banner.pixel フィールド新設・review で描画）
- 未使用: バナー 609HT、テキスト「作業実績20万件突破」5YJRM（公式は現在50万件表記）
- 49acb47 は CF ビルド失敗（GitHub check-runs で判明・ログは CF ダッシュボードのみ）→ 空コミット e1743e4 で再ビルド成功。**反映しない時は api.github.com/repos/webmaster0818/site-001/commits/<sha>/check-runs で成否を見る**
- 本番4頁でコード・pixel確認、Indexing API 2/2

### 2026-10-14 朝ルーチン: ミライ/ホームクリーン 掲載ごと外す版（wip・未公開）+ /review/ URL検査
- `wip/remove-unverified-providers-1014`（6ebc27a、ローカルのみ・未push）: エリア238頁から2社を削除（15→13件）、本文「業者15社」→13社 134頁、旧スクリプト/テンプレ16本も削除。out: 2社名0頁・「15社」0頁・業者0件のエリア0頁、ranking/company/review/provider は元々掲載なし。sitemap lastmod 238。precheck 全項目OK（3,869頁）。10/15 に main へ merge→push 予定
- 既存課題（未対応）: 238頁の companies に「おそうじ革命」が2エントリ（key 重複）→ 13件のうち実質12社
- メインのチェックアウトにあった 10/11 の未コミット変更（providers.json・provider/[slug]/page.tsx＝公式口コミ評価 officialRating/survey_rating/hours_list/service_area/access・同市区町村店舗）は `git stash` に名前付きで退避（stash@{0} "wip-2026-10-11 provider口コミ評価…1014退避"）
- URL検査: on・housecleaning110=検出-未登録 / kireiyu・osoujikakumei・/review/ハブ=未認識（kireiyu は 10/13 検出-未登録→未認識）

### 2026-10-14 12:00成長ルーチン: /review/ 比較表＋相互リンク、カジタク/アールクリーニング公式再確認、「検出・未登録」調査
- 確認: /review/kajitaku/・/review/r-cleaning/ 本番200・sitemap掲載・TOP/review/ranking5/services3/sitemap(HTML)からリンク済み（カジタクは company/5・year-end-package も）。canonical自己・index,follow・robots.txt問題なし
- 競合（みん評・駅探PICKS・セレクトラ・オリコン(カジタクは家事代行部門)）: 口コミ出典（みん評/くらしのマーケット＋日付）・他社料金比較表（ダスキン/本舗）・おすすめ/非おすすめ・申込み手順・更新日。アールクリーニング記事は「20万件」「9,500円」など旧数字のまま
- 追加: ①全検証ページに「同じメニューの公式料金を他社と比べる」表（partners.ts の KEY_PRICES＝既存 prices からの抜粋のみ・比較相手は comparePeers=タグ重なり→料金項目数→自分の次から巡回）②「同じジャンルを扱う業者の検証ページ」相互リンク ③/review/ ハブ description にカジタク・アールクリーニング
- カジタク公式再確認(10/14): 最短日数が公式内で不一致（特商法=お申込日から5日後以降 / HC TOP FAQ「最短でもお伺いは3日後以降」/ カジタクとは？「申込から最短３日」）→併記に修正。お客さまの声（/user-voice/・サービス別構成）・宅配/家事代行の口コミ混在の注意・「早く終わったら他の所も掃除」を追加。対応エリア43都道府県（山形・福井・長崎・大分なし）再確認。confirmedAt 10/14
- アールクリーニング公式再確認(10/14): 感謝価格（10/20まで表示）・キャンセル前日15:00・2週間保証・1億円保険・Fire Works 一致。メニューに空室クリーニング・不用品回収・害虫害獣駆除を追加。お客様の声ページは無し。confirmedAt 10/14
- URL検査(10/14): review = 登録済み5（migxl・seifu・nac-duskin・four-l・osouji-labo）/ 検出-未登録4（/review/ハブ・housecleaning110・osoujikakumei・kireiyu）/ 未認識3（kajitaku・r-cleaning・on※10/13は検出-未登録）。サイト全体サンプル18: 登録済み11（provider 6/6・brand・guide-detail・ranking/review-ranking・scene・services/kitchen・TOP）/ クロール済み未登録3（areas/kyoto-fushimi・areas/saitama-kita・/ranking/）/ 404 1（areas/yokosuka 最終クロール4/23・現在200）/ soft404 1（company/4 最終クロール4/24・現在200）
- 見立て: 技術要因なし（canonical/noindex/robots/sitemap/200 すべて正常、/review/ ハブは全3,869頁のフッターからリンクされているのに未クロール、osoujikakumei は252頁からリンクでも未登録）。テンプレ重複率（8文字shingle）は登録済みと未登録で差が小さい（登録35〜39% / 未登録36〜46%）。→ 原因はページ単体より「サイト全体のクロール頻度の低さ」（4月の404/soft404が半年再クロールされていない、多くの最終クロールが8〜9月）＋ 3,869URL中3,525がprovider・238がテンプレ型エリア頁で、新規URLのクロール優先度が上がらないこと、と判断
- 修正後: 本文 約4,000〜5,000字→約4,700〜6,000字（osoujikakumei は 2,973→3,788字）。shingle 共有率は比較表・相互リンクで +4〜10pt（表の行が他頁と共通のため）
- 810f880 → CF success → 本番 12頁 200・比較表11頁（migxl は比較可能な料金なしで非表示）・相互リンク12頁・kajitaku/r-cleaning dateModified 2026-10-14。sitemap lastmod review 12件。precheck ✅ 全項目OK。計測コード集合は本番旧版と12頁とも一致
- Indexing API 2/14（kajitaku・r-cleaning のみ。3件目で429 → 停止。on 以下と company/4・areas/yokosuka は未送信）。sitemap 再送信 204
- ⚠️ ビルド前の out/ は wip/remove-unverified-providers-1014 のビルド物だった（ミライ/ホームクリーン行なし＝本番と不一致）。今回 main から再ビルドしたので out/ は main 相当に戻っている
- 提案（未実施・要判断）: ①Footer に提携11社の検証ページ直リンク（全頁の HTML が変わるので lastmod 一斉更新を伴う）②エリア238頁のテンプレ業者表（同じ業者・同じ文言が全頁に並ぶ）を店舗DB主体に縮小 or 薄いエリア頁の統合 ③provider 3,525頁の sitemap 分割（provider 用 sitemap を別ファイルにし、review/brand/ranking 等の主要頁の sitemap を小さくして GSC で個別にカバレッジ観測）④company/4・areas/yokosuka 等の古い 404/soft404 の再クロール依頼（GSC コンソールの「インデックス登録をリクエスト」）

### 2026-10-15 朝ルーチン: ミライ/ホームクリーン 掲載ごと外す（本番反映）+ おそうじ革命2重の原因調査
- `wip/remove-unverified-providers-1014` を main に merge（2ef4bcf・CLAUDE.md のみ競合→両方残し）。out/ と .next を消して main から再ビルド → out: 2社名0頁・「15社」0頁・「13社」134頁・3,869頁。precheck 全項目OK
- push 09:19 → 本番反映 09:23。本番: tokyo/osaka/yokohama/kobe-nagata/kyoto-shimogyo/kitakyushu-kokuraminami 200・2社名0・「15社」0（「13社」は区ページ側の本文）、エリア22頁サンプルで2社名/15社 0。sitemap 3,869
- Indexing API 4/4（tokyo・osaka・yokohama・kobe-nagata）
- おそうじ革命2重（未修正・判断待ち）: 228頁の companies 配列の1番目と12番目（エディオンハウスクリーンの次）。12番目は元「クリーンプロフェッショナルズ」（架空・cleanpro.co.jp。3/24 add-5-companies.py＝e9f8881、3/25 251cc21 で追加）を 4/10 cb091b9「全ページの架空情報を実在情報に修正」で名前とURLだけ「おそうじ革命」に一括置換したもの。説明文「プロの技術力と低価格を両立…」・窓クリーニングはクリーンプロフェッショナルズの文面のまま（料金・受付時間はその後の修正で革命の値に揃っている）。残り10頁（hiroshima/kawasaki/kyoto-city/niigata/sendai 等の書式違い）も同様に2エントリ

### 2026-10-16 朝ルーチン: 「名前だけ差し替え」行の全件照合（reports/2026-10-16-name-swap-audit.md）
- 履歴上の名前だけ置換は cb091b9 のクリーンプロフェッショナルズ→おそうじ革命のみ（判断待ち・未変更）。架空社名・架空ドメインは app/out とも0（旧生成スクリプトにのみ残存）。新たに おそうじ大使（URL先は太子町の地域店「おそうじ太使」）を発見→外す版 `wip/remove-osoujitaishi-1016`（1852577・ローカル）
- 917613f: ダスキン/アズマ/くらしのセゾン/エディオン/お掃除マスター/ベアーズの料金・受付時間・URLを公式値に（238頁＋旧スクリプト・lastmod 238）。本番238頁 全件新値・旧値0。未修正: サニクリーン料金（公式非掲載）、ベアーズ約64頁・アズマ約58頁が公式の対応エリア外

### 2026-10-16 デザイン全面刷新の依頼（MediaXAI「世界一洗練されたデザインに」・参考 kagi-trouble-navi.com）
- 依頼: 絵文字なし／Nano Banana Pro で高解像度の大きいモノトーン線画アイコン／業者の画像を取得して紹介枠にバランス良く／選択ボタンの色・デザイン統一／背景とのコントラストを考えた枠／TOPにエリア導線／スクロールで出てくるアニメーション／エリアで探す=kagi形式（東京都を最上部の別枠に23区・関東に東京都を入れない・全部折りたたみ・スマホで押しやすく）／23区の記事が無ければ作る／メインアイコン複数案／FV（信頼できそうな笑顔の女性作業者・うそのない数字・2ボタン）複数案
- 提案済み（id 1560536344336535572・1560536373302399009）: FV 3案＋ロゴ5案（scripts/gen-design-proposals.py・gemini-3-pro-image-preview 2K・出力 design-proposals/ は gitignore）。FV の数字=掲載3,525店舗・47都道府県・274エリア・エアコン8,800円〜（おそうじLabo 初回限定）。「〇分以内到着」「業界最多水準」は根拠が無いので不使用。ボタン文言は「お悩みから探す」（指示は「トラブル」→要確認）
- 23区は全23区のページが既にある（app/data/areaMap.json の tokyo-*）→ 新規作成は不要
- 次: FV・ロゴの選択待ち → 残りの改修
- 選択（06:17）: FV=案2・ロゴ=C を色付け → C-1（06:19）
- **第1弾 本番（6c9e459・15:35 反映）**: TopHero（FV案2・数字は providers.json/areaMap.json から計算）・TroubleGrid（9項目・紺の線画アイコン public/images/top/icon-*.webp）・AreaAccordion（東京都別枠＝23区＋多摩、関東に東京都を入れない、全部 <details> で閉じた状態、274エリア全リンク）・Reveal（IntersectionObserver・reduced-motion と JS 無しでは常に表示）。ロゴ C-1 → public/images/logo-mark.png・app/icon.png・favicon.ico・apple-touch-icon。CSS は globals.css の「TOP 刷新」ブロック（.cn-*）
- ⚠️ ヘッドレス Chrome の --window-size=390 は実際には約500pxで描画して切り取る（横はみ出しに見える）。スマホ確認は CDP の Emulation.setDeviceMetricsOverride（scratchpad の mshot.mjs）で scrollWidth==innerWidth を確かめる
- ⚠️ セクション見出しに <header> を使うと「header=1」監査に引っかかる → div
- 次: ①業者紹介枠に各社の公式画像 ②TOP残り・全体のボタン/枠/アイコン統一（WHY CHOOSE US の ✓★ も） ③OG 画像を新ロゴで
- **第2弾 本番（4d69b46）** MediaXAI 06:40「FVと数字の帯を両端まで／ファビコン／業者名が出る所は公式サイトのキャプチャを kagi と同じように」:
  FV・数字帯を全幅に。PartnerCards（全ページ共通）を kagi の「掲載している業者」形式＝公式トップのキャプチャ（public/images/partners/<slug>.webp 1280×800・撮影元と日付 app/data/partner-captures.json）＋「出典：〇〇 公式サイト（日付時点）」。TOP の大手3ブランド枠も同形式。特長（Reasons.tsx）＝事実の文言＋線画アイコン（旧「厳選された優良業者のみ」「口コミ比較」は削除）。.btn-cta/.btn-primary/.btn-outline をサイト全体で紺に上書き（globals.css 末尾）。TOP の二重フッター（page.tsx 内の旧 footer）を削除。ファビコンは /favicon-20261016.png（キャッシュ対策でファイル名を変更）
  計測リンク・pixel の集合は本番と22頁で一致。⚠️ キャプチャにはキャンペーン表示が写る（r-cleaning 10/20まで 等）・110番は「東証上場企業運営」表示（10/27 TOB 後に撮り直し）→ 撮り直し周期を MediaXAI に確認中
- 残: OG 画像を新ロゴで / サイト全体（エリア・review・ranking 等）の見出し・枠の統一 / 旧テンプレの水色リンク色
- **第3弾 全ページのテイスト統一（73eaac2）** MediaXAI 06:55「他のページもすべてテイストをそろえて」: globals.css 末尾の「サイト全体のテイスト統一」ブロックで旧テンプレの共通クラスを上書き（上部の帯 bg-gradient-to-r.from-primary / bg-blue-600 / from-green-600 / hero-section → 霧色＋紺文字・写真と波は非表示、bg-gradient-to-br の色付きアイコン枠 → 紺、text-sky/blue/green → 青緑、カードは細い枠・影なし）。✓1,145個を削除（229ファイル・見出しは削除、行頭は「・」）。会社/サービス別の業者画像を公式キャプチャ＋出典に（東京ガス kaji.tokyo-gas.co.jp・ベアーズ happy-bears.com を追加撮影、ベアーズは LINE ポップアップを閉じて撮影）
  ⚠️ **Tailwind v4 の .collapse は visibility:collapse**。daisyUI の collapse を使っていた旧FAQが234ページで全部見えていなかった → `.collapse{visibility:visible}`＋ラジオ式は答えを常に開く。daisyUI の steps（/guide/）も未スタイル → 非表示
- **OG 画像（7ab303f）**: scripts/make-og.py をロゴ C-1＋作業者の写真に。URL は og-image.png?v=20261016（477箇所）
- 定例: 毎月1日に scripts/capture-partners/run.sh で業者キャプチャ撮り直し（sites.md に登録・次回 11/1）
- **c0c4baa（MediaXAI 07:14 指摘2点）**: ①エリア238頁の「おすすめ業者詳細」の色付きアイコン → `app/components/CompanyShot.tsx`（エリアの companies.name → キャプチャ slug・出典つき）。サニクリーン・お掃除マスター・アズマ・くらしのセゾン・エディオンを追加撮影（計20社が partner-captures.json に）。おそうじ大使はキャプチャなし（外す判断待ち）。36県の [pref] 動的ページは業者枠が無いので対象外 ②/services/{aircon,bathroom,kitchen} の一覧が COMPANIES（大手6社×1サービス）だけ＝2件 → 提携業者（partnersByTag）を統合して10件。革命・カジタクは提携側のみ（/company/3・5 へは「会社情報」リンク）。料金はそのサービスのメニューだけ（無ければ「検証ページで確認」）。下の PartnerCards は二重になるので外した。お気に入りの死にボタン・未確認の特徴（業界最安クラス・50日間の研修）を削除
- **ce63dd9（MediaXAI 07:28・07:30）**: ①/services/ の対応エリア絞り込みが東京・神奈川・埼玉・千葉の4択だけ → 47都道府県（servesPref：県名・地方名 関東/首都圏/1都3県/関西/近畿/東海/九州/東北・「全国」で該当）②エリアの「おすすめ業者比較」表（217頁）の w-12 丸アイコン → `<CompanyShot compact />` の公式サムネイル＋表下に出典。⚠️ tokyo-minato は表の map 変数が `c`（company ではない）→ 置換後に tsc で確認すること
- **43926fe＋99be1f7（MediaXAI「外して」）**: エリア238頁から重複2つ目の「おそうじ革命」（元架空業者クリーンプロフェッショナルズの行）と「おそうじ大使」を削除（13→11件・「業者13社」→「11社」134頁）。43926fe は CF ビルド失敗 → 空コミット 99be1f7 で成功。⚠️ 旧一回限りスクリプト16本（create-*.py 等）には2社が残る＝再実行禁止（gen-areas.py は chiba-chuo テンプレ経由なので反映済み）。wip/remove-osoujitaishi-1016 は不要になった
- **c67862b（MediaXAI「ほかにも旧テンプレ残っていないかチェック」）**: 全3,869頁を機械監査（色付きアイコン・旧色/グラデ・イラスト・絵文字/★・お気に入り・header/footer≠1）。残っていた /areas/ ハブ → AreaAccordion、/ranking/ /scene/ /guide/ → cn-trouble-card / cn-reason（アイコン10点追加 public/images/top/）、ranking/scene の二重フッターと scene 詳細4頁の「© 2024」フッターを削除。監査結果すべて0
- **d565332（MediaXAI 09:11「areas配下のキャプチャやり切れてない（〇〇の店舗一覧）」）**: 店舗カードにブランド公式サイトのサムネイル（CompanyShot.tsx の StoreBrandShot・providers.json の brand コード honpo/duskin/kakumei → キャプチャ）。AreaProvidersLead・OfficialRatingStores・ranking/review-ranking・brand/[brand]（PartnerShot＋評価上位カード）・provider/[slug]（大きいキャプチャ＋近隣店舗カード）。監査＝out/ の /provider/ への card リンク 26,722 枚すべてに cn-store-thumb（漏れ0）。⚠️ 前回は「業者紹介」だけ見て店舗一覧を見落とした＝**「キャプチャを入れて」は、業者・店舗・ブランド名が出る全部品を out/ で数えてから完了報告する**

### 2026-10-16 おそうじ本舗の公式レビュー評価を取り直し（MediaXAI「（〜2026-08-15時点）この「時点」を月単位で最新化できない？」）
- `scripts/refresh-official-ratings.py`: honpo 全1,876店の店舗ページ .c-review__value と「N件」を読み直す。評価欄が件数だけ（スコア非表示＝公式 /policy/guideline/ の条件未満）の店は評価を消す。取得失敗は前回値と前回日付のまま。結果: 更新634・変化なし56・新規70・スコア非表示化192・取得失敗31 → 評価あり 886→764店
- 評価の「時点」は新フィールド `rating_checked_at`（verified_at は住所等の確認日のまま）。provider/[slug]・OfficialRatingStores・ranking/review-ranking は rating_checked_at ?? verified_at を表示
- 定例: 毎月1日に capture-partners と同時に実行（workspace/sites.md 登録済み・次回 11/1）

### 2026-10-16 サイト全体の文言をビジネス文書基準に（writing-standards §8・MediaXAI）
- e4d0bc6（+ 続きのコミット）: 共通部品（layout メタ・TopHero・Reasons・TroubleGrid・AreaAccordion・PartnerCards・OfficialRatingStores・AreaProvidersLead・SeasonalCleaningNote・BrandCompareTable・serviceDetailData）、provider テンプレ（3,525頁のメタ説明・チェックポイント）、review/ranking/services/guide/faq/price/scene/comparison/guide-detail/company/brand/areas ハブ・[pref] を「です・ます」「〜をおすすめします」「ご確認ください」型に。partners.ts は fitFor/checkBefore と地の文のみ（「」内の公式引用・affiliateLabel は不変）
- エリア238頁: テンプレ文言（全域対応！・徹底比較・本記事・賢く安く・⏰・失敗しない・〜しましょう等）を正規表現で一括置換、地域見出し364種（「〇〇、△△対策重要」型）を宣言形の文に手作業マップで置換、本文の「非常に」「お得」「しっかり」「もらえます」等も置換。二重語「中央区は中央区は」60頁を解消。同じ置換を scripts/area_data_group*.py と gen-areas.py にも反映（再生成で戻らない）。旧一回限りスクリプト（create-*.py 等）は未変更＝再実行禁止のまま
- 監査: out/ 全3,872 HTML で copy-audit の NG 語＋追加語（ましょう・徹底比較・失敗しない・確認日つき・⏰・お得・非常に 等）0件。計測コード集合 477頁が本番と一致。precheck 全項目OK。sitemap lastmod 3,865件（privacy/terms/contact/for-business 以外）
- 残る「！」「しっかり」「徹底」は ASP 提供のリンク文言と公式サイトの引用のみ（改変不可）
- 未修正（事実・要判断）: 「研修期間50日以上が一つの基準」「大手は必ず加入しています」「評価3.5以上が目安」（エリア228頁）、company/3 の features「業界最安クラス」「50日間の研修」「約420店舗」、本舗「業界最大手」「約1,900店舗」、/faq/ の相場（エアコン10,000〜15,000円）が TOP・/price/（8,000〜15,000円）と不一致、繁忙期の記述がページにより「3-4月・9-10月」と「5〜8月」で不一致、comparison 5頁・guide-detail 7頁・scene/airbnb・office は本文の無いスタブ

### 2026-10-17 形容詞＋です止め（「〜多いです」「〜高いです」等）の解消（writing-standards §8 追補）
- d238ff6: エリア228頁（chiba-chuo テンプレ＝gen-areas.py の雛形を含む）・トップ・/faq/ の自前文 266箇所を手作業マップで書き換え（例「セット割引が適用される業者が多いです」×227 →「セット割引を適用する業者が多くなっています」、「需要が高いです」→「需要が高い傾向があります」、「在宅が望ましいです」→「在宅での対応をおすすめします」、saitama の FAQ 質問文も）。意味・数値は不変。area_data_group*.py・gen-areas.py 本体には該当文なし
- 監査: main から再ビルドした out/ 全 HTML（本文・meta・JSON-LD・RSC ペイロード）で `(い|しい)です[。、）]` 0件（前 266・引用0）。計測コード集合 477頁が修正前ビルドと一致（本番とも抽出一致）。precheck 全項目OK。copy-audit --n 40 NG 0
- 未変更: 旧一回限りスクリプト（create-*.py・*-logic.txt・kyoto-header.txt）と app/areas/*/page.tsx.bak（ビルド対象外・再実行禁止のまま）に旧文言が残る

### 2026-10-17 期限切れ情報の最適化（MediaXAI「期限切れは、最適化して」）
- providers.json honpo-21289（おそうじ本舗 八戸ニュータウン店）の定休日「不定休(7月30日から8月5日まで臨時休業)」→「不定休」。臨時休業の期間が経過済みのため括弧書きを削除（公式店舗ページ https://www.osoujihonpo.com/shop/detail/21289/ は 10/17 時点でも同じ括弧書きが残っているが、期間は経過済み。定休日「不定休」は公式どおり）。反映先: /provider/honpo-21289/ と /areas/aomori/
- 継続確認（変更なし）: おそうじLabo「抗菌・防カビコートはキャンペーンで0円（終了時期未定）」= 公式 https://osojilabo.com/ で 10/17 も「抗菌・防カビコート無料プレゼント中！※終了時期未定」（通常+2,200円→0円）。アールクリーニング「感謝価格は10月20日までの表示」= 未来日のため対象外。ハウスクリーニング110番の公開買付期間（〜10/27）も未来日
- 計測コード集合 99件 修正前後一致。precheck 全項目OK
- （10/17 2回目・全数）main から再ビルドした out/ 3,872 HTML を「◯月◯日まで／月末まで／今月／20XX年◯月／キャンペーン／期間限定／早割／臨時休業／今年」等で全数検索 → 経過済みの期限は 0（af2f86ae 反映済み・本番 /provider/honpo-21289/・/areas/aomori/ とも括弧書き 0）。title・og・h1・description・headline の月表記は【2026年10月確認】11・【2026年版】3 のみ（当月）＝変更なし
- 日付のない「実施中」記載を公式で再確認（10/17・変更なし）: MIGXL 床ワックス等「【キャンペーン中】無料」= https://migxl.com/menu/all.html／フォーエル キャンペーン 1台目11,000円・2台目以降9,000円 = https://www.4l-japan.com/ac.html、早割 11/24申込・11/30施工まで = /campaign.html／カジタク スタンダード 14,300→11,880円・2台以上11,550円・お掃除機能付き 25,080→18,980円 = https://www.kajitaku.com/house-cleaning/airconditioner/（期限表記なし）／おそうじLabo 初回限定 総額1,000円OFF = https://osojilabo.com/。アールクリーニング 10/20・110番 TOB 10/27 は未来日（110番「東証上場企業運営」は 10/27 後に確認）
- 重複2つ目の「おそうじ革命」行（元クリーンプロフェッショナルズ）は 43926fe（10/16）で本番から削除済み＝238頁すべて革命1エントリ・説明文「プロの技術力と低価格を両立」0・大使0。wip/remove-osoujitaishi-1016（1852577）とも不要（作業不要）

### 2026-10-18 サニクリーンの料金・受付時間・メニューを公式表記に（朝ルーチン P2・本番）
- 公式（2026-10-18 生HTML）: https://www.sanikleen.co.jp/housecleaning/ ・/service/kitchen.html・/service/bathroom.html・/service/restroom.html はキッチン・浴室・トイレの料金表示なし＝「無料お見積もりサービス」で料金を案内。受付は全ページ「受付10:00〜16:00（土・日・祝日を除く）」（03-3276-7271）。メニュー＝エアコン・キッチン・浴室・トイレ・換気扇/レンジフード・フロア・まるごと（窓は無し）。エアコン税抜10,000円〜・換気扇税抜18,000円〜は「東京都内参考価格」（エリア表には列なし）
- 修正: 238頁＋旧生成スクリプト17本（batch-update.py・create-*.py 13本・update-companies.js・kyoto-header.txt・update-17pages.py）のサニクリーンのブロック内だけ: kitchen 17,600/bathroom 18,700/toilet 8,800円〜 →「見積もり制」、hours「9:00-18:00（年中無休）」→「電話受付 10:00〜16:00（土・日・祝日を除く）」、services の「窓クリーニング」→公式メニュー名。sitemap lastmod 238（2026-10-18）
- out/（表示HTML・サニクリーンの表行とカード内）: 旧料金 455/455/455箇所(238頁)→0、年中無休 134→0、頁全体の年中無休 376→242（他社分は不変）。precheck 全項目OK。計測リンク（app 内）48→48
- 未修正: description「全国対応の大手清掃会社です」の「大手」は公式に表現なし（47都道府県対応・50年以上の実績は公式にあり）
- 10/18 タスク「12番目のおそうじ革命を消す wip」は 43926fe（10/16）で本番反映済みのため作業なし（main: 238頁すべて革命1エントリ・大使0・「13社」0・「11社」134頁。本番 4頁サンプルでも同じ）

### 2026-10-19 朝ルーチン P1: 12番目「おそうじ革命」（元架空業者クリーンプロフェッショナルズ）の削除＝旧生成スクリプト側の後始末
- エリア238頁・gen-areas.py（chiba-chuo テンプレ経由）・scripts/area_data_group*.py は 43926fe（10/16）で反映済み＝main: 238頁すべて革命1エントリ、companies 実件数 11 と「業者11社」134頁が一致、架空社名・説明文「プロの技術力と低価格を両立」0
- 残っていた旧一回限りスクリプト16本（add-5-companies.py・create-*.py 13本・update-17pages.py・kyoto-header.txt）は原名「クリーンプロフェッショナルズ」/cleanpro.co.jp のままだった → ブロックを削除し、本文「業者13社」→「業者12社」（実件数12・おそうじ大使はまだ残る＝10/20 に wip/remove-osoujitaishi-1016 で外す）。py_compile OK。旧スクリプトは引き続き再実行禁止
- out/ 再ビルド: precheck 全項目OK（3,869頁）、計測リンク 1447→1447（ユニーク 54→54）、架空社名・大使 0
- wip/remove-osoujitaishi-1016 は最新 main に rebase（ページ側の大使削除は 43926fe で反映済みのため、旧スクリプトからの大使削除と「業者12社」→「11社」だけが残る）。未push

### 2026-10-19 12:00 成長ルーチン: 店舗ページ（provider 3,525頁）テンプレの強化（GSC 11〜20位の店舗クエリ）
- 対象クエリ（9/19〜10/16）: おそうじ本舗 名護 11.4位／ダスキン西都賀 レビュー 11.8（/areas/chiba/ に着地・店舗頁 duskin-1341847 は既存）／おそうじ本舗 敦賀 11.4／白河 10.5／菰野 10.9／ダスキン北伊丹支店 12.7
- 公式店舗ページ（10/19 生HTML）との差: ①title が「店舗名（県＋市区町村）」（例 おそうじ本舗　名護大北店（沖縄県名護市）、ダスキン西都賀サービスマスター｜千葉県千葉市若葉区…）→ うちは県名止まり ②公式は電話番号・クチコミ件数・標準料金を掲載 → うちは本舗の電話なし・評価点の無い店の件数非表示・料金なし ③ダスキンは店舗別レビューの掲載なし
- テンプレ（app/provider/[slug]/page.tsx）: title を「店舗名（県＋市区町村）の店舗情報・料金・対応エリア」（市区町村は住所から。政令市は区まで・郡部は郡＋町村・名前に市町村郡を含む自治体は先に照合）。h1 直下に「◯◯市を拠点とする…の店舗です」＋Googleマップ（住所検索）リンク。本舗/ダスキンにブランド公式の標準料金表（10/19 公式サービスページで確認・通常価格・出典リンク・注記）。本舗の評価点なしクチコミ件数を表示、ダスキンは「公式店舗ページに店舗別レビューの掲載なし」を明記
- refresh-official-ratings.py: 評価が整数（「5」）の店を読めていなかった（小数点必須の正規表現）→ 修正し 10/16 の取得キャッシュから再計算（--cache-date・通信なし）: 評価あり 764→941店（+177）。評価点なし店は件数のみ保持（10/16 時点の値に更新）
- 個別（10/19 公式店舗ページで確認）: 本舗4店に電話番号（名護大北 0120-06-2041・敦賀 0120-560-682・白河 0120-49-2007・菰野 0120-905-927）・クチコミ件数（名護 4・敦賀 8・白河 5.00/17件・菰野 4.94/16件）、6店の verified_at=2026-10-19（住所・営業時間・定休日・電話は公式と一致）。住所の県名二重 2件（kakumei-meguro_gakugeidai・kakumei-sakado_tsurugashima）を修正
- 未対応（件数のみ）: 本舗 1,872店は電話番号が未収録（公式店舗ページにはあり）。kakumei-saitama_hanno は slug=飯能だが住所が坂戸市。provider の og:title/og:url は layout 既定のまま（全3,525頁）
- out: 3,869頁・precheck 全項目OK・計測リンク 2256→2256・sitemap lastmod provider 3,525（URL数 3,869 不変）

### 2026-10-20 朝ルーチン: 店舗ページ 3,525頁の og:title・og:url を title・canonical と同じ値に
- 原因: provider/[slug] の generateMetadata に openGraph が無く、layout 既定（og:title=サイト名・og:url=TOP）を継承していた。Next.js は openGraph をオブジェクトごと置き換える（浅いマージ）ため、既定値を `app/siteOpenGraph.ts`（SITE_OPEN_GRAPH）に切り出し、layout と provider で共用（provider は `{...SITE_OPEN_GRAPH, title, url: canonical}`）
- 本番全3,525頁（sitemap の provider URL を全件 curl）: og:title=title 0→3,525・og:url=canonical 0→3,525、既定値 3,525→0。out/ の provider 以外 347頁の og/twitter メタは変化なし。計測リンク 3,395→3,395。precheck 全項目OK。a76c43d6（CF success）
- sitemap lastmod は変更せず（表示内容は不変・provider は 10/19 のまま）。Indexing API 送信なし
- 未修正（件数のみ）: og:description・twitter:title は provider 3,525頁とも layout 既定のまま。provider 以外で og:url=TOP の頁が 101（[pref] 動的ルートの県ページなど）
- kakumei-saitama_hanno（10/20 公式 https://www.osoujikakumei.jp/saitama_hanno/ 生HTML）: 公式の店名は「埼玉わかば店」、住所 〒350-0237 坂戸市浅羽野２−４−２１、電話 0120-849-242、対応エリア11市（埼玉7・東京4、公式も坂戸市は掲載なし）＝ providers.json と全項目一致。店舗紹介に「元々、おそうじ革命埼玉飯能店として４年ほど」＝旧店名の名残で、公式URLも saitama_hanno のまま。slug は公式URLのパスに合わせたものなので変更不要（変えるなら301・判断事項）。インボイス番号は公式に「インボイス登録済み」のみで番号の記載なし→ verified_at は据え置き

### 2026-10-20（続き）P3: provider の og:description・twitter と、provider 以外101頁の og:url（coordinator 指示）
- siteOpenGraph.ts に SITE_TWITTER を追加（layout も共用）。provider は `openGraph:{...SITE_OPEN_GRAPH,title,description,url}`・`twitter:{...SITE_TWITTER,title,description}`
- provider 以外で openGraph を持たない 49 ファイル（guide・ranking 6・faq・for-business・brand/[brand]・guide-detail 7・price・services-detail 10・review・review/[slug]・comparison 5・scene 6・company/[id]・areas/[pref]・areas/{hiroshima,kanagawa,kyoto,niigata,sendai,shizuoka}）に `openGraph:{...SITE_OPEN_GRAPH,url:<canonical と同じ式>}` を追加。out/ で変わったのはこの101頁の og:url のみ
- 本番 sitemap 全3,869URL（7f05f2d2・CF success）: provider og:description=description 0→3,525・twitter:title=title 0→3,525・twitter:description=description 0→3,525。provider 以外 343頁（TOP除く）の og:url=canonical 242→343・og:url=TOP 101→0。計測リンク 3,395→3,395。precheck 全項目OK。lastmod 変更なし・Indexing 送信なし
- 未修正（件数のみ）: 上記101頁は og:title・twitter はサイト既定のまま（og:title 既定 101）
- ⚠️ check-runs を未認証で20秒ごとに叩くと GitHub API の rate limit（60回/時）に当たる → 認証付き（adminトークン・値は出さない）で60秒間隔に

### 2026-10-21 朝ルーチン: provider 以外101頁（県ページ等）の og:title・og:description・twitter:title/description を各頁の値に
- `app/siteOpenGraph.ts` に `withPageSocial(metadata)` を追加（title・description・alternates.canonical を og:title/og:description/og:url と twitter:title/twitter:description に写す。画像・siteName はサイト既定）。10/20 に `openGraph:{...SITE_OPEN_GRAPH,url}` を入れた49ファイルを `withPageSocial({...})` で包む形に置換（og:url は canonical から自動）
- out/: 変わったのはこの101頁の og:title・og:description・twitter:title・twitter:description の4項目のみ（og:url 等は不変）。計測リンク 1738→1738（ユニーク 48→48）。precheck 全項目OK
- 本番 sitemap 全3,869URL（99d0f17b・09:33 反映）: og:title=サイト既定の頁（TOP除く）101→0、og:title≠title 101→0、og:description≠description 101→0、twitter:title≠title 106→5、twitter:description≠description 107→6。変化したのは101URLの4項目のみ・og:url≠canonical 0→0。計測リンク 1738→1738（ユニーク48→48・URL別集合も全一致）
- 未修正（件数のみ）: 独自 openGraph を持つ頁で twitter が title/description と不一致 5頁（about・contact・privacy・terms＝og は正しいが twitter:title/description がサイト既定、areas/tokyo＝twitter:title が「…おすすめ比較 | クリーンナビ」で title の「| 料金・口コミ」なし・twitter:description 不一致）

### 2026-10-22 朝ルーチン P3: about・contact・privacy・terms・areas/tokyo の twitter:title/description を各頁の値に
- about/contact/privacy/terms は独自 openGraph（中身はサイト既定＋各頁の title/description/url と同じ）を削除して `withPageSocial({...})` で包んだ（og は出力不変）。areas/tokyo は og:image:alt が独自（東京都の…）なので withPageSocial を使わず twitter の title/description だけ title・description と同じ文字列に
- out/ 3,872 HTML の head（title・description・canonical・og:*・twitter:*）を前回ビルドと全件比較: 変わったのはこの5頁の twitter:title・twitter:description のみ。計測リンク 3,394→3,394（ユニーク100→100）。precheck 全項目OK。841bbf59 → 本番 09:27 反映、5頁とも twitter:title=title・twitter:description=description（before 0/5 → 5/5）、旧値 5→0、og は不変
- sites.md P3「TOP『優良業者のみ掲載』」: cleaning-choices の TOP には無い（Reasons.tsx の「厳選された優良業者のみ」は 4d69b466＝10/16 に削除済み、layout の FAQPage JSON-LD の「基準を満たした優良業者のみを掲載」も a58ec6c9 で削除済み）。本番 TOP・out/ 全 HTML とも「優良」0件。「優良業者のみ掲載」の指摘は growth/findings_jiro2_20261016.md の zouen-navi.com（companies.json）の項目＝取り違えと思われる

### 2026-10-23 朝ルーチン: エリア238頁のダスキン受付時間を公式表記に
- 照合（2026-10-23 公式生HTML）: ダスキン servicemaster のキッチン20,680・浴室22,000・トイレ10,340円（water/sm000080・090・100）＝一致。カジタク キッチン/浴室/トイレ&洗面所 19,580円〜（/house-cleaning/）・電話10:00～17:00 年末年始除く（/guide/law）＝一致。おそうじ革命 キッチン/浴室17,930・トイレ8,250円（/price/）＝一致
- 不一致1件: ダスキン hours「9:00-18:00（店舗により異なる）」は公式に記載なし。https://www.duskin.jp/inquiry/ の電話窓口（商品・サービス）=「0120-100100 フリーダイヤル/8時～20時・年中無休」（9時～18時は DDuet 会員サイト窓口・平日）→「電話受付 8:00〜20:00（年中無休）」に。238頁＋旧生成スクリプト17本のこの文字列のみ置換（ダスキンのブロックにしか無いことを確認）。sitemap lastmod 238
- out/: 新文言 134頁（各2箇所＝268）・旧文言 0。計測リンク 3,395（app 内 56→56）。precheck 全項目OK。92e51054
- 未修正（判断待ちのまま）: company/2 のダスキン workingHours「9:00〜17:00」・1963/約1,600拠点（会社ページ17件の判断待ちに含む）

### 2026-10-24 朝ルーチン P2: 会社ページ等6頁のダスキン サービスマスターを公式会社概要と照合
- 照合（2026-10-24 公式生HTML）: duskin.co.jp/company/profile/＝株式会社ダスキン 設立 1963年2月4日、/company/history/＝1971年1月 サービスマスター事業開始、/company/business/cleancare/＝サービスマスター 1,222拠点（2026年3月末現在・国内）。servicemaster 浴室 22,000（sm000090）・キッチン 20,680（sm000080）・トイレ 10,340（sm000100）。duskin.jp/inquiry/ 電話 8時～20時・年中無休。公式のセット料金は「2メニュー以上で5%/10%OFF（DDuet クーポン）」で、固定額のセットは無い
- 修正（company/2・brand/duskin・services/bathroom・ranking 3頁＝BrandCompareTable）: 「1963年創業の老舗クリーニングブランド」「創業60年以上の実績」→「株式会社ダスキン（1963年設立）が1971年から展開」「1971年からサービスマスター事業を展開」、約1,600拠点→1,222拠点（2026年3月末現在）、浴室 19,800→22,000、company/2 の「浴室+洗面所セット 28,600・浴室+トイレセット 29,700」（公式に無い）→キッチン 20,680・トイレ 10,340（行数3のまま）、workingHours 9:00〜17:00→電話受付 8:00〜20:00（年中無休）。sitemap lastmod 6
- out/: 見える文字が変わったのはこの6頁のみ。旧値（1,600拠点 12・1963年創業 11・創業60年 11・9:00〜17:00 1）→0。計測リンク 3,394→3,394。precheck 全項目OK。75cd4651
- 未修正（件数のみ・判断待ちのまま）: ダスキン「損害保険加入済み」「プロの研修制度」は今日の公式ページで未確認。本舗「業界最大手」・約1,900店舗、革命 約420店舗等は会社ページ17件の残り

### 2026-10-25 朝ルーチン P2: 会社ページ等のダスキン「損害保険」「研修制度」とおそうじ本舗の店舗数を公式と照合
- 照合（2026-10-25 公式生HTML）: duskin.jp/faq/detail.aspx?id=634（清掃サービス全般）＝「万一の場合に備えて損害賠償責任保険に加入」。duskin.jp/servicemaster/ POINT2＝「教育されたスタッフがお伺いします」「スタッフへの教育を徹底」（「研修制度」の語は無し）。duskin.jp/manzoku/servicemaster/＝「満足の保証」（品質が充分でなかった場合はやり直し・サービス実施日を含む3日以内・土日祝除く）。本舗: osoujihonpo-fc.com（公式FC）＝「全国に1,765店舗（2023年9月現在）」「店舗数業界No.1 ※2026年4月期…市場調査（日本マーケティングリサーチ機構）」。osoujihonpo.com のトップ・/about/・/shop/ と hitowa 会社概要に店舗数の記載なし
- 修正: ダスキン「損害保険加入済み」→「損害賠償責任保険に加入」（company/2 features・guarantee、brand/duskin、BrandCompareTable＝ranking 3頁）、「プロの研修制度」→「教育されたスタッフが訪問」、company/2 説明文「専門的な技術と設備を備え、トラブル時のサポート体制を整えています」（公式で未確認）→満足の保証＋損害賠償責任保険。本舗 約1,900店舗→1,765店舗（2023年9月現在）（company/1・brand/osoujihonpo・services/aircon）、「業界最大手」→公式記載の「店舗数業界No.1」（2026年4月期・日本マーケティングリサーチ機構の調査）（company/1・brand/osoujihonpo・BrandCompareTable）。エリアページのダスキン/本舗ブロックには該当記述なし（エリアの「損害保険に加入している業者を選ぶ」は一般論で対象外）
- out/: 見える文字が変わったのは8頁のみ（company/1・2、brand/duskin・osoujihonpo、ranking 3、services/aircon）。ダスキンの損害保険加入済み 11→0（全体 22→11＝残りは本舗）・プロの研修制度 1→0・約1,900店舗 12→0・業界最大手 11→0。計測リンク 1158→1158。sitemap lastmod 8。precheck 全項目OK。c77d387f
- 未修正（件数のみ）: 本舗「損害保険加入済み」11（5頁）は今日は未照合。company/1 本舗説明の「スタッフは全員、独自の研修プログラムを修了した有資格者」（公式トップは「皆厳しい研修を受けています」・有資格者は未確認）。本舗 1,765 は2023年9月時点の公式値（当サイト集計 1,872 とは別物）
- ⚠️ c77d387f は CF Pages で約25分 in_progress の後 Build failed（ローカルビルド・precheck は成功・ログは CF ダッシュボードのみ）→ CLAUDE.md コミットの push で再ビルド

### 2026-10-26 朝ルーチン P2: おそうじ本舗「損害保険加入済み」「全員が研修を修了した有資格者」・おそうじ革命「約420店舗」を公式と照合
- 照合（2026-10-26 公式生HTML）: 本舗 osoujihonpo.com/house-cleaning/faq/service/＝「万一に備えて責任保険に加入しております…補償期間は作業後30日間です」（「損害保険」の語は無し）。トップ・/about/＝「おそうじ本舗のスタッフは、皆厳しい研修を受けています」、faq/working_staff/＝「サービス、技術、接客など一定以上のクオリティーに達した『おそうじ本舗』ライセンス保持者が担当」（「全員」「有資格者」は無し）。革命: osoujikakumei.jp のトップ・/company/・/franchise/・/faq/・/locations/（JS描画）・news/archives/196（10月25店舗開店）、運営会社 kireione.co.jp/company のいずれにも総店舗数の記載なし。トップ＝「全国の各エリアに対応しています（一部を除く）」「万一の事故にも損害保険加入」、/faq/＝「損害賠償保険に加入」、/franchise/＝「50日間研修」（＝既存の「50日間の研修」は公式表記どおり）
- 修正: 本舗 損害保険加入済み→「責任保険に加入（補償期間は作業後30日間）」（company/1 features・guarantee、brand/osoujihonpo、BrandCompareTable＝ranking 3頁）、company/1 説明「全員、独自の研修プログラムを修了した有資格者」→皆厳しい研修＋ライセンス保持者が担当（公式文言を引用）。革命 area「全国対応（約420店舗）」→「全国対応（一部地域を除く）」、説明「全国約420店舗を展開」→「全国の各エリアに対応（一部地域を除く）」、特徴「全国約420店舗展開」→「損害賠償保険に加入」。エリア238頁（表示は135頁）の革命ブロック「約420店舗を全国展開しています。」→「全国の各エリアに対応しています（一部地域を除く）。」＋旧生成スクリプト16本の同文
- out/: 見える文字が変わったのは141頁（エリア135＋company/1・3、brand/osoujihonpo、ranking 3）。約420店舗 273→0・損害保険加入済み 11→0・有資格者の文 1→0。計測リンク 3,395→3,395。sitemap lastmod 141。precheck 全項目OK。aa05becf
- 未修正（件数のみ）: 革命「業界最安クラス」（company/3）・「技術力と価格のバランス」（エリア）は今日は未照合。本舗の店舗数 1,765 vs 1,872 は判断待ちのまま

### 2026-10-26 16:00 遅れ挽回ルーチン: 本舗ハブ・provider テンプレ・エリア要点（1デプロイ）
- 落ちたページ（provider 9本・areas/yokohama）の URL検査: 全て「送信済み・登録済み」・Google canonical=自己。provider の最終クロールは 9/1〜9/15（10/19 テンプレ改善は未クロール）、duskin-3632557 のみ 10/22
- 原因: 順位はほぼ不変で表示回数が激減（honpo-21057 42→2・honpo-17391 36→1）。「おそうじ本舗」「おそうじ本舗 店舗一覧」の表示が店舗ページ（5〜9位・クリックあり）から /brand/osoujihonpo/（「おそうじ本舗」23.6位）に移った＝ハブが受け皿になったが順位が低い。duskin-3632557 は「ダスキン服部南 レビュー」の検索自体が今期0（需要減）。yokohama は 50位台で表示半減（原因不明）
- 修正: ①app/data/brandPrices.ts に標準料金を共通化（全行 10/26 公式で再確認・ダスキン キッチン 20,680 追加・確認日 10/19→10/26。ダスキンの店舗別レビューなしの確認日は 10/19 のまま） ②brand/osoujihonpo・duskin: title「店舗一覧（全国N店舗）・料金・対応エリア」・h1「店舗一覧・料金・特徴」、冒頭に要点（店舗数・都道府県数・公式店舗検索）＋標準料金表、都道府県ジャンプ（#pref-xx）、FAQ4問＋FAQPage（出典・確認日つき）。おそうじ革命ハブは対象外（不変） ③provider: 所在の市区エリアページへのリンク＋パンくず4階層（1,655頁）。title は不変（10/19 変更から7日以内） ④AreaProvidersLead（274頁）: 冒頭に「要点」＝区内店舗数・近隣対応店舗数・本舗/ダスキンの箇所別標準料金
- out: 3,869頁・precheck 全項目OK・計測リンク 1738→1738（ユニーク48）。sitemap lastmod 3,565（provider 3,289・areas 274・brand 2）
- 判断待ち: おそうじ革命の provider 452頁・ハブは掲載中（10/16「外して」は重複2つ目の革命行と大使のみ）。kakumei-tokorozawa_seibuenmae 等は未変更

### 2026-10-27 朝ルーチン: ハウスクリーニング110番 TOB 後確認＋おそうじ革命「業界最安クラス」「技術力と価格のバランス」照合
- 110番（公式 hoycambiomibombilla.com 生HTML：トップ・/price/・/flow/・/faq/・/company/）: 運営企業＝シェアリングテクノロジー株式会社（名古屋・代表 片山善隆）・24時間365日受付・請負賠償保険・お見積り後の追加料金なし・料金（15,200/19,600/17,400/16,300/9,700/14,100/43,800/25,100/48,200/62,600/26,400/48,400/61,600円〜）・出張費注記・作業前支払いの注記・「東証上場企業運営」「東証上場」画像 alt とも変化なし＝当サイト修正なし。公開買付期間は本日 10/27 まで、結果は未公表（10/27 朝時点。sharing-tech.co.jp の IR ニュースは JS 描画で生HTMLから読めず、ウェブ検索でも結果・延長の開示は見当たらず）→ 10/28 以降に結果開示と公式表示を再確認
- おそうじ革命（公式 osoujikakumei.jp 生HTML：トップ・/price/・/faq/・/support/faq/・/company/・/franchise/）: 「業界最安クラス」の語は無し（公式＝「エアコンクリーニングは相場より安い」FAQ・「適正価格」「全国一律価格」/price/・「コスパ6年連続第1位（2020〜2025年 オリコン顧客満足度調査 ハウスクリーニング コストパフォーマンス）」トップ）。「技術力と価格のバランス」も無し（トップ＝「業界最長クラスの徹底した初期研修『イールシステム』で常に高い技術力と接客を維持」）
- 修正: company/3（CompanyPageClient.tsx）features「業界最安クラス」→「全国一律価格」（1頁）。precheck 全項目OK
- 判断待ち: 「技術力と価格のバランス」＝エリア 238ファイル（表示 135頁）＋company/3 説明文＝見える頁 136（100頁以上のため未修正）

### 2026-10-27 16:00 遅れ挽回ルーチン（2回目）: 所沢西武園前店・革命3店の要点、中央区10頁の書き分け、新潟アズマ・中野キッチン・大阪ランキングの冒頭の答え（1デプロイ）
- 店舗ページの個別追記 `app/data/providerExtras.ts`（テンプレ全体は不変・4店のみ）: kakumei-tokorozawa_seibuenmae に title/description 差し替え（「エアコンクリーニング・ハウスクリーニングの料金・予約方法」。provider title 前回変更 10/19＝7日ルール外）＋要点（所在地・公式の対応エリア70市区町村・予約の流れ・支払い・早朝/夜間・公式総合評価4.7/7件）＋全国一律の料金表（公式 /price/ と店舗ページ 10/27 生HTML）。aichi_owari_asahi（評価5.0/6件）・chiba_kisarazu・chitose_eniwa は要点＋料金表＋「ブランド全体はおそうじ革命の店舗一覧へ」（「おそうじ革命」での店舗ページ分散＝主ページはハブ）。title は3店とも不変
- 所沢の語は「＞所沢市 …人気/おすすめ/アクセス」形式が多く、順位計測ツール等の機械的なクエリの可能性（クリック0の一因）
- 中央区10頁に `ChuoWardSwitcher`（このページはどの中央区か＋別の中央区9件へのリンク）。osaka-chuo/tokyo-chuo の description・ヒーロー文に地名（心斎橋・難波／銀座・日本橋）、tokyo-chuo の h1 を「東京都中央区」に。title は不変
- niigata: 「アズマのホームクリーニングの店舗（新潟県）」枠（公式対応エリア＝新潟県は佐渡市・粟島浦村以外対応／FC一覧12店に新潟なし／電話 0120-120-083 平日9-17時・2026-10-27 公式）
- tokyo-nakano: title に「キッチン・浴室・エアコンの料金」、冒頭にキッチン料金の安い順表（頁内 companies から生成）。osaka: 冒頭に「ランキングの見方」＋3ブランド箇所別料金表＋/ranking/ 導線
- ⚠️ 判明（未修正・判断待ち）: アズマ公式の「対応できないエリア」は大阪・京都・兵庫・奈良・富山・石川・島根・沖縄が全域。当サイトはこの府県のエリア59頁（大阪30・京都13・兵庫13・富山・石川・沖縄各1）にアズマを掲載中（高知1頁は公式の対応/非対応どちらの一覧にも無し）
- out: 3,869頁・precheck 全項目OK・計測リンク 1,479→1,479（ユニーク81）・sitemap lastmod 17

### 2026-10-28 朝ルーチン: ハウスクリーニング110番 TOB 結果の確認＋おそうじ革命「業界最安クラス」の残り照合（サイト本文の修正なし）
- 110番 公式（hoycambiomibombilla.com トップ・/company/ 生HTML 10/28 09:10頃）: 「東証上場企業運営」「東証上場」表示は残ったまま（変化なし）
- TOB 結果: TDnet 一覧（10/27 全件・10/28 09:05 時点まで）に 3989 の開示なし。ウェブ検索でも結果（成立・不成立）の報道なし。決済開始日は 11/4 予定（9/9 開示）。sharing-tech.co.jp /ir/ /ir/news/ は生HTMLに該当なし（JS 描画）
- 当サイト partners.ts の記述（「買付期間 9/10〜10/27・上場廃止となる予定であることを前提」「公式サイトには『東証上場企業運営』の表示が残っている」）は現時点で公式と一致＝修正なし。→ 10/28 15時以降の結果開示・公式表示の変化を次回確認（成立なら「上場廃止となる予定」は維持、表示が消えたら括弧書きを更新）
- 革命「業界最安クラス」: ソース全体・out 全 3,872 HTML とも 0件（10/27 の company/3 修正で全消化）。out の「最安」はアールクリーニングの ASP 広告文言（PR 表記つき）のみ。本番 /company/3/ も 0件・「全国一律価格」1件を確認
- company/3 の残り表記も公式照合（osoujikakumei.jp 生HTML 10/28）: 「50日間の研修」= /franchise/「おそうじ革命だけの充実の50日間研修」「業界最長の約2か月間の研修」・/about/「2ヶ月間の初期研修（イールシステム）」／「追加料金なし」= トップ「追加料金、絶対ゼロ宣言！」・/faq/「記載の料金以外に…追加料金がかかることはございません」→ いずれも一致、修正なし。「技術力と価格のバランス」は判断待ちのため未変更
