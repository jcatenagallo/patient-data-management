const withTwin = require('./config/withTwin.js');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});

module.exports = nextConfig;
