import { Material } from '../../../entities/material/interface/material';
import { QueryI } from '../../use-cases/material/get-all-materials';
export interface MaterialRepository {
  createMaterial(material: Material): Promise<Material>;
  getMaterials(query: QueryI): Promise<Material[]>;
  deleteMaterial(id: String): void;
  updateMaterial(id: String, data: Material): Promise<Material>;
  getMaterial(id: String): Promise<Material>;
}
