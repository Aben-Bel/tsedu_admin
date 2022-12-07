import { Banner } from '../interface/Banner';

export class BannerModel implements Banner {
  public id?: string | undefined;
  public banner: File;

  constructor(banner: Banner) {
    this.id = banner.id;
    this.banner = banner.banner;
  }
}
