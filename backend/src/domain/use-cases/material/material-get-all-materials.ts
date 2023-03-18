import { Material } from '../../entities/material/interface/material';
import { MaterialRepository } from '../../interfaces/repositories/material/material-interface-repository';
import {
  GetAllMaterialsUseCase,
  QueryI
} from '../../interfaces/use-cases/material/get-all-materials';

export class GetAllMaterials implements GetAllMaterialsUseCase {
  materialRepository: MaterialRepository;
  constructor(materialRepository: MaterialRepository) {
    this.materialRepository = materialRepository;
  }

  async execute(query: QueryI): Promise<Material[] | null> {
    const result = await this.materialRepository.getMaterials(query);
    return result;
  }
}
