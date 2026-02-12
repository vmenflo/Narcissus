import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ ok: true });
});

// Mensaje en Raiz
router.get("/", (_req, res) => {
  res.send("Mini Narcissus API");
});

export default router;