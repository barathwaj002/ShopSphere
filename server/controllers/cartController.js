const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ==========================
// Add Product To Cart
// ==========================
const addToCart = async (req, res) => {
    try {

        const { productId, quantity = 1 } = req.body;

        // Validate Product ID
        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }

        // Validate Quantity
        if (quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1"
            });
        }

        // Check Product
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        // Check Stock
        if (quantity > product.stock) {
            return res.status(400).json({
                success: false,
                message: `Only ${product.stock} item(s) available in stock`
            });
        }

        // Existing Cart Item
        let cartItem = await Cart.findOne({
            user: req.user.id,
            product: productId
        });

        if (cartItem) {

            const newQuantity = cartItem.quantity + quantity;

            if (newQuantity > product.stock) {
                return res.status(400).json({
                    success: false,
                    message: `Only ${product.stock} item(s) available in stock`
                });
            }

            cartItem.quantity = newQuantity;

            await cartItem.save();

            return res.status(200).json({
                success: true,
                message: "Cart quantity updated",
                cartItem
            });

        }

        // Create New Cart Item
        cartItem = await Cart.create({
            user: req.user.id,
            product: productId,
            quantity
        });

        res.status(201).json({
            success: true,
            message: "Product added to cart",
            cartItem
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==========================
// Get User Cart
// ==========================
const getCart = async (req, res) => {
    try {

        console.log("================================");
        console.log("req.user.id:", req.user.id);

        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        console.log(
            "Users in returned cart:",
            cartItems.map(item => item.user.toString())
        );

        console.log("Cart Count:", cartItems.length);
        console.log("================================");

        res.status(200).json({
            success: true,
            count: cartItems.length,
            cartItems
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==========================
// Update Cart Quantity
// ==========================
const updateCartQuantity = async (req, res) => {
    try {

        const { quantity } = req.body;

        if (quantity < 1) {
            return res.status(400).json({
                success: false,
                message: "Quantity must be at least 1"
            });
        }

        const cartItem = await Cart.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Cart item not found"
            });
        }

        cartItem.quantity = quantity;

        await cartItem.save();

        res.status(200).json({
            success: true,
            message: "Cart updated successfully",
            cartItem
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==========================
// Remove Item From Cart
// ==========================
const removeCartItem = async (req, res) => {
    try {

        const cartItem = await Cart.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!cartItem) {
            return res.status(404).json({
                success: false,
                message: "Cart item not found"
            });
        }

        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Item removed from cart"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==========================
// Clear Entire Cart
// ==========================
const clearCart = async (req, res) => {
    try {

        await Cart.deleteMany({
            user: req.user.id
        });

        res.status(200).json({
            success: true,
            message: "Cart cleared successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    addToCart,
    getCart,
    updateCartQuantity,
    removeCartItem,
    clearCart
};