import { UserDataSource } from '../../interfaces/data-sources/user/user-datasource-interface';
import { UserRepository } from '../../interfaces/repositories/user/user-repository-interface';

export class UserRepositoryImpl implements UserRepository {
  private userDatasource: UserDataSource;
  constructor(userDatasource: UserDataSource) {
    this.userDatasource = userDatasource;
  }

  async login(email: string): Promise<any> {
    const user = await this.userDatasource.login(email);
    return user;
  }
  async signup(email: string, password: string): Promise<any> {
    const user = await this.userDatasource.signup(email, password);
    return user;
  }

  async change(email: string, password: string): Promise<any> {
    const user = await this.userDatasource.update(email, password);
    return user;
  }
}
