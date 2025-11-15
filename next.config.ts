import type { NextConfig } from "next";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: { unoptimized: true },
  basePath: base,
  assetPrefix: base ? `${base}/` : "",
};

export default nextConfig;

