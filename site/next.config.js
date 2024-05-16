/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'GODGOL Registry',
    description: 'God old Danish Games on Linux',
    icon: '/img/logo.svg',
    listUrl: 'https://mrmeee.github.io/godgol-registry',
    contactUrl: 'https://martin-juhl.dk',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/godgol-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
