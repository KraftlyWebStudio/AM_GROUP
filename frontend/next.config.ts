import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'amgroup-gcc.com',
      },
    ],
  },
  turbopack: {
    root: path.resolve("."),
  },
};

export default nextConfig;
