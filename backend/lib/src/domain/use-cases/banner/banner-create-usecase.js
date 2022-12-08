"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBanner = void 0;
class CreateBanner {
    constructor(bannerRepository) {
        this.bannerRepository = bannerRepository;
    }
    async execute(banner) {
        return await this.bannerRepository.createBanner(banner);
    }
}
exports.CreateBanner = CreateBanner;
