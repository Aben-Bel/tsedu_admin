"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneMaterialUseCaseImpl = void 0;
class GetOneMaterialUseCaseImpl {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async execute(id) {
        const result = await this.materialRepository.getMaterial(id);
        return result;
    }
}
exports.GetOneMaterialUseCaseImpl = GetOneMaterialUseCaseImpl;
