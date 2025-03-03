"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.close = close;
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const config_1 = require("./config");
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const path = __importStar(require("path"));
(0, config_1.loadEnv)();
const app = express();
app
    .options("*", (req, res) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(204);
})
    .use(cors({
    origin: ["https://menotifique.winikii.com", "http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}))
    .options("*", (req, res) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(204);
})
    .use((req, res, next) => {
    console.log(`Recebida requisição ${req.method} para ${req.path}`);
    next();
})
    .use(express.json())
    .get("/health", (_req, res) => { res.send("I'm OK demais!"); })
    .use("/users", routers_1.usersRouter)
    .use("/class", routers_1.classRouter)
    .use("/student", routers_1.studentRouter)
    .use('/attendance', routers_1.attendanceRouter)
    .use('/logbook', routers_1.bookRouter)
    .use(middlewares_1.handleApplicationErrors)
    .use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
function init() {
    (0, config_1.connectDb)();
    return Promise.resolve(app);
}
async function close() {
    await (0, config_1.disconnectDB)();
}
exports.default = app;
