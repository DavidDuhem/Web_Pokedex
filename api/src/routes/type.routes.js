import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import typeController from "../controllers/TypeController.js";

const router = Router();

router.get(
  "/",
  cw((req, res) => typeController.getAll(req, res))
);
router.get(
  "/:id",
  cw((req, res, next) => typeController.getTypeWithPokemons(req, res, next))
);

export default router;
