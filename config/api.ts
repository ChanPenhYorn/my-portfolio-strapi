export default {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
    cors: {
      enabled: true,
      origin: ['http://localhost:3000', 'https://yorn-chanpenh-portfolio.vercel.app'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
};
