"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cannotDelete = cannotDelete;
function cannotDelete(message) {
    var error = new Error(message);
    error.name = "CannotDelete";
    return error;
}
