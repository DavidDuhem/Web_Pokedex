import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import AuthController from "../controllers/AuthController.js";

const router = Router();

const authController = new AuthController();

router.post(
  "/register",
  cw((req, res, next) => authController.register(req, res, next))
);

router.post(
  "/login",
  cw((req, res, next) => authController.login(req, res, next))
);

export default router;
