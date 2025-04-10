import "dotenv/config";
import { fetchUserAgentData } from "./fetchData";
import { loadUserAgentData } from "./saveData";
import { logger } from "@/utils/logger";

(async () => {
  try {
    await fetchUserAgentData();
    const data = loadUserAgentData();
    logger.info(`Saved ${data.length} user agents`);
  } catch (err) {
    logger.error("Error refreshing UA data:", err);
    process.exit(1);
  }
})();
