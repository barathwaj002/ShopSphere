const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token;

    // Check if Authorization header exists
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Extract token
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Store decoded user data
            req.user = decoded;

            // Continue to next function
            next();

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token"
            });
        }
    }

    // No token found
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No Token Found"
        });
    }
};

module.exports = protect;