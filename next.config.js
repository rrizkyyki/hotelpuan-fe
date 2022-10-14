// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/backend-api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ]
  },
  images: {
    domains: [
      's7d2.scene7.com',
      'miro.medium.com',
      'www.suarasurabaya.net',
      'www.pranataprinting.com'
    ],
  },
}

module.exports = nextConfig
