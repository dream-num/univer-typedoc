import Nextra from 'nextra'

const withNextra = Nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
}

export default withNextra(nextConfig)
