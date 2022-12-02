"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(user) {
        this.email = user.email;
        this.password = user.password;
    }
}
exports.UserModel = UserModel;
