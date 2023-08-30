import express from "express"
import { CronJob } from "cron"
import Router from "./application/routes/index";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json"
import cors from "cors"
import { saveLatestLaunchDataToDatabase } from "./shared/utils/carregaDadosBanco";
const app = express();
app.use(cors());

async function aplicativo() {
  const router = await Router();
  app.use(express.json());
  app.use(router);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  const job = new CronJob('0 9 * * *', () => {
    console.log('Rodando a função todos os dias às 9 da manhã.');
    saveLatestLaunchDataToDatabase();
  });

  job.start()
  app.listen(3333, () =>
    console.log("On")
  );
}


aplicativo();
