import { Material } from '../entities/material';
import { MaterialRepository } from '../interfaces/repositories/material/material-interface-repository';
import { DeleteMaterialUseCase } from '../interfaces/use-cases/material/delete-one-material';

export class DeleteOneMaterialUseCaseImpl implements DeleteMaterialUseCase {
  materialRepository: MaterialRepository;
  constructor(materialRepository: MaterialRepository) {
    this.materialRepository = materialRepository;
  }
  async execute(id: String): Promise<void> {
    await this.materialRepository.deleteMaterial(id);
  }
}
