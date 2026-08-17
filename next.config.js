/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['haven-annecy.fr', 'thekitchenlab.eu'],
  },
}

module.exports = nextConfig
