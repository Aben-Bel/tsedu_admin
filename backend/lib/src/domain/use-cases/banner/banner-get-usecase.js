"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBanner = void 0;
class GetBanner {
    constructor(bannerRepository) {
        this.bannerRepository = bannerRepository;
    }
    async execute() {
        return await this.bannerRepository.getBanner();
    }
}
exports.GetBanner = GetBanner;
