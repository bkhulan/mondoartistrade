/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["mn", "en", "ru"],
    defaultLocale: "mn",
    localeDetection: false,
  },
};

module.exports = nextConfig;
