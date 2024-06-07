import Nextra from 'nextra'

const withNextra = Nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/typedoc',
  assetPrefix: '/typedoc/',
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
}

export default withNextra(nextConfig)
