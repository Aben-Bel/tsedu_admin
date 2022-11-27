import { Material } from '../../../entities/material/interface/material';

export interface UpdateMaterialUseCase {
  execute(id: String, data: Material): void;
}
