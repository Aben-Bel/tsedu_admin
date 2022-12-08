import server from './server';
import { NextFunction, Request, Response } from 'express';
import MaterialRouter from './presentation/routers/material-router';
import { MaterialRepositoryImpl } from './domain/repositories/material/material-repository';
import { CreateMaterial } from './domain/use-cases/material/material-create-material';
import { MemoryMaterialDataSource } from './db/data-sources/memory/material/memory-material-data-source';
import { GetAllMaterials } from './domain/use-cases/material/material-get-all-materials';
import { UpdateMaterialUseCaseImpl } from './domain/use-cases/material/material-update-material';
import { GetOneMaterialUseCaseImpl } from './domain/use-cases/material/material-get-one-material';
import { DeleteOneMaterialUseCaseImpl } from './domain/use-cases/material/material-delete-material';
import BannerRouter from './presentation/routers/banner-router';
import { CreateBanner } from './domain/use-cases/banner/banner-create-usecase';
import { GetBanner } from './domain/use-cases/banner/banner-get-usecase';
import { DeleteBanner } from './domain/use-cases/banner/banner-delete-usecase';
import { BannerRepositoryImpl } from './domain/repositories/banner/banner-repository';
import { MemoryBannerDataSource } from './db/data-sources/memory/banner/memory-banner-datasource';
import { DB_Memory_Banner } from './db/data-sources/memory/banner/inMemoryDBBanner';
import { DB_Memory_Material } from './db/data-sources/memory/material/inMemoryDBMaterial';
import { DB_MEMORY_USER } from './db/data-sources/memory/user/inMemoryDBUser';
import { UserRepositoryImpl } from './domain/repositories/user/user-repository';
import { MemoryUserDataSource } from './db/data-sources/memory/user/memory-user-interface';
import UserRouter from './presentation/routers/user-router';
import { LoginUsecase } from './domain/use-cases/user/login-user-usecase';
import { SignupUsecase } from './domain/use-cases/user/signup-user-usecase';
import { Hasher } from './services/HasherService';
import { TokenService } from './services/TokenService';
import { User } from './domain/entities/material/interface/user';
(async () => {
  const materialDB = new DB_Memory_Material();
  const materialRepository = new MaterialRepositoryImpl(
    new MemoryMaterialDataSource(materialDB)
  );
  const materialMiddleWare = MaterialRouter(
    new GetAllMaterials(materialRepository),
    new CreateMaterial(materialRepository),
    new UpdateMaterialUseCaseImpl(materialRepository),
    new GetOneMaterialUseCaseImpl(materialRepository),
    new DeleteOneMaterialUseCaseImpl(materialRepository)
  );
  const bannerRepository = new BannerRepositoryImpl(
    new MemoryBannerDataSource(new DB_Memory_Banner())
  );
  const bannerMiddleWare = BannerRouter(
    new GetBanner(bannerRepository),
    new CreateBanner(bannerRepository),
    new DeleteBanner(bannerRepository)
  );

  const userDB = new DB_MEMORY_USER();
  const hashService = new Hasher();
  const tokenService = new TokenService();
  const userRepository = new UserRepositoryImpl(
    new MemoryUserDataSource(userDB)
  );
  const userMiddleWare = UserRouter(
    new LoginUsecase(userRepository, tokenService, hashService),
    new SignupUsecase(userRepository, tokenService, hashService)
  );

  const authGuard = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.get('authorization');
    if (authToken) {
      const token = authToken.split(' ')[1];
      const result: any = tokenService.decode(token);
      const user: any = userDB.get(result.email);
      if (user) {
        next();
      } else {
        return res.status(401).json({ error: 'not authorized' });
      }
    } else {
      return res.status(403).json({ error: 'No credentials' });
    }
  };
  const PORT = 4545;
  server.use('/material', authGuard, materialMiddleWare);
  server.use('/banner', authGuard, bannerMiddleWare);
  server.use('/user', userMiddleWare);
  server.listen(PORT, () => console.log(`Running Server at port: ${PORT}`));
})();
