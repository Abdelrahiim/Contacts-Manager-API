const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true],
        ref:"user"
    },
    name: {
        type: String,
        required: [true, "Please Add The Contact Name"]
    },
    email: {
        type: String,
        required: [true, "Please Add The Contact Email"]
    },
    phone: {
        type: String,
        required: [true, "Please Add The Contact Phone"]
    }

},
    {
        timestamps: true,
    }

)

module.exports = mongoose.model("Contact", contactSchema)