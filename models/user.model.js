const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please Add The User Name"]
    },
    email: {
        type: String,
        required: [true, "Please Add The Email "],
        unique: [true, "Email Address Already Taken"]
    },
    password: {
        type: String,
        required: [true, "Please Add The Password"],
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Users",userSchema)