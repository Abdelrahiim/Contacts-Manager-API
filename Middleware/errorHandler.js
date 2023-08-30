
const constants = {
    VALIDATION_ERROR: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

/**
 * 
 * @param {Error} err 
 * @param {Express.Response} req 
 * @param {Express.Response} res 
 * @param {Express.NextFunction} next 
 */
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    switch (statusCode) {
        case constants.UNAUTHORIZED:
            res.json({
                title: "unAuthorize",
                message: err.message,
            });
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Bad Request",
                message: err.message,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
            });
            break;
        case 500:
            res.json({
                title: "Internal Server Error",
                message: err.message,
            });
            break;
        default:
            break;
    }
}

module.exports = errorHandler