import express from "express";
import path from 'path';

const router = require("express").Router();

// router.use("/properties", properties);

// If no API routes are hit, send the Angular app
router.use(function(req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router