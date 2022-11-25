import { Material } from '../../entities/material/material';
import { MaterialDataSource } from '../../interfaces/data-sources/material/material-data-source';
import { MaterialRepository } from '../../interfaces/repositories/material/material-interface-repository';

export class MaterialRepositoryImpl implements MaterialRepository {
  materialDataSource: MaterialDataSource;
  constructor(materialDataSource: MaterialDataSource) {
    this.materialDataSource = materialDataSource;
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

  async createMaterial(material: Material): Promise<boolean> {
    const result = await this.materialDataSource.create(material);
    return result;
  }
  async getMaterials(): Promise<Material[]> {
    const result = await this.materialDataSource.getAll();
    return result;
  }
}
