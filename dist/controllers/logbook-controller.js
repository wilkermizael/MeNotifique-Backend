"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerLogBook = registerLogBook;
exports.getLogBook = getLogBook;
const logbook_service_1 = require("../services/logbook-service");
const http_status_1 = __importDefault(require("http-status"));
async function registerLogBook(req, // Tipando o req.body corretamente
res, next) {
    try {
        const infoLogBook = req.body;
        console.log(infoLogBook);
        const response = await logbook_service_1.logBookService.createBook(infoLogBook);
        res.status(http_status_1.default.CREATED).json({ results: response });
    }
    catch (err) {
        next(err);
    }
}
async function getLogBook(req, res, next) {
    const id = Number(req.params.id);
    try {
        const response = await logbook_service_1.logBookService.getLogBook(id);
        res.status(http_status_1.default.OK).json({ results: response });
    }
    catch (error) {
        next(error);
    }
}
