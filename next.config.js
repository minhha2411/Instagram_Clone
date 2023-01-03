/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pbs.twimg.com",
      "st4.depositphotos.com",
      "media.gettyimages.com",
      "bloganchoi.com",
      "info-imgs.vgcloud.vn",
    ],
  },
};

module.exports = nextConfig;
