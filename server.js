// Local server used to see endpoints

const express = require('express');
const app = express();
const jwt = require("express-jwt");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

app.use(cors());

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );


app.listen(8000, () => {
    console.log('listening')
});
