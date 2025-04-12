import { readFileSync } from "fs";
import { UA_DEST_PATH } from "@/data/constants";
export const loadUserAgentData = () => {
    const raw = readFileSync(UA_DEST_PATH, "utf-8");
    return JSON.parse(raw);
};
