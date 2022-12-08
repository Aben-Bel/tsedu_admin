import { UserRepository } from '../../interfaces/repositories/user/user-repository-interface';
import { HasherI } from '../../interfaces/services/hasher-service-interface';
import { TokenServiceI } from '../../interfaces/services/Token-service-interface';
import { SignupUserUsecase } from '../../interfaces/use-cases/user/signup-user-usecase-interface';

export class SignupUsecase implements SignupUserUsecase {
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

  async execute(email: string, password: string): Promise<any> {
    const hashed_password = this.hasher.hash(password);
    const user = await this.userRepo.signup(email, hashed_password);
    const jwt_token = await this.tokenService.encode({ email: user.email });
    return { token: jwt_token, user: user };
  }
}
