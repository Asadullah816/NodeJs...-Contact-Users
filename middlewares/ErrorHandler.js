// const { constants } = require("../constants");


// const ErrorHandler = (err, req, res, next) => {
//     const statusCode = res.statusCode ? res.statusCode : 500;

//     switch (statusCode) {
//         case constants.NOT_FOUND:
//             res.json({ title: "Page not Found", message: err.message, stackTrace: err.stack });
//             break;
//         case constants.VALIDATION_ERROR:
//             res.json({ title: "Validation Error", message: err.message, stackTrace: err.stack });
//             break;
//         case constants.UNAUTHORIZED:
//             res.json({ title: "UnAuthorized", message: err.message, stackTrace: err.stack });
//             break;
//         case constants.FORBIDDEN:
//             res.json({ title: "ForBidden", message: err.message, stackTrace: err.stack });
//     }
// }
// module.exports = ErrorHandler;
// ============================================================
// ============================================================
// ============================================================

const { constants } = require('../constants');
const ErrorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.StatusCode : 500;
    switch (statusCode) {
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "ForBidden Error",
                message: err.message,
                stackTrace: err.stack,
            })
        case constants.UNAUTORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            })
    }
}

module.exports = ErrorHandler;