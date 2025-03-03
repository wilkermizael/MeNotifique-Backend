"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundUser = notFoundUser;
function notFoundUser(message) {
    const error = new Error(message);
    error.name = "NotFoundUser";
    return error;
}
