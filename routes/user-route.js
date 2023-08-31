const UserRouter = require("express").Router();
const UserController = require("../Controllers/userController");

// Register Routers
UserRouter.post("/register",UserController.userRegister)
UserRouter.post("/login",UserController.userLogin)


module.exports = UserRouter