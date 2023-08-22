/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: ".",
  images: {
    loader: "imgix",
    path: "/",
  },
    output:'export'
}

module.exports = nextConfig
