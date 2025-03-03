"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const config_1 = require("../config");
async function findByUser(user, select) {
    const params = {
        where: {
            user,
        },
    };
    if (select) {
        params.select = select;
    }
    //return prisma.user.findUnique(params);
    return config_1.prisma.user.findUnique(params);
}
async function create(data) {
    return config_1.prisma.user.create({
        data,
    });
}
exports.userRepository = {
    create, findByUser
};
