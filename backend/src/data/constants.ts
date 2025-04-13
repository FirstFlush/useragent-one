export const UA_SOURCE_URL = "https://raw.githubusercontent.com/intoli/user-agents/main/src/user-agents.json.gz"
export const UA_DEST_PATH = "src/data/user-agents.json"

// Max limit on how many UserAgent objects in a response
export const REQUEST_LIMIT = parseInt(process.env.REQUEST_LIMIT ?? "50")

// UTC time:
const parsedHour = Number(process.env.UA_REFRESH_HOUR);
export const UA_REFRESH_HOUR = Number.isInteger(parsedHour) && parsedHour >= 0 && parsedHour <= 23
  ? parsedHour
  : Math.floor(Math.random() * 24);

const parsedMinute = Number(process.env.UA_REFRESH_MINUTE);
export const UA_REFRESH_MINUTE = Number.isInteger(parsedMinute) && parsedMinute >= 0 && parsedMinute <= 59
  ? parsedMinute
  : Math.floor(Math.random() * 60);