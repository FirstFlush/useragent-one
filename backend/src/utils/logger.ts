import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";

const logger = pino(
  isProduction
    ? {
        level: "warn",
        transport: {
          targets: [
            {
              target: "pino/file",
              options: {
                destination: "log/app.log",
              },
              level: "warn",
            },
          ],
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
