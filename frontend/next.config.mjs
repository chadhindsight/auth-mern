/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:6002/api/:path*',
            },
        ];
    }
};

export default nextConfig;