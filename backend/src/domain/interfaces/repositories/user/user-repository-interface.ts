export interface UserRepository {
  login(email: string): Promise<any>;
  signup(email: string, password: string): Promise<any>;
  change(email: string, password: string): Promise<any>;
}
