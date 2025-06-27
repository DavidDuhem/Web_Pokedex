import { sequelize } from "../models/index.js";

console.log("🗑️ Deleting existing tables ...");
await sequelize.drop();

console.log("🚧 Defining Tables...");
await sequelize.sync();

console.log("✅ Migration OK ! Closing base...");
await sequelize.close();
