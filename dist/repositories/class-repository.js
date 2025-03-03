"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classRepository = void 0;
const config_1 = require("../config");
async function createClass({ nameClass, turn, year }) {
    return config_1.prisma.class.create({
        data: {
            nameClass,
            turn,
            year
        }
    });
}
async function findById(id) {
    return config_1.prisma.class.findUnique({
        where: { id },
    });
}
async function findAll() {
    return config_1.prisma.class.findMany();
}
async function updateClass({ id, nameClass, turn, year }) {
    const existingClass = await config_1.prisma.class.findUnique({ where: { id } });
    if (!existingClass) {
        throw new Error("Turma não encontrada");
    }
    return config_1.prisma.class.update({
        where: { id },
        data: { nameClass, turn, year },
    });
}
async function deleteClass(id) {
    const existingClass = await config_1.prisma.class.findUnique({ where: { id } });
    console.log(existingClass);
    if (!existingClass) {
        throw new Error("Turma não encontrada");
    }
    return await config_1.prisma.class.delete({ where: { id } });
}
exports.classRepository = {
    createClass,
    findById,
    findAll,
    updateClass,
    deleteClass,
};
