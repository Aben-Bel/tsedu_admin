import { Banner } from '../../entities/banner/interface/Banner';
import { BannerRepository } from '../../interfaces/repositories/banner/banner-interface-repository';
import { DeleteBannerUseCase } from '../../interfaces/use-cases/banner/delete-banner-usecase';

export class DeleteBanner implements DeleteBannerUseCase {
  bannerRepository: BannerRepository;
  constructor(bannerRepository: BannerRepository) {
    this.bannerRepository = bannerRepository;
  }

  async execute(): Promise<void> {
    await this.bannerRepository.deleteBanner();
  }
}
