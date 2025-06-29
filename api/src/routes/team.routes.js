import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import TeamController from "../controllers/TeamController.js";

const router = Router();
const teamController = new TeamController();

// Team Management

router.get(
  "/",
  cw((req, res) => teamController.getAll(req, res))
);
router.get(
  "/:id",
  cw((req, res, next) => teamController.getById(req, res, next))
);
router.post(
  "/",
  cw((req, res, next) => teamController.create(req, res, next))
);
router.patch(
  "/:id",
  cw((req, res, next) => teamController.update(req, res, next))
);
router.delete(
  "/:id",
  cw((req, res, next) => teamController.delete(req, res, next))
);

// Pokemons in Team Management

router.get(
  "/:id/pokemons",
  cw((req, res, next) => teamController.getTeamPokemons(req, res, next))
);
router.post(
  "/:id/pokemons",
  cw((req, res, next) => teamController.addPokemonToTeam(req, res, next))
);
router.delete(
  "/:id/pokemons/:pokemonId",
  cw((req, res, next) => teamController.removePokemonFromTeam(req, res, next))
);

export default router;
