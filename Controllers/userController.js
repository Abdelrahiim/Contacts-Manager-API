const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


/**
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @route POST api/user/register
 * @access public
 */
const userRegister = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body
    if (!userName || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400);
        throw new Error("User With Email Already Register");

    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        userName, email, password: hashedPassword
    })
    if (newUser) {
        res.status(201);
        res.json({
            id: newUser.id,
            email: newUser.email
        })
    } else {
        res.status(400);
        throw new Error("User Data Is Not Valid")

    }



})

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @route POST api/user/login
 * @access public
 */
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Email And Password Are Mandatory !");
    }
    const user = await User.findOne({ email });

    // Compare Password
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            user: {
                username: user.userName,
                email: user.email,
                id: user._id,
            }
        }, process.env.SECRET_KEY, {
            expiresIn: "30m"
        })
        res.status(200)
        res.json({ token })
    } else {
        res.status(401)
        throw new Error("Could Not Validate Credentials")
    }
})

const currentUser = asyncHandler(async (req, res) => {
    
    res.json(req.user);
});



module.exports = { userRegister, userLogin, currentUser }