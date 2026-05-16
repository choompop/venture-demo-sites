/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/venture-demo-sites' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/venture-demo-sites/' : '',
  images: { unoptimized: true },
  trailingSlash: true
};
module.exports = nextConfig;
