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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const material_router_1 = __importDefault(require("../../../src/presentation/routers/material-router"));
const server_1 = __importDefault(require("../../../src/server"));
class MockGetAllMaterialsUseCase {
    execute() {
        throw new Error('Method not implemented');
    }
}
class MockCreateMaterialUseCase {
    execute(material) {
        throw new Error('Method not implemented.');
    }
}
describe('Material Router', () => {
    let mockCreateMaterialUseCase;
    let mockGetAllMaterialsUseCase;
    let mockUpdateAllMaterialUseCase;
    let mockGetOneMaterialUseCase;
    let mockDeleteOneMaterialUseCase;
    beforeAll(() => {
        mockCreateMaterialUseCase = new MockCreateMaterialUseCase();
        mockGetAllMaterialsUseCase = new MockGetAllMaterialsUseCase();
        server_1.default.use('/material', (0, material_router_1.default)(mockGetAllMaterialsUseCase, mockCreateMaterialUseCase, mockUpdateAllMaterialUseCase, mockGetOneMaterialUseCase, mockDeleteOneMaterialUseCase));
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('GET /material', () => {
        test('should return 200 with data', () => __awaiter(void 0, void 0, void 0, function* () {
            const ExpectedData = [
                {
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
                }
            ];
            jest
                .spyOn(mockGetAllMaterialsUseCase, 'execute')
                .mockImplementation(() => Promise.resolve(ExpectedData));
            const response = yield (0, supertest_1.default)(server_1.default).get('/material');
            expect(response.status).toBe(200);
            expect(mockGetAllMaterialsUseCase.execute).toBeCalledTimes(1);
            expect(response.body).toStrictEqual(ExpectedData);
        }));
        test('GET /material return 500 on use case error', () => __awaiter(void 0, void 0, void 0, function* () {
            jest
                .spyOn(mockGetAllMaterialsUseCase, 'execute')
                .mockImplementation(() => Promise.reject(Error()));
            const response = yield (0, supertest_1.default)(server_1.default).get('/material');
            expect(response.status).toBe(500);
            expect(response.body).toStrictEqual({ message: 'Error fetching data' });
        }));
    });
    describe('POST /material', () => {
        test('POST /material', () => __awaiter(void 0, void 0, void 0, function* () {
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
                .spyOn(mockCreateMaterialUseCase, 'execute')
                .mockImplementation(() => Promise.resolve(InputData));
            const response = yield (0, supertest_1.default)(server_1.default).post('/material').send(InputData);
            expect(response.status).toBe(201);
        }));
        test('POST /material returns 500 on use case error', () => __awaiter(void 0, void 0, void 0, function* () {
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
            const response = yield (0, supertest_1.default)(server_1.default).post('/material').send(InputData);
            expect(response.status).toBe(500);
        }));
    });
});
