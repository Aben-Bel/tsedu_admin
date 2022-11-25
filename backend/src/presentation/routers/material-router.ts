import express from 'express';
import {Request, Response} from 'express'
import { CreateMaterialUseCase } from '../../domain/interfaces/use-cases/material/create-material';
import { GetAllMaterialsUseCase } from '../../domain/interfaces/use-cases/material/get-all-materials';

export default function MaterialRouter(
    getAllMaterialsUseCase: GetAllMaterialsUseCase,
    createMaterialUseCase : CreateMaterialUseCase
){
    const router = express.Router();

    router.get('/', async (req : Request, res : Response)=>{
        try{
            const materials = await getAllMaterialsUseCase.execute();
            res.send(materials);
        } catch (err){
            res.status(500).send({message: "Error Fetching Data"});
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createMaterialUseCase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            res.status(500).send({ message: "Error saving data" })
        }
    });

    return router;
}