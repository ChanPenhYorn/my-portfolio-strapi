export default {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
    cors: {
      enabled: true,
      origin: [
        /^http:\/\/localhost:\d+$/,          // all localhost ports
        /^http:\/\/127\.0\.0\.1:\d+$/,       // all 127.0.0.1 ports
        /^https:\/\/.*yorn-chanpenh-portfolio.*\.vercel\.app$/, // any Vercel URL containing the name
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
};
