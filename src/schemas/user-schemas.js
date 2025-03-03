"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
var joi_1 = require("joi");
exports.createUserSchema = joi_1.default.object({
    user: joi_1.default.string().required(),
    password: joi_1.default.string().min(6).required(),
});
