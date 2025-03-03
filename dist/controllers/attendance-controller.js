"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAttendance = createAttendance;
exports.sendMessageController = sendMessageController;
const http_status_1 = __importDefault(require("http-status"));
const attendance_service_1 = require("../services/attendance-service");
async function createAttendance(req, res, next) {
    try {
        const attendance = req.body;
        const response = await attendance_service_1.attendanceService.createAttendanceRegister(attendance);
        res.status(http_status_1.default.CREATED).json({ results: response });
    }
    catch (err) {
        next(err);
    }
}
async function sendMessageController(req, res) {
    const { phoneNumber, message } = req.body;
    if (!phoneNumber || !message) {
        res.status(http_status_1.default.BAD_REQUEST).json({ message: "Número de telefone e mensagem são obrigatórios." });
    }
    try {
        const response = await attendance_service_1.attendanceService.sendMessage(phoneNumber, message);
        res.status(http_status_1.default.OK).json(response.data);
    }
    catch (error) {
        console.error('Erro ao enviar mensagem:', error.response?.data || error.message);
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ message: 'Erro ao enviar mensagem.', error: error.response?.data });
    }
}
