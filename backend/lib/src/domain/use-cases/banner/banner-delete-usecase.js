"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBanner = void 0;
class DeleteBanner {
    constructor(bannerRepository) {
        this.bannerRepository = bannerRepository;
    }
    async execute() {
        await this.bannerRepository.deleteBanner();
    }
}
exports.DeleteBanner = DeleteBanner;
