import axios from "axios";
import { getToken } from "../utils/getToken";
import { API } from "./API-interface";

export class axiosApiBanner implements API {
  private base_url = "http://localhost:4545/banner";
  async get(query: any): Promise<any> {
    try {
      const results: any = await axios
        .get(this.base_url, {
          headers: { authorization: `Bearer ${getToken()}` },
        })
        .then((res) => res.data);
      return Promise.resolve(results);
    } catch (e) {
      return undefined;
    }
  }

  async post(banner: any): Promise<Object> {
    const bodyFormData = new FormData();
    if (banner.banner) bodyFormData.append("banner", banner.banner);

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

  async delete(id: string): Promise<Boolean> {
    return await axios.delete(this.base_url + "/", {
      headers: { authorization: `Bearer ${getToken()}` },
    });
  }

  getById(id: string): Promise<Object> {
    throw new Error("Method not implemented.");
  }
  put(id: string, banner: any): Promise<Object> {
    throw new Error("Method not implemented.");
  }
}
