/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Enables static export
  trailingSlash: true,       // Ensures proper routing on Apache
  reactStrictMode: true,     
  images: {
    unoptimized: true        // Required for `next export` (no Image Optimization)
  },
};

export default nextConfig;
