import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import PokemonController from "../controllers/PokemonController.js";

const router = Router();
const pokemonController = new PokemonController();

router.get(
  "/",
  cw((req, res) => pokemonController.getAll(req, res))
);
router.get(
  "/:id",
  cw((req, res, next) => pokemonController.getPokemonsWithTypes(req, res, next))
);

export default router;
