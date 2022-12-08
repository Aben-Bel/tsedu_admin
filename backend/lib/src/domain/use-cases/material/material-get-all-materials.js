"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMaterials = void 0;
class GetAllMaterials {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(query) {
        const result = await this.materialRepository.getMaterials(query);
        return result;
    }
}
exports.GetAllMaterials = GetAllMaterials;
