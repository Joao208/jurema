/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'projeto-jurema-storage-07bc0ee8234609-staging.s3.us-east-2.amazonaws.com',
    ],
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
