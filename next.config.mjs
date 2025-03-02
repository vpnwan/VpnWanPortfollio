/** @type {import('next').NextConfig} */
const nextConfig = {

    
    images: {
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'standalone',
    
   
};

export default nextConfig;
