import { HasherI } from '../domain/interfaces/services/hasher-service-interface';
import bcrypt from 'bcrypt';

export class Hasher implements HasherI {
  hash(value: string) {
    return bcrypt.hashSync(value, 10);
  }
  compare(plain: string, hashed: string): boolean {
    return bcrypt.compareSync(plain, hashed);
  }
}
