/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.dog.ceo'], // Add the domain here
  },
  logging: { // show in the console log
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
