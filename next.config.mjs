import Nextra from 'nextra'

const withNextra = Nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  swcMinify: true,

  experimental: {
    mdxRs: true,
  },
}

export default withNextra(nextConfig)
