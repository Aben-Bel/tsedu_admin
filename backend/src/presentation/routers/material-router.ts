import express from 'express';
import multer from 'multer';
import { Request, Response } from 'express';
import { CreateMaterialUseCase } from '../../domain/interfaces/use-cases/material/create-material';
import { DeleteMaterialUseCase } from '../../domain/interfaces/use-cases/material/delete-one-material';
import { GetAllMaterialsUseCase } from '../../domain/interfaces/use-cases/material/get-all-materials';
import { GetOneMaterialUseCase } from '../../domain/interfaces/use-cases/material/get-one-material';
import { UpdateMaterialUseCase } from '../../domain/interfaces/use-cases/material/update-material';
import { PaginationMaterial } from '../../domain/interfaces/use-cases/material/pagination-material';

export default function MaterialRouter(
  getAllMaterialsUseCase: GetAllMaterialsUseCase,
  createMaterialUseCase: CreateMaterialUseCase,
  udpateMaterialUseCase: UpdateMaterialUseCase,
  getOneMaterialUseCase: GetOneMaterialUseCase,
  deleteOneMaterialUseCase: DeleteMaterialUseCase,
  paginationMaterialUseCase: PaginationMaterial
) {
  const router = express.Router();
  const file = multer();

  router.get('/', async (req: Request, res: Response) => {
    try {
      const { limit = '5', skip = '0' } = req.query as {
        limit: string;
        skip: string;
      };
      const materials = await getAllMaterialsUseCase.execute({
        limit: parseInt(limit),
        skip: parseInt(skip)
      });
      res.send(
        materials.map((item) => ({
          ...item
        }))
      );
    } catch (err) {
      res.status(500).send({ message: 'Error Fetching Data' });
    }
  });

  router.get('/thumbnail/:id', async (req: Request, res: Response) => {
    try {
      const material = await getOneMaterialUseCase.execute(req.params.id);
      res.statusCode = 200;
      res.json({ message: 'Found One', data: material?.thumbnail });
    } catch (err) {
      res.status(500).send({ message: 'Error getting one data' });
    }
  });

  router.get('/file/:id', async (req: Request, res: Response) => {
    try {
      const material = await getOneMaterialUseCase.execute(req.params.id);
      res.statusCode = 200;
      res.json({ message: 'Found One', data: material });
    } catch (err) {
      res.status(500).send({ message: 'Error getting one data' });
    }
  });

  router.get('/pagination/', async (req: Request, res: Response) => {
    try {
      const pagination = await paginationMaterialUseCase.execute();
      res.send({ pagination });
    } catch (err) {
      res.status(500).send({ message: 'Error getting count of materials' });
    }
  });
  router.post(
    '/',
    file.fields([
      { name: 'thumbnail', maxCount: 1 },
      { name: 'book', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
      { name: 'video', maxCount: 1 }
    ]),
    async (req: Request, res: Response) => {
      try {
        const reqMaterial = { ...req.body };
        const materialFile = req.files as {
          [fileldname: string]: Express.Multer.File[];
        };
        if (materialFile) {
          if (materialFile.thumbnail) {
            reqMaterial.thumbnail = materialFile.thumbnail[0];
          }
          if (materialFile.book) {
            reqMaterial.book = materialFile.book[0];
          }
          if (materialFile.audio) {
            reqMaterial.audio = materialFile.audio[0];
          }
          if (materialFile.video) {
            reqMaterial.video = materialFile.video[0];
          }
        }

        const material = await createMaterialUseCase.execute(reqMaterial);
        res.statusCode = 201;
        res.json({ message: 'Created' });
      } catch (err) {
        res.status(500).send({ message: 'Error saving data' });
      }
    }
  );

  router.put(
    '/:id',
    file.fields([
      { name: 'thumbnail', maxCount: 1 },
      { name: 'book', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
      { name: 'video', maxCount: 1 }
    ]),
    async (req: Request, res: Response) => {
      try {
        const reqMaterial = { ...req.body };
        const materialFile = req.files as {
          [fileldname: string]: Express.Multer.File[];
        };
        if (materialFile) {
          if (materialFile.thumbnail) {
            reqMaterial.thumbnail = materialFile.thumbnail[0];
          }
          if (materialFile.book) {
            reqMaterial.book = materialFile.book[0];
          }
          if (materialFile.audio) {
            reqMaterial.audio = materialFile.audio[0];
          }
          if (materialFile.video) {
            reqMaterial.video = materialFile.video[0];
          }
        }
        const material = await udpateMaterialUseCase.execute(
          req.params.id,
          reqMaterial
        );
        res.statusCode = 201;
        res.json({ message: 'Updated', data: material });
      } catch (err) {
        res.status(500).send({ message: 'Error updating data' });
      }
    }
  );

  router.get('/:id', async (req: Request, res: Response) => {
    try {
      const material = await getOneMaterialUseCase.execute(req.params.id);
      res.statusCode = 200;
      res.json({ message: 'Found One', data: material });
    } catch (err) {
      res.status(500).send({ message: 'Error getting one data' });
    }
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const material = await deleteOneMaterialUseCase.execute(req.params.id);
      res.statusCode = 201;
      res.json({ message: 'Successfully deleted material' });
    } catch (err) {
      res.status(500).send({ message: 'Error deleting data' });
    }
  });

  return router;
}
