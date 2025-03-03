"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnv = loadEnv;
var dotenv_1 = require("dotenv");
var dotenv_expand_1 = require("dotenv-expand");
function loadEnv() {
    var path = process.env.NODE_ENV === 'test'
        ? '.env.test'
        : process.env.NODE_ENV === 'development'
            ? '.env.development'
            : '.env';
    var currentEnvs = dotenv_1.default.config({ path: path });
    dotenv_expand_1.default.expand(currentEnvs);
}
