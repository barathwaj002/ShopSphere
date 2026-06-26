const express = require("express");
const router = express.Router();

const { addProduct,getProducts,getProductById,updateProduct } = require("../controllers/productController");

// Add Product
router.post("/", addProduct);
router.get("/", getProducts);   
router.get("/:id", getProductById);
router.put("/:id", updateProduct);

module.exports = router;