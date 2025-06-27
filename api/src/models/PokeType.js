import { DataTypes, Model } from "sequelize";
import { sequelize } from "./dbClientSequelize.js";

export class PokeType extends Model {}

PokeType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "#ffffff",
    },
  },
  {
    sequelize,
    tableName: "type",
  }
);
