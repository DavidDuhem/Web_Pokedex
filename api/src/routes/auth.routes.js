import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import authController from "../controllers/AuthController.js";

const router = Router();

router.post(
  "/register",
  cw((req, res, next) => authController.register(req, res, next))
);

export default router;
