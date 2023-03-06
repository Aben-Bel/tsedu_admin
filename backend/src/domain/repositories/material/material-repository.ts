import { Material } from '../../entities/material/interface/material';
import { MaterialDataSource } from '../../interfaces/data-sources/material/material-data-source';
import { MaterialRepository } from '../../interfaces/repositories/material/material-interface-repository';
import { QueryI } from '../../interfaces/use-cases/material/get-all-materials';

export class MaterialRepositoryImpl implements MaterialRepository {
  materialDataSource: MaterialDataSource;
  constructor(materialDataSource: MaterialDataSource) {
    this.materialDataSource = materialDataSource;
  }
  
  async count(): Promise<Number> {
    return await this.materialDataSource.count();
  }
  async getMaterials(query: QueryI): Promise<Material[]> {
    return await this.materialDataSource.getAll(query);
  }

  async deleteMaterial(id: String): Promise<void> {
    await this.materialDataSource.deleteOne(id);
  }
  async updateMaterial(id: String, data: Material): Promise<Material> {
    const result = await this.materialDataSource.updateOne(id, data);
    return result;
  }
  async getMaterial(id: String): Promise<Material> {
    const result = await this.materialDataSource.getOne(id);
    return result;
  }

  async createMaterial(material: Material): Promise<Material> {
    const result = await this.materialDataSource.create(material);
    return result;
  }
}
