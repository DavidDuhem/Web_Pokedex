import { Router } from "express";
import { controllerWrapper as cw } from "../utils/controllerWrapper.js";
import AuthController from "../controllers/AuthController.js";

const router = Router();

const authController = new AuthController();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Enregistrer un nouvel utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - username
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "Password"
 *               username:
 *                 type: string
 *                 example: "Username"
 *     responses:
 *       201:
 *         description: Utilisateur créé
 */

router.post(
  "/register",
  cw((req, res, next) => authController.register(req, res, next))
);

router.post(
  "/login",
  cw((req, res, next) => authController.login(req, res, next))
);

export default router;
