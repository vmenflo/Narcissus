import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export function requireRole(role: "admin") {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError(401, "AUTH_REQUIRED", "No autenticado"));
    }

    if (req.user.role !== role) {
      return next(new AppError(403, "FORBIDDEN", "No tienes permisos"));
    }

    next();
  };
}