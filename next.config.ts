import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/rooms", destination: "/#rooms", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/safety", destination: "/#safety", permanent: true },
    ];
  },
};

export default nextConfig;
