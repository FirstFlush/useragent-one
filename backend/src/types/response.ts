import { UserAgentObject } from "./userAgents";

export interface ApiResponse {
    data: UserAgentObject[];
    success: boolean;
    msg?: string
} 