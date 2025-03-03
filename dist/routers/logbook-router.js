"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const controllers_1 = require("../controllers");
const express_1 = require("express");
const bookRouter = (0, express_1.Router)();
exports.bookRouter = bookRouter;
bookRouter.post('/', controllers_1.registerLogBook);
bookRouter.get('/:id', controllers_1.getLogBook);
