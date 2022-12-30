import { Registration } from '../../../entities/registrationform/interface/Registration';

export interface CreateRegistrationUseCase {
  execute(registration: Registration): Promise<Registration>;
}
