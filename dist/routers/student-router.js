"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const controllers_1 = require("../controllers");
//import { validateBody } from "../middlewares";
//import { createStudentSchema } from "../schemas";
const multer_1 = __importDefault(require("../middlewares/multer"));
const express_1 = require("express");
const studentRouter = (0, express_1.Router)();
exports.studentRouter = studentRouter;
studentRouter.post("/", multer_1.default.single('img_student'), controllers_1.registerStudentController);
studentRouter.get('/', controllers_1.getStudent); //Rota nao usada
studentRouter.get('/:id', controllers_1.getStudentByIdClass);
studentRouter.put('/:id', multer_1.default.single('img_student'), controllers_1.updateStudent);
studentRouter.delete('/:id', controllers_1.deleteStudentById);
