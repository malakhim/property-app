"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const routes = require("./routes");
const app = express_1.default();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/api", routes);
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
