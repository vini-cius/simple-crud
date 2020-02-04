require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes.js');

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server listen on http://localhost:3333'));