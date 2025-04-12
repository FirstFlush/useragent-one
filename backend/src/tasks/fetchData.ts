import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { Readable } from "stream";
import { UA_SOURCE_URL, UA_DEST_PATH } from "../data/constants";

export const fetchUserAgentData = async () => {
  const res = await fetch(UA_SOURCE_URL);
  if (!res.body) throw new Error("No response body from UA fetch");

  const nodeReadable = Readable.fromWeb(res.body as any);
  const unzip = createGunzip();

  await pipeline(
    nodeReadable,
    unzip,
    createWriteStream(UA_DEST_PATH)
  );
}
