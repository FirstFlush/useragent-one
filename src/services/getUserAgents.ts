import { UserAgentObject } from "@/types/userAgents";
import { UserAgentFilters, UserAgentRequestFilters } from "@/types/filters";
import userAgents from "@/data/user-agents.json";
import logger from "@/utils/logger";
import { REQUEST_LIMIT } from "@/data/constants";

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