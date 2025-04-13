import fs from 'fs'
import { UserAgentObject } from "../types/userAgents";
import { UserAgentFilters, UserAgentRequestFilters } from "../types/filters";
import logger from "../utils/logger";
import { REQUEST_LIMIT, UA_DEST_PATH } from "../data/constants";

const loadUserAgentsFromFile = (): UserAgentObject[] => {
  
    if (!fs.existsSync(UA_DEST_PATH)) {
      logger.warn(`${UA_DEST_PATH} not found — defaulting to empty list`);
      return [];
    }
  
    try {
      const raw = fs.readFileSync(UA_DEST_PATH, 'utf-8');
      return JSON.parse(raw) as UserAgentObject[];
    } catch (err) {
      logger.error("Failed to parse user-agents.json", err);
      return [];
    }
  };


const filterUserAgents = (data: UserAgentObject[], filters: UserAgentFilters) => {
    return data.filter((ua) =>
        Object.entries(filters).every(
            ([key, value]) => ua[key as keyof UserAgentObject] === value
        )
    );
};

const truncateData = (data: UserAgentObject[], limit: number): UserAgentObject[] => {
    const result: UserAgentObject[] = [];
    const usedIndices = new Set<number>();
  
    while (result.length < limit && usedIndices.size < data.length) {
      const i = Math.floor(Math.random() * data.length);
      if (!usedIndices.has(i)) {
        usedIndices.add(i);
        result.push(data[i]);
      }
    }
    return result;
  }

const getUserAgents = (filters: UserAgentRequestFilters): UserAgentObject[] => {
    try {
        const userAgents: UserAgentObject[] = loadUserAgentsFromFile();
        const { limit, ...userAgentFilters } = filters;
        const data = filterUserAgents(userAgents as UserAgentObject[], userAgentFilters);
        const safeLimit = Math.min(limit, REQUEST_LIMIT);
        return truncateData(data, safeLimit);
    } catch (err) {
        logger.error("Failed to fetch user-agent data due to unexected error: ", err)
        return []
    }
};



export default getUserAgents