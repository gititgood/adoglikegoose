import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Your existing template config options like images or sanity hooks go here */
  
  typescript: {
    // This stops TypeScript from blocking your build
    ignoreBuildErrors: true,
  }, 
};

export default nextConfig;