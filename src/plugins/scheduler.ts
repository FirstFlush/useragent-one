import cron from 'node-cron';
import { refreshUserAgentData } from '@/tasks';
import logger from '@/utils/logger';

cron.schedule("0 4 * * *", async () => {
    if (process.env.NODE_ENV === "production") {
        logger.info("Running scheduled UA refresh task");
        await refreshUserAgentData();
    } else {
        logger.info("Skipped UA refresh task (not in production)");
    }
});
