import { Material } from '../../../entities/material/interface/material';
import { QueryI } from '../../use-cases/material/get-all-materials';
export interface MaterialDataSource {
  getOne(id: String): Promise<Material | null>;
  updateOne(id: String, data: Material): Promise<Material | null>;
  deleteOne(id: String): void;
  create(material: Material): Promise<Material>;
  getAll(query: QueryI): Promise<Material[]>;
}
