import express from "express";
const router = express.Router();
import { TenancyController } from "../../controllers/tenancyController";

router
    .route("/active")
    .get(TenancyController.findAllActive)

export default router;