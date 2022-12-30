import express from 'express';
import { Request, Response } from 'express';
import { Registration } from '../../domain/entities/registrationform/interface/Registration';
import { CreateRegistrationUseCase } from '../../domain/interfaces/use-cases/registration/create-registration';
import { GetStatRegistration } from '../../domain/interfaces/use-cases/registration/get-stat-registration';

export default function RegistrationRouter(
  getStat: GetStatRegistration,
  createRegistrationUseCase: CreateRegistrationUseCase
) {
  const router = express.Router();

  router.get('/', async (req: Request, res: Response) => {
    try {
      const stat: any = await getStat.execute();
      if (!stat) res.status(404).send({ message: 'No Stat to Fetch' });
      else res.send(stat);
    } catch (err) {
      res.status(500).send({ message: 'Error Fetching Stat' });
    }
  });

  router.post('/', async (req: Request, res: Response) => {
    try {
      const reg: Registration = { ...req.body };

      const registration = await createRegistrationUseCase.execute(reg);
      res.send(registration);
    } catch (e) {
      res.status(500).send({ message: 'Error saving registration' });
    }
  });

  return router;
}
