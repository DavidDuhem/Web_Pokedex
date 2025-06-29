import { Team, Pokemon, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import teamchema from "../schemas/team.schema.js";

export default class TeamController extends BaseController {
  constructor() {
    super(Team, teamchema);
  }

  async getTeamPokemons(req, res) {
    const teamId = parseInt(req.params.id);

    try {
      const teamWithPokemons = await Team.findByPk(teamId, {
        include: {
          model: Pokemon,
          as: "pokemons",
          through: { attributes: [] },
        },
      });

      if (!teamWithPokemons)
        return res.status(404).json({ error: "Team and Pokemons not found" });
      res.json(teamWithPokemons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async addPokemonToTeam(req, res) {
    const teamId = parseInt(req.params.id);
    const { pokemonId } = req.body;

    try {
      const team = await Team.findByPk(teamId);
      if (!team) return res.status(404).json({ error: "Team not found" });

      const pokemon = await Pokemon.findByPk(pokemonId);
      if (!pokemon) return res.status(404).json({ error: "Pokemon not found" });

      await team.addPokemon(pokemon);

      res.json({ message: "Pokemon added to team successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async removePokemonFromTeam(req, res) {
    const teamId = parseInt(req.params.id);
    const pokemonId = parseInt(req.params.pokemonId);

    try {
      const team = await Team.findByPk(teamId);
      if (!team) return res.status(404).json({ error: "Team not found" });

      const pokemon = await Pokemon.findByPk(pokemonId);
      if (!pokemon) return res.status(404).json({ error: "Pokemon not found" });

      await team.removePokemon(pokemon);

      res.json({ message: "Pokemon removed from team successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
