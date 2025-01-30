import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN domain for image support
  },
};

export default nextConfig;
