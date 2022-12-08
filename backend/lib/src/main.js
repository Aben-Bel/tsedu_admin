"use strict";
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
const inMemoryDBUser_1 = require("./db/data-sources/memory/user/inMemoryDBUser");
const user_repository_1 = require("./domain/repositories/user/user-repository");
const memory_user_interface_1 = require("./db/data-sources/memory/user/memory-user-interface");
const user_router_1 = __importDefault(require("./presentation/routers/user-router"));
const login_user_usecase_1 = require("./domain/use-cases/user/login-user-usecase");
const signup_user_usecase_1 = require("./domain/use-cases/user/signup-user-usecase");
const HasherService_1 = require("./services/HasherService");
const TokenService_1 = require("./services/TokenService");
(async () => {
    const materialDB = new inMemoryDBMaterial_1.DB_Memory_Material();
    const materialRepository = new material_repository_1.MaterialRepositoryImpl(new memory_material_data_source_1.MemoryMaterialDataSource(materialDB));
    const materialMiddleWare = (0, material_router_1.default)(new material_get_all_materials_1.GetAllMaterials(materialRepository), new material_create_material_1.CreateMaterial(materialRepository), new material_update_material_1.UpdateMaterialUseCaseImpl(materialRepository), new material_get_one_material_1.GetOneMaterialUseCaseImpl(materialRepository), new material_delete_material_1.DeleteOneMaterialUseCaseImpl(materialRepository));
    const bannerRepository = new banner_repository_1.BannerRepositoryImpl(new memory_banner_datasource_1.MemoryBannerDataSource(new inMemoryDBBanner_1.DB_Memory_Banner()));
    const bannerMiddleWare = (0, banner_router_1.default)(new banner_get_usecase_1.GetBanner(bannerRepository), new banner_create_usecase_1.CreateBanner(bannerRepository), new banner_delete_usecase_1.DeleteBanner(bannerRepository));
    const userDB = new inMemoryDBUser_1.DB_MEMORY_USER();
    const hashService = new HasherService_1.Hasher();
    const tokenService = new TokenService_1.TokenService();
    const userRepository = new user_repository_1.UserRepositoryImpl(new memory_user_interface_1.MemoryUserDataSource(userDB));
    const userMiddleWare = (0, user_router_1.default)(new login_user_usecase_1.LoginUsecase(userRepository, tokenService, hashService), new signup_user_usecase_1.SignupUsecase(userRepository, tokenService, hashService));
    const authGuard = (req, res, next) => {
        const authToken = req.get('authorization');
        if (authToken) {
            const token = authToken.split(' ')[1];
            const result = tokenService.decode(token);
            const user = userDB.get(result.email);
            if (user) {
                next();
            }
            else {
                return res.status(401).json({ error: 'not authorized' });
            }
        }
        else {
            return res.status(403).json({ error: 'No credentials' });
        }
    };
    const PORT = 4545;
    server_1.default.use('/material', authGuard, materialMiddleWare);
    server_1.default.use('/banner', authGuard, bannerMiddleWare);
    server_1.default.use('/user', userMiddleWare);
    server_1.default.listen(PORT, () => console.log(`Running Server at port: ${PORT}`));
})();
