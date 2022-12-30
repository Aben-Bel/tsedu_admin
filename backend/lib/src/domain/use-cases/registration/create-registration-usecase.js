"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegistrationUsecaseImp = void 0;
class CreateRegistrationUsecaseImp {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(registration) {
        return await this.repository.createRegistration(registration);
    }
}
exports.CreateRegistrationUsecaseImp = CreateRegistrationUsecaseImp;
