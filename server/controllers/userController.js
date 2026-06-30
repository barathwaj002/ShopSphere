const User = require("../models/User");
const bcrypt = require("bcryptjs");

// ========================================
// Get Logged-in User Profile
// ========================================
const getUserProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ========================================
// Update User Profile
// ========================================
const updateUserProfile = async (req, res) => {
    try {

        const { name, phone, address, profileImage } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        user.name = name || user.name;
        user.phone = phone || user.phone;
        user.address = address || user.address;
        user.profileImage = profileImage || user.profileImage;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Profile updated successfully.",
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ========================================
// Change Password
// ========================================
const changePassword = async (req, res) => {
    try {

        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Please provide both current and new passwords.",
            });
        }

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        const isMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Current password is incorrect.",
            });
        }

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(
            newPassword,
            salt
        );

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password changed successfully.",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// ========================================
// Get User Dashboard
// ========================================
const getUserDashboard = async (req, res) => {
    try {

        const Cart = require("../models/Cart");
        const Wishlist = require("../models/Wishlist");
        const Order = require("../models/Order");

        // ==============================
        // User
        // ==============================
        const user = await User.findById(req.user.id)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // ==============================
        // Statistics
        // ==============================
        const totalOrders = await Order.countDocuments({
            user: req.user.id,
        });

        const wishlistItems = await Wishlist.countDocuments({
            user: req.user.id,
        });

        const cartItems = await Cart.countDocuments({
            user: req.user.id,
        });

        const orders = await Order.find({
            user: req.user.id,
        });

        const totalSpent = orders.reduce(
            (sum, order) => sum + order.totalPrice,
            0
        );

        // ==============================
        // Recent Orders
        // ==============================
        const recentOrders = await Order.find({
            user: req.user.id,
        })
            .populate(
                "orderItems.product",
                "name image category price"
            )
            .sort({
                createdAt: -1,
            })
            .limit(5);

        res.status(200).json({
            success: true,

            user,

            stats: {
                totalOrders,
                wishlistItems,
                cartItems,
                totalSpent,
            },

            recentOrders,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = {
    getUserProfile,
    updateUserProfile,
    changePassword,
    getUserDashboard,
};