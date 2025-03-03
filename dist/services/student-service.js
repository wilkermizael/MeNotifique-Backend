"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentService = void 0;
exports.createRegisterStudent = createRegisterStudent;
exports.getStudents = getStudents;
exports.getStudentByIdClass = getStudentByIdClass;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
const config_1 = require("../config");
const repositories_1 = require("../repositories");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
async function createRegisterStudent(infoStudent, imgPath) {
    const createClass = await repositories_1.studentRepository.createStudent(infoStudent, imgPath);
    return createClass;
}
async function getStudents() {
    const findStudents = await repositories_1.studentRepository.getStudents();
    return findStudents;
}
async function getStudentByIdClass(id_class) {
    const findStudent = await repositories_1.studentRepository.getStudentByIdClass(id_class);
    return findStudent;
}
async function updateStudent({ id, infoStudent, }) {
    if (!infoStudent.id_class || !infoStudent.name_student) {
        throw new Error("Dados obrigatórios faltando.");
    }
    // Busca o aluno existente no banco
    const existingStudent = await config_1.prisma.student.findUnique({ where: { id } });
    if (!existingStudent) {
        throw new Error("Aluno não encontrado.");
    }
    // 🧹 Apaga a imagem antiga se uma nova imagem foi enviada
    if (infoStudent.img_student && existingStudent.img_student) {
        const sanitizedImageName = existingStudent.img_student.replace(/^\/?uploads\/?/, "");
        const oldImagePath = path.resolve(__dirname, "..", "..", "uploads", sanitizedImageName);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath); // Apaga a imagem antiga
        }
        else {
            console.warn(`Imagem antiga não encontrada: ${oldImagePath}`);
        }
    }
    const update = await repositories_1.studentRepository.updateStudent({ id, infoStudent });
    return update;
}
async function deleteStudent(id) {
    const promise = await repositories_1.studentRepository.deleteStudent(id);
    return promise;
}
exports.studentService = {
    createRegisterStudent,
    getStudents,
    getStudentByIdClass,
    updateStudent,
    deleteStudent,
};
