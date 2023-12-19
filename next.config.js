/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require('next-secure-headers');

const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: "'self'",
              scriptSrc: "'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
              objectSrc: "'none'",
              styleSrc: "'self' 'unsafe-inline'",
              imgSrc: "'self'",
              mediaSrc: "'none'",
              frameSrc: "'self' https://vercel.live",
              fontSrc: "'self'",
              connectSrc: "'self' https://vitals.vercel-insights.com/v1/vitals https://vercel.live",
            },
          },
        }),
      },
    ];
  },
};

module.exports = nextConfig;
