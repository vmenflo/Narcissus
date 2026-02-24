import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { validateBody } from "../middlewares/validateBody.js";
import { loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/login", validateBody(loginSchema), login);

export default router;