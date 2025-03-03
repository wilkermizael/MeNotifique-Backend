"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceRouter = void 0;
var express_1 = require("express");
var controllers_1 = require("@/controllers");
var attendanceRouter = (0, express_1.Router)();
exports.attendanceRouter = attendanceRouter;
attendanceRouter.post("/", controllers_1.createAttendance);
