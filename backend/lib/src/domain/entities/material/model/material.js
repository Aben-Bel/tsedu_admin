"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModel = void 0;
class MaterialModel {
    constructor(material) {
        this.id = material.id;
        this.title = material.title;
        this.description = material.description;
        this.category = material.category;
        this.type = material.type;
        this.thumbnail = material.thumbnail;
        this.book = material.book;
        this.audio = material.audio;
        this.video = material.video;
        this.videoLink = material.videoLink;
    }
}
exports.MaterialModel = MaterialModel;
