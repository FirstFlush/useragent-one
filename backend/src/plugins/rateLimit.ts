import fp from 'fastify-plugin'
import rateLimit from '@fastify/rate-limit'

export default fp(async (fastify) => {
  fastify.register(rateLimit, {
    max: 60,                    // 60 requests per minute
    timeWindow: '1 minute'
  })
})
