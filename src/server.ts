import express from "express"
import { CronJob } from "cron";
import Router from "./main/routes/index";

const app = express();

async function aplicativo() {
  const router = await Router();
  app.use(express.json());
  app.use(router);
  app.listen(3333, () =>
    console.log("On")
  );
}


aplicativo();
