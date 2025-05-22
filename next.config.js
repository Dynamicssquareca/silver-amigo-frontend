/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [`${hostname}`, 'api.jewelsbyanu.com'],
    formats: ['image/avif', 'image/webp'],
     deviceSizes: [320, 420, 768, 1024, 1200, 1600, 1920],
  },
  env:{
    NEXT_PUBLIC_BACKEND_URL:'https://api.jewelsbyanu.com'
  }
}

module.exports = nextConfig
