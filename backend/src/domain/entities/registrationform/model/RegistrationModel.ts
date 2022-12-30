import { Registration } from '../interface/Registration';

export class RegistrationModel implements Registration {
  public gender: string;
  public sightChallenge: boolean;
  public hearingImpaired: boolean;
  public sightAndHearingChallenge: boolean;
  public category: string;
  public disability: boolean;

  constructor(registration: Registration) {
    this.gender = registration.gender;
    this.sightChallenge = registration.sightChallenge;
    this.hearingImpaired = registration.hearingImpaired;
    this.sightAndHearingChallenge = registration.sightAndHearingChallenge;
    this.category = registration.category;
    this.disability = registration.disability;
  }
}
