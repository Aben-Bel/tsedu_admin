import { Registration } from '../../entities/registrationform/interface/Registration';
import { RegistrationRepository } from '../../interfaces/repositories/registration/registration-interface-repository';
import { GetStatRegistration } from '../../interfaces/use-cases/registration/get-stat-registration';

export class GetStatRegistrationImpl implements GetStatRegistration {
  private repository: RegistrationRepository;
  constructor(repository: RegistrationRepository) {
    this.repository = repository;
  }
  async execute(): Promise<any> {
    const registrations = await this.repository.getAllRegistration();

    const stat = {
      gender: {
        male: 0,
        female: 0
      },
      sightChallenge: 0,
      hearingImpaired: 0,
      sightAndHearingChallenge: 0,
      category: {
        community: 0,
        student: 0,
        health_officer: 0,
        media: 0,
        religious_figures: 0
      },
      disability: 0
    };
    for (let registration of registrations) {
      if (registration.gender === 'M') {
        stat.gender.male += 1;
      } else {
        stat.gender.female += 1;
      }
      if (registration.category.toLowerCase() === 'community') {
        stat.category.community += 1;
      } else if (registration.category.toLowerCase() === 'student') {
        stat.category.student += 1;
      } else if (registration.category.toLowerCase() === 'health officer') {
        stat.category.health_officer += 1;
      } else if (registration.category.toLowerCase() === 'media') {
        stat.category.media += 1;
      } else if (registration.category.toLowerCase() === 'religious figures') {
        stat.category.religious_figures += 1;
      }

      stat.disability += registration.disability ? 1 : 0;
      stat.sightChallenge += registration.sightChallenge ? 1 : 0;
      stat.hearingImpaired += registration.hearingImpaired ? 1 : 0;
      stat.sightAndHearingChallenge += registration.sightAndHearingChallenge
        ? 1
        : 0;
    }

    return stat;
  }
}
