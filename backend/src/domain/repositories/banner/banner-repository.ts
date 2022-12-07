import { Banner } from '../../entities/banner/interface/Banner';
import { BannerDataSource } from '../../interfaces/data-sources/banner/banner-data-source';
import { BannerRepository } from '../../interfaces/repositories/banner/banner-interface-repository';

export class BannerRepositoryImpl implements BannerRepository {
  bannerDataSource: BannerDataSource;
  constructor(bannerDataSource: BannerDataSource) {
    this.bannerDataSource = bannerDataSource;
  }

  async deleteBanner(): Promise<void> {
    await this.bannerDataSource.deleteOne();
  }

  async getBanner(): Promise<Banner> {
    return await this.bannerDataSource.getOne();
  }

  async createBanner(banner: Banner): Promise<Banner> {
    return await this.bannerDataSource.createOne(banner);
  }
}
