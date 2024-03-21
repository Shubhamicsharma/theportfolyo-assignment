/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'portfolio-image-store.s3.ap-south-1.amazonaws.com',
          },
        ],
    },
};

export default nextConfig;
