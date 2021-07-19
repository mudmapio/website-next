const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  future: {
    webpack5: true,
  },
  env: {
    BUTTONDOWN_API_KEY: process.env.BUTTONDOWN_API_KEY
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://docs.mudmap.io/?ref=dashboard-docs',
        permanent: true,
      },
      {
        source: '/terms',
        destination: 'https://mudmap.io/legal/terms?red=dashboard-docs',
        permanent: true,
      },
      {
        source: '/faq',
        destination: 'https://mudmapio.notion.site/532a287009714c089b9730c88c64c0e5',
        permanent: true,
      },
      {
        source: '/roadmap',
        destination: 'https://mudmapio.notion.site/6f7adbb8e3d54159963a6eb44496c326',
        permanent: true
      }
    ]
  },
})
