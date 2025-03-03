"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentService = void 0;
exports.createRegisterStudent = createRegisterStudent;
exports.getStudents = getStudents;
exports.getStudentByIdClass = getStudentByIdClass;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
var config_1 = require("@/config");
var repositories_1 = require("@/repositories");
var path_1 = require("path");
var fs_1 = require("fs");
function createRegisterStudent(infoStudent, imgPath) {
    return __awaiter(this, void 0, void 0, function () {
        var createClass;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repositories_1.studentRepository.createStudent(infoStudent, imgPath)];
                case 1:
                    createClass = _a.sent();
                    return [2 /*return*/, createClass];
            }
        });
    });
}
function getStudents() {
    return __awaiter(this, void 0, void 0, function () {
        var findStudents;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repositories_1.studentRepository.getStudents()];
                case 1:
                    findStudents = _a.sent();
                    return [2 /*return*/, findStudents];
            }
        });
    });
}
function getStudentByIdClass(id_class) {
    return __awaiter(this, void 0, void 0, function () {
        var findStudent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repositories_1.studentRepository.getStudentByIdClass(id_class)];
                case 1:
                    findStudent = _a.sent();
                    return [2 /*return*/, findStudent];
            }
        });
    });
}
function updateStudent(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var existingStudent, sanitizedImageName, oldImagePath, update;
        var id = _b.id, infoStudent = _b.infoStudent;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!infoStudent.id_class || !infoStudent.name_student) {
                        throw new Error("Dados obrigatórios faltando.");
                    }
                    return [4 /*yield*/, config_1.prisma.student.findUnique({ where: { id: id } })];
                case 1:
                    existingStudent = _c.sent();
                    if (!existingStudent) {
                        throw new Error("Aluno não encontrado.");
                    }
                    // 🧹 Apaga a imagem antiga se uma nova imagem foi enviada
                    if (infoStudent.img_student && existingStudent.img_student) {
                        sanitizedImageName = existingStudent.img_student.replace(/^\/?uploads\/?/, "");
                        oldImagePath = path_1.default.resolve(__dirname, "..", "..", "uploads", sanitizedImageName);
                        if (fs_1.default.existsSync(oldImagePath)) {
                            fs_1.default.unlinkSync(oldImagePath); // Apaga a imagem antiga
                        }
                        else {
                            console.warn("Imagem antiga n\u00E3o encontrada: ".concat(oldImagePath));
                        }
                    }
                    return [4 /*yield*/, repositories_1.studentRepository.updateStudent({ id: id, infoStudent: infoStudent })];
                case 2:
                    update = _c.sent();
                    return [2 /*return*/, update];
            }
        });
    });
}
function deleteStudent(id) {
    return __awaiter(this, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repositories_1.studentRepository.deleteStudent(id)];
                case 1:
                    promise = _a.sent();
                    return [2 /*return*/, promise];
            }
        });
    });
}
exports.studentService = {
    createRegisterStudent: createRegisterStudent,
    getStudents: getStudents,
    getStudentByIdClass: getStudentByIdClass,
    updateStudent: updateStudent,
    deleteStudent: deleteStudent,
};
