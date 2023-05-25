/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'page.tsx'
  ],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/*',
      },
    ],
  },

  reactStrictMode: true,

  compiler: {
    styledComponents: true
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: false
      },
    ];
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
