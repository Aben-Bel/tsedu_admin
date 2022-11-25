import { MaterialDataSource } from '../../../domain/interfaces/data-sources/material/material-data-source';
import { DatabaseWrapper } from '../../interfaces/database';
import { Material } from '../../../domain/entities/material/material';

export class MemoryMaterialDataSource implements MaterialDataSource {
  private database: DatabaseWrapper;
  constructor(database: DatabaseWrapper) {
    this.database = database;
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

  async create(material: Material): Promise<boolean> {
    const result = await this.database.insertOne(material);
    return result !== null;
  }
  async getAll(): Promise<Material[]> {
    const result = await this.database.find({});
    return result.map((item) => item);
  }
}
