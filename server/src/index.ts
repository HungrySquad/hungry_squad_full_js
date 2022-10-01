import express, { Express, json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import log from "./logger";
import connect from "./db";
import routes from "./routes";
import errorHandler from "./helpers/errorHandler";

dotenv.config();

const app: Express = express();

const PORT: number = parseInt(process.env.PORT as string) || 5000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/users", routes.userRouter);

app.use(errorHandler);

connect()
  .then(() => {
    app.listen(PORT, () => {
      log.info(`🚀 Server ready at ${PORT}`);
    });
  })
  .catch((e) => {
    log.error("Uncaught Expection " + e.message);
    process.exit(1);
  });

process.on("uncaughtException", (e: Error) => {
  log.error("Uncaught Expection " + e.message);
  process.exit(1);
});
