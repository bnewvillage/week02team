const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Week02 API',
    description: 'Week2 API'
  },
  host: 'localhost:8080'
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js', './routes/temple.js'];

swaggerAutogen(outputFile, routes, doc);