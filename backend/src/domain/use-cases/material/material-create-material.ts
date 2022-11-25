import { Material } from '../../entities/material/material';
import { MaterialRepository } from '../../interfaces/repositories/material/material-interface-repository';
import { CreateMaterialUseCase } from '../../interfaces/use-cases/material/create-material';

export class CreateMaterial implements CreateMaterialUseCase {
  materialRepository: MaterialRepository;
  constructor(materialRepository: MaterialRepository) {
    this.materialRepository = materialRepository;
  }
  async execute(material: Material): Promise<boolean> {
    const result = await this.materialRepository.createMaterial(material);
    return result;
  }
}
