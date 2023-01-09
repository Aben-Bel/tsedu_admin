import express from 'express';
import { Request, Response } from 'express';
import { ChangeUserUsecase } from '../../domain/interfaces/use-cases/user/change-user-usecase-interface';
import { LoginUserUsecase } from '../../domain/interfaces/use-cases/user/login-user-usecase-interface';

export default function ChangeUserRouter(
  loginUser: LoginUserUsecase,
  changeUser: ChangeUserUsecase
) {
  const router = express.Router();

  router.put('/', async (req: Request, res: Response) => {
    try {
      const { email, oldPassword, newPassword } = req.body;
      const token: string | undefined = await loginUser.execute(
        email,
        oldPassword
      );

      if (!token)
        res.status(401).send({ message: 'Wrong crendentials provided' });

      const result = await changeUser.execute(email, newPassword);
      res.send(result);
    } catch (e) {
      res.status(500).send({ message: "Couldn't change user credentials" });
    }
  });

  return router;
}
