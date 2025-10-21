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
      {
        protocol: 'https',
        hostname: 'glrob7hsjras0ozc.public.blob.vercel-storage.com',
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
      {
        source: '/waarom-ons/bolbaas-vs-bolbuddy',
        destination: '/waarom-ons/baasy-vs-bolbuddy',
        permanent: true,
      },
      {
        source: '/waarom-ons/bolbaas-vs-bollify',
        destination: '/waarom-ons/baasy-vs-bollify',
        permanent: true,
      },
      {
        source: '/waarom-ons/bolbaas-vs-bolmate',
        destination: '/waarom-ons/baasy-vs-bolmate',
        permanent: true,
      },
      {
        source: '/waarom-ons/bolbaas-vs-boloo',
        destination: '/waarom-ons/baasy-vs-boloo',
        permanent: true,
      },
      {
        source: '/waarom-ons/bolbaas-vs-buddli',
        destination: '/waarom-ons/baasy-vs-buddli',
        permanent: true,
      },
    ];
  },
  /* other config options here */
};

export default nextConfig;
