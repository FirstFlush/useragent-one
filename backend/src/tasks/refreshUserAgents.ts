import { UA_SOURCE_URL, UA_DEST_PATH } from "../data/constants";
import { Readable } from "stream";
import logger from "../utils/logger";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { Buffer } from "buffer";
import { writeFileSync } from "fs";

const fetchRawUserAgentStream = async (): Promise<Readable> => {
  try {
    const res = await fetch(UA_SOURCE_URL);
    if (!res.body) throw new Error("No response body from UA fetch");
    return Readable.fromWeb(res.body as any);
  } catch (err) {
    logger.error("Failed to fetch UA data", err);
    throw err;
  }
};

const unzipUserAgentData = async (stream: Readable): Promise<any> => {
  const unzip = createGunzip();
  const chunks: Buffer[] = [];

  await pipeline(
    stream,
    unzip,
    async function* (source) {
      for await (const chunk of source) {
        chunks.push(chunk);
      }
    }
  );

  const raw = Buffer.concat(chunks).toString("utf-8");
  return JSON.parse(raw);
};

const saveUserAgentData = (data: any) => {
  writeFileSync(UA_DEST_PATH, JSON.stringify(data, null, 2), "utf-8");
};

export const refreshUserAgentData = async () => {
  try {
    const stream = await fetchRawUserAgentStream();
    const json = await unzipUserAgentData(stream);
    saveUserAgentData(json);
    logger.info(`Refreshed UA list. Saved ${json.length} user agents`);
  } catch (err) {
    logger.error("Error refreshing UA data:", err);
  }
};
