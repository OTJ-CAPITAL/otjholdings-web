/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/otjholdings-web',
  trailingSlash: true,
  images: { unoptimized: true },
  staticPageGenerationTimeout: 180,
}
export default nextConfig
