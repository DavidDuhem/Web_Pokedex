import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbClientSequelize.js";

export class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pokeuser",
  }
);
