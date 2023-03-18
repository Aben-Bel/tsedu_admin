import { Material } from '../interface/material';

export class MaterialModel implements Material {
  public id?: string | undefined;
  public language: string;
  public title: string;
  public description: string;
  public category: string;
  public type: string;
  public thumbnail?: File | undefined;
  public book?: File | undefined;
  public audio?: File | undefined;
  public video?: File | undefined;
  public video_link?: string | undefined;

  constructor(material: Material) {
    this.id = material.id;
    this.language = material.language;
    this.title = material.title;
    this.description = material.description;
    this.category = material.category;
    this.type = material.type;
    this.thumbnail = material.thumbnail;
    this.book = material.book;
    this.audio = material.audio;
    this.video = material.video;
    this.video_link = material.video_link;
  }
}
