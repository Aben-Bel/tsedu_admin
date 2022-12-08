import { UserRepository } from '../../interfaces/repositories/user/user-repository-interface';
import { HasherI } from '../../interfaces/services/hasher-service-interface';
import { TokenServiceI } from '../../interfaces/services/Token-service-interface';
import { LoginUserUsecase } from '../../interfaces/use-cases/user/login-user-usecase-interface';

export class LoginUsecase implements LoginUserUsecase {
  private userRepo: UserRepository;
  private tokenService: TokenServiceI;
  private hasher: HasherI;

  constructor(
    userRepo: UserRepository,
    tokenService: TokenServiceI,
    hasher: HasherI
  ) {
    this.userRepo = userRepo;
    this.tokenService = tokenService;
    this.hasher = hasher;
  }

  async execute(email: string, password: string): Promise<string | undefined> {
    const user: any = await this.userRepo.login(email);

    if (user && this.hasher.compare(password, user.password)) {
      const jwt_token = await this.tokenService.encode({ email: user.email });
      return jwt_token;
    } else {
      return undefined;
    }
  }
}
