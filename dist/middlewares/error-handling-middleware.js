"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApplicationErrors = void 0;
const http_status_1 = __importDefault(require("http-status"));
const handleApplicationErrors = (err, _req, res, _next) => {
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
