import { Pokemon, PokeType, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import pokemonSchema from "../schemas/pokemon.schema.js"; // Does nothing because no need to add pokemons

export default class PokemonController extends BaseController {
  constructor() {
    super(Pokemon, pokemonSchema);
  }

  async getPokemonsWithTypes(req, res) {
    const pokemonId = parseInt(req.params.id);
    try {
      const pokemon = await Pokemon.findByPk(pokemonId, {
        include: {
          model: PokeType,
          as: "types",
          through: { attributes: [] },
        },
      });

      if (!pokemon) return res.status(404).json({ error: "Pokemon not found" });

      res.json(pokemon);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
