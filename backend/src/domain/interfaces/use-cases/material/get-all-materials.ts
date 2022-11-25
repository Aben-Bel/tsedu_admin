import { Material } from "../../../entities/material";

export interface GetAllMaterialsUseCase{
    execute():Promise<Material[]>;
}