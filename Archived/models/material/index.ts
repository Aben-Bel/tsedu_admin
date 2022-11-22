import { buildMakeMaterial } from "./material";
import { material } from "./material-schema";
import { validator } from "../validator/";

const materialValidator = validator(material);
const makeMaterial = buildMakeMaterial(materialValidator);

export { makeMaterial };
