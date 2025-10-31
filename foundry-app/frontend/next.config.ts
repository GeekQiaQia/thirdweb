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
       domains: [
      "euc.li",          // ENS avatar example
      "metadata.ens.domains", // 另一些 ENS 头像会用这个
      "ipfs.io",         // 有的头像托管在 ipfs.io
      "gateway.pinata.cloud",
      "arweave.net"
    ],
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
