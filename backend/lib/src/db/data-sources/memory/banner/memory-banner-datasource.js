"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryBannerDataSource = void 0;
class MemoryBannerDataSource {
    constructor(database) {
        this.database = database;
    }
    async createOne(banner) {
        return await this.database.insert(banner);
    }
    async getOne() {
        return await this.database.get();
    }
    async deleteOne() {
        return await this.database.delete();
    }
}
exports.MemoryBannerDataSource = MemoryBannerDataSource;
