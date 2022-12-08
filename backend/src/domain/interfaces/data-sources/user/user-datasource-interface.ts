export interface UserDataSource {
  login(email: string): Promise<any>;
  signup(email: string, password: string): Promise<any>;
}
