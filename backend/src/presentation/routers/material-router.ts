import express from 'express';
import { Request, Response } from 'express';
import { CreateMaterialUseCase } from '../../domain/interfaces/use-cases/material/create-material';
import { DeleteMaterialUseCase } from '../../domain/interfaces/use-cases/material/delete-one-material';
import { GetAllMaterialsUseCase } from '../../domain/interfaces/use-cases/material/get-all-materials';
import { GetOneMaterialUseCase } from '../../domain/interfaces/use-cases/material/get-one-material';
import { UpdateMaterialUseCase } from '../../domain/interfaces/use-cases/material/update-material';

export default function MaterialRouter(
  getAllMaterialsUseCase: GetAllMaterialsUseCase,
  createMaterialUseCase: CreateMaterialUseCase,
  udpateMaterialUseCase: UpdateMaterialUseCase,
  getOneMaterialUseCase: GetOneMaterialUseCase,
  deleteOneMaterialUseCase: DeleteMaterialUseCase
) {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    try {
      const materials = await getAllMaterialsUseCase.execute();
      res.send(materials);
    } catch (err) {
      res.status(500).send({ message: 'Error Fetching Data' });
    }
  });

  router.post('/', async (req: Request, res: Response) => {
    try {
      const material = await createMaterialUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: 'Created' });
    } catch (err) {
      res.status(500).send({ message: 'Error saving data' });
    }
  });

  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const material = await udpateMaterialUseCase.execute(
        req.params.id,
        req.body
      );
      res.statusCode = 201;
      res.json({ message: 'Updated', data: material });
    } catch (err) {
      res.status(500).send({ message: 'Error updating data' });
    }
  });

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
