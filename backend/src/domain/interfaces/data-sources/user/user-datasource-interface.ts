export interface UserDataSource {
  update(email: string, password: string): Promise<any>;
  login(email: string): Promise<any>;
  signup(email: string, password: string): Promise<any>;
}
