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
              scriptSrc: "'self' 'unsafe-inline' 'unsafe-eval'",
              objectSrc: "'none'",
              styleSrc: "'self' 'unsafe-inline'",
              imgSrc: "'self'",
              mediaSrc: "'none'",
              frameSrc: "'none'",
              fontSrc: "'self'",
            },
          },
        }),
      },
    ];
  },
};

module.exports = nextConfig;
