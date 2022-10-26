const webpack = require("webpack");

module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    // Optional: Enables reading mapbox token from environment variable
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        MapboxAccessToken:
          "pk.eyJ1Ijoib3Vzc21hLXN1biIsImEiOiJjbDlneDF0NXkwOHo4M3VwMjF0Y3AwZXBwIn0.HImyzf9tBGCLSzIFh2d9AQ",
      })
    );
    return config;
  },
};
