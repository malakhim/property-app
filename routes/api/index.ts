import express from "express";
import property from './property';

const router = express.Router();

router.use("/properties", property);


module.exports = router;