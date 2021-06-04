module.exports = {
  future: {
    webpack5: true,
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}
