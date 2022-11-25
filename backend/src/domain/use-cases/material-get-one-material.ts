import { Material } from '../entities/material';
import { MaterialRepository } from '../interfaces/repositories/material-interface-repository';
import { GetOneMaterialUseCase } from '../interfaces/use-cases/material/get-one-material';

export class GetOneMaterialUseCaseImpl implements GetOneMaterialUseCase {
  materialRepository: MaterialRepository;
  constructor(materialRepository: MaterialRepository) {
    this.materialRepository = materialRepository;
  }
  async execute(id: String): Promise<Material | null> {
    const result = await this.materialRepository.getMaterial(id);
    return result;
  }
}
