"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryMaterialDataSource = void 0;
class MemoryMaterialDataSource {
    constructor(database) {
        this.database = database;
    }
    async getAll(query) {
        return await this.database.find(query);
    }
    async getOne(id) {
        const result = await this.database.getOne(id);
        return result;
    }
    async updateOne(id, data) {
        const result = await this.database.updateOne(id, data);
        return result;
    }
    async deleteOne(id) {
        await this.database.delete(id);
    }
    async create(material) {
        const result = await this.database.insertOne(material);
        return result;
    }
}
exports.MemoryMaterialDataSource = MemoryMaterialDataSource;
