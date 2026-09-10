import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Set basePath if you are deploying to a sub-path like https://username.github.io/repo-name/
  // basePath: '/invitation-card',
  images: {
    unoptimized: true, // Required for Next.js Image component on static hosts like GitHub Pages
  },
};

export default nextConfig;
