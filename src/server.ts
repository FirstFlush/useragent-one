import Fastify from 'fastify'

const app = Fastify()

app.get('/ping', async () => {
  return { pong: true }
})

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server listening at ${address}`)
})
