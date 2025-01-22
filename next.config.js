/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", // Aplica a todas las rutas
          headers: [
            {
              key: "Content-Security-Policy",
              value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self';"
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff"
            },
            {
              key: "X-Frame-Options",
              value: "DENY"
            },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin"
            },
            {
              key: "Permissions-Policy",
              value: "geolocation=(), microphone=()"
            }
          ]
        }
      ];
    }
  };
  
  module.exports = nextConfig;