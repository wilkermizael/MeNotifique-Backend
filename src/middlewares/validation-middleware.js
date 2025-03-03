"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = validateBody;
exports.validateParams = validateParams;
var invalid_data_error_1 = require("@/errors/invalid-data-error");
function validateBody(schema) {
    return validate(schema, 'body');
}
function validateParams(schema) {
    return validate(schema, 'params');
}
function validate(schema, type) {
    return function (req, res, next) {
        var error = schema.validate(req[type], {
            abortEarly: false,
        }).error;
        if (!error) {
            next();
        }
        else {
            var errorMessage_1 = '';
            error.details.forEach(function (d) { return (errorMessage_1 += d.message + ' '); });
            throw (0, invalid_data_error_1.invalidDataError)(errorMessage_1);
        }
    };
}
