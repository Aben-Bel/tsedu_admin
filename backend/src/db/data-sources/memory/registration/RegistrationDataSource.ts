import { Registration } from '../../../../domain/entities/registrationform/interface/Registration';
import { RegistrationDataSource } from '../../../../domain/interfaces/data-sources/registration/registration-data-source';
import { DatabaseRegistration } from '../../../interfaces/database-registration';

export class RegistrationDatasourceImp implements RegistrationDataSource {
  private db: DatabaseRegistration;
  constructor(db: DatabaseRegistration) {
    this.db = db;
  }

  async create(registration: Registration): Promise<Registration> {
    return await this.db.insertOne(registration);
  }
  
  async getAll(): Promise<Registration[]> {
    const query: any = {};
    return await this.db.find(query);
  }
}
