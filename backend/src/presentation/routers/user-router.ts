import express from 'express';
import { Request, Response } from 'express';
import { ChangeUserUsecase } from '../../domain/interfaces/use-cases/user/change-user-usecase-interface';
import { LoginUserUsecase } from '../../domain/interfaces/use-cases/user/login-user-usecase-interface';
import { SignupUserUsecase } from '../../domain/interfaces/use-cases/user/signup-user-usecase-interface';

export default function UserRouter(
  loginUser: LoginUserUsecase,
  signupUser: SignupUserUsecase,
  changeUser: ChangeUserUsecase
) {
  const router = express.Router();

  router.post('/login', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const token: string | undefined = await loginUser.execute(
        email,
        password
      );
      if (!token) res.status(404).send({ message: "Couldn't login user" });
      else res.send({ token: token });
    } catch (err) {
      res.status(500).send({ message: 'Error signing user' });
    }
  });

  router.post('/signup', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const result = await signupUser.execute(email, password);
      res.send(result);
    } catch (e) {
      console.log('e: ', e);
      res.status(500).send({ message: "Couldn't signup user" });
    }
  });

  router.put('/change', async (req: Request, res: Response) => {
    try {
      const { email, oldPassword, newPassword } = req.body;
      const token : string | undefined = await loginUser.execute(email, oldPassword);
      if (!token) res.status(401).send({message: "Wrong crendentials provided"});

      const result = await changeUser.execute(email, newPassword);
      res.send(result);
    } catch (e) {
      res.status(500).send({ message: "Count'd change user credentials" });
    }
  });

  return router;
}
