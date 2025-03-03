"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceService = void 0;
exports.createAttendanceRegister = createAttendanceRegister;
exports.sendMessage = sendMessage;
const repositories_1 = require("../repositories");
const utils_1 = require("../utils");
async function createAttendanceRegister(attendance) {
    //Verificar se a chamada foi enviada para o whatsapp
    const exist_attendance = await (0, utils_1.existAttendance)(attendance[0].id_class);
    if (exist_attendance) {
        return "turma_ja_chamada";
    }
    const sendWhatsApp = await (0, utils_1.sendMessageWhatsApp)(attendance); // Envia mensagens para o whatsapp dos responsáveis
    // Verifica se alguma mensagem falhou
    const hasErrors = sendWhatsApp.some((result) => result.status === "error");
    if (hasErrors) {
        return "Erro ao enviar mensagens. Chamada não registrada!";
    }
    //Lança +1 falta ao aluno faltoso
    const faults = await (0, utils_1.sendFaults)(attendance);
    //Atualiza as faltas
    if (faults.length > 0) {
        await repositories_1.attendanceRepository.updateFaults(faults);
    }
    //Registra no banco de dados a presença ou falta do aluno
    const createAttendance = await repositories_1.attendanceRepository.createAttendance(attendance);
    if (createAttendance) {
        return true;
    }
}
async function sendMessage(phoneNumber, message) {
    const send = await repositories_1.attendanceRepository.sendMessage(phoneNumber, message);
    console.log(send);
    return send;
}
exports.attendanceService = {
    createAttendanceRegister,
    sendMessage,
};
