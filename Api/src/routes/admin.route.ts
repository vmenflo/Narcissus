import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { requireRole } from "../middlewares/requireRole.js";

const router = Router();

router.get("/me", auth, requireRole("admin"), (req, res) => {
  res.json({ user: req.user });
});

export default router;