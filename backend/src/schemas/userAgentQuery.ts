import { z } from "zod";
import { REQUEST_LIMIT } from "@/data/constants";

export const userAgentQuerySchema = z.object({
  deviceCategory: z.enum(["desktop", "mobile", "tablet"]).optional(),
  platform: z.string().optional(),
  vendor: z.string().optional(),
  appName: z.string().optional(),
  language: z.string().optional(),
  screenHeight: z.coerce.number().optional(),
  screenWidth: z.coerce.number().optional(),
  viewportHeight: z.coerce.number().optional(),
  viewportWidth: z.coerce.number().optional(),
  pluginsLength: z.coerce.number().optional(),
  limit: z.coerce.number().min(1).max(REQUEST_LIMIT).default(1),
});
