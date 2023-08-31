const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const errorHandler = require('./Middleware/errorHandler')
dotenv.config()
const connectDB = require('./Config/db-connection')

// Connect To Mongo DB
connectDB()

const port = process.env.PORT || 5000
const app = express();


// Middleware 
// Allow Routers To Get Date Form Body as JSON
app.use(express.json())
// Logger Middleware with Morgan 
app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }))


// Router 
app.use("/api/contacts", require("./routes/contact-route"));
app.use("/api/user", require("./routes/user-route"));




// Error Handler Middleware
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});