"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function RegistrationRouter(getStat, createRegistrationUseCase) {
    const router = express_1.default.Router();
    router.get('/', async (req, res) => {
        try {
            const stat = await getStat.execute();
            if (!stat)
                res.status(404).send({ message: 'No Stat to Fetch' });
            else
                res.send(stat);
        }
        catch (err) {
            res.status(500).send({ message: 'Error Fetching Stat' });
        }
    });
    router.post('/', async (req, res) => {
        try {
            const reg = Object.assign({}, req.body);
            const registration = await createRegistrationUseCase.execute(reg);
            res.send(registration);
        }
        catch (e) {
            res.status(500).send({ message: 'Error saving registration' });
        }
    });
    return router;
}
exports.default = RegistrationRouter;
