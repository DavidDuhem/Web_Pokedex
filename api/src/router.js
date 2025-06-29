import { Router } from "express";
import { controllerWrapper as cw } from "./utils/controllerWrapper.js";
import pokemonController from "./controllers/PokemonController.js";
import typeController from "./controllers/TypeController.js";
import TeamController from "./controllers/TeamController.js";

export const router = Router();

const teamController = new TeamController();

// == Routes des Pokemons ==

router.get(
  "/pokemons",
  cw((req, res) => pokemonController.getAll(req, res))
);
router.get(
  "/pokemons/:id",
  cw((req, res, next) => pokemonController.getById(req, res, next))
);

// == Routes des Types ==

router.get(
  "/types",
  cw((req, res) => typeController.getAll(req, res))
);
router.get(
  "/types/:id",
  cw((req, res, next) => typeController.getById(req, res, next))
);

// == Routes des Teams ==

router.get(
  "/teams",
  cw((req, res) => teamController.getAll(req, res))
);
router.get(
  "/teams/:id",
  cw((req, res, next) => teamController.getById(req, res, next))
);
router.post(
  "/teams",
  cw((req, res, next) => teamController.create(req, res, next))
);
router.patch(
  "/teams/:id",
  cw((req, res, next) => teamController.update(req, res, next))
);
router.delete(
  "/teams/:id",
  cw((req, res, next) => teamController.delete(req, res, next))
);
router.get(
  "/teams/:id/pokemons",
  cw((req, res, next) => teamController.getTeamPokemons(req, res, next))
);
router.post(
  "/teams/:id/pokemons",
  cw((req, res, next) => teamController.addPokemonToTeam(req, res, next))
);
router.delete(
  "/teams/:id/pokemons/:pokemonId",
  cw((req, res, next) => teamController.removePokemonFromTeam(req, res, next))
);

// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
