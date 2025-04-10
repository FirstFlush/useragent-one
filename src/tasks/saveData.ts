import { readFileSync } from "fs";
import { join } from "path";

const DATA_PATH = join(__dirname, "../data/user-agents.json");

export const loadUserAgentData = () => {
  const raw = readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
};
