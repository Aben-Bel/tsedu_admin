export interface TokenServiceI {
  encode(payload: any): Promise<string>;
  decode(token: string): Promise<any>;
}
