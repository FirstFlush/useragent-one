import Fastify from 'fastify';
import '@/plugins/scheduler';
import logger from './utils/logger';
import userAgentRoute from './routes/userAgents';

const app = Fastify()

await app.register(userAgentRoute);

app.get('/ping', async () => {
  return { pong: true }
})



app.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) throw err
  logger.info(`Server listening at ${address}`)
})
