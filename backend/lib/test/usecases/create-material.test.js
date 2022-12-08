"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_create_material_1 = require("../../src/domain/use-cases/material/material-create-material");
describe('Create Material Use Case', () => {
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
            throw new Error('Method not implemented.');
        }
        getMaterials() {
            throw new Error('Method not implemented.');
        }
    }
    let mockMaterialRepository;
    beforeEach(() => {
        jest.clearAllMocks();
        mockMaterialRepository = new MockMaterialRepository();
    });
    test('should return true', async () => {
        const InputData = {
            id: '',
            language: '',
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
            .mockImplementation(() => Promise.resolve(InputData));
        const createMaterialUseCase = new material_create_material_1.CreateMaterial(mockMaterialRepository);
        const result = await createMaterialUseCase.execute(InputData);
        expect(result).toBe(true);
    });
});
