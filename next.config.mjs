/** @type {import('next').NextConfig} */
const nextConfig = {
    // ============================================================================
    // CORE SETTINGS
    // ============================================================================

    // Enable React strict mode for better development experience
    reactStrictMode: true,

    // Trailing slashes consistency
    trailingSlash: false,

    // ============================================================================
    // IMAGE OPTIMIZATION - Production Grade
    // ============================================================================
    images: {
        // Enable optimization in production (set to false for production builds)
        unoptimized: process.env.NODE_ENV === "development",

        // Modern formats for better compression
        formats: ["image/avif", "image/webp"],

        // Responsive breakpoints matching common device sizes
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

        // Minimum cache TTL (1 year for production)
        minimumCacheTTL: 31536000,

        // Allowed remote image sources
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.carmandi.pk",
            },
            {
                protocol: "https",
                hostname: "car-mandi.s3.ap-south-1.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },

    // ============================================================================
    // PERFORMANCE OPTIMIZATIONS
    // ============================================================================
    experimental: {
        // Optimize package imports for smaller bundles
        optimizePackageImports: ["lucide-react", "clsx"],
    },

    // Enable compression
    compress: true,

    // Generate ETags for caching
    generateEtags: true,

    // Disable X-Powered-By header for security
    poweredByHeader: false,

    // ============================================================================
    // PRODUCTION HEADERS - Security & Caching
    // ============================================================================
    async headers() {
        return [
            {
                // Apply to all routes
                source: "/:path*",
                headers: [
                    // Security Headers
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin",
                    },
                ],
            },
            {
                // Static assets caching (1 year)
                source: "/icons/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                // Image caching (1 year)
                source: "/images/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

    // ============================================================================
    // WEBPACK OPTIMIZATIONS
    // ============================================================================
    webpack: (config, { dev, isServer }) => {
        // Fix for Windows file locking issues with webpack cache
        if (dev) {
            config.cache = false;
        }

        // Production optimizations only
        if (!dev && !isServer) {
            // Optimize chunk splitting
            config.optimization.splitChunks = {
                chunks: "all",
                cacheGroups: {
                    // Separate vendor chunks
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            };
        }
        return config;
    },
};

export default nextConfig;

