/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['projeto-jurema.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
