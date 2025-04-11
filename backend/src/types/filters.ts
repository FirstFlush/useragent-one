import { UserAgentObject } from "./userAgents";

export type UserAgentFilters = Partial<UserAgentObject>
export type UserAgentRequestFilters = UserAgentFilters &
    {
        limit: number,
    }
