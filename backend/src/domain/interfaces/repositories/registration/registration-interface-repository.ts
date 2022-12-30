import { Registration } from '../../../entities/registrationform/interface/Registration';

export interface RegistrationRepository {
  createRegistration(registration: Registration): Promise<Registration>;
  getAllRegistration(): Promise<Registration[]>;
}
