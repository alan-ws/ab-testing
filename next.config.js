/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/header/cache-control",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=10, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
