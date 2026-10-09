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
