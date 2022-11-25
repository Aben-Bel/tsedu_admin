import { Material } from "../../entities/material";
export interface MaterialRepository {
    createMaterial(material: Material) : Promise<boolean>;
    getMaterials() : Promise<Material[]>;
}