import { Material } from '../../entities/material';
export interface MaterialRepository {
  createMaterial(material: Material): Promise<boolean>;
  getMaterials(): Promise<Material[]>;
  deleteMaterial(id: String): void;
  updateMaterial(id: String, data: Material): Promise<Material>;
  getMaterial(id: String): Promise<Material>;
}
