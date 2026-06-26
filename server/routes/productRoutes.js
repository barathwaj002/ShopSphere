const express = require("express");
const router = express.Router();

const { addProduct,getProducts,getProductById } = require("../controllers/productController");

// Add Product
router.post("/", addProduct);
router.get("/", getProducts);   
router.get("/:id", getProductById);

module.exports = router;