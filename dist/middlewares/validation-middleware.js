"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = validateBody;
exports.validateParams = validateParams;
const invalid_data_error_1 = require("../errors/invalid-data-error");
function validateBody(schema) {
    return validate(schema, 'body');
}
function validateParams(schema) {
    return validate(schema, 'params');
}
function validate(schema, type) {
    return (req, res, next) => {
        const { error } = schema.validate(req[type], {
            abortEarly: false,
        });
        if (!error) {
            next();
        }
        else {
            let errorMessage = '';
            error.details.forEach((d) => (errorMessage += d.message + ' '));
            throw (0, invalid_data_error_1.invalidDataError)(errorMessage);
        }
    };
}
