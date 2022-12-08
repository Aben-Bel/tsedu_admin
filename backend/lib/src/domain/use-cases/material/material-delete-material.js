"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneMaterialUseCaseImpl = void 0;
class DeleteOneMaterialUseCaseImpl {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(id) {
        await this.materialRepository.deleteMaterial(id);
    }
}
exports.DeleteOneMaterialUseCaseImpl = DeleteOneMaterialUseCaseImpl;
