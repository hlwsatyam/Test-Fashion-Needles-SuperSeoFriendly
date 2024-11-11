const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
/** @type {import('next').NextConfig} */
const nextConfig = {
   
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // swcMinify: false,
  env: {
    // BASE_URL: process.env.BASE_URL,
    // CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    // STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    // CURRENCY: process.env.CURRENCY,
    // SHIPPING_FEE: process.env.SHIPPING_FEE,
    // JWT_SECRET: process.env.JWT_SECRET,
    // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
  },
  devIndicators: {
    autoPrerender: false, // Turn off auto pre-rendering notifications
  },
  compiler: {
    styledComponents: true,
  },
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ['fasion needles-app.vercel.app"', 'res.cloudinary.com']
  },
  experimental: {
    swcTraceProfiling: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);