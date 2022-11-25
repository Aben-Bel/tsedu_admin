import { Material } from '../../src/domain/entities/material';
import { MaterialRepository } from '../../src/domain/interfaces/repositories/material-interface-repository';
import { CreateMaterial } from '../../src/domain/use-cases/material-create-material';

describe('Create Material Use Case', () => {
  class MockMaterialRepository implements MaterialRepository {
    deleteMaterial(id: String): void {
      throw new Error('Method not implemented.');
    }
    updateMaterial(id: String, data: Material): Promise<Material> {
      throw new Error('Method not implemented.');
    }
    getMaterial(id: String): Promise<Material> {
      throw new Error('Method not implemented.');
    }

    createMaterial(material: Material): Promise<boolean> {
      throw new Error('Method not implemented.');
    }
    getMaterials(): Promise<Material[]> {
      throw new Error('Method not implemented.');
    }
  }

  let mockMaterialRepository: MaterialRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockMaterialRepository = new MockMaterialRepository();
  });

  test('should return true', async () => {
    const InputData = {
      id: '',
      title: '',
      description: '',
      category: '',
      type: '',
      thumbnail: undefined,
      book: undefined,
      audio: undefined,
      video: undefined
    };

    jest
      .spyOn(mockMaterialRepository, 'createMaterial')
      .mockImplementation(() => Promise.resolve(true));
    const createMaterialUseCase = new CreateMaterial(mockMaterialRepository);
    const result = await createMaterialUseCase.execute(InputData);
    expect(result).toBe(true);
  });
});
