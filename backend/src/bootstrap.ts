import { refreshUserAgentData } from "./tasks/refreshUserAgents";
import logger from "./utils/logger";

export const refreshUserAgentDataStartup = async () => {
  try {
    await refreshUserAgentData();
    logger.info("Initial user-agent data fetched on startup.");
  } catch (e) {
    logger.error("Failed to fetch initial user-agent data on startup: ", e);
  }  
}