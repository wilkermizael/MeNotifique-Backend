"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
var express_1 = require("express");
var middlewares_1 = require("@/middlewares");
var schemas_1 = require("@/schemas");
var controllers_1 = require("@/controllers");
//validateBody(createUserSchema),
var usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.post('/register', (0, middlewares_1.validateBody)(schemas_1.createUserSchema), controllers_1.usersController);
usersRouter.post('/login', (0, middlewares_1.validateBody)(schemas_1.createUserSchema), controllers_1.login);
