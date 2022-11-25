import { Material } from '../../../src/domain/entities/material';
import { MaterialRepository } from '../../../src/domain/interfaces/repositories/material-interface-repository';
import { GetAllMaterials } from '../../../src/domain/use-cases/material-get-all-materials';

describe('Get All Materials Use Case', () => {
  class MockMaterialRepository implements MaterialRepository {
    createMaterial(material: Material): Promise<boolean> {
      throw new Error('Method not implemented');
    }

    getMaterials(): Promise<Material[]> {
      throw new Error('Method not implemented');
    }
  }

  let mockMaterialRepository: MaterialRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockMaterialRepository = new MockMaterialRepository();
  });

  test('should return data', async () => {
    const ExpectedResult = [
      {
        id: '',
        title: '',
        description: '',
        category: '',
        type: '',
        thumbnail: undefined,
        book: undefined,
        audio: undefined,
        video: undefined
      }
    ];

    jest
      .spyOn(mockMaterialRepository, 'getMaterials')
      .mockImplementation(() => Promise.resolve(ExpectedResult));
    const getAllMaterialsUsecase = new GetAllMaterials(mockMaterialRepository);
    const result = await getAllMaterialsUsecase.execute();
    expect(result).toStrictEqual(ExpectedResult);
  });
});
