import { API } from "./API-interface";
import { axiosApiMaterial } from "./axiosApiMaterial";
import { Material } from "../models/material/material";

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

export const materialProvider = new MaterialProvider(new axiosApiMaterial());
