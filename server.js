const express = require("express");
require('dotenv').config();
const mainRoutes = require('./src/modules/index');
const app = express();
const bodyParser = require('body-parser');
const path =require('path');
const fs = require('fs')
app.use(bodyParser.json());

mainRoutes(app);

app.get('/', (req, res) => {
    console.log("here");
})  
console.log(path.join(__dirname, './modules/books/controllers'));
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
console.log( path.join(__dirname, './modules/books/controllers'))
// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, '/src/modules/books/'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'./src/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

app.listen(3000, (req, res) => {
    console.log(`listing at port 3000`)
})
})
