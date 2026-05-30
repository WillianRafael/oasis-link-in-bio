/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "linksoasis.wr3solutions.com",
          },
        ],
        destination: "https://oasisflypremium.wr3solutions.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
