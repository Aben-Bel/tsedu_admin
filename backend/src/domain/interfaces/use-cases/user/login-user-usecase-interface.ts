export interface LoginUserUsecase {
  execute(email: string, password: string): Promise<string | undefined>;
}
