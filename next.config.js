/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Image optimization (disabled for static export compatibility)
  images: { 
    unoptimized: true 
  },
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
