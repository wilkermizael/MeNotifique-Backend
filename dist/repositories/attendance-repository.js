"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceRepository = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
async function createAttendance(attendance) {
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    return config_1.prisma.attendance.create({
        data: {
            id_class: attendance[0].id_class,
            id_student: attendance[0].id_student,
            is_present: attendance[0].is_present,
            date_call: today,
            send_notification: true
        }
    });
}
async function sendMessage(phoneNumber, message) {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;
    const body = {
        number: phoneNumber,
        textMessage: { text: message },
    };
    try {
        return await axios_1.default.post(API_URL, body, {
            headers: {
                "Content-Type": "application/json",
                apikey: API_KEY,
            },
            timeout: 5000,
        });
    }
    catch (error) {
        console.error("Erro na requisição à Evolution API:", error.response?.data || error.message);
        throw error;
    }
}
async function updateFaults(faults) {
    try {
        // Percorre cada aluno e atualiza sua quantidade de faltas
        const updates = faults.map((student) => config_1.prisma.student.update({
            where: { id: student.id_student },
            data: { qtd_faults: student.qtd_faults } // Atualiza qtd_faults
        }));
        await Promise.all(updates); // Aguarda todas as atualizações serem concluídas
        return true; // Retorna sucesso se tudo deu certo
    }
    catch (error) {
        console.error("Erro ao atualizar faltas:", error);
        return false; // Retorna false em caso de erro
    }
}
exports.attendanceRepository = {
    createAttendance,
    sendMessage,
    updateFaults,
};
