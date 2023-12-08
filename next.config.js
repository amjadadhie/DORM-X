/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle HTML files
    config.module.rules.push({
      test: /\.html$/,
      loader: 'raw-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
