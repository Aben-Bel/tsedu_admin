"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaterial = void 0;
class CreateMaterial {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(material) {
        const result = await this.materialRepository.createMaterial(material);
        return result;
    }
}
exports.CreateMaterial = CreateMaterial;
