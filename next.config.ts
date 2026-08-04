import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qjygsiugswdjgmedzdru.supabase.co",
      },
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
