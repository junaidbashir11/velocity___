import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  lint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/agentmanifest.json',
        destination: '/api/agent-monetization', // Maps to the route handler at /app/agentm/route.ts
      },
    ];
  },
  
};

export default nextConfig;
