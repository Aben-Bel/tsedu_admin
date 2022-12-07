"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_Memory_Banner = void 0;
class DB_Memory_Banner {
    constructor() {
        this.banner = undefined;
    }
    get() {
        return Promise.resolve(this.banner);
    }
    delete() {
        this.banner = undefined;
        return this.banner;
    }
    insert(doc) {
        this.banner = doc;
        return Promise.resolve(this.banner);
    }
}
exports.DB_Memory_Banner = DB_Memory_Banner;
