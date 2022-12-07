"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const banner = yield getBannerUseCase.execute();
            if (!banner)
                res.status(404).send({ message: 'No Banner to Fetch' });
            else
                res.send(new Banner_1.BannerModel(banner));
        }
        catch (err) {
            res.status(500).send({ message: 'Error Fetching Banner' });
        }
    }));
    router.delete('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            yield deleteBannerUseCase.execute();
            res.statusCode = 200;
            res.json({ message: 'Deleted One' });
        }
        catch (e) {
            res.status(500).send({ message: 'Error deleting banner' });
        }
    }));
    router.post('/', file.fields([{ name: 'banner', maxCount: 1 }]), (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const reqBanner = Object.assign({}, req.body);
            const bannerFile = req.files;
            if (bannerFile && bannerFile.banner) {
                reqBanner.banner = bannerFile.banner[0];
            }
            const banner = yield createBannerUseCase.execute(reqBanner);
            res.send(banner);
        }
        catch (e) {
            res.status(500).send({ message: 'Error saving banner' });
        }
    }));
    return router;
}
exports.default = BannerRouter;
