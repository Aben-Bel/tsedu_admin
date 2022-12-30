"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationDatasourceImp = void 0;
class RegistrationDatasourceImp {
    constructor(db) {
        this.db = db;
    }
    async create(registration) {
        return await this.db.insertOne(registration);
    }
    async getAll() {
        const query = {};
        return await this.db.find(query);
    }
}
exports.RegistrationDatasourceImp = RegistrationDatasourceImp;
