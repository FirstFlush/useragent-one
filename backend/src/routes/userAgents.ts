import { FastifyInstance } from "fastify";
import { userAgentQuerySchema } from "@/schemas/userAgentQuery";
import getUserAgents from "@/services/getUserAgents";
import { ApiResponse } from "@/types/response";
import { ROUTES } from "@/data/routes";

const userAgentRoute = async (fastify: FastifyInstance) => {
  fastify.get(ROUTES.API.userAgents, async (req, reply) => {
    const result = userAgentQuerySchema.safeParse(req.query);
    if (!result.success) {
      const apiResponse: ApiResponse = {
        data: [],
        success: false,
        msg: "Invald query parameters",
      }
      return reply.status(400).send(apiResponse);
    }
    const filters = result.data;
    const matches = getUserAgents(filters);
    const apiResponse: ApiResponse = {
      data: matches,
      success: true,
    }
    return reply.send(apiResponse);
  });
}

export default userAgentRoute;