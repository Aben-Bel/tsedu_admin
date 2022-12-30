"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenService {
    constructor() {
        var _a;
        this.secret = (_a = process.env.SECRET) === null || _a === void 0 ? void 0 : _a.replace(/\\n/gm, '\n');
    }
    async encode(payload) {
        const token = jsonwebtoken_1.default.sign(payload, this.secret, {
            algorithm: 'HS256',
            expiresIn: '6h'
        });
        return Promise.resolve(token);
    }
    async decode(token) {
        try {
            const payload = jsonwebtoken_1.default.verify(token, this.secret);
            return payload;
        }
        catch (error) {
            console.log('error decoding token: ', error);
            return undefined;
        }
    }
}
exports.TokenService = TokenService;
