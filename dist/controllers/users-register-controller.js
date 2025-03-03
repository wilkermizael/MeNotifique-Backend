"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = usersController;
const user_service_1 = require("../services/user-service");
const http_status_1 = __importDefault(require("http-status"));
async function usersController(req, res, next) {
    try {
        const { user, password } = req.body;
        const response = await user_service_1.userService.createUser({ user, password });
        res.status(http_status_1.default.CREATED).json({
            id: response.id,
            user: response.user,
            token: response.token
        });
    }
    catch (err) {
        next(err);
    }
}
