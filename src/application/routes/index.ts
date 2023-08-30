import { Router, Request } from "express";
import LauncheRepository from "../../domain/repositories/Launche/LauncheRepository";
import Database from "../../infra/persistence/Database";
import { ILaunche, Launche, Launcher } from "../../domain/schemas/Launche";
import { Model, model } from "mongoose";

export default async () => {
  const router = Router();

  router.get("/", (request, response) => {
    return response.send({
      message: "Fullstack Challenge 🏅 - Space X API",
    });
  });

  router.get("/launchers/", async (request, response) => {
    const pageAtual = Number(request.query.page ?? 1)
    const limit = Number(request.query.limit ?? 5)

    const database = new Database(process.env.MONGO_URI as string, {
      dbName: process.env.MONGO_DB_NAME as string,
      user: process.env.MONGO_USER as string,
      pass: process.env.MONGO_PASSWORD as string
    });
    database.connect();


    const modelLaunch: Model<ILaunche> = model<ILaunche>('Launch', Launche);
    const lauchers = new LauncheRepository(modelLaunch)
    const totalDocs = await lauchers.countDocs();
    const totalPages = Math.ceil(Number(totalDocs) / limit)

    const launches = await lauchers.find(limit, limit * pageAtual - 1);

    return response.status(200).json({
      results: launches,
      totalDocs: totalDocs,
      page: pageAtual,
      totalPages,
      hasPrev: pageAtual === totalPages ? false : true,
    });

  })

  router.get("/lauchers/stats", (request, response) => {
    return response.status(200).json({})
  });

  return router;
}

