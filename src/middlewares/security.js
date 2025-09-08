module.exports = (config, { strapi }) => {
  // Default CSP from Strapi
  let csp = {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],  // Allows inline scripts for admin
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],  // Key: Allow Cloudinary images
    'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],  // For videos/audio if needed
    'connect-src': ["'self'"],
    'frame-src': ["'self'"],  // For iframes in admin
    'child-src': ["'self'", 'res.cloudinary.com'],  // Important for embedded previews
  };

  // If you have existing CSP config, merge it here
  if (config.csp) {
    csp = { ...csp, ...config.csp };
  }

  return {
    ...config,
    csp,
  };
};