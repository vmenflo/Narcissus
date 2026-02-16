import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Mensaje en Raiz
router.get("/", (_req, res) => {
  res.send("Mini Narcissus API");
});

export default router;