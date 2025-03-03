"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApplicationErrors = void 0;
var http_status_1 = require("http-status");
var handleApplicationErrors = function (err, _req, res, _next) {
    if (err.name === "DuplicatedUserError") {
        res.status(http_status_1.default.CONFLICT).send({
            message: err.message,
        });
        return;
    }
    if (err.name === "NotFoundUser") {
        res.status(http_status_1.default.NOT_FOUND).send({
            message: err.message
        });
        return;
    }
    if (err.name === "CannotDelete") {
        res.status(http_status_1.default.NOT_FOUND).send({
            message: err.message
        });
        return;
    }
    if (err.name === "CannotFindStudentsError") {
        res.status(http_status_1.default.NOT_FOUND).send({
            message: err.message
        });
    }
    console.error(err);
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
    });
    return;
};
exports.handleApplicationErrors = handleApplicationErrors;
