import { fastify } from 'fastify';

const app = fastify({ logger: process.env.NODE_ENV === 'development' });

app.get('/health', async () => {
  return 'ok';
});

export { app };
