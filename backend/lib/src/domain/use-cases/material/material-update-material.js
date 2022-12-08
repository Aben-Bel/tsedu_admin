"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMaterialUseCaseImpl = void 0;
class UpdateMaterialUseCaseImpl {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(id, data) {
        const result = await this.materialRepository.updateMaterial(id, data);
        return result;
    }
}
exports.UpdateMaterialUseCaseImpl = UpdateMaterialUseCaseImpl;
