import { Launcher } from "../../domain/schemas/Launche";
import Database from "../../infra/persistence/Database";
import { AppError } from "../errors/AppError";

import axios from "axios";
import mongoose from "mongoose";


const spacexApiUrl = process.env.url_launcher || ""

async function fetchLatestLaunchData() {
  try {
    const response = await axios.get(spacexApiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados da SpaceX API');
  }
}

export async function saveLatestLaunchDataToDatabase() {
  try {
    const database = new Database(process.env.MONGO_URI as string, {
      dbName: process.env.MONGO_DB_NAME as string,
      user: process.env.MONGO_USER as string,
      pass: process.env.MONGO_PASSWORD as string
    });
    database.connect();

    const latestLaunchData = await fetchLatestLaunchData();

    // Crie um novo documento Launch com os dados obtidos
    const launch = new Launcher({
      latestLaunchData
    });

    // Salve o documento no banco de dados
    await launch.save();

    console.log('Dados do lançamento mais recente salvos com sucesso.');
  } catch (error) {
    await new AppError("erro")
  } finally {
    mongoose.disconnect();
  }
}
