const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ==========================
// Add Product To Cart
// ==========================
const addToCart = async (req, res) => {
    try {

        const { productId } = req.body;

        // Check if productId is provided
        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required"
            });
        }

        // Check whether product exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        // Check if product already exists in cart
        let cartItem = await Cart.findOne({
            user: req.user.id,
            product: productId
        });

        if (cartItem) {

            // Increase quantity
            cartItem.quantity += 1;

            await cartItem.save();

            return res.status(200).json({
                success: true,
                message: "Cart quantity updated",
                cartItem
            });

        }

        // Create new cart item
        cartItem = await Cart.create({
            user: req.user.id,
            product: productId,
            quantity: 1
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

        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        res.status(200).json({
            success: true,
            count: cartItems.length,
            cartItems
        });

    } catch (error) {

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

module.exports = {
    addToCart,
    getCart,
    updateCartQuantity,
    removeCartItem
};