/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'GODGOL Registry',
    description: 'God old Danish Games on Linux',
    icon: '/img/logo.svg',
    listUrl: 'http://r2d2.outerrim.lan:8081/',
    contactUrl: 'https://martin-juhl.dk',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
