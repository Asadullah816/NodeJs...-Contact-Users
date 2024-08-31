// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, "User Name is Required"],
//     },
//     email: {
//         type: String,
//         require: [true, "User Email is Required"],
//         unique: [true, "Email Already Exist"],
//     },
//     password: {
//         type: String,
//         require: [true, "Password is Required"],
//     }
// }, {
//     timestamps: true,
// })
// module.exports = mongoose.model("User", userSchema);


// ===========================================
// ===========================================
// ===========================================


const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required "],
    }
},
    {
        timestaps: true,
    }
)

module.exports = mongoose.model("User", userSchema);