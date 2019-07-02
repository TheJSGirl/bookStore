require('dotenv').config();
const express = require("express");
const mainRoutes = require('./src/modules/index');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

mainRoutes(app);

app.listen(3000, (req, res) => {
    console.log(`listing at port 3000`)
});
