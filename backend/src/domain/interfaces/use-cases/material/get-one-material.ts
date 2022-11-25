import { Material } from '../../../entities/material/material';

export interface GetOneMaterialUseCase {
  execute(id: String): Promise<Material | null>;
}
