"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adduser_1 = __importDefault(require("../controllers/adduser"));
const router = express_1.default.Router();
router.post('/addUser', adduser_1.default);
exports.default = router;
