import axios from "axios";
import { Material } from "../models/material/material";
import { MaterialModel } from "../models/material/MaterialModel";
import { getToken } from "../utils/getToken";
import { API } from "./API-interface";

// Define MaterialData interface
interface MaterialData {
  id: string;
  language: string;
  title: string;
  description: string;
  category: string;
  type: string;
  thumbnail?: string;
  book?: string;
  audio?: string;
  video?: string;
  video_link?: string;
}

export class axiosApiMaterial implements API {
  // private base_url = "http://localhost:4545/material";
  private base_url = "https://tsedu-backend.onrender.com/material";
  async get(query: any): Promise<any[]> {
    const { page, rowsPerPage } = query;
    const results: any[] = await axios
      .get(this.base_url + "?limit=" + rowsPerPage + "&skip=" + page, {
        headers: { authorization: `Bearer ${getToken()}` },
      })
      .then((res) => res.data);
    const materials = results.map(
      (item: Material) =>
        new MaterialModel({
          ...item,
          // book: { ...item.book, mimetype: "application/pdf" } as File,
        })
    );
    console.log("Results: ", materials);
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
    if (material.video_link)
      bodyFormData.append("video_link", material.video_link);
    if (material.thumbnail)
      bodyFormData.append("thumbnail", material.thumbnail);
    if (material.book) bodyFormData.append("book", material.book);
    if (material.audio) bodyFormData.append("audio", material.audio);

    return await axios({
      method: "post",
      url: this.base_url,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${getToken()}`,
      },
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
    if (material.video_link)
      bodyFormData.append("video_link", material.video_link);
    if (material.thumbnail)
      bodyFormData.append("thumbnail", material.thumbnail);
    if (material.book) bodyFormData.append("book", material.book);
    if (material.audio) bodyFormData.append("audio", material.audio);

    return await axios({
      method: "put",
      url: this.base_url + "/" + id,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${getToken()}`,
      },
    });
  }
  async delete(id: string): Promise<Boolean> {
    return await axios.delete(this.base_url + "/" + id, {
      headers: { authorization: `Bearer ${getToken()}` },
    });
  }
}
