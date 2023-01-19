const path = require('path')

module.exports = {
  images: {
    domains: ['images.prismic.io'],
  },
  target: 'serverless',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack (config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
}
