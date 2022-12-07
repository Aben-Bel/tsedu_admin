import express from 'express';
import { Request, Response } from 'express';
import multer from 'multer';
import { Banner } from '../../domain/entities/banner/interface/Banner';
import { BannerModel } from '../../domain/entities/banner/model/Banner';
import { CreateBannerUseCase } from '../../domain/interfaces/use-cases/banner/create-banner';
import { DeleteBannerUseCase } from '../../domain/interfaces/use-cases/banner/delete-banner-usecase';
import { GetBannerUseCase } from '../../domain/interfaces/use-cases/banner/get-banner';

export default function BannerRouter(
  getBannerUseCase: GetBannerUseCase,
  createBannerUseCase: CreateBannerUseCase,
  deleteBannerUseCase: DeleteBannerUseCase
) {
  const router = express.Router();
  const file = multer();

  router.get('/', async (req: Request, res: Response) => {
    try {
      const banner: Banner = await getBannerUseCase.execute();
      if (!banner) res.status(404).send({ message: 'No Banner to Fetch' });
      else res.send(new BannerModel(banner));
    } catch (err) {
      res.status(500).send({ message: 'Error Fetching Banner' });
    }
  });

  router.delete('/', async (req: Request, res: Response) => {
    try {
      await deleteBannerUseCase.execute();
      res.statusCode = 200;
      res.json({ message: 'Deleted One' });
    } catch (e) {
      res.status(500).send({ message: 'Error deleting banner' });
    }
  });

  router.post(
    '/',
    file.fields([{ name: 'banner', maxCount: 1 }]),
    async (req: Request, res: Response) => {
      try {
        const reqBanner: Banner = { ...req.body };
        const bannerFile = req.files as {
          [fileldname: string]: Express.Multer.File[];
        };
        if (bannerFile && bannerFile.banner) {
          reqBanner.banner = bannerFile.banner[0] as unknown as File;
        }
        const banner = await createBannerUseCase.execute(reqBanner);
        res.send(banner);
      } catch (e) {
        res.status(500).send({ message: 'Error saving banner' });
      }
    }
  );

  return router;
}
