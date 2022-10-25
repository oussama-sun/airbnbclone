/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoib3Vzc21hLXN1biIsImEiOiJjbDlneDF0NXkwOHo4M3VwMjF0Y3AwZXBwIn0.HImyzf9tBGCLSzIFh2d9AQ",
  },
};

module.exports = nextConfig;
