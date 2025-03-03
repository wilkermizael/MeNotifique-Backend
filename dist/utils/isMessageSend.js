"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMessageSend = isMessageSend;
const config_1 = require("../config");
async function isMessageSend(id_class) {
    const result = await config_1.prisma.attendance.findFirst({
        where: { id_class,
            send_notification: true,
        }
    });
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    const dateFromDB = new Date(result.date_call);
    // Função para "zerar" a hora das datas para comparar apenas o dia
    const formatDate = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (formatDate(today).getTime() === formatDate(dateFromDB).getTime()) {
        return true; // A data é igual e a mensagem ja foi enviada
    }
    return false; // A data é diferente e a mensagem nao foi enviada
}
