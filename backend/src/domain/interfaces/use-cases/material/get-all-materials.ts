import { Material } from '../../../entities/material/interface/material';

export interface QueryI {
  limit: number;
  skip: number;
}
export interface GetAllMaterialsUseCase {
  execute(query: QueryI): Promise<Material[] | null>;
}
