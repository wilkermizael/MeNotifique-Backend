"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classService = void 0;
exports.createClass = createClass;
exports.findById = findById;
exports.findAll = findAll;
exports.update = update;
exports.deleteClass = deleteClass;
const repositories_1 = require("../repositories");
async function createClass({ nameClass, turn, year }) {
    const createClass = await repositories_1.classRepository.createClass({ nameClass, turn, year });
    return createClass;
}
async function findById(id) {
    const findClass = await repositories_1.classRepository.findById(id);
    return findClass;
}
async function findAll() {
    const allClass = await repositories_1.classRepository.findAll();
    return allClass;
}
async function update({ id, nameClass, turn, year }) {
    const updateClass = await repositories_1.classRepository.updateClass({ id, nameClass, turn, year });
    return updateClass;
}
async function deleteClass(id) {
    await repositories_1.classRepository.deleteClass(id);
}
exports.classService = {
    createClass,
    findById,
    findAll,
    update,
    deleteClass,
};
