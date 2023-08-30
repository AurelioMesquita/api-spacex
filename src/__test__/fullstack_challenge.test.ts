import request from "supertest";
import express, { Express, Request, Response } from "express";


// Importe a sua aplicação express ou configure-a aqui
const app = express();

// Sua rota
app.get("/", (request: Request, response: Response) => {
  return response.send({
    message: "Fullstack Challenge 🏅 - Space X API",
  });
});
describe("Teste da rota '/'", () => {
  it("Deve retornar a mensagem correta", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Fullstack Challenge 🏅 - Space X API");
  });
});
