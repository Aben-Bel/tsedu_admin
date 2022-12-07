import { Banner } from "../../../entities/banner/interface/Banner";

export interface GetBannerUseCase {
  execute(): Promise<Banner>;
}
