import { Material } from "../../../entities/material";

export interface CreateMaterialUseCase {
    execute(material : Material) : Promise<boolean>;
}