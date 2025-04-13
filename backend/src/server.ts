import Fastify from 'fastify';
import "./plugins/scheduler"
import logger from './utils/logger';
import userAgentRoute from './routes/userAgents';
import cors from '@fastify/cors';

const app = Fastify();

(async () => {
  await app.register(cors, {
    origin: process.env.NODE_ENV === "production" ? 'https://useragent.one': '*',
  });
  await app.register(userAgentRoute)
})();

app.get('/ping', async () => {
  return { pong: true }
})

app.listen({ port: 3001, host: "0.0.0.0" }, (err, address) => {
  if (err) throw err
  logger.info(`Server listening at ${address}`)
})
