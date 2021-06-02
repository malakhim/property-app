// const express = require('express');
import express from 'express';
import {db} from './database/models/';
// import {routes} from './routes';
// const db = require("./database/models");
const routes = require("./routes");
console.warn(routes);
// import db from './routes';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})

