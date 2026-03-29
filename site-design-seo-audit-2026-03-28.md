# クリーンナビ サイト監査レポート

**監査日時:** 2026-03-28 00:14-00:23  
**監査者:** taro + tomomi  
**対象サイト:** https://site-001-dg4.pages.dev/  
**確認ページ数:** 5ページ（TOP、東京都、横浜市、千代田区、博多区、渋谷区）

---

## エグゼクティブサマリー

148市区町村ページの作成は完了していますが、**SEO致命的な問題が6件**発見されました。特に以下2点は最優先で修正が必要です：

1. **robots noindex設定** → すべてのページが検索エンジンにインデックスされない
2. **ナビゲーション欠如** → 148市区町村ページへの内部リンクが存在せず、孤立ページ化

これらの問題により、せっかく作成した148ページが検索エンジンに発見されず、ユーザーもアクセスできない状態です。

---

## 🔴 致命的問題（Critical）- 最優先修正

### 1. robots meta: noindex設定

**現状:**
```html
<meta name="robots" content="noindex, nofollow">
```

**影響:**
- すべてのページが検索エンジンにインデックスされない
- Google検索結果に一切表示されない
- サイトへの自然検索流入がゼロ

**原因:**
- ステージング環境用の設定が本番環境でも残っている

**修正方法:**
```typescript
// app/layout.tsx または各ページの metadata
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    // または環境変数で制御
    // index: process.env.NEXT_PUBLIC_ENV === 'production',
  }
}
```

**優先度:** 🔴 最優先（P0）  
**影響範囲:** 全ページ  
**修正工数:** 30分

---

### 2. ナビゲーション欠如（内部リンク不足）

**現状:**
- 東京都ページ → 23区へのリンクなし（テキストのみ）
- 横浜市ページ → 18区へのリンクなし（テキストのみ）
- その他すべての都道府県・主要都市ページ → 同様の問題

**検証結果:**
```javascript
// 横浜市ページの「対応エリア」セクション
{
  "linkCount": 0,      // リンクゼロ
  "textCount": 19,     // テキストのみ19個
  "hasLinks": false
}
```

**影響:**
1. **ユーザー導線ゼロ** - ユーザーが市区町村ページに到達不可能
2. **クローラビリティゼロ** - 検索エンジンが内部リンクをたどれない
3. **孤立ページ化** - 148ページが「孤児ページ（orphan pages）」になっている
4. **SEO評価の低下** - Googleは内部リンクがないページを「重要度が低い」と判断

**修正方法:**

#### A. 都道府県・主要都市ページに区リンクリストを追加

```typescript
// app/areas/tokyo/page.tsx の「対応エリア」セクション
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {wards.map(ward => (
    <Link 
      key={ward.slug}
      href={`/areas/${ward.slug}/`}
      className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
    >
      {ward.name}
    </Link>
  ))}
</div>
```

#### B. TOPページに主要市区町村への直接リンクを追加

```typescript
// app/page.tsx - エリア一覧セクションに追加
<section className="popular-areas">
  <h2>人気エリアから探す</h2>
  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
    <Link href="/areas/tokyo-shibuya/">渋谷区</Link>
    <Link href="/areas/tokyo-shinjuku/">新宿区</Link>
    <Link href="/areas/osaka-kita/">大阪市北区</Link>
    {/* 主要20-30エリア */}
  </div>
</section>
```

#### C. サイトマップページの追加

```typescript
// app/sitemap/page.tsx
// 全148市区町村ページへのリンク一覧
```

**優先度:** 🔴 最優先（P0）  
**影響範囲:** 148市区町村ページ + 17都道府県/主要都市ページ  
**修正工数:** 3-4時間

---

## 🟠 高優先度問題（High）

### 3. OGP（SNSシェア情報）が全ページ共通

**現状:**
```html
<!-- すべてのページで同じOGP -->
<meta property="og:title" content="クリーンナビ | ハウスクリーニング業者比較サイト【2026年最新】">
<meta property="og:description" content="エアコン・浴室・キッチンのハウスクリーニング業者を料金・口コミで簡単比較。信頼できるプロの業者が見つかります。">
<meta property="og:url" content="https://clean-navi.jp/">
<meta property="og:image" content="https://clean-navi.jp/og-image.png">
```

