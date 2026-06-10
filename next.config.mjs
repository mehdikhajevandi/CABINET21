/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow specific dev hosts to access Next.js dev resources
  allowedDevOrigins: ['192.168.1.12', 'localhost:3000', '10.14.47.105']
};

export default nextConfig;