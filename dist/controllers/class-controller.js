"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassController = createClassController;
exports.findClassController = findClassController;
exports.updateClassController = updateClassController;
exports.deleteClassController = deleteClassController;
const errors_1 = require("../errors");
const class_service_1 = require("../services/class-service");
const http_status_1 = __importDefault(require("http-status"));
// Defina a interface para o corpo da requisição
async function createClassController(req, // Tipando o req.body corretamente
res, next) {
    try {
        const { nameClass, turn, year } = req.body;
        // Aqui você deve chamar um service específico para classes, não userService
        const response = await class_service_1.classService.createClass({ nameClass, turn, year });
        res.status(http_status_1.default.CREATED).send({
            response
        });
    }
    catch (err) {
        next(err);
    }
}
async function findClassController(req, res, next) {
    try {
        const { id } = req.params;
        if (id) {
            const classData = await class_service_1.classService.findById(Number(id)); // 🔹 Convertendo id corretamente
            if (!classData) {
                res.status(http_status_1.default.NOT_FOUND).json({ message: "Turma não encontrada" });
                return;
            }
            res.status(http_status_1.default.OK).json(classData);
            return;
        }
        const allClasses = await class_service_1.classService.findAll();
        res.status(http_status_1.default.OK).json(allClasses);
        return;
    }
    catch (error) {
        next(error);
    }
}
async function updateClassController(req, res, next) {
    try {
        const id = Number(req.params.id);
        const { nameClass, turn, year } = req.body;
        const updateClass = await class_service_1.classService.update({ id, nameClass, turn, year });
        res.status(http_status_1.default.OK).json(updateClass);
        return;
    }
    catch (error) {
        next(error);
    }
}
async function deleteClassController(req, res, next) {
    try {
        const id = Number(req.params.id);
        await class_service_1.classService.deleteClass(id);
        res.status(http_status_1.default.ACCEPTED).json("Turma deletada permanentemente");
    }
    catch (error) {
        if (error) {
            throw (0, errors_1.cannotDelete)("Não existe turma para ser apagada");
        }
    }
}
