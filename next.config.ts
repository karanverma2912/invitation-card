import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Set basePath since you are deploying to a sub-path https://karanverma2912.github.io/invitation-card
  basePath: '/invitation-card',
  images: {
    unoptimized: true, // Required for Next.js Image component on static hosts like GitHub Pages
  },
};

export default nextConfig;
