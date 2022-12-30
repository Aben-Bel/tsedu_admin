"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationRepositoryImp = void 0;
class RegistrationRepositoryImp {
    constructor(datasource) {
        this.datasource = datasource;
    }
    async createRegistration(registration) {
        return await this.datasource.create(registration);
    }
    async getAllRegistration() {
        return await this.datasource.getAll();
    }
}
exports.RegistrationRepositoryImp = RegistrationRepositoryImp;
