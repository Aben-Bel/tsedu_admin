"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerRepositoryImpl = void 0;
class BannerRepositoryImpl {
    constructor(bannerDataSource) {
        this.bannerDataSource = bannerDataSource;
    }
    async deleteBanner() {
        await this.bannerDataSource.deleteOne();
    }
    async getBanner() {
        return await this.bannerDataSource.getOne();
    }
    async createBanner(banner) {
        return await this.bannerDataSource.createOne(banner);
    }
}
exports.BannerRepositoryImpl = BannerRepositoryImpl;
