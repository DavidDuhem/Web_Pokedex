import { PokeType, Pokemon, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import typeSchema from "../schemas/type.schema.js"; // Does nothing because no need to add types

class TypeController extends BaseController {
  constructor() {
    super(PokeType, typeSchema);
  }

  async getTypeWithPokemons(req, res) {
    const id = parseInt(req.params.id);

    try {
      const typeWithPokemons = await PokeType.findByPk(id, {
        include: {
          model: Pokemon,
          as: "pokemons",
          attributes: [
            "id",
            "name",
            "hp",
            "atk",
            "def",
            "atk_spe",
            "def_spe",
            "speed",
          ], // Specified to not get createdat/updatedat
          through: { attributes: [] },
        },
      });

      if (!typeWithPokemons)
        return res.status(404).json({ error: "Type not found" });

      res.json(typeWithPokemons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
export default new TypeController();
