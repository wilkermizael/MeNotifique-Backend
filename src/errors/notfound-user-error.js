"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundUser = notFoundUser;
function notFoundUser(message) {
    var error = new Error(message);
    error.name = "NotFoundUser";
    return error;
}
