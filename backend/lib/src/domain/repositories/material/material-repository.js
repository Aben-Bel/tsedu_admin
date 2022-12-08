"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialRepositoryImpl = void 0;
class MaterialRepositoryImpl {
    constructor(materialDataSource) {
        this.materialDataSource = materialDataSource;
    }
    async getMaterials(query) {
        return await this.materialDataSource.getAll(query);
    }
    async deleteMaterial(id) {
        await this.materialDataSource.deleteOne(id);
    }
    async updateMaterial(id, data) {
        const result = await this.materialDataSource.updateOne(id, data);
        return result;
    }
    async getMaterial(id) {
        const result = await this.materialDataSource.getOne(id);
        return result;
    }
    async createMaterial(material) {
        const result = await this.materialDataSource.create(material);
        return result;
    }
}
exports.MaterialRepositoryImpl = MaterialRepositoryImpl;
