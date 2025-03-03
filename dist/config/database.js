"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.connectDb = connectDb;
exports.disconnectDB = disconnectDB;
const client_1 = require("@prisma/client");
function connectDb() {
    exports.prisma = new client_1.PrismaClient();
}
async function disconnectDB() {
    await exports.prisma?.$disconnect();
}
