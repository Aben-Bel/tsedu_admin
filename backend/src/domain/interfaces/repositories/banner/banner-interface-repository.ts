import { Banner } from '../../../entities/banner/interface/Banner';

export interface BannerRepository {
  deleteBanner(): void;
  getBanner(): Promise<Banner>;
  createBanner(banner : Banner): Promise<Banner>;
}
