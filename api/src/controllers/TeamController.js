import {
  Team,
  Pokemon,
  PokemonTeam,
  PokeType,
  sequelize,
} from "../models/index.js";
import BaseController from "./BaseController.js";
import teamchema from "../schemas/team.schema.js";

export default class TeamController extends BaseController {
  constructor() {
    super(Team, teamchema);
  }

  async getTeamPokemons(req, res) {
    const teamId = parseInt(req.params.id);

    try {
      const team = await Team.findByPk(teamId);
      if (!team) return res.status(404).json({ error: "Team not found" });

      const pokemonTeams = await PokemonTeam.findAll({
        where: { team_id: teamId },
        include: {
          model: Pokemon,
          as: "pokemon",
          include: {
            model: PokeType,
            as: "types",
            through: { attributes: [] },
          },
        },
      });

      if (!pokemonTeams)
        return res.status(404).json({ error: "PokemonTeam not found" });

      const pokemons = pokemonTeams.map((pt) => pt.pokemon);

      const teamWithPokemons = {
        id: team.id,
        name: team.name,
        description: team.description,
        profile_id: team.profile_id,
        pokemons,
      };
      res.json(teamWithPokemons);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async addPokemonToTeam(req, res) {
    const teamId = parseInt(req.params.id);
    const { pokemonId } = req.body;

    try {
      await PokemonTeam.create({ pokemon_id: pokemonId, team_id: teamId });

      res.json({ message: "Pokemon added to team successfully" });
    } catch (err) {
      if (err.name === "SequelizeForeignKeyConstraintError") {
        return res.status(400).json({ error: "Team or Pokemon not found" });
      }
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

  async verifications(req, res, item) {
    if (item.profile_id != req.user.id) {
      res.status(403).json({ error: "Action Forbidden" });
      return false;
    }
    return true;
  }
}
