"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logBookService = void 0;
exports.createBook = createBook;
exports.getLogBook = getLogBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
const repositories_1 = require("../repositories");
async function createBook(infoLogBook) {
    const createClass = await repositories_1.logBookRepository.createBook(infoLogBook);
    return createClass;
}
async function getLogBook(id) {
    const logBook = await repositories_1.logBookRepository.getLogBook(id);
    return logBook;
}
async function updateBook(infoLogBook, id) {
    const createClass = await repositories_1.logBookRepository.updateBook(infoLogBook, id);
    return createClass;
}
async function deleteBook(id) {
    const createClass = await repositories_1.logBookRepository.deleteBook(id);
    return createClass;
}
exports.logBookService = {
    createBook,
    getLogBook,
    updateBook,
    deleteBook,
};
