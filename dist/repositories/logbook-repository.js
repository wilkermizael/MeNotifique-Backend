"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logBookRepository = void 0;
const config_1 = require("../config");
async function createBook(infoLogbook) {
    return config_1.prisma.logBook.create({
        data: {
            id_class: Number(infoLogbook.id_class),
            id_student: Number(infoLogbook.id_student),
            note: infoLogbook.note,
            demand: infoLogbook.demand,
            date_note: infoLogbook.date_note,
            profissional: infoLogbook.profissional,
        },
    });
}
async function getLogBook(id) {
    return config_1.prisma.logBook.findMany({
        where: { id_student: id }
    });
}
exports.logBookRepository = {
    createBook,
    getLogBook
};
