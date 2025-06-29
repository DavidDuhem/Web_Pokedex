import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import pokemonController from "../controllers/PokemonController.js";

const router = Router();

router.get(
  "/",
  cw((req, res) => pokemonController.getAll(req, res))
);
router.get(
  "/:id",
  cw((req, res, next) => pokemonController.getById(req, res, next))
);

export default router;
