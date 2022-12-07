import { Banner } from '../../entities/banner/interface/Banner';
import { BannerRepository } from '../../interfaces/repositories/banner/banner-interface-repository';
import { CreateBannerUseCase } from '../../interfaces/use-cases/banner/create-banner';

export class CreateBanner implements CreateBannerUseCase {
  bannerRepository: BannerRepository;
  constructor(bannerRepository: BannerRepository) {
    this.bannerRepository = bannerRepository;
  }

  async execute(banner: Banner): Promise<Banner> {
    return await this.bannerRepository.createBanner(banner);
  }
}
