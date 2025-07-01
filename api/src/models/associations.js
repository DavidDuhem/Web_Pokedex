import { Pokemon } from "./Pokemon.js";
import { PokeType } from "./PokeType.js";
import { PokemonTeam } from "./PokemonTeam.js";
import { Auth } from "./Auth.js";
import { Profile } from "./Profile.js";
import { Team } from "./Team.js";
import { Vote } from "./Vote.js";

// Many To Many association between Pokemon and PokeType
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

// Many To Many association between Pokemon and Team
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

// Many To Many association between Pokemon and Profile for Votes
Pokemon.belongsToMany(Profile, {
  through: Vote,
  as: "voters",
  foreignKey: "pokemon_id",
  otherKey: "profile_id",
});

Profile.belongsToMany(Pokemon, {
  through: Vote,
  as: "votedPokemons",
  foreignKey: "profile_id",
  otherKey: "pokemon_id",
});

// PokemonTeam association
PokemonTeam.belongsTo(Pokemon, {
  foreignKey: "pokemon_id",
  as: "pokemon",
});

// One to Many association between Auth and Profile
Auth.hasOne(Profile, { foreignKey: "auth_id" });
Profile.belongsTo(Auth, { foreignKey: "auth_id" });

// One to Many association between Profile and Team
Profile.hasMany(Team, { foreignKey: "profile_id" });
Team.belongsTo(Profile, { foreignKey: "profile_id" });

export { Pokemon, PokeType, Team, PokemonTeam, Auth, Profile, Vote };
