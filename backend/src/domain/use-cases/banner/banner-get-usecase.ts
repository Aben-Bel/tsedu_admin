import { Banner } from '../../entities/banner/interface/Banner';
import { BannerRepository } from '../../interfaces/repositories/banner/banner-interface-repository';
import { GetBannerUseCase } from '../../interfaces/use-cases/banner/get-banner';

export class GetBanner implements GetBannerUseCase {
  bannerRepository: BannerRepository;
  constructor(bannerRepository: BannerRepository) {
    this.bannerRepository = bannerRepository;
  }

  async execute(): Promise<Banner> {
    return await this.bannerRepository.getBanner();
  }
}
