"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hasher = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Hasher {
    hash(value) {
        return bcrypt_1.default.hashSync(value, 10);
    }
    compare(plain, hashed) {
        return bcrypt_1.default.compareSync(plain, hashed);
    }
}
exports.Hasher = Hasher;
