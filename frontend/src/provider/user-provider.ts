import { API } from "./API-interface";
import { axiosApiUser } from "./axiosApiUser";

class UserProvider {
  private api: API;
  constructor(api: API) {
    this.api = api;
  }

  async login(body: any): Promise<any> {
    return await this.api.post(body);
  }
}

export const userProvider = new UserProvider(new axiosApiUser());
