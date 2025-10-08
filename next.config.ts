import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vhtnlfbnq3ecybmn.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/features/tracking',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wachtlijst',
        destination: '/',
        permanent: true,
      },
    ];
  },
  /* other config options here */
};

export default nextConfig;
