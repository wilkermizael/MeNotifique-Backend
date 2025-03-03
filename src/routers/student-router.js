"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
var controllers_1 = require("@/controllers");
var multer_1 = require("@/middlewares/multer");
var express_1 = require("express");
var studentRouter = (0, express_1.Router)();
exports.studentRouter = studentRouter;
studentRouter.post("/", multer_1.default.single('img_student'), controllers_1.registerStudentController);
studentRouter.get('/', controllers_1.getStudent); //Rota nao usada
studentRouter.get('/:id', controllers_1.getStudentByIdClass);
studentRouter.put('/:id', multer_1.default.single('img_student'), controllers_1.updateStudent);
studentRouter.delete('/:id', controllers_1.deleteStudentById);
