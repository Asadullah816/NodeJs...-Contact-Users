const mongoose = require("mongoose");

const contactShcema = mongoose.Schema({
    name: {
        type: String,
        required: (true, "Please enter a contact Name")
    },
    email: {
        type: String,
        required: (true, "Please Enter an Email"),
    },
    phone: {
        type: String,
        required: (true, "Please Enter a Phone number"),
    },

},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Contact", contactShcema);