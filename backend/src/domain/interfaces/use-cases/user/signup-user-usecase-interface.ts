export interface SignupUserUsecase {
  execute(email: string, password: string): Promise<any>;
}
