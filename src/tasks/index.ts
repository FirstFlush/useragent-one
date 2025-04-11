// tasks/index.ts
import { fetchUserAgentData } from "./fetchData";
import { loadUserAgentData } from "./saveData";
import logger from "@/utils/logger";

/**
* Fetch user-agents list from user-agents github repo
* List is updated on github daily (April,25)
*/
export const refreshUserAgentData = async() => {
  try {
    await fetchUserAgentData();
    const data = loadUserAgentData();
    logger.info(`Refreshed UA list. Loaded ${data.length} user agents`);
  } catch (err) {
    logger.error("Error refreshing UA data:", err);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    logger.info("Manually refreshing user-agent data...")
    await refreshUserAgentData();
  })();
}
