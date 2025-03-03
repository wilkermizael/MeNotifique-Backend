"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentSchema = void 0;
var joi_1 = require("joi");
exports.createStudentSchema = joi_1.default.object({
    id_class: joi_1.default.number().required(),
    name_student: joi_1.default.string().required(),
    img_student: joi_1.default.string().allow(null, "").optional(),
    name_responsible: joi_1.default.string().required(),
    phone_responsible: joi_1.default.string().required(),
    qtd_faults: joi_1.default.number().required(),
});
