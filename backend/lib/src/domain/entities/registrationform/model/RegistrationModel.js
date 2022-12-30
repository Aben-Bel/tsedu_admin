"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationModel = void 0;
class RegistrationModel {
    constructor(registration) {
        this.gender = registration.gender;
        this.sightChallenge = registration.sightChallenge;
        this.hearingImpaired = registration.hearingImpaired;
        this.sightAndHearingChallenge = registration.sightAndHearingChallenge;
        this.category = registration.category;
        this.disability = registration.disability;
    }
}
exports.RegistrationModel = RegistrationModel;
