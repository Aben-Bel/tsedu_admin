"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupUsecase = void 0;
class SignupUsecase {
    constructor(userRepo, tokenService, hasher) {
        this.userRepo = userRepo;
        this.tokenService = tokenService;
        this.hasher = hasher;
    }
    async execute(email, password) {
        const hashed_password = this.hasher.hash(password);
        const user = await this.userRepo.signup(email, hashed_password);
        const jwt_token = await this.tokenService.encode({ email: user.email });
        return { token: jwt_token, user: user };
    }
}
exports.SignupUsecase = SignupUsecase;
