/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // generate static files in /out
  images: { unoptimized: true }, // disable Next image optimizer
  assetPrefix: '',               // keep root (custom domain)
  trailingSlash: true,           // GitHub Pages works better with trailing slashes
  distDir: 'out'                 // explicitly set output directory
};
export default nextConfig;
