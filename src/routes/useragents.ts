import { FastifyInstance } from 'fastify'
import { getUserAgents } from '../utils/fetchUserAgent'

// tes
export default async function (app: FastifyInstance) {
    app.get('/', {
        schema: {
            querystring: {
                count: { type: 'number', minimum: 1, maximum: 100 }
            }
        }
    }, async (req, reply) => {
        const { count = 1 } = req.query as { count?: number }
        const all = await getUserAgents()
        const sliced = all.slice(0, count)
        return count === 1 ? sliced[0] : sliced
    })     
}
