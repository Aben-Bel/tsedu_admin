import { BannerDataSource } from '../../../../domain/interfaces/data-sources/banner/banner-data-source';
import { Banner } from '../../../../domain/entities/banner/interface/Banner';
import { DatabaseBanner } from '../../../interfaces/database-banner';

export class MemoryBannerDataSource implements BannerDataSource {
  private database: DatabaseBanner;
  constructor(database: DatabaseBanner) {
    this.database = database;
  }
  async createOne(banner: Banner): Promise<Banner> {
    return await this.database.insert(banner);
  }
  async getOne(): Promise<Banner> {
    return await this.database.get();
  }
  async deleteOne(): Promise<void> {
    return await this.database.delete();
  }
}
