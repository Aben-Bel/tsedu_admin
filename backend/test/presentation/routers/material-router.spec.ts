import request from 'supertest';
import { Material } from '../../../src/domain/entities/material/material';
import { CreateMaterialUseCase } from '../../../src/domain/interfaces/use-cases/material/create-material';
import { DeleteMaterialUseCase } from '../../../src/domain/interfaces/use-cases/material/delete-one-material';
import { GetAllMaterialsUseCase } from '../../../src/domain/interfaces/use-cases/material/get-all-materials';
import { GetOneMaterialUseCase } from '../../../src/domain/interfaces/use-cases/material/get-one-material';
import { UpdateMaterialUseCase } from '../../../src/domain/interfaces/use-cases/material/update-material';
import MaterialRouter from '../../../src/presentation/routers/material-router';
import server from '../../../src/server';

class MockGetAllMaterialsUseCase implements GetAllMaterialsUseCase {
  execute(): Promise<Material[]> {
    throw new Error('Method not implemented');
  }
}

class MockCreateMaterialUseCase implements CreateMaterialUseCase {
  execute(material: Material): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

describe('Material Router', () => {
  let mockCreateMaterialUseCase: CreateMaterialUseCase;
  let mockGetAllMaterialsUseCase: GetAllMaterialsUseCase;
  let mockUpdateAllMaterialUseCase: UpdateMaterialUseCase;
  let mockGetOneMaterialUseCase: GetOneMaterialUseCase;
  let mockDeleteOneMaterialUseCase: DeleteMaterialUseCase;

  beforeAll(() => {
    mockCreateMaterialUseCase = new MockCreateMaterialUseCase();
    mockGetAllMaterialsUseCase = new MockGetAllMaterialsUseCase();
    server.use(
      '/material',
      MaterialRouter(
        mockGetAllMaterialsUseCase,
        mockCreateMaterialUseCase,
        mockUpdateAllMaterialUseCase,
        mockGetOneMaterialUseCase,
        mockDeleteOneMaterialUseCase
      )
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /material', () => {
    test('should return 200 with data', async () => {
      const ExpectedData = [
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
        .spyOn(mockGetAllMaterialsUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(ExpectedData));

      const response = await request(server).get('/material');

      expect(response.status).toBe(200);
      expect(mockGetAllMaterialsUseCase.execute).toBeCalledTimes(1);
      expect(response.body).toStrictEqual(ExpectedData);
    });

    test('GET /material return 500 on use case error', async () => {
      jest
        .spyOn(mockGetAllMaterialsUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));
      const response = await request(server).get('/material');
      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: 'Error fetching data' });
    });
  });

  describe('POST /material', () => {
    test('POST /material', async () => {
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
        .spyOn(mockCreateMaterialUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(true));
      const response = await request(server).post('/material').send(InputData);
      expect(response.status).toBe(201);
    });

    test('POST /material returns 500 on use case error', async () => {
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
        .spyOn(mockCreateMaterialUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));
      const response = await request(server).post('/material').send(InputData);
      expect(response.status).toBe(500);
    });
  });
});
