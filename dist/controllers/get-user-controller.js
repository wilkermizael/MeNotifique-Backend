"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
const user_service_1 = require("../services/user-service");
const http_status_1 = __importDefault(require("http-status"));
async function getUser(req, res, next) {
    console.log("controller");
    try {
        const response = await user_service_1.userService.getUser();
        res.status(http_status_1.default.CREATED).json(response);
    }
    catch (err) {
        next(err);
    }
}
