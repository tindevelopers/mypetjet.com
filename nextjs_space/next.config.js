const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel deployment
  distDir: '.next',
  
  // Enable output file tracing for monorepo support
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  
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
