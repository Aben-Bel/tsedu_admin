import { MaterialDataSource } from '../../../domain/interfaces/data-sources/material-data-source';
import { DatabaseWrapper } from '../../interfaces/database';
import { Material } from '../../../domain/entities/material';

export class MemoryMaterialDataSource implements MaterialDataSource {
  private database: DatabaseWrapper;
  constructor(database: DatabaseWrapper) {
    this.database = database;
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
