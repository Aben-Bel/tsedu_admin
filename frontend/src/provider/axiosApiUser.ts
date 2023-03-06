import axios from "axios";
import { API } from "./API-interface";

export class axiosApiUser implements API {
  // private base_url = "http://localhost:4545/user";
  private base_url = "https://tsedu-backend.onrender.com/user";

  async post(user: any): Promise<any> {
    try {
      const result = await axios({
        method: "post",
        url: this.base_url + "/login",
        data: user,
      });
      return result.data.token;
    } catch (e) {
      return undefined;
    }
  }

  get(body: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }

  getById(id: string): Promise<Object> {
    throw new Error("Method not implemented.");
  }
  put(id: string, user: any): Promise<Object> {
    throw new Error("Method not implemented.");
  }
}
