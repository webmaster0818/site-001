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
