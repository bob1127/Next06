/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export'
}

module.exports ={
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
  nextConfig
}
