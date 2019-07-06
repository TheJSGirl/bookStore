require('dotenv').config();
const express = require('express');
const mainRoutes = require('./modules/index');
const { App } = require('./config');
const { middleware, database } = require('./lib');

const app = express();

middleware(app);
mainRoutes(app);
database.connect();

app.listen(App.PORT, App.HOST, (e) => {
  if (e) {
    logger.error(e.message);
  }
  logger.info(`${App.NAME} running on ${App.HOST}:${App.PORT}`);
});
