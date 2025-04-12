export const UA_SOURCE_URL = process.env.UA_SOURCE_URL || "https://raw.githubusercontent.com/intoli/user-agents/main/src/user-agents.json.gz";
export const UA_DEST_PATH = process.env.UA_DEST_PATH || "src/data/user-agents.json";
export const DOMAIN = process.env.DOMAIN || "useragent.one";
export const REQUEST_LIMIT = parseInt(process.env.REQUEST_LIMIT ?? "50");
