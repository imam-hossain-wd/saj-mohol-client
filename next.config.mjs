// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['img.freepik.com'],
//   },
//    eslint: {
//     ignoreDuringBuilds: true,
//   }
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // Allows all HTTP domains (not recommended)
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;