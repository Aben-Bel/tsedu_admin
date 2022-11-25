import { Material } from '../entities/material';
import { MaterialDataSource } from '../interfaces/data-sources/material-data-source';
import { MaterialRepository } from '../interfaces/repositories/material-interface-repository';

export class MaterialRepositoryImpl implements MaterialRepository {
  materialDataSource: MaterialDataSource;
  constructor(materialDataSource: MaterialDataSource) {
    this.materialDataSource = materialDataSource;
  }

  async createMaterial(material: Material): Promise<boolean> {
    const result = await this.materialDataSource.create(material);
    return result;
  }
  async getMaterials(): Promise<Material[]> {
    const result = await this.materialDataSource.getAll();
    return result;
  }
}
