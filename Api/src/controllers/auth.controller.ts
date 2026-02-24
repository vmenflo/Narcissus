import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import { signAdminToken } from "../utils/jwt.js";

export function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body as { email: string; password: string };

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      throw new AppError(500, "ENV_MISSING", "Faltan ADMIN_EMAIL/ADMIN_PASSWORD en .env");
    }

    if (email !== adminEmail || password !== adminPassword) {
      throw new AppError(401, "INVALID_CREDENTIALS", "Credenciales inválidas");
    }

    const token = signAdminToken();
    return res.json({ token });
  } catch (err) {
    next(err);
  }
}