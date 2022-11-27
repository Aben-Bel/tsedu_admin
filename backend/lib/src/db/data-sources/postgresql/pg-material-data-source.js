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
exports.PGMaterialDataSource = void 0;
const DB_TABLE = 'material_table';
class PGMaterialDataSource {
    constructor(db) {
        this.db = db;
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbResponse = yield this.db.query(`select * from ${DB_TABLE} where id = $1 limit 1`, [id]);
            const res = dbResponse.rows.map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                category: item.category,
                type: item.type,
                thumbnail: item.thumbnail,
                book: item.book,
                audio: item.audio,
                video: item.video,
                videoLink: item.videoLink
            }));
            return res[0];
        });
    }
    updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.query(`update ${DB_TABLE} set name = $1 where id = $2`, [
                data.id
            ]);
            throw new Error('Method not implemented.');
        });
    }
    deleteOne(id) {
        throw new Error('Method not implemented.');
    }
    create(material) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbResponse = yield this.db.query(`insert into ${DB_TABLE} (title, description, category, type, thumbnail, book, audio, video, videoLink) values ($1) `, [
                material.title,
                material.description,
                material.category,
                material.type,
                material.thumbnail,
                material.book,
                material.audio,
                material.video,
                material.videoLink
            ]);
            return Promise.resolve(dbResponse.rows.map((item) => ({}))[0]);
        });
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
}
exports.PGMaterialDataSource = PGMaterialDataSource;
