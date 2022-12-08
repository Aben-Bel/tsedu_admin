import { API } from "./API-interface";
import { axiosApiBanner } from "./axiosApiBanner";

class BannerProvider {
  private api: API;
  constructor(api: API) {
    this.api = api;
  }

  async createBanner(banner: any) {
    console.log("create: ", banner);
    return await this.api.post(banner);
  }

  async deleteBanner(id: string) {
    return await this.api.delete(id);
  }

  async get(query: any): Promise<any[]> {
    return await this.api.get({});
  }
}

export const bannerProvider = new BannerProvider(new axiosApiBanner());
