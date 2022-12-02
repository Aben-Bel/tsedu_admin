import axios from "axios";

interface Material {
  id?: string;
  language: string;
  title: string;
  description: string;
  category: string;
  type: string;
  thumbnail?: File;
  book?: File;
  audio?: File;
  video?: File;
  videoLink?: string;
}

class MaterialModel implements Material {
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
  public videoLink?: string | undefined;

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
    this.videoLink = material.videoLink;
  }
}

interface API {
  get(): Promise<any[]>;
  getById(id: string): Promise<Object>;
  post(material: Material): Promise<Object>;
  put(id: string, material: Material): Promise<Object>;
  delete(id: string): Promise<Boolean>;
}

class axiosApi implements API {
  private base_url = "http://localhost:4545/material";
  async get(): Promise<any[]> {
    const results: any[] = await axios
      .get(this.base_url)
      .then((res) => res.data);
    console.log("result: ", results);
    const materials = results.map(
      (item: Material) =>
        new MaterialModel({
          ...item,
        })
    );
    return Promise.resolve(materials);
  }
  getById(id: string): Promise<Object> {
    throw new Error("Method not implemented.");
  }
  post(material: Material): Promise<Object> {
    throw new Error("Method not implemented.");
  }
  put(id: string, material: Material): Promise<Object> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
}

class MaterialProvider {
  private api: API;
  constructor(api: API) {
    this.api = api;
  }

  createMaterial(material: Material) {
    return this.api.post(material);
  }

  editMaterial(id: string, material: Material) {
    return this.api.put(id, material);
  }

  delteMaterial(id: string) {
    return this.api.delete(id);
  }

  async get(): Promise<any[]> {
    return await this.api.get();
  }

  getOne(id: string) {
    return this.api.getById(id);
  }
}

export const materialProvider = new MaterialProvider(new axiosApi());
