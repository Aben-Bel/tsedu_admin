"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const material_1 = require("../../../domain/entities/material/model/material");
class DB {
    constructor() {
        this.materials = [];
        this.idCount = 0;
    }
    getOne(id) {
        for (const m of this.materials) {
            if (m.id == id) {
                return Promise.resolve(m);
            }
        }
        return Promise.resolve(null);
    }
    updateOne(id, data) {
        for (let i = 0; i < this.materials.length; i++) {
            if (this.materials[i].id == id) {
                this.materials[i] = Object.assign(Object.assign({}, this.materials[i]), data);
                return Promise.resolve(this.materials[i]);
            }
        }
        return Promise.resolve(null);
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    find(query) {
        return Promise.resolve(this.materials);
    }
    insertOne(doc) {
        doc.id = this.idCount;
        this.idCount += 1;
        const created = new material_1.MaterialModel(doc);
        console.log('added to db: ', created);
        this.materials.push(created);
        return Promise.resolve(created);
    }
}
exports.DB = DB;
