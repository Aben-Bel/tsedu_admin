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
const server_1 = __importDefault(require("./server"));
const material_router_1 = __importDefault(require("./presentation/routers/material-router"));
const material_repository_1 = require("./domain/repositories/material/material-repository");
const material_create_material_1 = require("./domain/use-cases/material/material-create-material");
const memory_material_data_source_1 = require("./db/data-sources/memory/material/memory-material-data-source");
const material_get_all_materials_1 = require("./domain/use-cases/material/material-get-all-materials");
const material_update_material_1 = require("./domain/use-cases/material/material-update-material");
const material_get_one_material_1 = require("./domain/use-cases/material/material-get-one-material");
const material_delete_material_1 = require("./domain/use-cases/material/material-delete-material");
const banner_router_1 = __importDefault(require("./presentation/routers/banner-router"));
const banner_create_usecase_1 = require("./domain/use-cases/banner/banner-create-usecase");
const banner_get_usecase_1 = require("./domain/use-cases/banner/banner-get-usecase");
const banner_delete_usecase_1 = require("./domain/use-cases/banner/banner-delete-usecase");
const banner_repository_1 = require("./domain/repositories/banner/banner-repository");
const memory_banner_datasource_1 = require("./db/data-sources/memory/banner/memory-banner-datasource");
const inMemoryDBBanner_1 = require("./db/data-sources/memory/banner/inMemoryDBBanner");
const inMemoryDBMaterial_1 = require("./db/data-sources/memory/material/inMemoryDBMaterial");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const materialDB = new inMemoryDBMaterial_1.DB_Memory_Material();
    const materialRepository = new material_repository_1.MaterialRepositoryImpl(new memory_material_data_source_1.MemoryMaterialDataSource(materialDB));
    const materialMiddleWare = (0, material_router_1.default)(new material_get_all_materials_1.GetAllMaterials(materialRepository), new material_create_material_1.CreateMaterial(materialRepository), new material_update_material_1.UpdateMaterialUseCaseImpl(materialRepository), new material_get_one_material_1.GetOneMaterialUseCaseImpl(materialRepository), new material_delete_material_1.DeleteOneMaterialUseCaseImpl(materialRepository));
    const bannerRepository = new banner_repository_1.BannerRepositoryImpl(new memory_banner_datasource_1.MemoryBannerDataSource(new inMemoryDBBanner_1.DB_Memory_Banner()));
    const bannerMiddleWare = (0, banner_router_1.default)(new banner_get_usecase_1.GetBanner(bannerRepository), new banner_create_usecase_1.CreateBanner(bannerRepository), new banner_delete_usecase_1.DeleteBanner(bannerRepository));
    const PORT = 4545;
    server_1.default.use('/material', materialMiddleWare);
    server_1.default.use('/banner', bannerMiddleWare);
    server_1.default.listen(PORT, () => console.log(`Running Server at port: ${PORT}`));
}))();
