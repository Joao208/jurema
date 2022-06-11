/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'projeto-jurema.s3.amazonaws.com',
      'projeto-jurema.s3.us-east-2.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
