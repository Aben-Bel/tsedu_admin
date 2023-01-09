import { UserModel } from '../../../../domain/entities/material/model/user';
import { User } from '../../../../domain/entities/user/interface/User';
import { DatabaseUser } from '../../../interfaces/database-user';

export class DB_MEMORY_USER implements DatabaseUser {
  private users: User[] = [];

  get(email: string): Promise<any> {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email) {
        return Promise.resolve(this.users[i]);
      }
    }
    return Promise.resolve(undefined);
  }

  update(email: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == email) {
        this.users[i].password = password;
        return this.users[i];
      }
    }

    return Promise.resolve(undefined);
  }

  insert(doc: any): Promise<any> {
    const user = new UserModel(doc);
    this.users.push(user);
    return Promise.resolve(user);
  }
}
