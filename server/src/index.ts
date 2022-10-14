import express, { Express, json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "node:path";
import log from "./logger";
import connect from "./db";
import routes from "./routes";
import errorHandler from "./helpers/errorHandler";

dotenv.config();

const isDev = process.env.NODE_ENV === "development";

const spaPath = isDev
  ? path.resolve("..", "client/build", "index.html")
  : path.resolve("public", "index.html");

const app: Express = express();

const PORT: number = parseInt(process.env.PORT as string) || 5000;

// eslint-disable-next-line import/no-named-as-default-member
app.use(express.static("./public"));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/users", routes.userRouter);

app.use(errorHandler);

app.get("/*", (req, res) => {
  res.sendFile(spaPath);
});

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
