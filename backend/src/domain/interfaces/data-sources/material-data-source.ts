import { Material } from '../../entities/material';
export interface MaterialDataSource {
  create(material: Material): Promise<boolean>;
  getAll(): Promise<Material[]>;
}
