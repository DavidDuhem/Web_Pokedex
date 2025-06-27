import { Pokemon, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";

class PokemonController extends BaseController {
  constructor() {
    super(Pokemon);
  }
}
export default new PokemonController();
