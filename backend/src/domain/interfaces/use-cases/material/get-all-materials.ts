import { Material } from '../../../entities/material/interface/material';

export interface GetAllMaterialsUseCase {
  execute(): Promise<Material[]>;
}
