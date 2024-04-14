// /** @type {import('next').NextConfig} */
// const nextConfig = {
//
//   i18n: {
//     locales: ['en', 'uz', 'ru'],
//     defaultLocale: 'en',
//   },
// };
//
// module.exports = nextConfig

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {};

module.exports = withNextIntl(config);