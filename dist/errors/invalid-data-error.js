"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidDataError = invalidDataError;
function invalidDataError(details) {
    return {
        name: 'InvalidDataError',
        message: `Invalid data: ${details}`,
    };
}
