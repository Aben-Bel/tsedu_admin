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

class DB implements DatabaseWrapper {
  private materials: Material[] = [
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
  private idCount = 0;

  getOne(id: String): Promise<any> {
    for (const m of this.materials) {
      if (m.id == id) {
        return Promise.resolve(m);
      }
    }
    return Promise.resolve(null);
  }

  updateOne(id: String, data: object): Promise<any> {
    for (let i = 0; i < this.materials.length; i++) {
      if (this.materials[i].id == id) {
        this.materials[i] = { ...this.materials[i], ...data };
        return Promise.resolve(this.materials[i]);
      }
    }
    return Promise.resolve(null);
  }

  delete(id: String): void {
    throw new Error('Method not implemented.');
  }

  find(query: object): Promise<any[]> {
    return Promise.resolve(this.materials);
  }

  insertOne(doc: any): Promise<any> {
    doc.id = this.idCount;
    this.idCount += 1;
    const created = new MaterialModel(doc);
    console.log('added to db: ', created);
    this.materials.push(created);
    return Promise.resolve(created);
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
  const PORT = 3000;
  server.use('/material', materialMiddleWare);
  server.listen(PORT, () => console.log(`Running Server at port ${PORT}`));
})();
