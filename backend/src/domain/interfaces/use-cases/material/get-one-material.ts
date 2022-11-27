import { Material } from '../../../entities/material/interface/material';

export interface GetOneMaterialUseCase {
  execute(id: String): Promise<Material | null>;
}
