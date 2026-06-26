const express = require("express");

const router = express.Router();

const { addToCart,getCart } = require("../controllers/cartController");

const protect = require("../middleware/authMiddleware");

// Add to Cart
router.post("/", protect, addToCart);
router.get("/", protect, getCart);

module.exports = router;