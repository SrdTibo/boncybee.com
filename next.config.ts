import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactCompiler: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Must match WIDTHS in scripts/optimize-images.mjs
    deviceSizes: [640, 960, 1280, 1920],
    imageSizes: [256, 384],
  },
};

export default nextConfig;
