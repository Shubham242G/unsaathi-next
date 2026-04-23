import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // Why Unsaathi redirects
      {
        source: '/why-Unsaathi',
        destination: '/why-unsaathi',
        permanent: true, // 308 permanent redirect (SEO friendly)
      },
      {
        source: '/why-unsaathi/:path*',
        destination: '/why-unsaathi/:path*',
        permanent: true,
      },
      
      // How Unsaathi redirects
      {
        source: '/how-Unsaathi',
        destination: '/how-unsaathi',
        permanent: true,
      },
      
      // About Us redirects
      {
        source: '/About-Us',
        destination: '/about-us',
        permanent: true,
      },
      
      // Service pages redirects
      {
        source: '/services/mutual-Divorce',
        destination: '/services/mutual-divorce',
        permanent: true,
      },
      {
        source: '/services/annulment-Of-Marriage',
        destination: '/services/annulment-of-marriage',
        permanent: true,
      },
      {
        source: '/services/child-Visitation',
        destination: '/services/child-visitation',
        permanent: true,
      },
      {
        source: '/services/child-Custody',
        destination: '/services/child-custody',
        permanent: true,
      },
      {
        source: '/services/contested-Divorce',
        destination: '/services/contested-divorce',
        permanent: true,
      },
      {
        source: '/services/conjugal-Rights',
        destination: '/services/conjugal-rights',
        permanent: true,
      },
      {
        source: '/services/judicial-Separation',
        destination: '/services/judicial-separation',
        permanent: true,
      },
      {
        source: '/services/maintanance-And-Alimony',
        destination: '/services/maintenance-and-alimony',
        permanent: true,
      },
      {
        source: '/services/cruelty',
        destination: '/services/cruelty',
        permanent: true,
      },
      {
        source: '/services/dowry',
        destination: '/services/dowry',
        permanent: true,
      },
      
      // Catch-all for any capitalized service routes
      {
        source: '/services/:slug',
        destination: '/services/:slug',
        has: [
          {
            type: 'header',
            key: 'x-matched-path',
          },
        ],
        permanent: false,
      },
    ];
  },
};

export default nextConfig;