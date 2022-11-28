import { User } from '../interface/user';

export class UserModel implements User {
  public email: string;
  public password: string;

  constructor(user: User) {
    this.email = user.email;
    this.password = user.password;
  }
}
