"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    test('should return data', () => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield getAllMaterialsUsecase.execute();
        expect(result).toStrictEqual(ExpectedResult);
    }));
});
