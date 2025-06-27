import { PokeType, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";

class TypeController extends BaseController {
  constructor() {
    super(PokeType);
  }
}
export default new TypeController();
