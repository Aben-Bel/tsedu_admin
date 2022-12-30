"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function UserRouter(loginUser, signupUser) {
    const router = express_1.default.Router();
    router.post('/login', async (req, res) => {
        try {
            const { email, password } = req.body;
            const token = await loginUser.execute(email, password);
            if (!token)
                res.status(404).send({ message: "Couldn't login user" });
            else
                res.send({ token: token });
        }
        catch (err) {
            res.status(500).send({ message: 'Error signing user' });
        }
    });
    router.post('/signup', async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await signupUser.execute(email, password);
            res.send(result);
        }
        catch (e) {
            console.log('e: ', e);
            res.status(500).send({ message: "Couldn't signup user" });
        }
    });
    return router;
}
exports.default = UserRouter;
