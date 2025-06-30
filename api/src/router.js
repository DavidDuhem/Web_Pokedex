import { Router } from "express";
import pokemonRoutes from "./routes/pokemon.routes.js";
import typeRoutes from "./routes/type.routes.js";
import teamRoutes from "./routes/team.routes.js";
import authRoutes from "./routes/auth.routes.js";

export const router = Router();

router.use("/auth", authRoutes);
router.use("/pokemons", pokemonRoutes);
router.use("/types", typeRoutes);
router.use("/teams", teamRoutes);

// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
