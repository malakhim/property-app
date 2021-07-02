import express from "express";
const router = express.Router();
import {PropertyController} from '../../controllers/propertyController';

router
    .route("/")
    .get(PropertyController.findAll)
    .post(PropertyController.create);

export default router;