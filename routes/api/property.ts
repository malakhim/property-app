import express from "express";
const router = express.Router();
import {PropertyController} from '../../controllers/propertyController';

// Matches with "/api/products"
router
    .route("/")
    .get(PropertyController.findAll)
    .post(PropertyController.create);

export default router;