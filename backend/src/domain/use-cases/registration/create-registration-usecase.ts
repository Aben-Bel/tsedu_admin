import { Registration } from '../../entities/registrationform/interface/Registration';
import { RegistrationRepository } from '../../interfaces/repositories/registration/registration-interface-repository';
import { CreateRegistrationUseCase } from '../../interfaces/use-cases/registration/create-registration';

export class CreateRegistrationUsecaseImp implements CreateRegistrationUseCase {
  private repository: RegistrationRepository;
  constructor(repository: RegistrationRepository) {
    this.repository = repository;
  }

  async execute(registration: Registration): Promise<Registration> {
    return await this.repository.createRegistration(registration);
  }
}
