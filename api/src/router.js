import { Router } from "express";

export const router = Router();

// Middleware 404
router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
