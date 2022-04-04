require('dotenv').config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

const express = require('express');
const debug = require('debug')("App");
const app = express();
const router = require('./app/router');

app
    .use(express.json())
    .use(router)
    .listen(PORT, ()=> debug(`listening on http://${HOST}:${PORT}`));