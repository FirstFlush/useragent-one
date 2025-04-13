import pino from "pino";
import fs from "fs";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
fs.mkdirSync(path.join("log"), { recursive: true });

const logger = isProduction
  ? pino({
      level: "debug",
    }, pino.multistream([
      { stream: pino.destination({ dest: "log/app.log", sync: true }), level: "warn" },
      { stream: pino.destination(1), level: "debug" },
    ]))
  : pino({
      level: "debug",
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      },
    });

export default logger;
