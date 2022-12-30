"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationInMemoryDB = void 0;
const RegistrationModel_1 = require("../../../../domain/entities/registrationform/model/RegistrationModel");
class RegistrationInMemoryDB {
    constructor() {
        this.registrations = [];
    }
    find(query) {
        return Promise.resolve(this.registrations);
    }
    insertOne(doc) {
        const registrationModel = new RegistrationModel_1.RegistrationModel(doc);
        this.registrations.push(registrationModel);
        return Promise.resolve(registrationModel);
    }
}
exports.RegistrationInMemoryDB = RegistrationInMemoryDB;
