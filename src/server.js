require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mainRoutes = require('./modules');
const { App } = require('./config');

const app = express();
app.use(bodyParser.json());

mainRoutes(app);

app.listen(App.PORT, (e) => {
  if (e) {
    throw new Error(e.message);
  }
  console.log(`listing at port ${App.PORT}`);
});
