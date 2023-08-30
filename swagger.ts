const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Documentação da Minha API',
    },
    basePath: '/',
  },
  apis: ['./src/application/routes/*.ts'], // Caminho para os arquivos de rota da sua API
};

const swaggerSpec = swaggerJSDoc(options);
