"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cannotFindStudents = cannotFindStudents;
function cannotFindStudents(message) {
    var error = new Error(message);
    error.name = "CannotFindStudentsError";
    return error;
}
