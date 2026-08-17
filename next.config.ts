import type { NextConfig } from "next";
import * as fs from "fs";
import * as path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // CF Pagesのビルドコンテナはローカルよりメモリが小さいため並列度を絞る
  experimental: {
    cpus: 2,
  },
};

// CF Pagesは1デプロイ最大20,000ファイル。Next16のセグメントキャッシュが
// 1ページあたり最大8個の __next.*.txt を生成し、3,846ページで約35,000ファイルに達して
// デプロイ検証で失敗するため、ビルド終了時にセグメントファイルのみ削除する。
// index.txt(ページ単位RSCペイロード)は残すのでクライアント遷移は維持される。
if (process.env.NODE_ENV !== "development") {
  let pruned = false;
  process.on("exit", () => {
    if (pruned) return;
    pruned = true;
    const outDir = path.join(process.cwd(), "out");
    if (!fs.existsSync(outDir)) return;
    let removed = 0;
    const walk = (dir: string) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (/^__next\..*\.txt$/.test(e.name)) {
          fs.unlinkSync(p);
          removed++;
        }
      }
    };
    try {
      walk(outDir);
      if (removed > 0) console.log(`[prune-segments] removed ${removed} __next.*.txt files from out/`);
    } catch { /* デプロイ検証はCF側で行われるため失敗しても黙って続行 */ }
  });
}

export default nextConfig;
