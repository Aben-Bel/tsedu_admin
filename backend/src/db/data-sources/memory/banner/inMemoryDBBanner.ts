import { Banner } from '../../../../domain/entities/banner/interface/Banner';
import { DatabaseBanner } from '../../../interfaces/database-banner';

export class DB_Memory_Banner implements DatabaseBanner {
  private banner: Banner | undefined = undefined;
  get(): Promise<any> {
    return Promise.resolve(this.banner);
  }
  delete(): void {
    this.banner = undefined;
    return this.banner;
  }
  insert(doc: any): Promise<any> {
    this.banner = doc;
    return Promise.resolve(this.banner);
  }
}
