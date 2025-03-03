"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existAttendance = existAttendance;
const config_1 = require("../config");
async function existAttendance(id_class) {
    const results = await config_1.prisma.attendance.findMany({
        where: { id_class }
    });
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    // Função para "zerar" a hora das datas para comparar apenas o dia
    const formatDate = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    const todayFormatted = formatDate(today);
    // Verifica se existe algum item com a data de hoje
    const attendanceExists = results.some((item) => formatDate(new Date(item.date_call)) === todayFormatted);
    return attendanceExists; // true ou false
}
