"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryUserDataSource = void 0;
class MemoryUserDataSource {
    constructor(database) {
        this.database = database;
    }
    async login(email) {
        return await this.database.get(email);
    }
    async signup(email, password) {
        return await this.database.insert({ email, password });
    }
}
exports.MemoryUserDataSource = MemoryUserDataSource;
