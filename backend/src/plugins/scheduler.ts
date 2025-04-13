import cron from 'node-cron';
import { refreshUserAgentData } from '../tasks/refreshUserAgents';
import logger from '../utils/logger';
import { UA_REFRESH_HOUR, UA_REFRESH_MINUTE } from '@/data/constants';

logger.info("Scheduler file imported and cron is registered.");
logger.info(`Refreshing user agents list daily at ${UA_REFRESH_HOUR}:${UA_REFRESH_MINUTE} UTC.`)

// UTC time
cron.schedule(`${UA_REFRESH_MINUTE} ${UA_REFRESH_HOUR} * * *`, async () => {
    if (process.env.NODE_ENV === "production") {
        logger.info("Running scheduled UA refresh task...");
        await refreshUserAgentData();
    } else {
        logger.info("Skipped scheduled UA refresh task (not in production)");
    }
});
