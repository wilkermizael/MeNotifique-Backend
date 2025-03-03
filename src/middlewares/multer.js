"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = require("multer");
var path_1 = require("path");
var uuid_1 = require("uuid");
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, "..", "..", "uploads"));
    },
    filename: function (req, file, cb) {
        var ext = path_1.default.extname(file.originalname);
        cb(null, "".concat((0, uuid_1.v4)()).concat(ext));
    },
});
var upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
