"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_get_all_materials_1 = require("../../src/domain/use-cases/material/material-get-all-materials");
describe('Get All Materials Use Case', () => {
    class MockMaterialRepository {
        deleteMaterial(id) {
            throw new Error('Method not implemented.');
        }
        updateMaterial(id, data) {
            throw new Error('Method not implemented.');
        }
        getMaterial(id) {
            throw new Error('Method not implemented.');
        }
        createMaterial(material) {
            throw new Error('Method not implemented');
        }
        getMaterials() {
            throw new Error('Method not implemented');
        }
    }
    let mockMaterialRepository;
    beforeEach(() => {
        jest.clearAllMocks();
        mockMaterialRepository = new MockMaterialRepository();
    });
    test('should return data', async () => {
        const ExpectedResult = [
            {
                id: '',
                title: '',
                language: '',
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
        const getAllMaterialsUsecase = new material_get_all_materials_1.GetAllMaterials(mockMaterialRepository);
        const result = await getAllMaterialsUsecase.execute({
            limit: 0,
            skip: 0
        });
        expect(result).toStrictEqual(ExpectedResult);
    });
});
