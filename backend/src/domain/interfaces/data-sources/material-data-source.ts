import { Material } from '../../entities/material';
export interface MaterialDataSource {
  getOne(id: String): Promise<Material>;
  updateOne(id: String, data: Material): Promise<Material>;
  deleteOne(id: String): void;
  create(material: Material): Promise<boolean>;
  getAll(): Promise<Material[]>;
}
