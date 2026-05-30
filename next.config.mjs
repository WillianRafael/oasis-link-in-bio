/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/robots.txt",
        has: [
          {
            type: "host",
            value: "linksoasis.wr3solutions.com",
          },
        ],
        destination: "https://oasisflypremium.wr3solutions.com/robots.txt",
        permanent: true,
      },
      {
        source: "/sitemap.xml",
        has: [
          {
            type: "host",
            value: "linksoasis.wr3solutions.com",
          },
        ],
        destination: "https://oasisflypremium.wr3solutions.com/sitemap.xml",
        permanent: true,
      },
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
