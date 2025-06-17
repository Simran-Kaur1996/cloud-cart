// Maps routes to controller functions

import express from "express";
import {
  fetchAllProducts,
  fetchProductById,
  createNewProduct,
  updateExistingProduct,
  removeProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", fetchAllProducts);
router.get("/:id", fetchProductById);
router.post("/", createNewProduct);
router.put("/:id", updateExistingProduct);
router.delete("/:id", removeProduct);

export default router;
