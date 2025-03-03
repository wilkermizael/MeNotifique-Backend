"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const attendanceRouter = (0, express_1.Router)();
exports.attendanceRouter = attendanceRouter;
attendanceRouter.post("/", controllers_1.createAttendance);
