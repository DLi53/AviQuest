const { validationResult } = require("express-validator")

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errorFormatter = ({ msg }) => msg;
        const errors = validationErrors.formatWith(errorFormatter)

        const err = Error("Validation Error");
        err.errors = errors.mapped();
        err.statusCode = 400;
        err.title = "Validation Error";
        next(err);
    }
    next();
}

module.exports = handleValidationErrors;