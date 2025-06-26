"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {user} from '../../interface/user.interface.dto';
const database_1 = __importDefault(require("../config/database"));
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, age, address, startDate, password } = req.body;
    const allData = {
        name: name,
        email: email,
        age: age,
        address: address,
        startDate: startDate,
        password: password,
    };
    try {
        const addUser = yield database_1.default.userProfile.create({
            allData
        });
        res.json({ message: 'User register Successfully!' });
        return addUser;
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = addUser;
