const Order = require("../models/Order");
const Cart = require("../models/Cart");

// ==============================
// Place Order
// ==============================
const placeOrder = async (req, res) => {
    try {

        const { shippingAddress } = req.body;

        if (!shippingAddress) {
            return res.status(400).json({
                success: false,
                message: "Shipping address is required"
            });
        }

        // Get user's cart
        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        if (cartItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Cart is empty"
            });
        }

        // Calculate total price
        let totalPrice = 0;

        const orderItems = cartItems.map((item) => {

            totalPrice += item.product.price * item.quantity;

            return {
                product: item.product._id,
                quantity: item.quantity
            };

        });

        // Create order
        const order = await Order.create({
            user: req.user.id,
            orderItems,
            shippingAddress,
            totalPrice
        });

        // Clear user's cart
        await Cart.deleteMany({
            user: req.user.id
        });

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

// ==============================
// Get My Orders
// ==============================
const getMyOrders = async (req, res) => {
    try {

        const orders = await Order.find({
            user: req.user.id
        })
        .populate("orderItems.product")
        .sort({ createdAt: -1 });

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
            .populate("orderItems.product")
            .sort({ createdAt: -1 });

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