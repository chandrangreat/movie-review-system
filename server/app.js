const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', api);

module.exports = app;
