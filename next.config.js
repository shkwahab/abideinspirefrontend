/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports ={
  ...nextConfig,
  image:{
    domain: ['res.cloudinary.com'],
  }
}
