import { Registration } from '../../../../domain/entities/registrationform/interface/Registration';
import { RegistrationModel } from '../../../../domain/entities/registrationform/model/RegistrationModel';
import { QueryI } from '../../../../domain/interfaces/use-cases/material/get-all-materials';
import { DatabaseRegistration } from '../../../interfaces/database-registration';

export class RegistrationInMemoryDB implements DatabaseRegistration {
  private registrations: Registration[] = [];

  find(query: QueryI): Promise<any[]> {
    return Promise.resolve(this.registrations);
  }

  insertOne(doc: any): Promise<any> {
    const registrationModel = new RegistrationModel(doc);
    this.registrations.push(registrationModel);
    return Promise.resolve(registrationModel);
  }
}
