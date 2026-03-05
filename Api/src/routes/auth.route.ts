import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post("/login", login);

router.get("/me", auth, (req, res) => {
  res.json({ user: req.user });
});

export default router;