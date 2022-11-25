import { Material } from '../entities/material';
import { MaterialRepository } from '../interfaces/repositories/material-interface-repository';
import { UpdateMaterialUseCase } from '../interfaces/use-cases/material/update-material';

export class UpdateMaterialUseCaseImpl implements UpdateMaterialUseCase {
  materialRepository: MaterialRepository;
  constructor(materialRepository: MaterialRepository) {
    this.materialRepository = materialRepository;
  }
  async execute(id: String, data: Material): Promise<Material | null> {
    const result = await this.materialRepository.updateMaterial(id, data);
    return result;
  }
}
