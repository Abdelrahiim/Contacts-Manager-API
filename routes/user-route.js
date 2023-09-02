const UserRouter = require("express").Router();
const UserController = require("../Controllers/userController");
const validateToken = require("../Middleware/validateTokenHandler")
// Register Routers
UserRouter.post("/register",UserController.userRegister)
UserRouter.post("/login",UserController.userLogin)
UserRouter.get("/current-user",validateToken,UserController.currentUser)

module.exports = UserRouter