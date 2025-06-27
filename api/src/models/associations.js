import { Pokemon } from "./Pokemon.js";
import { PokeType } from "./PokeType.js";
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
  through: "pokemon_team",
  as: "teams",
  foreignKey: "pokemon_id",
});

Team.belongsToMany(Pokemon, {
  through: "pokemon_team",
  as: "pokemons",
  foreignKey: "team_id",
});

export { Pokemon, PokeType, Team };
