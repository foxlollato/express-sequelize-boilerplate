'use strict';

const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        swagger: '2.0',
        title: 'Express Sequelize Boilerplate',
        description: 'Project API Documentation',
        termsOfService: '',
        contact: {
            name: 'LOLLATO, Vitor H.',
            email: 'vitor.lollato@gmail.com',
            url: 'https://github.com/foxlollato'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    }
}


const options = {
    openapi: '3.0.1',
  // List of files to be processed.
  apis: ['routes/*.js'],
  // You can also set globs for your apis
  // e.g. './routes/*.js'
  basePath: '/',
  swaggerDefinition: swaggerDocument,
};
const specs = swaggerJsdoc(options);

module.exports = specs;