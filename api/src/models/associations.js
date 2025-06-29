import { Pokemon } from "./Pokemon.js";
import { PokeType } from "./PokeType.js";
import { PokemonTeam } from "./PokemonTeam.js";
import { Team } from "./Team.js";

Pokemon.belongsToMany(PokeType, {
  through: "pokemon_type",
  as: "types",
  foreignKey: "pokemon_id",
});

PokeType.belongsToMany(Pokemon, {
  through: "pokemon_type",
  as: "pokemons",
  foreignKey: "type_id",
});

Pokemon.belongsToMany(Team, {
  through: {
    model: PokemonTeam,
    unique: false,
  },
  as: "teams",
  foreignKey: "pokemon_id",
});

Team.belongsToMany(Pokemon, {
  through: {
    model: PokemonTeam,
    unique: false,
  },
  as: "pokemons",
  foreignKey: "team_id",
});

PokemonTeam.belongsTo(Pokemon, {
  foreignKey: "pokemon_id",
  as: "pokemon",
});

export { Pokemon, PokeType, Team, PokemonTeam };
