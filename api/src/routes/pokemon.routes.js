import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import PokemonController from "../controllers/PokemonController.js";

const router = Router();
const pokemonController = new PokemonController();

router.get(
  "/",
  cw((req, res) => pokemonController.getAllPokemonsWithTypes(req, res))
);
router.get(
  "/:id",
  cw((req, res, next) => pokemonController.getPokemonWithTypes(req, res, next))
);

export default router;
