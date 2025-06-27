import { Router } from "express";
import { controllerWrapper as cw } from "./utils/controllerWrapper.js";
import pokemonController from "./controllers/PokemonController.js";
import typeController from "./controllers/TypeController.js";
import teamController from "./controllers/TeamController.js";

export const router = Router();

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

// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
