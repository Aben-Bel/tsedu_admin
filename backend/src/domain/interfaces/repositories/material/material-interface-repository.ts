import { Material } from '../../../entities/material/interface/material';
import { QueryI } from '../../use-cases/material/get-all-materials';
export interface MaterialRepository {
  createMaterial(material: Material): Promise<Material | null>;
  getMaterials(query: QueryI): Promise<Material[] | null>;
  deleteMaterial(id: String): void;
  updateMaterial(id: String, data: Material): Promise<Material | null>;
  getMaterial(id: String): Promise<Material | null>;
}
