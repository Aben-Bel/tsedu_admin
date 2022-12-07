import { MaterialDataSource } from '../../../../domain/interfaces/data-sources/material/material-data-source';
import { DatabaseMaterial } from '../../../interfaces/database-material';
import { Material } from '../../../../domain/entities/material/interface/material';
import { QueryI } from '../../../../domain/interfaces/use-cases/material/get-all-materials';

export class MemoryMaterialDataSource implements MaterialDataSource {
  private database: DatabaseMaterial;
  constructor(database: DatabaseMaterial) {
    this.database = database;
  }
  async getAll(query: QueryI): Promise<Material[]> {
    return await this.database.find(query);
  }

  async getOne(id: String): Promise<Material> {
    const result = await this.database.getOne(id);
    return result;
  }

  async updateOne(id: String, data: Material): Promise<Material> {
    const result = await this.database.updateOne(id, data);
    return result;
  }

  async deleteOne(id: String): Promise<void> {
    await this.database.delete(id);
  }

  async create(material: Material): Promise<Material> {
    const result = await this.database.insertOne(material);
    return result;
  }
}
