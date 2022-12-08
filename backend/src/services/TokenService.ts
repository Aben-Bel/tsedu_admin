import { TokenServiceI } from '../domain/interfaces/services/Token-service-interface';
import jwt from 'jsonwebtoken';

export class TokenService implements TokenServiceI {
  private secret: string;
  constructor() {
    this.secret = process.env.SECRET?.replace(
      /\\n/gm,
      '\n'
    ) as unknown as string;
  }
  async encode(payload: any): Promise<string> {
    const token = jwt.sign(payload, this.secret, {
      algorithm: 'HS256',
      expiresIn: '6h'
    });

    return Promise.resolve(token);
  }
  async decode(token: string): Promise<any> {
    try {
      const payload = jwt.verify(token, this.secret);
      return payload;
    } catch (error) {
      console.log('error decoding token: ', error);
      return undefined;
    }
  }
}
