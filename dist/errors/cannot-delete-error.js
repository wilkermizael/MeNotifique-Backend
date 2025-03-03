"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cannotDelete = cannotDelete;
function cannotDelete(message) {
    const error = new Error(message);
    error.name = "CannotDelete";
    return error;
}
