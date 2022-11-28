import { CreateMaterialUseCase } from "../../domain/interfaces/use-cases/material/create-material";
import { DeleteMaterialUseCase } from "../../domain/interfaces/use-cases/material/delete-one-material";
import { GetAllMaterialsUseCase } from "../../domain/interfaces/use-cases/material/get-all-materials";
import { GetOneMaterialUseCase } from "../../domain/interfaces/use-cases/material/get-one-material";
import { UpdateMaterialUseCase } from "../../domain/interfaces/use-cases/material/update-material";

// export default function MaterialCLI(
//   getAllMaterialsUseCase: GetAllMaterialsUseCase,
//   createMaterialUseCase: CreateMaterialUseCase,
//   udpateMaterialUseCase: UpdateMaterialUseCase,
//   getOneMaterialUseCase: GetOneMaterialUseCase,
//   deleteOneMaterialUseCase: DeleteMaterialUseCase
// ) {
//     constructor(){
//         console.log("THIS IS MATERIAL APP");
//         console.log("Choose between C, R, U, D (CRUD)");
//     }
// }