import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves this as a static site (no API routes/middleware
  // are used), so a static export is the simplest, most reliable deploy path.
  output: "export",
  images: {
    // Static export has no Image Optimization server, so images are served
    // as-is. remotePatterns is kept for local `next dev`.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
