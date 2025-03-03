"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logBookService = void 0;
exports.createBook = createBook;
exports.getLogBook = getLogBook;
const repositories_1 = require("../repositories");
async function createBook(infoLogBook) {
    const createClass = await repositories_1.logBookRepository.createBook(infoLogBook);
    return createClass;
}
async function getLogBook(id) {
    const logBook = await repositories_1.logBookRepository.getLogBook(id);
    return logBook;
}
exports.logBookService = {
    createBook,
    getLogBook,
};
