// const asyncHandler = require('express-async-handler');
// const User = require('../models/userModel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


// const register = asyncHandler(async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         res.status(400);
//         throw new Error("All fields are required!");
//     }
//     const hashedPass = await bcrypt.hash(password, 10);
//     const userAvailable = await User.findOne({ email });
//     if (userAvailable) {
//         res.status(400);
//         res.json("Email Already Exist");
//     }
//     console.log(hashedPass);
//     const user = await User.create({
//         name,
//         email,
//         password: hashedPass,
//     })

//     if (user) {
//         res.status(201).json({
//             _id: user.id,
//             name: user.name,
//             email: user.email,
//         })
//     }
//     else {
//         throw new Error("User data is not Valid");
//     }

// })
// const login = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.password))) {
//         const accessToken = jwt.sign({
//             user: {
//                 name: user.name,
//                 email: user.email,
//                 id: user.id,
//             },

//         },
//             process.env.ACCESS_TOKEN_SECRET,
//             {
//                 expiresIn: "1m",
//             }
//         );
//         res.status(200).json(accessToken);
//     }
//     else {
//         throw new Error("Email or password is Invalid!");
//     }
// })
// module.exports = {
//     register,
//     login,
// }


// ================================================
// ================================================
// ================================================

const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are required!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("Email Already exist");
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPass,
    });
    if (user) {
        res.status(200).json({
            name: user.name,
            email: user.email,
            id: user.id
        })
    }

})
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required!");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                name: user.name,
                email: user.email,
                id: user.id
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: "1m",
            }
        );
        res.status(200).json(accessToken);
    }
    else {
        throw new Error("Email or password InCorrect");
    }
})

module.exports = {
    register,
    login,
}