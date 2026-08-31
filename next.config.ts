import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spelman-dms.sfo3.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
