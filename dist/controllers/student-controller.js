"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerStudentController = registerStudentController;
exports.getStudent = getStudent;
exports.getStudentByIdClass = getStudentByIdClass;
exports.updateStudent = updateStudent;
exports.deleteStudentById = deleteStudentById;
const errors_1 = require("../errors");
const student_service_1 = require("../services/student-service");
const http_status_1 = __importDefault(require("http-status"));
async function registerStudentController(req, // Tipando o req.body corretamente
res, next) {
    try {
        const infoStudent = req.body;
        const imgPath = req.file ? `/uploads/${req.file.filename}` : null;
        const response = await student_service_1.studentService.createRegisterStudent(infoStudent, imgPath);
        res.status(http_status_1.default.CREATED).json({ results: response });
    }
    catch (err) {
        next(err);
    }
}
async function getStudent(req, res, next) {
    try {
        const getStudent = await student_service_1.studentService.getStudents();
        if (getStudent.length == 0) {
            res.status(http_status_1.default.OK).json({ message: "Ainda não há alunos na turma" });
        }
        res.status(http_status_1.default.OK).json({ results: getStudent });
    }
    catch (error) {
        next(error);
    }
}
async function getStudentByIdClass(req, res, next) {
    const id_class = Number(req.params.id);
    try {
        const getStudentById = await student_service_1.studentService.getStudentByIdClass(id_class);
        if (!getStudentById) {
            throw (0, errors_1.cannotFindStudents)("Aluno não encontrado na turma");
        }
        res.status(http_status_1.default.OK).json({ results: getStudentById });
    }
    catch (error) {
        next(error);
    }
}
async function updateStudent(req, res, next) {
    try {
        const id = Number(req.params.id);
        const { id_class, name_student, name_responsible, phone_responsible, qtd_faults } = req.body;
        const img_student = req.file ? req.file.path : undefined;
        // Parse manual para o objeto infoStudent
        const infoStudent = {
            id_class: Number(id_class),
            name_student: name_student,
            name_responsible: name_responsible,
            phone_responsible: phone_responsible,
            qtd_faults: Number(qtd_faults),
            img_student: req.file ? `/uploads/${req.file.filename}` : img_student,
        };
        const response = await student_service_1.studentService.updateStudent({ id, infoStudent });
        res.status(http_status_1.default.OK).json({ results: response });
    }
    catch (error) {
        console.error("Erro ao atualizar aluno:", error);
        next(error);
    }
}
async function deleteStudentById(req, res, next) {
    try {
        const id = Number(req.params.id);
        const response = await student_service_1.studentService.deleteStudent(id);
        res.status(http_status_1.default.OK).json(response);
    }
    catch (error) {
        next(error);
    }
}
