import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    experimental: {
      // Allow importing Foundry build artifacts from parent directory (../out)
      externalDir: true,
    },
    // Explicitly declare Turbopack config to silence Next.js 16 warning
    turbopack: {},
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.imgur.com",
        },
      ],
    },
    webpack: config => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      // Silence optional RN storage dependency pulled in by MetaMask SDK for web builds
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@react-native-async-storage/async-storage": false,
      };
      config.externals.push('pino-pretty', 'lokijs', 'encoding');
      return config;
    }
};

export default nextConfig;
