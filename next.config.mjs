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
}

export default withNextra(nextConfig)
