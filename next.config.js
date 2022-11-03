/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true | {
      ssr: true,
      displayName: true,
    }
  },
}
module.exports = nextConfig