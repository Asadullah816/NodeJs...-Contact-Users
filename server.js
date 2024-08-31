// const express = require("express");
// const ErrorHandler = require("./middlewares/ErrorHandler.js");
// const connectionDB = require("./config/dbConnection.js");
// const dotenv = require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(express.json());
// connectionDB();

// app.use("/api/contact", require('./routers/contact.js'));
// app.use(ErrorHandler);

// app.listen(port);


// ============================================================
// ============================================================
// ============================================================
const express = require('express');
const ErrorHandler = require('./middlewares/ErrorHandler.js');
const connectionDB = require('./config/dbConnection.js');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

connectionDB();

app.use(express.json());
app.use(ErrorHandler)
app.use('/api/contact', require('./routers/contact.js'));
app.use('/user', require('./routers/user.js'));


app.listen(port);