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
exports.MemoryMaterialDataSource = void 0;
class MemoryMaterialDataSource {
    constructor(database) {
        this.database = database;
    }
    getAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.database.find(query);
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database.getOne(id);
            return result;
        });
    }
    updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database.updateOne(id, data);
            return result;
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database.delete(id);
        });
    }
    create(material) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database.insertOne(material);
            return result;
        });
    }
}
exports.MemoryMaterialDataSource = MemoryMaterialDataSource;
