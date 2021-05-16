"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const router = require("express").Router();
// router.use("/properties", properties);
// If no API routes are hit, send the Angular app
router.use(function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../client/public/index.html"));
});
module.exports = router;
