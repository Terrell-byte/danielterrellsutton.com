/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // generate static files in /out
  images: { unoptimized: true }, // disable Next image optimizer
  assetPrefix: '',               // keep root (custom domain)
  trailingSlash: false
};
export default nextConfig;
