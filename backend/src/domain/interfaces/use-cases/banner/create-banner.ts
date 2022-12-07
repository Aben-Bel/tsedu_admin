import { Banner } from '../../../entities/banner/interface/Banner';

export interface CreateBannerUseCase {
  execute(banner: Banner): Promise<Banner>;
}
