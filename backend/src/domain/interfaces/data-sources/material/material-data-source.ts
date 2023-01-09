import { Material } from '../../../entities/material/interface/material';
import { QueryI } from '../../use-cases/material/get-all-materials';
export interface MaterialDataSource {
  count(): Number | Promise<Number>;
  getOne(id: String): Promise<Material>;
  updateOne(id: String, data: Material): Promise<Material>;
  deleteOne(id: String): void;
  create(material: Material): Promise<Material>;
  getAll(query: QueryI): Promise<Material[]>;
}

