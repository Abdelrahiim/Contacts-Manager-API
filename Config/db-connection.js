const mongoose = require("mongoose");
const dotenv = require("dotenv").config()
const connectDB = async () => {
    try {
        console.log(process.env.DB_STRING)
        const connect = await mongoose.connect(process.env.DB_STRING);
        console.log("Connected Successfully")
    } catch (err) {
        console.log(err)
        console.log("some thing is not write")
        process.exit(1)
    }
}


module.exports = connectDB