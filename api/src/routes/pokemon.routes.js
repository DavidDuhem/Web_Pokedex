import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import PokemonController from "../controllers/PokemonController.js";

const router = Router();
const pokemonController = new PokemonController();

// Pokemon management

router.get(
  "/",
  cw((req, res) => pokemonController.getAllPokemonsWithTypes(req, res))
);
router.get(
  "/:id",
  cw((req, res, next) => pokemonController.getPokemonWithTypes(req, res, next))
);

// Votes management

router.get(
  "/:id/votes",
  cw((req, res, next) => pokemonController.getVotes(req, res, next))
);

router.post(
  "/:id/votes",
  verifyToken,
  cw((req, res, next) => pokemonController.addVote(req, res, next))
);

router.delete(
  "/:id/votes",
  verifyToken,
  cw((req, res, next) => pokemonController.deleteVote(req, res, next))
);
export default router;
