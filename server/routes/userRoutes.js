console.log("🔥 USER ROUTES LOADED");
console.log("✅ userRoutes Loaded");
const express = require("express");

const {
    getUserProfile,
    updateUserProfile,
    changePassword,
    getUserDashboard
} = require("../controllers/userController");

const  protect  = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// User Dashboard
// GET /api/users/dashboard
// ==========================================
router.get(
    "/dashboard",
    protect,
    getUserDashboard
);

// ==========================================
// Get Logged-in User Profile
// GET /api/users/profile
// ==========================================
router.get(
    "/profile",
    protect,
    getUserProfile
);

// ==========================================
// Update User Profile
// PUT /api/users/profile
// ==========================================
router.put(
    "/profile",
    protect,
    updateUserProfile
);

// ==========================================
// Change Password
// PUT /api/users/change-password
// ==========================================
router.put(
    "/change-password",
    protect,
    changePassword
);

module.exports = router;