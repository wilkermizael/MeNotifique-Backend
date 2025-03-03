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
exports.registerStudentController = registerStudentController;
exports.getStudent = getStudent;
exports.getStudentByIdClass = getStudentByIdClass;
exports.updateStudent = updateStudent;
exports.deleteStudentById = deleteStudentById;
var errors_1 = require("@/errors");
var services_1 = require("@/services");
var http_status_1 = require("http-status");
function registerStudentController(req, // Tipando o req.body corretamente
res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var infoStudent, imgPath, response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    infoStudent = req.body;
                    imgPath = req.file ? "/uploads/".concat(req.file.filename) : null;
                    return [4 /*yield*/, services_1.studentService.createRegisterStudent(infoStudent, imgPath)];
                case 1:
                    response = _a.sent();
                    res.status(http_status_1.default.CREATED).json({ results: response });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    next(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getStudent(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var getStudent_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, services_1.studentService.getStudents()];
                case 1:
                    getStudent_1 = _a.sent();
                    if (getStudent_1.length == 0) {
                        res.status(http_status_1.default.OK).json({ message: "Ainda não há alunos na turma" });
                    }
                    res.status(http_status_1.default.OK).json({ results: getStudent_1 });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    next(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getStudentByIdClass(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id_class, getStudentById, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_class = Number(req.params.id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, services_1.studentService.getStudentByIdClass(id_class)];
                case 2:
                    getStudentById = _a.sent();
                    if (!getStudentById) {
                        throw (0, errors_1.cannotFindStudents)("Aluno não encontrado na turma");
                    }
                    res.status(http_status_1.default.OK).json({ results: getStudentById });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    next(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateStudent(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, id_class, name_student, name_responsible, phone_responsible, qtd_faults, img_student, infoStudent, response, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = Number(req.params.id);
                    _a = req.body, id_class = _a.id_class, name_student = _a.name_student, name_responsible = _a.name_responsible, phone_responsible = _a.phone_responsible, qtd_faults = _a.qtd_faults;
                    img_student = req.file ? req.file.path : undefined;
                    infoStudent = {
                        id_class: Number(id_class),
                        name_student: name_student,
                        name_responsible: name_responsible,
                        phone_responsible: phone_responsible,
                        qtd_faults: Number(qtd_faults),
                        img_student: req.file ? "/uploads/".concat(req.file.filename) : img_student,
                    };
                    return [4 /*yield*/, services_1.studentService.updateStudent({ id: id, infoStudent: infoStudent })];
                case 1:
                    response = _b.sent();
                    res.status(http_status_1.default.OK).json({ results: response });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error("Erro ao atualizar aluno:", error_3);
                    next(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteStudentById(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = Number(req.params.id);
                    return [4 /*yield*/, services_1.studentService.deleteStudent(id)];
                case 1:
                    response = _a.sent();
                    res.status(http_status_1.default.OK).json(response);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    next(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
