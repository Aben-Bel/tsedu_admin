import { Material } from '../entities/material';
import { MaterialRepository } from '../interfaces/repositories/material-interface-repository';
import { GetAllMaterialsUseCase } from '../interfaces/use-cases/material/get-all-materials';

export class GetAllMaterials implements GetAllMaterialsUseCase {
  materialRepository: MaterialRepository;
  constructor(materialRepository: MaterialRepository) {
    this.materialRepository = materialRepository;
  }
  async execute(): Promise<Material[]> {
    const result = await this.materialRepository.getMaterials();
    return result;
  }
}
