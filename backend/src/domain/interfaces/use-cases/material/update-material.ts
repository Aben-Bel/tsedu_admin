import { Material } from '../../../entities/material';

export interface UpdateMaterialUseCase {
  execute(id: String, data: Material): void;
}
