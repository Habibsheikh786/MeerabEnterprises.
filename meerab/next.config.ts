import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // try https first
        hostname: "meerab-backend-production.up.railway.app",
      },
      {
        protocol: "http", // fallback if https not working
        hostname: "meerab-backend-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;