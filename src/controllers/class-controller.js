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
exports.createClassController = createClassController;
exports.findClassController = findClassController;
exports.updateClassController = updateClassController;
exports.deleteClassController = deleteClassController;
var errors_1 = require("@/errors");
var services_1 = require("@/services");
var http_status_1 = require("http-status");
// Defina a interface para o corpo da requisição
function createClassController(req, // Tipando o req.body corretamente
res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, nameClass, turn, year, response, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, nameClass = _a.nameClass, turn = _a.turn, year = _a.year;
                    return [4 /*yield*/, services_1.classService.createClass({ nameClass: nameClass, turn: turn, year: year })];
                case 1:
                    response = _b.sent();
                    res.status(http_status_1.default.CREATED).send({
                        response: response
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    next(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function findClassController(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, classData, allClasses, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    id = req.params.id;
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, services_1.classService.findById(Number(id))];
                case 1:
                    classData = _a.sent();
                    if (!classData) {
                        res.status(http_status_1.default.NOT_FOUND).json({ message: "Turma não encontrada" });
                        return [2 /*return*/];
                    }
                    res.status(http_status_1.default.OK).json(classData);
                    return [2 /*return*/];
                case 2: return [4 /*yield*/, services_1.classService.findAll()];
                case 3:
                    allClasses = _a.sent();
                    res.status(http_status_1.default.OK).json(allClasses);
                    return [2 /*return*/];
                case 4:
                    error_1 = _a.sent();
                    next(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updateClassController(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, _a, nameClass, turn, year, updateClass, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = Number(req.params.id);
                    _a = req.body, nameClass = _a.nameClass, turn = _a.turn, year = _a.year;
                    return [4 /*yield*/, services_1.classService.update({ id: id, nameClass: nameClass, turn: turn, year: year })];
                case 1:
                    updateClass = _b.sent();
                    res.status(http_status_1.default.OK).json(updateClass);
                    return [2 /*return*/];
                case 2:
                    error_2 = _b.sent();
                    next(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteClassController(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = Number(req.params.id);
                    return [4 /*yield*/, services_1.classService.deleteClass(id)];
                case 1:
                    _a.sent();
                    res.status(http_status_1.default.ACCEPTED).json("Turma deletada permanentemente");
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    if (error_3) {
                        throw (0, errors_1.cannotDelete)("Não existe turma para ser apagada");
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
