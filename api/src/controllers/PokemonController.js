import { Pokemon, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import pokemonSchema from "../schemas/pokemon.schema.js"; // Does nothing because no need to add pokemons

class PokemonController extends BaseController {
  constructor() {
    super(Pokemon, pokemonSchema);
  }
}
export default new PokemonController();
