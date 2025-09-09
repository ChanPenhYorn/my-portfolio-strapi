module.exports =({env}) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',  // For Strapi marketplace icons
            'res.cloudinary.com'       // Core for Cloudinary images/thumbnails
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com'       // For media previews
          ],
          'script-src': [
            "'self'",
            "'unsafe-inline'",         // Needed for admin panel
            'https://media-library.cloudinary.com',
            'https://upload-widget.cloudinary.com',
            'https://console.cloudinary.com'
          ],
          'frame-src': [
            "'self'",
            'https://media-library.cloudinary.com',
            'https://upload-widget.cloudinary.com',
            'https://console.cloudinary.com'
          ],
          'child-src': [
            "'self'",
            'res.cloudinary.com'       // For iframe previews in Media Library
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: env('CORS_ORIGIN', 'http://localhost:3000').split(','), // e.g., CORS_ORIGIN=http://localhost:3000,https://yourfrontend.com
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
];