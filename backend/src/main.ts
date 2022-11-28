import server from './server';
import MaterialRouter from './presentation/routers/material-router';
import { MaterialRepositoryImpl } from './domain/repositories/material/material-repository';
import { CreateMaterial } from './domain/use-cases/material/material-create-material';
import { DatabaseWrapper } from './db/interfaces/database';
import { MemoryMaterialDataSource } from './db/data-sources/memory/memory-material-data-source';
import { Material } from './domain/entities/material/interface/material';
import { GetAllMaterials } from './domain/use-cases/material/material-get-all-materials';
import { UpdateMaterialUseCaseImpl } from './domain/use-cases/material/material-update-material';
import { GetOneMaterialUseCaseImpl } from './domain/use-cases/material/material-get-one-material';
import { DeleteOneMaterialUseCaseImpl } from './domain/use-cases/material/material-delete-material';
import { MaterialModel } from './domain/entities/material/model/material';
import { DB } from './db/data-sources/memory/inMemoryDB';

(async () => {
  const materialDB = new DB();
  const materialMiddleWare = MaterialRouter(
    new GetAllMaterials(
      new MaterialRepositoryImpl(new MemoryMaterialDataSource(materialDB))
    ),
    new CreateMaterial(
      new MaterialRepositoryImpl(new MemoryMaterialDataSource(materialDB))
    ),
    new UpdateMaterialUseCaseImpl(
      new MaterialRepositoryImpl(new MemoryMaterialDataSource(materialDB))
    ),
    new GetOneMaterialUseCaseImpl(
      new MaterialRepositoryImpl(new MemoryMaterialDataSource(materialDB))
    ),
    new DeleteOneMaterialUseCaseImpl(
      new MaterialRepositoryImpl(new MemoryMaterialDataSource(materialDB))
    )
  );
  const PORT = 3000;
  server.use('/material', materialMiddleWare);
  server.listen(PORT, () => console.log(`Running Server at port ${PORT}`));
})();
