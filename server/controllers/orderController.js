const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ==============================
// Place Order
// ==============================
const placeOrder = async (req, res) => {
    try {

        const { shippingAddress } = req.body;

        // Validate Shipping Address
        if (!shippingAddress) {
            return res.status(400).json({
                success: false,
                message: "Shipping address is required"
            });
        }

        // Get User Cart
        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        if (cartItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart is empty"
            });
        }

        let totalPrice = 0;
        const orderItems = [];

        // ==============================
        // Validate Stock
        // ==============================
        for (const item of cartItems) {

            const product = await Product.findById(item.product._id);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: `${item.product.name} not found`
                });
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    success: false,
                    message: `${product.name} has only ${product.stock} item(s) left in stock`
                });
            }

            totalPrice += product.price * item.quantity;

            orderItems.push({
                product: product._id,
                quantity: item.quantity
            });

        }

        // ==============================
        // Create Order
        // ==============================
        const order = await Order.create({
            user: req.user.id,
            orderItems,
            shippingAddress,
            totalPrice
        });

        // ==============================
        // Reduce Product Stock
        // ==============================
        for (const item of cartItems) {

            const product = await Product.findById(item.product._id);

            product.stock -= item.quantity;

            await product.save();

        }

        // ==============================
        // Clear Cart
        // ==============================
        await Cart.deleteMany({
            user: req.user.id
        });

        // ==============================
        // Success Response
        // ==============================
        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const getMyOrders = async (req, res) => {
    try {

        const orders = await Order.find({
            user: req.user.id
        })
            .populate("user", "name email")
            .populate(
                "orderItems.product",
                "name image category price"
            )
            .sort({
                createdAt: -1
            });

        res.status(200).json({
            success: true,
            count: orders.length,
            orders
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==============================
// Get All Orders (Admin)
// ==============================
const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find()
            .populate("user", "name email")
            .populate(
                "orderItems.product",
                "name image category price"
            )
            .sort({
                createdAt: -1
            });

        res.status(200).json({
            success: true,
            count: orders.length,
            orders
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==============================
// Update Order Status
// ==============================
const updateOrderStatus = async (req, res) => {

    try {

        const { orderStatus } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({
                success: false,
                message: "Order not found"
            });

        }

        order.orderStatus = orderStatus;

        await order.save();

        res.status(200).json({
            success: true,
            message: "Order status updated",
            order
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    placeOrder,
    getMyOrders,
    getAllOrders,
    updateOrderStatus
};