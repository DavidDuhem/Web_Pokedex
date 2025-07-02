import { Op } from "sequelize";
import {
  Pokemon,
  PokeType,
  Profile,
  Vote,
  sequelize,
} from "../models/index.js";

import BaseController from "./BaseController.js";
import pokemonSchema from "../schemas/pokemon.schema.js"; // Does nothing because no need to add pokemons

export default class PokemonController extends BaseController {
  constructor() {
    super(Pokemon, pokemonSchema);
  }

  // async getAllPokemonsWithTypes(req, res) {
  //   try {
  //     const pokemons = await Pokemon.findAll({
  //       include: {
  //         model: PokeType,
  //         as: "types",
  //         through: { attributes: [] },
  //       },
  //     });

  //     res.json(pokemons);
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // }

  async getAllPokemonsWithTypes(req, res) {
    try {
      const limit = 20;
      const page = parseInt(req.query.page, 10);
      const currentPage = isNaN(page) || page < 1 ? 1 : page;
      const offset = (currentPage - 1) * limit;

      const search = req.query.search;

      let whereCondition = {};

      if (search && search.trim() !== "") {
        const searchAsNumber = parseInt(search, 10);
        if (!isNaN(searchAsNumber)) {
          whereCondition.id = searchAsNumber;
        } else {
          whereCondition.name = {
            [Op.iLike]: `%${search}%`,
          };
        }
      }

      const pokemons = await Pokemon.findAndCountAll({
        where: whereCondition,
        include: {
          model: PokeType,
          as: "types",
          attributes: ["id", "name", "color"],
          through: { attributes: [] },
        },
        limit,
        offset,
        order: [["id", "ASC"]],
        distinct: true,
        attributes: [
          "id",
          "name",
          "hp",
          "atk",
          "def",
          "atk_spe",
          "def_spe",
          "speed",
        ],
      });

      res.json({
        data: pokemons.rows,
        total: pokemons.count,
        limit,
        offset,
        page: currentPage,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getPokemonWithTypes(req, res) {
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

      const voteCount = await Vote.count({
        where: { pokemon_id: pokemonId },
      });

      const pokemonWithVotes = pokemon.toJSON();
      pokemonWithVotes.voteCount = voteCount;

      res.json(pokemonWithVotes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async addVote(req, res) {
    try {
      const pokemonId = parseInt(req.params.id);
      const profileId = req.user.id;

      const pokemon = await Pokemon.findByPk(pokemonId);
      if (!pokemon) return res.status(404).json({ error: "Pokemon not found" });

      const [vote, created] = await Vote.findOrCreate({
        where: { profile_id: profileId, pokemon_id: pokemonId },
      });

      if (!created) {
        return res
          .status(400)
          .json({ error: "You already voted for this pokemon" });
      }

      res.json({ message: "Vote added" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteVote(req, res) {
    try {
      const pokemonId = parseInt(req.params.id);
      const profileId = req.user.id;

      const pokemon = await Pokemon.findByPk(pokemonId);
      if (!pokemon) return res.status(404).json({ error: "Pokemon not found" });

      const voteExist = await Vote.findOne({
        where: { profile_id: profileId, pokemon_id: pokemonId },
      });

      if (!voteExist) {
        return res.json({ message: "You have to vote before removing vote" });
      }

      const profile = await Profile.findByPk(profileId);
      if (!profile) return res.status(404).json({ error: "Profile not found" });

      await profile.removeVotedPokemons(pokemon);

      res.json({ message: "Vote removed" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
