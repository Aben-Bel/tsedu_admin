import server from './server';
import MaterialRouter from './presentation/routers/material-router';
import { GetAllMaterials } from './domain/use-cases/material-get-all-materials';
import { MaterialRepositoryImpl } from './domain/repositories/material/material-repository';
import { CreateMaterial } from './domain/use-cases/material/material-create-material';
import { DatabaseWrapper } from './db/interfaces/database';
import { MemoryMaterialDataSource } from './db/data-sources/memory/memory-material-data-source';
import { Material } from './domain/entities/material/material';
import { UpdateMaterialUseCaseImpl } from './domain/use-cases/material-update-material';
import { GetOneMaterialUseCaseImpl } from './domain/use-cases/material-get-one-material';
import { DeleteOneMaterialUseCaseImpl } from './domain/use-cases/material-delete-material';

class DB implements DatabaseWrapper {
  getOne(id: String): Promise<any> {
    throw new Error('Method not implemented.');
  }
  updateOne(id: String, data: object): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: String): void {
    throw new Error('Method not implemented.');
  }
  materials: Material[] = [
    {
      id: '',
      title: '',
      description: '',
      category: '',
      type: '',
      thumbnail: undefined,
      book: undefined,
      audio: undefined,
      video: undefined
    }
  ];

  find(query: object): Promise<any[]> {
    return Promise.resolve(this.materials);
  }
  insertOne(doc: any): Promise<any> {
    this.materials.push(doc);
    return Promise.resolve(doc);
  }
}

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

  server.use('/material', materialMiddleWare);
  server.listen(3000, () => console.log('Running Server'));
})();
