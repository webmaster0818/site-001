import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // CF Pagesのビルドコンテナはローカルよりメモリが小さい。
  // provider 3,526ページのSSGで並列ワーカーがOOMになるため並列度を絞る
  experimental: {
    cpus: 2,
  },
};

export default nextConfig;
