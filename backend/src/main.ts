import server from './server';
import MaterialRouter from './presentation/routers/material-router';
import { MaterialRepositoryImpl } from './domain/repositories/material/material-repository';
import { CreateMaterial } from './domain/use-cases/material/material-create-material';
import { MemoryMaterialDataSource } from './db/data-sources/memory/material/memory-material-data-source';
import { GetAllMaterials } from './domain/use-cases/material/material-get-all-materials';
import { UpdateMaterialUseCaseImpl } from './domain/use-cases/material/material-update-material';
import { GetOneMaterialUseCaseImpl } from './domain/use-cases/material/material-get-one-material';
import { DeleteOneMaterialUseCaseImpl } from './domain/use-cases/material/material-delete-material';
import BannerRouter from './presentation/routers/banner-router';
import { CreateBanner } from './domain/use-cases/banner/banner-create-usecase';
import { GetBanner } from './domain/use-cases/banner/banner-get-usecase';
import { DeleteBanner } from './domain/use-cases/banner/banner-delete-usecase';
import { BannerRepositoryImpl } from './domain/repositories/banner/banner-repository';
import { MemoryBannerDataSource } from './db/data-sources/memory/banner/memory-banner-datasource';
import { DB_Memory_Banner } from './db/data-sources/memory/banner/inMemoryDBBanner';
import { DB_Memory_Material } from './db/data-sources/memory/material/inMemoryDBMaterial';

(async () => {
  const materialDB = new DB_Memory_Material();
  const materialRepository = new MaterialRepositoryImpl(
    new MemoryMaterialDataSource(materialDB)
  );
  const materialMiddleWare = MaterialRouter(
    new GetAllMaterials(materialRepository),
    new CreateMaterial(materialRepository),
    new UpdateMaterialUseCaseImpl(materialRepository),
    new GetOneMaterialUseCaseImpl(materialRepository),
    new DeleteOneMaterialUseCaseImpl(materialRepository)
  );
  const bannerRepository = new BannerRepositoryImpl(
    new MemoryBannerDataSource(new DB_Memory_Banner())
  );
  const bannerMiddleWare = BannerRouter(
    new GetBanner(bannerRepository),
    new CreateBanner(bannerRepository),
    new DeleteBanner(bannerRepository)
  );
  const PORT = 4545;
  server.use('/material', materialMiddleWare);
  server.use('/banner', bannerMiddleWare);
  server.listen(PORT, () => console.log(`Running Server at port: ${PORT}`));
})();
