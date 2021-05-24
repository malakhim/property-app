// const express = require('express');
import express from 'express';
const db = require("./database/models");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes);
db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})

