"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const users_schemas_1 = require("../schemas/users-schemas");
//validateBody(createUserSchema),
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.post('/register', (0, middlewares_1.validateBody)(users_schemas_1.createUserSchema), controllers_1.usersController);
usersRouter.post('/login', (0, middlewares_1.validateBody)(users_schemas_1.createUserSchema), controllers_1.login);
