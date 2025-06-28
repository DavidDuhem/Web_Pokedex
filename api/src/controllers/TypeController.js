import { PokeType, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import typeSchema from "../schemas/type.schema.js"; // Does nothing because no need to add types

class TypeController extends BaseController {
  constructor() {
    super(PokeType, typeSchema);
  }
}
export default new TypeController();
