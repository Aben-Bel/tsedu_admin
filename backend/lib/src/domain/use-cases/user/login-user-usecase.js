"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUsecase = void 0;
class LoginUsecase {
    constructor(userRepo, tokenService, hasher) {
        this.userRepo = userRepo;
        this.tokenService = tokenService;
        this.hasher = hasher;
    }
    async execute(email, password) {
        const user = await this.userRepo.login(email);
        if (user && this.hasher.compare(password, user.password)) {
            const jwt_token = await this.tokenService.encode({ email: user.email });
            return jwt_token;
        }
        else {
            return undefined;
        }
    }
}
exports.LoginUsecase = LoginUsecase;
