/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: ".",
 images: {
        domains: ['www.zensor.com.tw'],
  //        loader: "imgix",
  //  path: "/",
    },
  // images: {
  //   loader: "imgix",
  //   path: "/",
  //     domains: ['www.zemsor.com.tw'],
  // },
    output:'export'
}

module.exports = nextConfig
