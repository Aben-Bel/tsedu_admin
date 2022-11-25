import { Material } from '../../../entities/material';

export interface GetOneMaterialUseCase {
  execute(id: String): Promise<Material | null>;
}
