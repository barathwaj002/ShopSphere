const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {

        try {

            token = req.headers.authorization.split(" ")[1];

            console.log("Received Token:", token);

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            console.log("Decoded:", decoded);

            req.user = decoded;

            next();

        } catch (error) {

            console.log("JWT ERROR:", error.message);

            return res.status(401).json({
                success: false,
                message: "Invalid Token",
            });

        }

    }

    if (!token) {

        return res.status(401).json({
            success: false,
            message: "No Token Found",
        });

    }

};

module.exports = protect;