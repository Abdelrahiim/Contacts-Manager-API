const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Add The Contact Name"]
    },
    email: {
        type: String,
        require: [true, "Please Add The Contact Email"]
    },
    phone: {
        type: String,
        require: [true, "Please Add The Contact Phone"]
    }
},
    {
        timestamps: true,
    }

)

module.exports = mongoose.model("Contact", contactSchema)