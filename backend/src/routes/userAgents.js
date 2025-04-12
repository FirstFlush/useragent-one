import { userAgentQuerySchema } from "@/schemas/userAgentQuery";
import getUserAgents from "@/services/getUserAgents";
import { ROUTES } from "@/data/routes";
const userAgentRoute = async (fastify) => {
    fastify.get(ROUTES.API.userAgents, async (req, reply) => {
        const result = userAgentQuerySchema.safeParse(req.query);
        if (!result.success) {
            const apiResponse = {
                data: [],
                success: false,
                msg: "Invald query parameters",
            };
            return reply.status(400).send(apiResponse);
        }
        const filters = result.data;
        const matches = getUserAgents(filters);
        const apiResponse = {
            data: matches,
            success: true,
        };
        return reply.send(apiResponse);
    });
};
export default userAgentRoute;
