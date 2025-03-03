"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassesSchema = void 0;
var joi_1 = require("joi");
exports.createClassesSchema = joi_1.default.object({
    nameClass: joi_1.default.string().required(),
    turn: joi_1.default.string().required(),
    year: joi_1.default.number().required
});
