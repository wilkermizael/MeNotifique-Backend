"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicatedUserError = duplicatedUserError;
function duplicatedUserError() {
    const error = new Error("Já existe um usuário com esse nome!");
    error.name = "DuplicatedUserError";
    return error;
}
