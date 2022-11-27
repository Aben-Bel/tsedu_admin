import { Material } from '../../../entities/material/interface/material';

export interface CreateMaterialUseCase {
  execute(material: Material): Promise<Material>;
}
