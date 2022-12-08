import { UserDataSource } from '../../../../domain/interfaces/data-sources/user/user-datasource-interface';
import { DatabaseUser } from '../../../interfaces/database-user';

export class MemoryUserDataSource implements UserDataSource {
  private database: DatabaseUser;
  constructor(database: DatabaseUser) {
    this.database = database;
  }
  async login(email: string): Promise<any> {
    return await this.database.get(email);
  }
  async signup(email: string, password: string): Promise<any> {
    return await this.database.insert({ email, password });
  }
}
