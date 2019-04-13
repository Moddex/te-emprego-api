module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    connectionString: process.env.MONGO_DB,
  },
  requests: {
    rateLimits: {
      window: 1000 * 60 * 15, // ms
      max: 150,
    },
    slowDown: {
      window: 15 * 60 * 1000,
      delayAfter: 100,
      delayMs: 100,
    },
  },
};