**影響:**
- SNS（Twitter/Facebook/LINE）でシェアされても、すべてTOPページの情報が表示される
- 各ページ固有の内容が伝わらない
- クリック率（CTR）の低下

**修正方法:**
```typescript
// app/areas/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const area = getAreaData(params.slug);
  
  return {
    openGraph: {
      title: `${area.name}のハウスクリーニング業者比較 | クリーンナビ`,
      description: `${area.name}でおすすめのハウスクリーニング業者を徹底比較。料金相場、口コミ評価を掲載。`,
      url: `https://clean-navi.jp/areas/${params.slug}/`,
      images: [
        {
          url: `https://clean-navi.jp/og-images/${params.slug}.png`,
          width: 1200,
          height: 630,
          alt: `${area.name}のハウスクリーニング業者比較`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${area.name}のハウスクリーニング業者比較`,
      description: `${area.name}でおすすめの業者を料金・口コミで徹底比較。`,
      images: [`https://clean-navi.jp/og-images/${params.slug}.png`],
    }
  };
}
```

**優先度:** 🟠 高（P1）  
**影響範囲:** 全ページ  
**修正工数:** 2時間

---

### 4. canonical URL固定

**現状:**
```html
<!-- すべてのページで同じcanonical -->
<link rel="canonical" href="https://clean-navi.jp/">
```

**影響:**
- すべてのページがTOPページの重複コンテンツと判定される可能性
- 各ページのSEO評価が正しく行われない
- ステージング環境なのに本番URLを参照（環境不整合）

**修正方法:**
```typescript
// app/areas/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://clean-navi.jp';
  
  return {
    alternates: {
      canonical: `${baseUrl}/areas/${params.slug}/`,
    }
  };
}
```

**環境変数設定:**
```env
# .env.production
NEXT_PUBLIC_BASE_URL=https://clean-navi.jp

# .env.development (Cloudflare Pages)
NEXT_PUBLIC_BASE_URL=https://site-001-dg4.pages.dev
```

**優先度:** 🟠 高（P1）  
**影響範囲:** 全ページ  
**修正工数:** 1時間

---

### 5. h1タグ構造の問題

**現状:**
- ヘッダーのサイト名「クリーンナビ」がh1タグ
- ページ固有のタイトル（例: "福岡市博多区のハウスクリーニング業者比較"）がh2タグ

**影響:**
- SEO上、最も重要なh1タグがページ固有の情報を含まない
- すべてのページで同じh1（サイト名）になっている
- 検索エンジンがページの主題を正しく理解できない

**正しい構造:**
```html
<!-- ヘッダー -->
<div class="site-name">クリーンナビ</div>  <!-- h1ではなくdiv -->

<!-- ページメインコンテンツ -->
<h1>福岡市博多区のハウスクリーニング業者比較</h1>
```

**修正方法:**
```typescript
// components/Header.tsx
// 変更前
<h1 className="text-2xl font-bold">クリーンナビ</h1>

// 変更後
<div className="text-2xl font-bold">クリーンナビ</div>

// または
<span className="text-2xl font-bold">クリーンナビ</span>
```

```typescript
// app/areas/[slug]/page.tsx
// 既存のh2をh1に変更
<h1 className="text-3xl md:text-4xl font-bold">
  {area.name}のハウスクリーニング業者比較
</h1>
```

**優先度:** 🟠 高（P1）  
**影響範囲:** 全ページ  
**修正工数:** 1時間

---

## 🟡 中優先度問題（Medium）

### 6. 画像パス問題（404エラー）

**現状:**
```html
<!-- エリアページで相対パスが間違っている -->
<img src="images/logo-character.png" />
<!-- 実際のURL: /areas/fukuoka-hakata/images/logo-character.png → 404 -->
```

**エラーログ:**
```
Failed to load resource: the server responded with a status of 404 ()
/areas/fukuoka-hakata/images/logo-character.png
/areas/tokyo-chiyoda/images/logo-character.png
```

**影響:**
- ロゴキャラクター画像が表示されない
- ページの見た目が不完全
- ユーザー体験の低下

**修正方法:**
```typescript
// 相対パスを絶対パスに変更
// 変更前
<img src="images/logo-character.png" alt="クリーンナビ キャラクター" />

