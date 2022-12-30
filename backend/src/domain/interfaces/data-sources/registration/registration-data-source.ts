import { Registration } from '../../../entities/registrationform/interface/Registration';

export interface RegistrationDataSource {
  create(registration: Registration): Promise<Registration>;
  getAll(): Promise<Registration[]>;
}
