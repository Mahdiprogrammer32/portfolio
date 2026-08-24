import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/portfolio",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  distDir: "out",
};

export default nextConfig;