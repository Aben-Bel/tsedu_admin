"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
class UserRepositoryImpl {
    constructor(userDatasource) {
        this.userDatasource = userDatasource;
    }
    async login(email) {
        const user = await this.userDatasource.login(email);
        return user;
    }
    async signup(email, password) {
        const user = await this.userDatasource.signup(email, password);
        return user;
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
