const supertest = require('supertest');
import app from '../application/routes/index' // Ajuste o caminho conforme necessário.

describe('Testes para a rota /launchers/', () => {
  it('Deve retornar uma lista de lançadores paginados', async () => {
    const response = await supertest(app)
      .get('/launchers')
      .query({ page: 1, limit: 5 });


    expect(response.status).toBe(200);

    // Verifique o formato da resposta.
    expect(response.body).toHaveProperty('results');
    expect(response.body).toHaveProperty('totalDocs');
    expect(response.body).toHaveProperty('page');
    expect(response.body).toHaveProperty('totalPages');
    expect(response.body).toHaveProperty('hasPrev');

    // Verifique se 'results' é uma matriz.
    expect(Array.isArray(response.body.results)).toBe(true);

    // Outras asserções conforme necessário.
  });
});
