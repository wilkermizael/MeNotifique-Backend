"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const user_service_1 = require("../services/user-service");
const http_status_1 = __importDefault(require("http-status"));
async function login(req, res, next) {
    try {
        const { user, password } = req.body;
        const response = await user_service_1.userService.login({ user, password });
        res.status(http_status_1.default.OK).json({
            id: response.id,
            user: response.user,
            token: response.token
        });
    }
    catch (err) {
        next(err);
    }
}
