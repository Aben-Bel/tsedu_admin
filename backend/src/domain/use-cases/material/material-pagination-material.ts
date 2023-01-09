import { MaterialRepository } from '../../interfaces/repositories/material/material-interface-repository';
import { PaginationMaterial } from '../../interfaces/use-cases/material/pagination-material';

export class PaginationMaterialImpl implements PaginationMaterial {
  materialRepository: MaterialRepository;
  constructor(materialRepository: MaterialRepository) {
    this.materialRepository = materialRepository;
  }

  async execute() {
    const result = await this.materialRepository.count();
    return result;
  }
}
