import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/site-eav" : "",
  assetPrefix: isProd ? "/site-eav/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
