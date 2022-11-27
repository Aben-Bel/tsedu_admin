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
function MaterialRouter(getAllMaterialsUseCase, createMaterialUseCase, udpateMaterialUseCase, getOneMaterialUseCase, deleteOneMaterialUseCase) {
    const router = express_1.default.Router();
    const file = (0, multer_1.default)();
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const materials = yield getAllMaterialsUseCase.execute();
            res.send(materials.map((item) => (Object.assign(Object.assign({}, item), { book: undefined, video: undefined, audio: undefined, thumbnail: undefined }))));
        }
        catch (err) {
            res.status(500).send({ message: 'Error Fetching Data' });
        }
    }));
    router.get('/thumbnail/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const material = yield getOneMaterialUseCase.execute(req.params.id);
            res.statusCode = 200;
            res.json({ message: 'Found One', data: material === null || material === void 0 ? void 0 : material.thumbnail });
        }
        catch (err) {
            res.status(500).send({ message: 'Error getting one data' });
        }
    }));
    router.get('/file/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const material = yield getOneMaterialUseCase.execute(req.params.id);
            res.statusCode = 200;
            res.json({ message: 'Found One', data: material });
        }
        catch (err) {
            res.status(500).send({ message: 'Error getting one data' });
        }
    }));
    router.post('/', file.fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'book', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
        { name: 'video', maxCount: 1 }
    ]), (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const reqMaterial = Object.assign({}, req.body);
            const materialFile = req.files;
            if (materialFile) {
                if (materialFile.thumbnail) {
                    reqMaterial.thumbnail = materialFile.thumbnail[0];
                }
                if (materialFile.book) {
                    reqMaterial.book = materialFile.book[0];
                }
                if (materialFile.audio) {
                    reqMaterial.audio = materialFile.audio[0];
                }
                if (materialFile.video) {
                    reqMaterial.video = materialFile.video[0];
                }
            }
            const material = yield createMaterialUseCase.execute(reqMaterial);
            console.log('material: ', material);
            res.statusCode = 201;
            res.json({ message: 'Created' });
        }
        catch (err) {
            res.status(500).send({ message: 'Error saving data' });
        }
    }));
    router.put('/:id', file.fields([
        { name: 'thumbnail', maxCount: 1 },
        { name: 'book', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
        { name: 'video', maxCount: 1 }
    ]), (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const reqMaterial = Object.assign({}, req.body);
            const materialFile = req.files;
            if (materialFile) {
                if (materialFile.thumbnail) {
                    reqMaterial.thumbnail = materialFile.thumbnail[0];
                }
                if (materialFile.book) {
                    reqMaterial.book = materialFile.book[0];
                }
                if (materialFile.audio) {
                    reqMaterial.audio = materialFile.audio[0];
                }
                if (materialFile.video) {
                    reqMaterial.video = materialFile.video[0];
                }
            }
            console.log('req update: ', materialFile);
            const material = yield udpateMaterialUseCase.execute(req.params.id, reqMaterial);
            res.statusCode = 201;
            res.json({ message: 'Updated', data: material });
        }
        catch (err) {
            res.status(500).send({ message: 'Error updating data' });
        }
    }));
    router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const material = yield getOneMaterialUseCase.execute(req.params.id);
            res.statusCode = 200;
            res.json({ message: 'Found One', data: material });
        }
        catch (err) {
            res.status(500).send({ message: 'Error getting one data' });
        }
    }));
    router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const material = yield deleteOneMaterialUseCase.execute(req.params.id);
            res.statusCode = 201;
            res.json({ message: 'Successfully deleted material' });
        }
        catch (err) {
            res.status(500).send({ message: 'Error deleting data' });
        }
    }));
    return router;
}
exports.default = MaterialRouter;
