import { Material } from '../../../entities/material/material';

export interface CreateMaterialUseCase {
  execute(material: Material): Promise<boolean>;
}
