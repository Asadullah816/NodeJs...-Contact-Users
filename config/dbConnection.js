// const mongoose = require("mongoose");

// const connectionDB = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING);
//         console.log("The database Has been connected", connect.connection.host, connect.connection.name);
//     } catch (err) {
//         console.log(err);
//         process.exit(1
//         );
//     }
// }
// module.exports = connectionDB;

// ==========================================================
// ==========================================================
// ==========================================================

const mongoose = require('mongoose');
const connectionDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("The databse has been connected", connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectionDB;