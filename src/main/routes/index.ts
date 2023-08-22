import { Router } from "express";
import { getLaunchers, getStats } from '../infra/database/database'

const launcher = process.env.url_launchers
export default async () => {
  const router = Router();

  router.get("/", (request, response) => {
    return response.send({
      message: "Fullstack Challenge 🏅 - Space X API",
    });
  });

  router.get("/lauchers/", async (request, response) => {
    const lauchers = await getLaunchers()
    return response.status(200).json(lauchers);

  })
  router.get("/lauchers/stats", (request, response) => {
    return response.status(200).json({})
  });

  return router;
}