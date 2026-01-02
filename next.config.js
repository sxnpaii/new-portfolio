/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 95, 100],
    remotePatterns: [
      new URL(`https://raw.githubusercontent.com/sxnpaii/**`),

      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
       {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
        {
        protocol: "https",
        hostname: "*.xata.sh",
      },
    ],
  },
};

export default nextConfig;
