import fs from 'fs';
import path from 'path';
import logger from "@/utils/logger";
import { REQUEST_LIMIT } from "@/data/constants";
const loadUserAgentsFromFile = () => {
    const filePath = path.resolve(__dirname, "../data/user-agents.json");
    if (!fs.existsSync(filePath)) {
        logger.warn("user-agents.json not found — defaulting to empty list");
        return [];
    }
    try {
        const raw = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(raw);
    }
    catch (err) {
        logger.error("Failed to parse user-agents.json", err);
        return [];
    }
};
const filterUserAgents = (data, filters) => {
    return data.filter((ua) => Object.entries(filters).every(([key, value]) => ua[key] === value));
};
const truncateData = (data, limit) => {
    const result = [];
    const usedIndices = new Set();
    while (result.length < limit && usedIndices.size < data.length) {
        const i = Math.floor(Math.random() * data.length);
        if (!usedIndices.has(i)) {
            usedIndices.add(i);
            result.push(data[i]);
        }
    }
    return result;
};
const getUserAgents = (filters) => {
    try {
        const { limit, ...userAgentFilters } = filters;
        const data = filterUserAgents(userAgents, userAgentFilters);
        const safeLimit = Math.min(limit, REQUEST_LIMIT);
        return truncateData(data, safeLimit);
    }
    catch (err) {
        logger.error("Failed to fetch user-agent data due to unexected error: ", err);
        return [];
    }
};
const userAgents = loadUserAgentsFromFile();
export default getUserAgents;
