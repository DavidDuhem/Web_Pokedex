import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbClientSequelize.js";

export class Vote extends Model {}

Vote.init(
  {},
  {
    sequelize,
    tableName: "vote",
    indexes: [
      {
        unique: true,
        fields: ["profile_id", "pokemon_id"],
      },
    ],
  }
);
