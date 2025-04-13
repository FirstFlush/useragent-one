import pino from "pino";
import fs from "fs";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
fs.mkdirSync(path.join("log"), { recursive: true });
const logger = pino(
  isProduction
    ? {
        level: "warn",
        transport: {
          targets: [
            {
              target: "pino/file",
              options: { destination: "log/app.log" },
              level: "info",
            },
            {
              target: "pino-pretty",
              options: { colorize: false },
              level: "info",
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
