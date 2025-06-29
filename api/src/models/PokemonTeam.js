import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbClientSequelize.js";

export class PokemonTeam extends Model {}

PokemonTeam.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pokemon_team",
    timestamps: false,
    indexes: [],
  }
);
