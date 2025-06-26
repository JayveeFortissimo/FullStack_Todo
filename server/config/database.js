"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const prismaConnection = new prisma_1.PrismaClient();
exports.default = prismaConnection;
