const asyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader) {
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }
    if (authHeader && authHeader.startsWith("Bearer")) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("Error Validate Token")
            }
            req.user = decoded.user
            next()
        })
        if (!token) {
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
})

module.exports = validateToken