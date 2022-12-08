"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_MEMORY_USER = void 0;
const user_1 = require("../../../../domain/entities/material/model/user");
class DB_MEMORY_USER {
    constructor() {
        this.users = [];
    }
    get(email) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].email == email) {
                return Promise.resolve(this.users[i]);
            }
        }
        return Promise.resolve(undefined);
    }
    insert(doc) {
        const user = new user_1.UserModel(doc);
        this.users.push(user);
        return Promise.resolve(user);
    }
}
exports.DB_MEMORY_USER = DB_MEMORY_USER;
