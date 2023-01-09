import { UserRepository } from '../../interfaces/repositories/user/user-repository-interface';
import { HasherI } from '../../interfaces/services/hasher-service-interface';
import { ChangeUserUsecase } from '../../interfaces/use-cases/user/change-user-usecase-interface';

export class ChangeUsecase implements ChangeUserUsecase {
  private userRepo: UserRepository;
  private hasher: HasherI;

  constructor(
    userRepo: UserRepository,
    hasher: HasherI
  ) {
    this.userRepo = userRepo;
    this.hasher = hasher;
  }

  async execute(email: string, password: string): Promise<string | undefined> {
    const hashed_password = this.hasher.hash(password);
    const user = await this.userRepo.change(email, hashed_password);
    return "Sucessful";
  }
}
