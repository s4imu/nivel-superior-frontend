/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "arquivo.devmedia.com.br"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