// 変更後
<img src="/images/logo-character.png" alt="クリーンナビ キャラクター" />

// または Next.js Image コンポーネント使用
import Image from 'next/image';
<Image src="/images/logo-character.png" alt="クリーンナビ キャラクター" width={100} height={100} />
```

**優先度:** 🟡 中（P2）  
**影響範囲:** ヘッダー/フッター（全ページ）  
**修正工数:** 30分

---

## 🟢 低優先度問題（Low）

### 7. フォントpreload最適化

**警告メッセージ:**
```
The resource https://site-001-dg4.pages.dev/_next/static/media/ad9c66e761fed85a-s.p.woff2 
was preloaded using link preload but not used within a few seconds from the window's load event.
```

**影響:**
- パフォーマンスの微小な低下
- 不要なリソースのpreload

**修正方法:**
```typescript
// next.config.js または app/layout.tsx
// 使用しないフォントのpreloadを削除
// または、フォントの読み込みタイミングを調整
```

**優先度:** 🟢 低（P3）  
**影響範囲:** パフォーマンス  
**修正工数:** 30分

---

## ✅ 正常に機能している要素

### SEO関連
- ✅ **meta description** - ページ固有の説明文が正しく設定されている
- ✅ **title** - ページ固有のタイトルが正しく設定されている
- ✅ **keywords** - 関連キーワードが設定されている

### コンテンツ
- ✅ **15業者の比較表** - すべて正常に表示
- ✅ **業者詳細情報** - 料金、営業時間、サービス内容が充実
- ✅ **エリア情報** - 地域特性、料金相場、選び方などのコンテンツ

### デザイン
- ✅ **レスポンシブデザイン** - モバイル/タブレット/デスクトップすべて対応
- ✅ **ナビゲーション** - ヘッダーメニュー、パンくずリスト（一部）
- ✅ **フォント** - Noto Sans JPが正しく読み込まれている

---

## 修正優先度まとめ

### フェーズ1: 緊急修正（1日以内）
1. 🔴 **robots noindex削除** (30分)
2. 🔴 **ナビゲーションリンク追加** (3-4時間)

**影響:** これだけで148ページが検索エンジンに発見され、ユーザーがアクセス可能になる

### フェーズ2: 重要修正（1週間以内）
3. 🟠 **OGP動的設定** (2時間)
4. 🟠 **canonical URL動的設定** (1時間)
5. 🟠 **h1タグ構造修正** (1時間)

**影響:** SEO評価が大幅に向上、SNSシェアの効果が向上

### フェーズ3: 品質向上（2週間以内）
6. 🟡 **画像パス修正** (30分)
7. 🟢 **フォントpreload最適化** (30分)

**影響:** ユーザー体験の向上、パフォーマンス改善

---

## 推奨次ステップ

1. **MediaXAIの承認取得**
   - 修正優先度と工数の確認
   - フェーズ1の即時開始承認

2. **環境変数の設定**
   ```env
   NEXT_PUBLIC_BASE_URL=https://clean-navi.jp  # 本番
   NEXT_PUBLIC_ENV=production
   ```

3. **リンクデータの準備**
   - 148市区町村のslug、名前、親エリアのマッピング
   - 主要エリア20-30件の選定

4. **修正作業の開始**
   - フェーズ1: taro担当（4-5時間）
   - フェーズ2: taro担当（4時間）
   - フェーズ3: taro担当（1時間）

5. **検証とデプロイ**
   - ステージング環境で動作確認
   - 本番デプロイ
   - Google Search Consoleでインデックス申請

---

## 検証方法

### robots meta確認
```bash
curl -s https://site-001-dg4.pages.dev/areas/tokyo-chiyoda/ | grep robots
```

### 内部リンク確認
```bash
curl -s https://site-001-dg4.pages.dev/areas/tokyo/ | grep -o 'href="/areas/tokyo-[^"]*"' | wc -l
# 期待値: 23 (東京23区)
```

### OGP確認
```bash
curl -s https://site-001-dg4.pages.dev/areas/fukuoka-hakata/ | grep og:title
# 期待値: 福岡市博多区のハウスクリーニング業者比較
```

---

**監査完了日時:** 2026-03-28 00:23  
**次回レビュー:** 修正完了後
