import { Material } from '../../../entities/material/material';

export interface GetAllMaterialsUseCase {
  execute(): Promise<Material[]>;
}
