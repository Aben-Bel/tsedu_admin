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
  get(query: any): Promise<any[]>;
  getById(id: string): Promise<Object>;
  post(material: Material): Promise<Object>;
  put(id: string, material: Material): Promise<Object>;
  delete(id: string): Promise<Boolean>;
}

class axiosApi implements API {
  private base_url = "http://localhost:4545/material";
  async get(query: any): Promise<any[]> {
    const { page, rowsPerPage } = query;
    const results: any[] = await axios
      .get(this.base_url + "?limit=" + rowsPerPage + "&skip=" + page)
      .then((res) => res.data);
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

  async post(material: Material): Promise<Object> {
    console.log("post material: ", material);
    const bodyFormData = new FormData();
    if (material.language) bodyFormData.append("language", material.language);
    if (material.title) bodyFormData.append("title", material.title);
    if (material.description)
      bodyFormData.append("description", material.description);
    if (material.category) bodyFormData.append("category", material.category);
    if (material.type) bodyFormData.append("type", material.type);
    if (material.video) bodyFormData.append("video", material.video);
    if (material.videoLink)
      bodyFormData.append("videoLink", material.videoLink);
    if (material.thumbnail)
      bodyFormData.append("thumbnail", material.thumbnail);
    if (material.book) bodyFormData.append("book", material.book);
    if (material.audio) bodyFormData.append("audio", material.audio);

    return await axios({
      method: "post",
      url: this.base_url,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  async put(id: string, material: Material): Promise<Object> {
    console.log("post material: ", material);
    const bodyFormData = new FormData();
    if (material.language) bodyFormData.append("language", material.language);
    if (material.title) bodyFormData.append("title", material.title);
    if (material.description)
      bodyFormData.append("description", material.description);
    if (material.category) bodyFormData.append("category", material.category);
    if (material.type) bodyFormData.append("type", material.type);
    if (material.video) bodyFormData.append("video", material.video);
    if (material.videoLink)
      bodyFormData.append("videoLink", material.videoLink);
    if (material.thumbnail)
      bodyFormData.append("thumbnail", material.thumbnail);
    if (material.book) bodyFormData.append("book", material.book);
    if (material.audio) bodyFormData.append("audio", material.audio);

    return await axios({
      method: "put",
      url: this.base_url + "/" + id,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  async delete(id: string): Promise<Boolean> {
    return await axios.delete(this.base_url + "/" + id);
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

  deleteMaterial(id: string) {
    return this.api.delete(id);
  }

  async get({ page, rowsPerPage }: any): Promise<any[]> {
    return await this.api.get({ page, rowsPerPage });
  }

  getOne(id: string) {
    return this.api.getById(id);
  }
}

export const materialProvider = new MaterialProvider(new axiosApi());
