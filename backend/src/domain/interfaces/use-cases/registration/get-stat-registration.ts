import { Registration } from '../../../entities/registrationform/interface/Registration';

export interface GetStatRegistration {
  execute(): Promise<any>;
}
