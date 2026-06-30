import api from "./api";

// ============================================
// Get Logged-in User Profile
// ============================================
export const getUserProfile = async () => {
    const { data } = await api.get("/users/profile");
    return data;
};

// ============================================
// Update User Profile
// ============================================
export const updateUserProfile = async (profileData) => {
    const { data } = await api.put(
        "/users/profile",
        profileData
    );

    return data;
};

// ============================================
// Change Password
// ============================================
export const changePassword = async (passwordData) => {
    const { data } = await api.put(
        "/users/change-password",
        passwordData
    );

    return data;
};

export const getUserDashboard = async () => {
    const { data } = await api.get("/users/dashboard");
    return data;
};

const userService = {
    getUserProfile,
    updateUserProfile,
    changePassword,
    getUserDashboard,
};

export default userService;