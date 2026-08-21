/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deploys to GitHub Pages via Actions.
  output: 'export',
  trailingSlash: true,
  // next/image optimisation requires a server; disable it for the static export.
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
