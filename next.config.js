/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.free-css.com',
        port: '',
        pathname:
          '/assets/files/free-css-templates/preview/page225/shop/assets/images/*',
      },
    ],
  },
};

module.exports = nextConfig;
