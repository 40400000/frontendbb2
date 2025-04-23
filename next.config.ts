import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vhtnlfbnq3ecybmn.public.blob.vercel-storage.com',
        // port: '', // Optional: Add port if needed
        // pathname: '/image/upload/**', // Optional: Add specific path pattern if needed
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /* other config options here */
};

export default nextConfig;
