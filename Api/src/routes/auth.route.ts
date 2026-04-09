import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";
import { validateBody } from "../middlewares/validateBody.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/login", validateBody(loginSchema), login);
router.post("/register", validateBody(registerSchema), register);

router.get("/me", auth, (req, res) => {
  res.json({ user: req.user });
});

export default router;