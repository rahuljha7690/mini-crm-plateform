import { createClient } from 'redis';

export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.connect().then(() => {
  console.log('Redis connected');
});
