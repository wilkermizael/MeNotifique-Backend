"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
exports.createUser = createUser;
exports.login = login;
exports.getUser = getUser;
const errors_1 = require("../errors");
const repositories_1 = require("../repositories");
const bcrypt = __importStar(require("bcryptjs"));
async function createUser({ user, password }) {
    await validateUniqueUserOrFail(user);
    const hashedPassword = await bcrypt.hash(password, 12);
    return repositories_1.userRepository.create({
        user,
        password: hashedPassword,
    });
}
async function validateUniqueUserOrFail(user) {
    const userWithSameEmail = await repositories_1.userRepository.findByUser(user);
    if (userWithSameEmail) {
        throw (0, errors_1.duplicatedUserError)();
    }
}
async function login({ user, password }) {
    const existingUser = await repositories_1.userRepository.findByUser(user);
    if (!existingUser) {
        throw (0, errors_1.notFoundUser)("Esse usuário não existe");
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        throw (0, errors_1.notFoundUser)("Senha inválida");
    }
    return existingUser;
}
async function getUser() {
    const getuser = await repositories_1.userRepository.getUser();
    return getuser;
}
exports.userService = {
    createUser,
    login,
    getUser,
};
