const CompressionPlugin = require('compression-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const {withContentlayer} = require('next-contentlayer');

const nextConfig = withContentlayer({
  reactStrictMode: true,
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: prod ? [...config.plugins] : [...config.plugins, new CompressionPlugin()],
    };
  },
});

module.exports = withBundleAnalyzer(nextConfig);
