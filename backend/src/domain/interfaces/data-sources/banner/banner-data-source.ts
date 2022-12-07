import { Banner } from '../../../entities/banner/interface/Banner';

export interface BannerDataSource {
  getOne(): Promise<Banner>;
  deleteOne(): void;
  createOne(banner: Banner): Promise<Banner>;
}
