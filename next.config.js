/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'page.tsx'
  ],

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
