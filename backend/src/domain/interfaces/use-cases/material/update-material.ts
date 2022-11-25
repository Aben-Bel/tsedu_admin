import { Material } from '../../../entities/material/material';

export interface UpdateMaterialUseCase {
  execute(id: String, data: Material): void;
}
