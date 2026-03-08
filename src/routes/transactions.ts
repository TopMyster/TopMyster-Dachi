import { Router } from "express";
import { transactionService } from "../services/transactionService.js";

export const transactionRouter = Router();

/**
 * POST /transactions/craft
 * Build and prepare a transaction for signing.
 */
transactionRouter.post("/craft", async (req, res) => {
  try {
    const crafted = await transactionService.craft(req.body);
    res.json(crafted);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

/**
 * POST /transactions/validate
 * Validate a transaction before broadcast.
 */
transactionRouter.post("/validate", async (req, res) => {
  try {
    const result = await transactionService.validate(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});
