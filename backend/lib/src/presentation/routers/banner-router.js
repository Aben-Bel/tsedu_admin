"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const Banner_1 = require("../../domain/entities/banner/model/Banner");
function BannerRouter(getBannerUseCase, createBannerUseCase, deleteBannerUseCase) {
    const router = express_1.default.Router();
    const file = (0, multer_1.default)();
    router.get('/', async (req, res) => {
        try {
            const banner = await getBannerUseCase.execute();
            if (!banner)
                res.status(404).send({ message: 'No Banner to Fetch' });
            else
                res.send(new Banner_1.BannerModel(banner));
        }
        catch (err) {
            res.status(500).send({ message: 'Error Fetching Banner' });
        }
    });
    router.delete('/', async (req, res) => {
        try {
            await deleteBannerUseCase.execute();
            res.statusCode = 200;
            res.json({ message: 'Deleted One' });
        }
        catch (e) {
            res.status(500).send({ message: 'Error deleting banner' });
        }
    });
    router.post('/', file.fields([{ name: 'banner', maxCount: 1 }]), async (req, res) => {
        try {
            const reqBanner = Object.assign({}, req.body);
            const bannerFile = req.files;
            if (bannerFile && bannerFile.banner) {
                reqBanner.banner = bannerFile.banner[0];
            }
            const banner = await createBannerUseCase.execute(reqBanner);
            res.send(banner);
        }
        catch (e) {
            res.status(500).send({ message: 'Error saving banner' });
        }
    });
    return router;
}
exports.default = BannerRouter;
