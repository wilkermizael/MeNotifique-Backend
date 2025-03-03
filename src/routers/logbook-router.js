"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
var controllers_1 = require("@/controllers");
var express_1 = require("express");
var bookRouter = (0, express_1.Router)();
exports.bookRouter = bookRouter;
bookRouter.post('/', controllers_1.registerLogBook);
bookRouter.get('/:id', controllers_1.getLogBook);
