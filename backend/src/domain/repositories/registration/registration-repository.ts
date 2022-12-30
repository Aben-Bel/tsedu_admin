import { Registration } from '../../entities/registrationform/interface/Registration';
import { RegistrationDataSource } from '../../interfaces/data-sources/registration/registration-data-source';
import { RegistrationRepository } from '../../interfaces/repositories/registration/registration-interface-repository';

export class RegistrationRepositoryImp implements RegistrationRepository {
  private datasource: RegistrationDataSource;
  constructor(datasource: RegistrationDataSource) {
    this.datasource = datasource;
  }

  async createRegistration(registration: Registration): Promise<Registration> {
    return await this.datasource.create(registration);
  }

  async getAllRegistration(): Promise<Registration[]> {
    return await this.datasource.getAll();
  }
}
