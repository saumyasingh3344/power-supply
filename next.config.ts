import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    turbopackPluginRuntimeStrategy: "forceWorkerThreads",
  },
};

export default nextConfig;
