import pino from "pino";
import fs from "fs";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
fs.mkdirSync(path.join("log"), { recursive: true });
const logger = pino(
  isProduction
    ? {
        level: "debug",
        transport: {
          targets: [
            {
              target: "pino/file",
              options: { destination: "log/app.log" },
              level: "warn",
            },
            {
              target: "pino-pretty",
              options: { colorize: true },
              level: "debug",
            },
          ]
        },
      }
    : {
        level: "debug",
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard",
            ignore: "pid,hostname",
          },
        },
      }
);

export default logger;
