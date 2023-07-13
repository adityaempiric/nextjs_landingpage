/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add video loader configuration
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos",
          outputPath: `${isServer ? "../" : ""}static/videos`,
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
  images: {
    domains: [
      "images.pexels.com",
      "www.pexels.com",
      "www.freepik.com",
      "img.freepik.com",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
