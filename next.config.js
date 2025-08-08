module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['inspektlabs.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/cgi-bin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ck/a',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-it-works.html',
        destination: '/damage-detection',
        permanent: true,
      },
    ];
  },
  productionBrowserSourceMaps: true,
};
