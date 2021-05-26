import express from "express";
const router = express.Router();
const productsController = require("../../controller/productsController");

// Matches with "/api/products"
router
    .route("/")
    .get(productsController.findAll)
    .post(productsController.create);

// Matches with "/api/products/:id"
// router
//     .route("/:id")
//     .get(productsController.findById)
//     .put(productsController.update)
//     .delete(productsController.remove);

export default router;