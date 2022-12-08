import express from 'express';
import { Request, Response } from 'express';
import { LoginUserUsecase } from '../../domain/interfaces/use-cases/user/login-user-usecase-interface';
import { SignupUserUsecase } from '../../domain/interfaces/use-cases/user/signup-user-usecase-interface';

export default function UserRouter(
  loginUser: LoginUserUsecase,
  signupUser: SignupUserUsecase
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

  return router;
}
