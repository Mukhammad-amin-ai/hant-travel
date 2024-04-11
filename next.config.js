/** @type {import('next').NextConfig} */
const nextConfig = {}

const { default: classnamesMinifier } = require('@nimpl/classnames-minifier');
module.exports = nextConfig

module.exports = (phase) => classnamesMinifier({
  prefix: '_',
  reservedNames: ['_en', '_de'],
})(nextConfig);