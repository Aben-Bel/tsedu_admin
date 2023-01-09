export interface ChangeUserUsecase {
  execute(email: string, password: string): Promise<string | undefined>;
}
